export const Builder = () => {
    abstract class Builder{
        abstract makeTitle(str: string): void;
        abstract makeString(str: string): void;
        abstract makeItems(str: string[]): void;
        abstract close(): void;
    }

    class Director {
        constructor(private builder: Builder) {
            this.builder = builder
        }
        construct(): void{
            this.builder.makeTitle('Greeting');
            this.builder.makeString('朝から昼にかけて');
            this.builder.makeItems(["おはようございます", "こんちは"]);
            this.builder.makeString('夜に');
            this.builder.makeItems(['こんにちは', 'おやすみ']);
            this.builder.close();
        }

    }

    class TextBuilder extends Builder {
        private str: string;
        constructor() {
            super();
            this.str =""
        }

        makeTitle(title: string): void {
            this.str+="=======================¥n"
            this.str+=`[${title}]`
            this.str="¥n"
        }

        makeString(str: string): void {
            this.str += `■${str} ¥n`;
            this.str += "¥n"
        }

        makeItems(str: string[]): void {
            for (let i = 0; i < str.length; i++){
                this.str+= ` ・ ${str[i]} ¥n`
            }
            this.str+='¥n'
        }

        close(): void {
            this.str+="=========================="
        }
        getResult(): string{
            return this.str
        }
    }

    const main = () => {
        let test: TextBuilder = new TextBuilder();
        let dir: Director = new Director(test);
        dir.construct();
        let res: string = test.getResult();
        console.log(res)


    }
    main();

}
