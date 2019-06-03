# extractwords [![Build Status](https://api.travis-ci.com/f-a-r-a-z/extractwords.svg?branch=master)](https://travis-ci.com/f-a-r-a-z/extractwords)



## Install

```
$ npm install extractwords
```


## Usage

```js
const extractwords = require('extractwords');

extractwords('Good Morning, how are you?');
//=> ['Good', 'Morning', 'how', 'are', 'you']

extractwords('Good morning, how are you?', {lowercase: true});
//=> ['good', 'morning', 'how', 'are', 'you']

extractwords('Good Morning, how are you?', {punctuation: true});
//=> ['Good', 'Morning,', 'how', 'are', 'you?']

extractwords('Great work ... son.', {punctuation: true});
//=> ['Great', 'work', 'son.']

extractwords("He didn't pay for his meal m'aam");
//=> ['He', "didn't", 'pay', 'for', 'his', 'meal', "m'aam"]

extractwords("17651Hello*&!(*2I'm_++`~gOOd");
//=> ['Hello', "I'm", 'gOOd']


```


## API

### extractwords(str, [options])

#### str

Type: `string`

Text containing words to be extracted.

#### options

Type: `object`

##### lowercase

Type: `boolean`<br>
Default: `false`

If `true`, all words returned are lowercased.

##### punctuation

Type: `boolean`<br>
Default: `false`

If `true`, all punctuation next to words are retained.

