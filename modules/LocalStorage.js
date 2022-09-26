/* eslint-disable linebreak-style */
// Creating a Class for Local Storage

export default class LocalStorage {
  static getBooks = () => {
    let books;
    if (localStorage.getItem('books') == null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook = book => {
    const books = LocalStorage.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBooks = name => {
    const books = LocalStorage.getBooks();

    books.forEach((book, index) => {
      if (book.title === name) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}
