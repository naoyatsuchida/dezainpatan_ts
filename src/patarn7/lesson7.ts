export const lesson7=()=>{
    class PersonPlan{
        constructor(private person:Person){}

        greet() {
            this.person.greeting();
        }

        job() {
            this.person.Jobbing();
        }



    }

    class QuickPersonPlan extends PersonPlan{
        constructor( person: Person) {
            super(person)
        }
        supermove() {
            for (let i = 0; i < 3; i++){
                this.greet();
                this.job();
            }
        }
    }

   abstract class Person{
       abstract greeting(): void;
       abstract Jobbing(): void;
    }

    class Naoya extends Person{
        constructor(private name: string) {
            super();
        }
        greeting(): void {
            console.log('おはようっ')
        }
Jobbing(): void {
    console.log(`${this.name}は働いている
    `)
}
    }

    const main = () => {
        let naoya :QuickPersonPlan = new QuickPersonPlan(new Naoya('naoya'))
        naoya.supermove();

    }
    main();

}
