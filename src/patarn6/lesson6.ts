import { Builder } from './Builder';
export const lesson6 = () => {
    abstract class Builder{
        abstract getName(): string;
        abstract job(str:string): void;

    }

    class Director{
        //Builderインスタンスをコンストラクタに置く(移譲)
        constructor(private builder: Builder) {
            this.builder = builder;
        }
        build() {
            this.builder.job(this.builder.getName());
        }
    }

    class Naoya extends Builder{
        constructor(private name='naoya'){super()}
        getName(): string {
            return this.name;
        }
        job(str: string): void {
            console.log(`${str}はプログラミングをして生計を立てている`)
        }


    }

    class Sayaka extends Builder{
        constructor(private name='sayaka'){super()}
        getName(): string {
            return this.name;
        }
        job(str: string): void {
            console.log(`${str}は医療従事者だ`)
        }
    }

    const main = () => {
        let naoya = new Naoya();
        let sayaka = new Sayaka();
        let dir: Director = new Director(naoya);
        let dir2: Director = new Director(sayaka);
        dir.build();
        dir2.build();
    }
    main();
}
