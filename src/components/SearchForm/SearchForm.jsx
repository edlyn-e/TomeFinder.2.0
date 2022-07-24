import React from "react";
import styles from "./SearchForm.module.scss";
import Books from "../Books/Books";
import { useState } from "react";
import { useEffect } from "react";

const SearchForm = () => {
    const [books, setBooks] = useState([]);
    const [image, setImage] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        const fetchBooks = async (input) => {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=40`,
            );

            const data = await response.json();
            const results = data.items;
            const bookResults = results.map((book) => {
                return book.volumeInfo;
            });

            console.log(bookResults);

            const imageLink = bookResults.map((item) => {
                return item.imageLinks;
            });

            setBooks(bookResults);
            setImage(imageLink);
        };

        fetchBooks("harry potter");
    }, []);

    return (
        <div>
            <div className={styles.SearchForm__search}>
                <input
                    className={styles.SearchForm__input}
                    type="text"
                    placeholder="Search for your next read here"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className={styles.SearchForm__button}>Go</button>
            </div>

            <div className={styles.SearchForm__results}>
                {books.map((book, i) => {
                    const {
                        imageLinks: { thumbnail, smallThumbnail },
                        title,
                        authors,
                        description,
                    } = book;

                    return (
                        <Books
                            key={i}
                            bookTitle={title}
                            source={thumbnail}
                            secondarySource={smallThumbnail}
                            bookAuthors={authors}
                            bookDescription={description}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SearchForm;
