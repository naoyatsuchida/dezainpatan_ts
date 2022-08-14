// iteratorパターンは何かが集まっている時、それを順番に指し示していき、全体をスキャンしていく処理を行う。
export const Iterator_ts = () => {


    interface Iterator{
        hasNext(): boolean;
        next(): Book;
    }

    class Book{
        constructor(public name="")   {}
        public getName() {
            return this.name;
        }
    }

    interface Aggregate{
        iterator(): Iterator;
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

//    実際に配列をイテレートしていくクラス
    class BookShelfIterator implements Iterator{

        // 本棚とインデックスを持
        constructor(private bookShelf:BookShelf,private index=0){}
        // 保持している本棚のindex++の要素に値があるか確認
        hasNext(): boolean {
            if (this.index < this.bookShelf.getLength()) {
                return true;
            } else {
                return false;
            }
        }

        next(): Book {
            // 現在のインデックスが指し示す本棚[this.index]のインスタンスを保持
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
        // 実際に上記のデータを持った本棚をイテレートするインスタンスをiteratorメソッドで生成している
        const it: Iterator = bookShelf.iterator();
        while (it.hasNext()) {
            const book = it.next();
            console.log(book.getName())
    }
    }
    main();

}
