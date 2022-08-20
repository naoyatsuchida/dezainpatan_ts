
export const lesson2= ()=>{
    class origin{
        greeting(str: string, num: number) {
            for (let i = 0; i < num; i++){
                console.log(str);
            }
        }
    }


    interface sub{
        greetingOne(str:string): void;
    }

    class originsub extends origin implements sub{
        greetingOne(str: string) {
            let num = 3;
            return this.greeting(str,num)
        }

    }

const main = () => {
    let a = new originsub();
    a.greetingOne('こんにちは');
    }
    main()

}
