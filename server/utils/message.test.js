const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');


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