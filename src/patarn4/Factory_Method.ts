export const Factory_Method = () => {
    // フレームワーク製品
    abstract class Product {
        public abstract use(): void;
    }
    // フレームワーク工場
    abstract class Factory {
        create(owner: string): Product {
            let p: Product = this.createProduct(owner);
            this.registerProduct(p);
            return p;
        }

        protected abstract createProduct(owner: string): Product;
        protected abstract registerProduct(product: Product): void;

    }


    class IdCard extends Product {
        public readonly owner: string;

        constructor(owner: string) {
            super();
            console.log(owner + "さんのカードを作ります。");
            this.owner = owner;
        }

        public use(): void {
            console.log(this.owner + "さんのカードを使います。");
        }
    }

    class IdCardFactory extends Factory {
        public readonly owners: Array<string> = [];

        protected createProduct(owner: string): Product {
            return new IdCard(owner);
        }

        protected registerProduct(product: Product): void {
            this.owners.push((<IdCard>product).owner);
        }

    }
}
