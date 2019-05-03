const {deepEqual} = require('assert');
const words = require('./index.js');

deepEqual(words('Hello how are you'), ['Hello', 'how', 'are', 'you']);
deepEqual(words(''), []);
deepEqual(words('Good'), ['Good']);
deepEqual(words('Hello, I am good.'), ['Hello', 'I', 'am', 'good']);
deepEqual(words("Tests, now with 'apostrophes'"), ['Tests', 'now', 'with', 'apostrophes']);
deepEqual(words('    Birds      chirping ,   in the   MOrning!*@&@and172I/.<>?<love`"it'), ['Birds', 'chirping', 'in', 'the', 'MOrning', 'and', 'I', 'love', 'it']);
deepEqual(words("He didn't pay for his burger m'aam"), ['He', "didn't", 'pay', 'for', 'his', 'burger', "m'aam"]);
console.log('All tests passed');
