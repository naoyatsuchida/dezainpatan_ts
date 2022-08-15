// iteratorパターンは何かが集まっている時、それを順番に指し示していき、全体をスキャンしていく処理を行う。
export const Adapter1 = () => {
    //クラスを用いる( 継承を使ったもの)

    // 予めあるクラスBannerクラス
    // adaptee使用したいクラス
    class Banner {
        constructor(public str: string) {
        }
        showWithParen = () => {
            console.log(`(${this.str})`)
        }
        showWithAster = (): void => {
            console.log(`*${this.str}*`)
        }
    }


    // Bannerクラスが使いたいPrintインターフェイス
    interface Print{
        printWeak():void
        printStrong():void
    }

    // PrintBannerクラス 上の二つのクラスとインターフェイスを受け継いで利用する
    class PrintBanner extends Banner implements Print{
        constructor(public str: string) {
            super(str);
        }
        printWeak(): void {
            this.showWithParen();
        }
        printStrong(): void {
            this.showWithAster();
        }
    }

    const main=()=>{
        let p: Print = new PrintBanner('naoya');
        p.printStrong();
        p.printWeak();
    }
    main()
}


export const Adapter2 = () => {
    // 予めあるクラスBannerクラス
    // adaptee役 くっつけられるクラス
    class Banner {
        constructor(public str: string) {
        }
        showWithParen = () => {
            console.log(`(${this.str})`)
        }
        showWithAster = (): void => {
            console.log(`*${this.str}*`)
        }
    }
    // target
    class Print{
        printWeak=(): void => { }
        printStrong=(): void => { }

    }

    // adapter役くっつける
    class PrintBanner extends Print{
        banner: Banner;

        // adapteeと同じプロパティを受け取る必要がある instanceを作成するため
        constructor(str: string) {
            super();
            this.banner = new Banner(str)
        }

        printWeak=(): void=>{
            this.banner.showWithParen();
        }
        printStrong = ():void =>  {
            this.banner.showWithAster()
        }

    }
    // クライアント　実際にtargetのメソッドを使て仕事する
    const main=()=>{
        let p: Print = new PrintBanner('naoya');
        p.printStrong();
        p.printWeak();
    }
    main()

}
