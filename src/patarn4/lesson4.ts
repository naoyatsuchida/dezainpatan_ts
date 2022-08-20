export const lesson4 = () => {
    abstract class Product {
        abstract use(): void;
    }

    abstract class Factory {
        abstract create(title: string): Product
        abstract regist(p:object): void
        abstract showList(): void

        createProduct(title: string) {
            let p = this.create(title)
            this.regist(p);
            return p
        }

    }

    class Book extends Product {
        constructor(public title: string) {
            super()
            console.log(`${title}という本を作成した`)
        }
        use() {
            console.log(`${this.title}を読んだ`)
        }
    }

    class BookStore extends Factory{
        books: Book[] = [];
        constructor(){super()}
        create(title: string): Product {
            return new Book(title);
        }
        regist(p:Book): void {
            this.books.push(p)
        }

        showList(): void {
            this.books.map((d) => {
                console.log(d.title)
            })
        }
    }
    const main = () => {
        let a:Factory = new BookStore();
        a.createProduct('タイタニック');
        a.createProduct('なると')
        a.createProduct('onepice')

        a.showList();


    }
    main()

}
