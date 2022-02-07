let books = [];
const addBtn = document.getElementById("addBtn");
const title = document.getElementById("title");
const author = document.getElementById("author");

function addNewBook(title, author) {
    books.push({ title, author });
}

function removeBook(title) {
    books = books.filter((book) => book.title === title);
}

function addBook(e) {
    e.preventDefault();
    addNewBook(title.value, author.value);
    const ul = document.querySelector("#book-list");
    const li = document.createElement("li");

    const titleElem = document.createElement("h2");
    titleElem.innerText = title.value;
    const authorElem = document.createElement("p");
    authorElem.innerText = author.value;
    const button = document.createElement("button");
    button.innerText = "Remove";
    button.addEventListener('click', (e) => {
        console.log(e.target)
        const liElem = e.target.parentElement
        let title = liElem.querySelector('h2')
        title = title.innerText
        removeBook(title)
        liElem.remove()
    })

    li.appendChild(titleElem);
    li.appendChild(authorElem);
    li.appendChild(button);

    ul.appendChild(li);
}

addBtn.addEventListener("click", addBook);
