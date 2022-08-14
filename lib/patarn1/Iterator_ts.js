"use strict";
// iteratorパターンは何かが集まっている時、それを順番に指し示していき、全体をスキャンしていく処理を行う。
Object.defineProperty(exports, "__esModule", { value: true });
exports.Iterator_ts = void 0;
const Iterator_ts = () => {
    class Book {
        constructor(name = "") {
            this.name = name;
        }
        getName() {
            return this.name;
        }
    }
    class BookShelf {
        constructor(maxsize) {
            this.maxsize = maxsize;
            this.last = 0;
            let data = [];
            for (let i = 0; i < maxsize; i++) {
                data.push(new Book());
            }
            this.books = data;
        }
        getBookAt(index) {
            return this.books[index];
        }
        appendBook(book) {
            this.books[this.last] = book;
            this.last = this.last + 1;
        }
        getLength() {
            return this.last;
        }
        iterator() {
            return new BookShelfIterator(this);
        }
    }
    class BookShelfIterator {
        constructor(bookShelf, index = 0) {
            this.bookShelf = bookShelf;
            this.index = index;
        }
        hasNext() {
            if (this.index < this.bookShelf.getLength()) {
                return true;
            }
            else {
                return false;
            }
        }
        next() {
            let book = this.bookShelf.getBookAt(this.index);
            this.index++;
            return book;
        }
    }
    const main = () => {
        const bookShelf = new BookShelf(4);
        bookShelf.appendBook(new Book('naoya'));
        bookShelf.appendBook(new Book('sayaka'));
        bookShelf.appendBook(new Book('kenya'));
        bookShelf.appendBook(new Book('juna'));
        console.log(bookShelf);
    };
};
exports.Iterator_ts = Iterator_ts;
