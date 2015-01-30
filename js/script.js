'use strict';

var testInt     = 0;
var testString  = '5';
var testBoolean = true;
var testArray   = ['配列1', '配列2', '配列3', '配列4'];
var testObject  = {
	test  : 'hoge',
	test2 : 'hoge2',
};

var res, res2, res3;

console.log(testInt);
console.log(testBoolean);
console.log(testString);
console.log(testArray);
console.log(testObject);

function test(testInt)
{
	testInt = 10;
}

function test2()
{
	var testInt = 10;
	testInt = 5;
}

var test3 = function(x, y)
{
	return x * y;
};

var test4 = function()
{
	testInt = 5;
	var testInt = 10;
};