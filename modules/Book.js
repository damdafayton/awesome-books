export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static books = [];

  addNewBook() {
    Book.books.push({ title: this.title, author: this.author });
    localStorage.setItem('books', JSON.stringify(Book.books));
  }

  static removeBook(title) {
    Book.books = Book.books.filter((book) => book.title !== title);
    localStorage.setItem('books', JSON.stringify(Book.books));
  }
}