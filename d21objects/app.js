"use strict";
/* eslint-disable*/
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { findTitles, findAuthors, findIDs, showTitles,addBook, createBook, showAuthor,showIDs, scramble }; //add all of your function names here that you need for the node mocha tests

/*
o	createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library, 
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
o	findTitles, which will find all the book titles in libraryBooks and return them in an alphabetically ordered array.
o	findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.
o	findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showAuthor() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const author = findAuthors();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    author.sort();
    const authorString = author.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = authorString;
}


/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
 function showIDs() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const id = findIDs();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    id.sort();
    const idNum = id.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = idNum;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];

    for (let element of library) {
        titles.push(element.title);
    }
    titles.sort();
    //titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];  //FIX THIS!!
    // implement this and other functions
    return titles;
}

/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
 function addBook() {
    const title = document.getElementById("title").value; //retrieves the book title from the title textbox
    const author = document.getElementById("author").value;
    const newID = library.length + 5000; // hack to get a unique id for now
    let book = createBook(title, author, newID);
    console.log(book);
    library.push(book);
    alert("A new book is added to library. \n" + "Title: " + title + "\nAuthor: " + author);
}


/**
 * 
 * @param {String} title is a string title of a book
 * @param {String} author is a string author name of a book
 * @param {Number} newID is a identification of a book
 * @returns {Object} return a book with infos of title, author and library ID
 */
 function createBook(title, author, newID) {
    let book = {};
    book.title = title;
    book.author = author;
    book.libraryID = newID;
    return book;
}
// function createBook()

/**
 * 
 * @returns {Array} find all  authors in libraryBooks and return them in alphabetically ordered array.
 */
function findAuthors() {
    //implement this
    let authors = [];

    for (let element of library) {
        authors.push(element.author);
    }
    authors.sort();
    return authors;
}

/**
 * 
 * @returns {Array} find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/
function findIDs() {
    //implement this
    let idNum = [];

    for (let element of library) {
        idNum.push(element.libraryID);
    }
    idNum.sort();
    return idNum;
}

/**
 * Event handler to display library authors sorted alphabetically
 * @returns {string} the sorted words;
 */
function scramble() {


    const titles = findTitles();

    const titleString = titles.join(" ").toString().split(" ").sort((aaa, bbb) => (aaa.length > bbb.length) ? 1 : -1).join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}