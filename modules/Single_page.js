/* eslint-disable linebreak-style */

const bookList = document.querySelector('#bookList');
const addBooks = document.querySelector('#addBook');
const contactinfo = document.querySelector('#contactinfo');

const listlink = document.querySelector('#list-link');
const addNewlink = document.querySelector('#addNew-link');
const contactlink = document.querySelector('#contact-link');

export const listLinkOcult = () => listlink.addEventListener('click', () => {
  bookList.classList.remove('ocult');
  addBooks.classList.add('ocult');
  contactinfo.classList.add('ocult');
  listlink.classList.add('purple');
  addNewlink.classList.remove('purple');
  contactlink.classList.remove('purple');
});

export const addBookOcult = () => addNewlink.addEventListener('click', () => {
  addBooks.classList.remove('ocult');
  bookList.classList.add('ocult');
  contactinfo.classList.add('ocult');
  listlink.classList.remove('purple');
  addNewlink.classList.add('purple');
  contactlink.classList.remove('purple');
});

export const contactOcult = () => contactlink.addEventListener('click', () => {
  contactinfo.classList.remove('ocult');
  bookList.classList.add('ocult');
  addBooks.classList.add('ocult');
  listlink.classList.remove('purple');
  addNewlink.classList.remove('purple');
  contactlink.classList.add('purple');
});
