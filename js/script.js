const addBtn = document.getElementById('addBtn');
const title = document.getElementById('title');
const author = document.getElementById('author');
const store = window.localStorage;

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static books = [];

  addNewBook() {
    Book.books.push({ title: this.title, author: this.author });
    store.setItem('books', JSON.stringify(Book.books));
  }

  static removeBook(title) {
    Book.books = Book.books.filter((book) => book.title === title);
    store.setItem('books', JSON.stringify(Book.books));
  }
}

function addBook(e) {
  e.preventDefault();
  const book = new Book(title.value, author.value);
  book.addNewBook();
  const ul = document.querySelector('#book-list');
  const li = document.createElement('li');
  li.classList.add('list-group-item', 'd-flex');
  const titleElem = document.createElement('h2');
  titleElem.innerText = title.value;
  const authorElem = document.createElement('p');
  authorElem.innerText = author.value;
  const button = document.createElement('button');
  button.classList.add('ms-auto');
  button.innerText = 'Remove';
  button.addEventListener('click', (e) => {
    const liElem = e.target.parentElement;
    let title = liElem.querySelector('h2');
    title = title.innerText;
    Book.removeBook(title);
    liElem.remove();
  });

  li.appendChild(titleElem);
  li.appendChild(authorElem);
  li.appendChild(button);

  ul.appendChild(li);
}

addBtn.addEventListener('click', addBook);
