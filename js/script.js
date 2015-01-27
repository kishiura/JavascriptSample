'use strict';

var testInt     = 0;
var testString  = 'テスト';
var testBoolean = true;
var testArray   = ['配列1', '配列2', '配列3', '配列4'];
var testObject  = {test: 'hoge'};
var res, res2, res3;

console.log(testInt);
console.log(testBoolean);
console.log(testString);
console.log(testArray);
console.log(testObject);

testInt = 5;

res  = testInt + 10;
res2 = testString + 10;
res3 = testString + testBoolean;