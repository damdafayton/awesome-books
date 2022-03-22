import * as luxon from 'luxon';
import Book from '../modules/Book';
import navFunction from '../modules/navLinks';
// import '../css/bootstrap.min.css';
import "../css/style.scss";

const addBtn = document.getElementById('addBtn');
const title = document.getElementById('title');
const author = document.getElementById('author');

// Prevent bad ui during load
window.addEventListener('load', () => {
  const list = document.querySelector('body');
  list.classList.remove('d-none');
});

function addBook(e) {
  e.preventDefault();

  // update class state
  const titleText = `"${title.value}"`;
  const book = new Book(titleText, author.value);
  book.addNewBook();

  // update ui
  const ul = document.querySelector('#book-list');
  const li = document.createElement('li');
  li.classList.add('list-group-item', 'd-flex', 'list-group-item-active');
  if (Book.books.length % 2 === 1) {
    li.classList.add('list-group-item-secondary');
  }

  const titleElem = document.createElement('p');
  titleElem.classList.add('title');
  titleElem.innerText = titleText;

  const authorElem = document.createElement('p');
  authorElem.classList.add('ms-2');
  authorElem.innerText = ` by ${author.value}`;

  const button = document.createElement('button');
  button.classList.add('ms-auto');
  button.innerText = 'Remove';

  function bookRemoveHandler(e) {
    const liElem = e.target.parentElement;
    let title = liElem.querySelector('.title');
    title = title.innerText;
    Book.removeBook(title);
    liElem.remove();
    // remove list border if there are no books
    if (!Book.books.length) {
      document
        .querySelector('.list')
        .classList.remove('border', 'border-dark', 'border-2');
    }
  }

  button.addEventListener('click', bookRemoveHandler);

  li.appendChild(titleElem);
  li.appendChild(authorElem);
  li.appendChild(button);
  ul.appendChild(li);

  // reset form
  title.value = '';
  author.value = '';

  // update list border
  if (Book.books.length) {
    document
      .querySelector('.list')
      .classList.add('border', 'border-dark', 'border-2');
  }
}

addBtn.addEventListener('click', addBook);

// enable navbar links
const navAnchs = document.querySelectorAll('nav li a');
navAnchs.forEach((a) => a.addEventListener('click', navFunction));

// add date
const date = document.querySelector('.date');
// const d = new Date();
// date.innerHTML = `${d.toUTCString()}`;
date.innerHTML = luxon.DateTime.now();