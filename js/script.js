const addBtn = document.getElementById("addBtn");
const title = document.getElementById("title");
const author = document.getElementById("author");
const store = window.localStorage;

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static books = [];

  addNewBook() {
    Book.books.push({ title: this.title, author: this.author });
    store.setItem("books", JSON.stringify(Book.books));
  }

  static removeBook(title) {
    Book.books = Book.books.filter((book) => book.title !== title);
    store.setItem("books", JSON.stringify(Book.books));
  }
}

function addBook(e) {
  e.preventDefault();
  const titleText = `"${title.value}"`;
  const book = new Book(titleText, author.value);
  book.addNewBook();
  const ul = document.querySelector("#book-list");
  const li = document.createElement("li");
  li.classList.add("list-group-item", "d-flex", "list-group-item-active");
  if (Book.books.length % 2 === 1) {
    li.classList.add("list-group-item-secondary");
  }

  const titleElem = document.createElement("p");
  titleElem.classList.add("title");
  titleElem.innerText = titleText;
  const authorElem = document.createElement("p");
  authorElem.classList.add("ms-2");
  authorElem.innerText = ` by ${author.value}`;
  const button = document.createElement("button");
  button.classList.add("ms-auto");
  button.innerText = "Remove";
  button.addEventListener("click", (e) => {
    const liElem = e.target.parentElement;
    let title = liElem.querySelector(".title");
    title = title.innerText;
    Book.removeBook(title);
    liElem.remove();
    if (!Book.books.length) {
      document
        .querySelector(".list")
        .classList.remove("border", "border-dark", "border-2");
    }
  });

  if (Book.books.length) {
    let count = 0;
    do {
      document
        .querySelector(".list")
        .classList.add("border", "border-dark", "border-2");
      count += 1;
    } while (count === 1);
  }

  li.appendChild(titleElem);
  li.appendChild(authorElem);
  li.appendChild(button);

  ul.appendChild(li);
}

addBtn.addEventListener("click", addBook);

const navAnchs = document.querySelectorAll("nav ul li a");

navAnchs.forEach((a) => {
  function navFunction(e) {
    e.preventDefault();
    console.log(e.target.href);
  }
  a.addEventListener("click", navFunction);
});
