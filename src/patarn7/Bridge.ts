export const Bridge = () => {
    class Display{
        constructor(private imple:DisplayImple){}
        open(): void{
            this.imple.rawOpen();
        }

        print(): void{
            this.imple.rawPrint();
        }

        close(): void{
            this.imple.rawClose();
        }

        display(): void{
            this.open();
            this.print();
            this.close();
        }
    }

    class CountDisplay extends Display{
        constructor(imple:DisplayImple){super(imple)}
        multiDisplay(times: number) {
            this.open();
            for (let i = 0; i < times; i++){
                this.print();
            }
            this.close();
        }
    }

    abstract class DisplayImple{
        abstract rawOpen():void;
        abstract rawPrint(): void;
        abstract rawClose(): void;
    }

    class StringDisplayImple extends DisplayImple{
        string;
        width;
        constructor(str: String) {
            super();
            this.string = str;
            this.width= str.length;
        }

        rawOpen(): void {
            this.printLine()
        }

        rawPrint(): void {
            console.log(`| ${this.string}|`)
        }

        rawClose(): void {
            this.printLine();
        }

        printLine() {
            for (let i: number = 0; i < this.width; i++){
                console.log("-");
            }
        }
    }



    const main= () => {
        let d1: Display = new Display(new StringDisplayImple("hello.naoya"));
        let d2: Display = new CountDisplay(new StringDisplayImple('hellow kenyajJA+'));
        let d3: CountDisplay = new CountDisplay(new StringDisplayImple('hello.sayaka'));
        d1.display();
        d2.display();
        d3.multiDisplay(6)
    }
    main();
}
