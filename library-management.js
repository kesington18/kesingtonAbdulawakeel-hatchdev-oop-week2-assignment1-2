"use strict";
class Library {
    constructor(id, title, author, genre) {
        this.bookId = id;
        this.bookTitle = title;
        this.authorOfBook = author;
        this.genreOfBook = genre;
    }
    getBook(id) {
        if (id === this.bookId) {
            console.log(`Title - ${this.bookTitle}
                author: ${this.authorOfBook}
                Genre: ${this.genreOfBook}
                `);
        }
    }
    borrowBook(id, name) {
        if (id === this.bookId) {
            console.log(`${this.bookTitle} has been borrorwed by you - ${name}`);
        }
    }
    returnBook(id, name) {
        if (id === this.bookId) {
            console.log(`Hi ${name}, you've successfully returned the book - ${this.bookTitle}`);
        }
    }
}
const book1 = new Library(1, "Broken", "fatima bala", "romance");
book1.getBook(1);
book1.borrowBook(1, "eniola");
