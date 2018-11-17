const expect = require('expect');
const {generateMessage} = require('./message');


describe('generateMessage', () =>{
    it('should generate correct message object', () =>{
        const message = generateMessage('William', 'Hello Daddy');
        expect(message.from).toBe('William');
        expect(message.text).toBe('Hello Daddy');
        expect(typeof message.createdAt).toBe('number');
    });
});