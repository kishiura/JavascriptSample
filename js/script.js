app.controller('MainController', function($scope, $interval, ServiceSample)
{
	'use strict';

	var self = this;

	self.init = function()
	{
		self.title = 'AngularJs Template';
		self.i = 0;
	};

	self.makeVal = function()
	{
		self.i++;
		return self.i;
	};

	self.addVal = function()
	{
		ServiceSample.addVal(self.title, self.makeVal());
	};

	self.init();

	$interval(function()
	{
		self.addVal();
	},3000);

	$scope.$root.$on('init', function(e, data)
	{
		self.init();
	});

	$scope.$watch('serviceSampleSuccess', function(res)
	{
		if (!res) {
			return;
		}
		self.title = ServiceSample.getVal();
	});
});