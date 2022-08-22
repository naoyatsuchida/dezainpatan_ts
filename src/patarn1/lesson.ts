export const lesson1 = () => {
    class User{
        constructor(public id:number,public name:string){}
        getName() {
            return this.name;
        }
    }
    interface Iterator {
        hasNext(): boolean;
        nextElement(): Object;
    }

    interface Aggregate{
        iterator():Iterator
    }

    // 失敗
    // class UserList implements Iterator{
    //     list: User[] = [];
    //     constructor(public index=0){}
    //     hasNext(): boolean {
    //     }
    // }

    class UserList implements Aggregate{
        userList: User[] = [];
        constructor(private index = 0){}

        addUser(user:User) {
            this.userList.push(user);
        }

        getName() {
            this.userList[this.index].getName();
        }

        getLength():number {
            return this.userList.length
        }
        getUser(int: number) {
            return this.userList[int];
        }

        deleteUser(name: string) {
           this.userList= this.userList.filter((user) => {
               user.name = name;
            })
        }

        iterator(): Iterator {
            return new UserListAdmin(this);
        }
    }

    class UserListAdmin implements Iterator{
        index = 0;
        constructor(private userlist:UserList) { }
        hasNext(): boolean {
            if (this.index < this.userlist.getLength()) {
                return true;
            } else {
                return false;
           }
        }

        nextElement(): Object {
            let i = this.index;
            this.index++;
            let user = this.userlist.getUser(i);
            return user;
        }
    }

    let main = () => {
        let userlist = new UserList();
        userlist.addUser(new User(1,"naoya"));
        userlist.addUser(new User(2,"kenay"));
        userlist.addUser(new User(3,"sayaka"));
       let kanri =  userlist.iterator();
        while (kanri.hasNext()) {
            console.log(kanri.nextElement());
       }
    }
    main();

}
