export const Factory_Method = () => {
     abstract class Product{
        public abstract use(): void;
    }

    abstract class Factory{
        create(owner: string): Product{
            let p: Product = this.createProduct(owner);
            this.registerProduct(p);
            return p;
        }

        protected abstract createProduct(owner: string): Product;
        protected abstract registerProduct(product: Product): void;

    }


    class IDCard extends Product{
        owner:string;
        constructor(owner: string) {
            super();
            this.owner = owner;
        }
        public use(): void{
            console.log(`${this.owner}のカードを使います`);
        }

        public getOwner(): string{
            return this.owner;

        }

        // class IDCardFactory extends Factory{
        //     // ownerList: IDCard[];
        //     createProduct(owner: string): Product{
        //         return new IDCard(owner)
        //     }

        //     protected registerProduct(product: Product): void {

        //         // this.ownerList.push(product as IDCardFactory).getOwners();
        //     }
        //     getOwners(): IDCard[]{
        //         return this.ownerList;
        //     }
        }
    }
