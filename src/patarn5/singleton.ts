export const singleton = () => {
    class Singleton{
        static  singleton:Singleton = new Singleton();
        private constructor() { console.log("インスタンスを作成した") };

        static getInstance(): Singleton{
            return singleton;
        }
    }

    const main = () => {
        console.log('start');
       let obj1: Singleton = Singleton.getInstance();
       let obj2: Singleton = Singleton.getInstance();
        if (obj1 === obj2) {
           console.log("同じ")
        } else {
            console.log("同じではありません");
       }
    }
    main()
}
