/* eslint-disable linebreak-style */
// Import th Books Class

import BookData from './modules/Books.js';

// Import LocalStorage

import LocalStorage from './modules/LocalStorage.js';

// Import methods

import Methods from './modules/Methods.js';

// Import single Page events

import { listLinkOcult, addBookOcult, contactOcult } from './modules/Single_page.js';

// Import clock function

import './modules/Clock.js';

// define the base variables

const title = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.getElementById('add-btn');
const booksList = document.getElementById('Books-List');
const error = document.querySelector('#error');

// Create an event to display the books

document.addEventListener('DOMContentLoaded', Methods.displayBooks);

// Create an event to Add the books

addBtn.addEventListener('click', () => {
  if (author.value.length > 0 && title.value.length > 0) {
    // Create a new Objet with the input information

    const book = new BookData(author.value, title.value);

    // Add book to UI

    Methods.addBookToList(book);

    // Add book to localStorage

    LocalStorage.addBook(book);

    // Clear Input

    Methods.clearInput();

    // Ocult error

    error.classList.add('ocult');
  } else {
    // Show error message

    error.classList.remove('ocult');
  }
});

// Create an event to remove the book

booksList.addEventListener('click', (e) => {
  // Remove the book from the list
  Methods.deleteBook(e.target);
  // Remove book from the store
  LocalStorage.removeBooks(e.target.parentElement.previousElementSibling.firstChild.textContent);
});

// Execute single page events

listLinkOcult();
addBookOcult();
contactOcult();
