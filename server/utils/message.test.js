const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');
const {isRealString} = require('./validation');
const {Users} = require('./users');
describe('generateMessage', () =>{
    it('should generate correct message object', () =>{
        const message = generateMessage('William', 'Hello Daddy');
        expect(message.from).toBe('William');
        expect(message.text).toBe('Hello Daddy');
        expect(typeof message.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () =>{
        const location = generateLocationMessage('Admin',1,1);
        expect(location.from).toBe('Admin');
        expect(typeof location.createdAt).toBe('number');
        expect(location.url).toBe('https://www.google.com/maps?q=1,1');
    })
})

describe('isRealString', () => {
    it('should reject non-string values', () => {
        const result = isRealString(123);
        expect(result).toBeFalsy();
    });
    
    it('should reject string with only spaces', () =>{
        const result = isRealString('  ');
        expect(result).toBeFalsy();
    });
    
    it('should allow string with non-space character', () => {
        const result = isRealString('   lj;sf lsdf  ');
        expect(result).toBeTruthy();
    });

});


describe('Users', () => {
    var users;
    beforeEach(() =>{
        users= new Users();
        users.users = [{
            id: '1',
            name: 'Steven',
            room: 'Node Course'
        },
        {
            id: '2',
            name: 'William',
            room: 'React Course'
        },
        {
            id: '3',
            name: 'Johnson',
            room: 'Node Course'
        }]
    })
    it('should add new user', () =>{
        let users = new Users();
        const user = {
            id: '123',
            name: 'Steven',
            room: 'Secret Agent'
        };
        const res = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should return names for node course', () =>{
        var userList = users.getUserList(users.users[0].room);
        expect(userList).toEqual(['Steven','Johnson']);
    });
    
    it('should get user by user id', () => {
        const user = users.getUser('1');
        expect(user).toMatchObject(users.users[0]);
    });

    it('should not get user by wrong user id', () => {
        const user = users.getUser('5');
        expect(user).toBeFalsy();
    });

    it('should remove user by user id', () =>{
        const user = users.removeUser('1');
        expect(user).not.toMatchObject(users.users[0]);
    });

    it('should not remove user by wrong user id', () => {
        const user = users.removeUser('4');
        expect(user).toBeFalsy();
    })
})
