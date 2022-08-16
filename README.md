## Project: Google Books API Search Engine (Opus-Invenire)

### Overview

This project requires the use of both DOM manipulation and Asynchronous programming to build a Google Books search engine. The aim of the project is to allow the user to search for a book inside the Google Books database to find the desired publication.

### Goals

-   Create a search engine that accurately returns matches for a user's search.

### Criteria

Must include the following:

-   Header section introducing the page
-   Form containing a text input and a submit/search button
-   Grid of books

Instructions

-   On click of the submit button, request books from the Google Books API using the input value as your query string
-   Books received should be rendered in books grid
-   Each book should have:
    -   an image
    -   author
    -   title and,
    -   description

Notes

-   Grid should be responsive on different screen sizes
-   Use async/await

Styling:

-   Must use BEM.
-   Use modules so each block has its own SCSS.
-   Palette module should also use variables.

Application Design:

-   Separate DOM functions and non-DOM functions in different modules
-   Write as many non-DOM functions as you can
-   Functions should be pure and as reusable as possible
-   Always use iterators over loops
-   Always parametize and abstract large pieces of duplicate code

BONUS:

-   Give feedback when no book results can be found for the query
-   When the user clicks a book in the grid, a pop-up should appear with more information about the book:
    -   release date
    -   publish date
    -   country
    -   languages
    -   publisher
    -   version/edition (if applicable)
    -   volume count (if applicable)

## The to-do list

Even though the criteria is already quite extensive for this project, this section will cover some notes regarding the project.


<img src="./Mind%20map%20API%20project.png">


## The APP

<img src="./googlebooksAPI-1.png" />

## Improvements

The app functions but there can be improvements. If I were to re-do/re-vamp this project, here are a list of things I would do differently. Parametising and abstracting large pieces of code did not quite make sense at the time of development, however, in hindsight, I've come to understand why exactly this is good practice.

#### Development

-   Flesh out a more granular plan

    -   the current mindmap I have is a good starting point, but provides minimal foundation on _how_ to go forward with the project.

-   Mobile first design - at the time of updating this README (16.08.2022), the app is not yet responsive to smaller screens.

    -   create a palette for media queries and breakpoints to keep code DRY
    -   keep styling simple to cater for different screen sizes
        -   complexity can be added later on

-   Refactor code to separate concerns

    -   create a server.js file and add pure functions here and export as needed
    -   create more files to further organise the code
        -   modularity: searchbar can be made into a presentational component and the functions can be housed in the parent components, or in the server.js file and exported

-   Organise code and files:
    -   components: SearchForm, BookCard etc.
    -   containers: BookGrid etc.

#### Styling

-   Flexible styling - avoid hard coding lengths and widths for the search bar and placement of visual elements
-   Hierarchy of text/font sizes. At the moment, everything is the same size so it doesn't quite let the user know what is the most important piece of information.



