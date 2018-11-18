
//addUser(id,name,room)
//removeUser(id)
//getUser(id)
//getUserList(room)

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

class Users{
    constructor(){
        this.users = [];
    }
    addUser (id, name, room) {
        const user = { id, name, room }
        this.users.push(user);
        return user;
    }
    removeUser(id){
        //return use that was remove
        let removedUser;
        const users = this.users.filter((user) => {
            if (user.id === id){
                removedUser = user;
            }
            return user.id !== id
        });
        this.users = users;
        return removedUser;
    }

    getUser(id){
        const users = this.users.filter((user) => user.id === id);
        return users[0];
    }
    getUserList(room){
        const users = this.users.filter((user) => user.room === room);
        const nameArray = users.map((user) => user.name);
        return  nameArray;
    }

}

module.exports = {Users};