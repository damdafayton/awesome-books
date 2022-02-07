const books = [];

function addNewBook(title, author) {
    books.push({ title, author })
}

function removeBook(title) {
    books.filter(book => book.title === title);
}

books.forEach(book => {
    const ul = document.querySelector('#book-list')
    const li = document.createElement('li')

    const title = document.createElement('p')
    title.innerText = book.title
    const author = document.createElement('p')
    author.innerText = book.author
    const button = document.createElement('button')
    button.innerText = 'Remove'
    li.appendChild(title)
    li.appendChild(author)
    li.appendChild(button)

    ul.appendChild(li)
})