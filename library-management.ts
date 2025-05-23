class Library {
  bookId: number;
  bookTitle: string;
  authorOfBook: string;
  genreOfBook: string;

  constructor(
    id: number,
    title: string,
    author: string,
    genre: string
  ) {
    this.bookId = id;
    this.bookTitle = title;
    this.authorOfBook = author;
    this.genreOfBook = genre;
  }

  getBook(id: number) {
    if (id === this.bookId) {
      console.log(`Title - ${this.bookTitle}
                author: ${this.authorOfBook}
                Genre: ${this.genreOfBook}
                `);
    }
  }
  borrowBook(id: number, name: string) {
    if (id === this.bookId) {
      console.log(`${this.bookTitle} has been borrorwed by you - ${name}`);
    }
  }
  returnBook(id: number, name: string) {
    if (id === this.bookId) {
      console.log(
        `Hi ${name}, you've successfully returned the book - ${this.bookTitle}`
      );
    }
  }
}

const book1 = new Library(1, "Broken", "fatima bala", "romance")
book1.getBook(1)
book1.borrowBook(1, "eniola")