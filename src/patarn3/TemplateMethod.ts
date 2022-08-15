export const TemplateMethod = () => {
    abstract class AbstractDisplay{
        public abstract open(): void;
        public abstract print(): void;
        public abstract close(): void;
        public display = () => {
            this.open();
            for (let i = 0; i < 5; i++){
                this.print();
            }
            this.close();
        }
    }

    class CharaDisplay extends AbstractDisplay{
        constructor(private chr: string) {
            super();
        }

        public open(): void {
            console.log("<<");
        }

        public print(): void {
            console.log(this.chr);
        }

        public close(): void {
            console.log(">>");
        }

    }
    class StringDisplay extends AbstractDisplay{
        width: number;
        constructor(private str: string) {
            super();
            this.width = this.str.length
        }

        public open(): void {
            this.printline();
        }

        public print(): void {
            console.log(`| ${this.str} |`)
        }

        public close(): void {
            this.printline()
        }

        private printline = () => {
            this.width = this.width + 1
            let data = "+";
            for (let i = 0; i < this.width; i++){
                data += "-"
            }
            data += '+';
            console.log(data);

        }
    }

    const main =() => {
        let d1: AbstractDisplay = new CharaDisplay('H');
        let d2: AbstractDisplay = new StringDisplay('Hello naoya');

        d1.display();
        d2.display();

    }
    main();

 }
