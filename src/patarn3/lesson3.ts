export const lesson3 = () => {
    abstract class Setnum{
        public abstract setnum(num: number): void;
        public abstract getNum(): number;
        public abstract calc(num: number): void;
        public display(num:number) {
            this.setnum(num);
            this.calc(num);
        }
    }

    class zissou extends Setnum{
        constructor(private index = 0){super()}
        public setnum(num: number): void {
            this.index = num;
        }
        public getNum(): number {
            return this.index;
        }
        public calc(num: number): void {
            let int = this.getNum();
            console.log(num * int);
        }
    }
    const main = () => {
        let a:Setnum = new zissou();
        a.display(3);
    }
    main();

}
