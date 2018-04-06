/** @flow */

const User = require('./models/User');

const newUser: User = new User('Bill', true, 'green');

newUser.name = 'John';
newUser.eyes = 'blue';

console.log(newUser.name);
console.log(newUser.eyes);
