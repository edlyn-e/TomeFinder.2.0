import React from "react";
import styles from "./SearchForm.module.scss";
import Books from "../Books/Books";
import { useState } from "react";

const SearchForm = () => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async (input) => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=40`,
            );

            const data = await response.json();
            const results = data.items;
            const bookResults = results.map((book) => {
                const bookInfo = book.volumeInfo;
                return {
                    title: bookInfo.title,
                    authors: bookInfo.authors,
                    info: bookInfo.infoLink,
                    description: bookInfo.description,
                    imageLinks: bookInfo.imageLinks ?? {
                        thumbnail: "https://via.placeholder.com/200",
                    },
                };
            });

            console.log(results[0]);

            setBooks(bookResults);
        } catch (e) {
            new Error("error fetching book");
        }
    };

    const onButtonClick = (e) => {
        e.preventDefault();
        const newInput = e.target[0].value;
        fetchBooks(newInput);
    };

    return (
        <div>
            <form
                className={styles.SearchForm__search}
                onSubmit={onButtonClick}
            >
                <input
                    className={styles.SearchForm__input}
                    type="text"
                    placeholder="Search for your next read here"
                />
                <input type="submit" className={styles.SearchForm__button} />
            </form>

            <div className={styles.SearchForm__results}>
                {books.map((book, i) => {
                    const { imageLinks, title, authors, description, info } =
                        book;

                    return (
                        <Books
                            key={i}
                            bookTitle={title}
                            source={imageLinks.thumbnail}
                            bookAuthors={authors}
                            bookDescription={description}
                            bookInfoLink={info}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SearchForm;
