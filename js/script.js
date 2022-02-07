const books = [];
const addBtn = document.getElementById("addBtn");
const title = document.getElementById("title");
const author = document.getElementById("author");

function addNewBook(title, author) {
  books.push({ title, author });
}

function removeBook(title) {
  books.filter((book) => book.title === title);
}

function addBook(e) {
  e.preventDefault();
  addNewBook(title.value, author.value);
  const ul = document.querySelector("#book-list");
  const li = document.createElement("li");

  const titleElem = document.createElement("p");
  titleElem.innerText = title.value;
  const authorElem = document.createElement("p");
  authorElem.innerText = author.value;
  const button = document.createElement("button");
  button.innerText = "Remove";
  li.appendChild(title);
  li.appendChild(author);
  li.appendChild(button);

  ul.appendChild(li);
}

addBtn.addEventListener("click", addBook);
