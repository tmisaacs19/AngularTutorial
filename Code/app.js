var myApp = angular.module('DemoApp', []);

myApp.factory('personServices', function(){
	var person = {}

	person.printName = function(firstName, lastName){
		return firstName + ' ' + lastName;
	}
	return person;
})

myApp.controller('myController', function($scope, personServices){

	$scope.firstName = "Trainee";
	$scope.lastName = "Person";

	$scope.printName = function () {personServices.printName($scope.firstName, $scope.lastName);
}
})