// 戦術を扱うクラス
//戦術クラス
//具体的な戦術

export const Strategy = () => {

    interface StrToriatukai{
        strMethod(str: string[]):string[];
    }

    class BicEcho implements StrToriatukai{
        strMethod(str: string[]){
            let arrys: string[]=[];
            str.map((data:string) => {
                arrys.push(data.toLocaleUpperCase());
            })
            return arrys;
        }
    }

    class smallEcho implements StrToriatukai{
        strMethod(str: string[]){
            let arrys: string[]=[];
            str.map((data:string,index) => {

                arrys.push(data.toLocaleLowerCase());
   })
return arrys;
}
}

class Context{
    constructor(
    private str: StrToriatukai
    ) {
    }
    setStr(strategy: StrToriatukai) {
        this.str = strategy;
    }

    use(str:string[]) {
        return this.str.strMethod(str);
    }
}

    const main = () => {
        let data = ["naoya", "kenya", "sayaka"];

        let con = new Context(new BicEcho())

        console.log(con.use(data));

        con.setStr(new smallEcho());
        console.log(con.use(data));
}
    main();
}
