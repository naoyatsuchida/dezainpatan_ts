// iteratorパターンは何かが集まっている時、それを順番に指し示していき、全体をスキャンしていく処理を行う。




export const Iterator_ts = () => {
    interface Aggregate{
        iterator(): Iterator;
}
    interface Iterator{
        hasNext(): boolean;
        next(): Object;
}

     class Book{
    constructor(public name="")   {}
         public getName() {
             return this.name;
    }
   }

    class BookShelf implements Aggregate{
        last = 0;
        books :Book[];
        constructor(private maxsize: number)
        {
            let data = [];
            for (let i = 0; i < maxsize; i++){ data.push(new Book()) }
            this.books = data;
        }
        getBookAt(index: number) {
            return this.books[index]
        }
        appendBook(book: Book) {
            this.books[this.last] = book;
            this.last = this.last + 1;
        }

        getLength() {
            return this.last;
        }
        iterator(): Iterator{
            return new BookShelfIterator(this);
        }
   }

    class BookShelfIterator implements Iterator{
        constructor(private bookShelf:BookShelf,private index=0){}
        hasNext(): boolean {
            if (this.index < this.bookShelf.getLength()) {
                return true;
            } else {
                return false;
            }
        }
        next(): Object {
            let book = this.bookShelf.getBookAt(this.index);
            this.index++;
            console.log(book);
            return book;
        }
    }
    const main = () => {
        const bookShelf = new BookShelf(4);
        bookShelf.appendBook(new Book('naoya'));
        bookShelf.appendBook(new Book('sayaka'));
        bookShelf.appendBook(new Book('kenya'));
        bookShelf.appendBook(new Book('juna'));
        const it: Iterator = bookShelf.iterator();
        while (it.hasNext()) {
            const book = it.next();
            console.log(book)
    }
    }
    main();

}
