import React from "react";
import styles from "./SearchForm.module.scss";
import Books from "../Books/Books";
import { useState } from "react";
import { useEffect } from "react";

const SearchForm = () => {
    const [books, setBooks] = useState([]);
    const [image, setImage] = useState([]);

    useEffect(() => {
        const fetchBooks = async (query) => {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`,
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

            console.log("trying to get image links", imageLink);
            setBooks(bookResults);
            setImage(imageLink);
        };

        fetchBooks("harry potter");
    }, []);

    return (
        <div>
            <div className={styles.SearchForm__search}>
                <input
                    type="text"
                    placeholder="Search for your next read"
                    className={styles.SearchForm__input}
                />
                <button className={styles.SearchForm__button}>Go</button>
            </div>
            {/* <section className={styles.SearchForm__hidden}>
                {image.map((picture, i) => {
                    const { thumbnail, smallThumbnail } = picture;

                    return (
                        <Picture
                            key={i}
                            source={thumbnail}
                            secondarySource={smallThumbnail}
                        />
                    );
                })}
            </section> */}

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
