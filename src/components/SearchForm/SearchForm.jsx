import React from "react";
import styles from "./SearchForm.module.scss";
import Books from "../Books/Books";
import { useState } from "react";
import logo from "./logo.png";
import Footer from "../Footer/Footer";

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

                    imageLinks: bookInfo.imageLinks ?? {
                        thumbnail: "https://via.placeholder.com/200",
                    },
                    description: bookInfo.description,
                    date: bookInfo.publishedDate,
                    publisher: bookInfo.publisher,
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
        <div className={styles.SearchForm}>
            <section className={styles.SearchForm__header}>
                <img
                    src={logo}
                    className={styles.SearchForm__logo}
                    alt="logo"
                />
                <section className={styles.SearchForm__heading}>
                    <h1 className={styles.SearchForm__title}>OPUS INVENIRE</h1>

                    <form
                        className={styles.SearchForm__search}
                        onSubmit={onButtonClick}
                    >
                        <input
                            className={styles.SearchForm__input}
                            type="text"
                            placeholder="Search for your next read here"
                        />
                        <input
                            type="submit"
                            className={styles.SearchForm__button}
                            value=">"
                        />
                    </form>
                </section>
            </section>

            <div className={styles.SearchForm__results}>
                {books.map((book, i) => {
                    const {
                        imageLinks,
                        title,
                        authors,
                        description,
                        info,
                        date,
                        publisher,
                    } = book;

                    return (
                        <Books
                            key={i}
                            bookTitle={title}
                            source={imageLinks.thumbnail}
                            bookAuthors={authors}
                            bookDescription={description}
                            bookInfoLink={info}
                            bookDate={date}
                            bookPublisher={publisher}
                        />
                    );
                })}
            </div>
            <Footer />
        </div>
    );
};

export default SearchForm;
