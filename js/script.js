'use strict';

// jQuery
$(document).ready(function()
{
	console.log('jQuery Ready');
	var i = 10;
	$('.clickTest').click(function()
	{
		i++;
		$('.jqueryViewTest2').text(i);
	});

	$('.hover').hover(
		function()
		{
			console.log('Hoverしたでしょ！');
		},
		function()
		{
			console.log('Hover外したでしょ！');
		}
	);

	$(window).scroll(function()
	{
		var offset = $('html').offset().top;
		console.log('スクロールしてまっせー！' + offset);
	});
});

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

var test = function(testInt)
{
	testInt = 10;
};

var test2 = function()
{
	var testInt = 10;
	testInt = 5;
};

var test3 = function(x, y)
{
	return x * y;
};

var test4 = function(arr, x)
{
	return arr[x];
};

var viewTestFunc = function()
{
	testInt++;
	var dom = document.getElementById('viewTest');
	dom.innerHTML = 'not jQuery : ' + testInt;
	$('.jqueryViewTest').text('jQuery : ' + testInt);
};

var ct = document.getElementById('clickTest');
ct.addEventListener('click', function(e)
{
	console.log('こういうクリックもある');
	return e.preventDefault();
});

setTimeout(function()
{
	console.log('5秒後にでる。正確には5秒ではない');
}, 5000);

setInterval(function()
{
	testInt++;
	console.log(testInt);
}, 1000);
