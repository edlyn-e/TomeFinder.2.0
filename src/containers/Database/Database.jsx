import React from "react";

const Database = () => {
    // async function searchBooks(query) {
    //     try {
    //         const response = await fetch(
    //             `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`,
    //         );
    //         const data = await response.json();
    //         const results = data.items;
    //         const bookResults = results.map((book) => {
    //             return book.volumeInfo;
    //         });

    //         displayBooks(bookResults);
    //     } catch (e) {
    //         new Error("Error loading data");
    //         searchResults.innerHTML = "Error loading data";
    //     }
    // }

    // async function displayBooks(bookResults) {
    //     try {
    //         // THUMBNAILS
    //         const bookImg = bookResults.map((book) => {
    //             return book.imageLinks;
    //         });
    //         // console.log("Images: ", bookImg); // outputs array of objects

    //         // BOOK TITLES
    //         const bookTitle = bookResults.map((book) => {
    //             return book.title;
    //         });

    //         let ul = document.createElement("ul");
    //         for (const book of bookTitle) {
    //             let li = document.createElement("li");
    //             li.innerHTML = book;
    //             ul.appendChild(li);
    //         }
    //         searchResults.appendChild(ul);

    //         // BOOK AUTHORS
    //         const bookAuthor = bookResults.map((book) => {
    //             return book.authors;
    //         });
    //         console.log(bookAuthor); // outputs array of arrays of authors
    //     } catch (e) {
    //         new Error("Error displaying results");
    //     }
    // }

    return <div>Database</div>;
};

export default Database;
