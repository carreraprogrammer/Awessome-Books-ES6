/* eslint-disable linebreak-style */
// Create Methods to display the Book Data

import LocalStorage from './LocalStorage.js';

const title = document.getElementById('title');
const author = document.getElementById('author');

export default class Methods {
    static displayBooks = () => {
      const books = LocalStorage.getBooks();
      books.forEach((book, i) => Methods.addBookToList(book, i));
    }

    static addBookToList = (book, i) => {
      const booksList = document.getElementById('Books-List');
      const parser = new DOMParser();
      const bookString = `
        <div id="${i}" class="book-field-information">
          <div class="book-information"><p class="title-added">${book.title}</p>
            <p>By</p>
            <p class="author-added">${book.author}</p>
          </div>
          <div class="remove-btn-container">
           <button id="btn-${i}"class="remove">Remove</button>
          </div>
        </div>
        `;

      const bookHtml = parser.parseFromString(bookString, 'text/html').body.firstChild;

      booksList.appendChild(bookHtml);
    }

    static clearInput = () => {
      title.value = '';
      author.value = '';
    }

    static deleteBook = (target) => {
      if (target.classList.contains('remove')) {
        target.parentElement.parentElement.remove();
      }
    }
}