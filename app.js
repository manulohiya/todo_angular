angular.module('todoApp', ["ngRoute"])

.config(['$routeProvider',
   function($routeProvider) {
     $routeProvider.
       when('/', {
         templateUrl: 'templates/todos.html',
         controller: 'TodoCtrl'
       }).
       otherwise({
         redirectTo: '/'
       });
   }])

.controller("MainCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.term = "cellar door";	
  $scope.showAlert = function() {
    alert($scope.term);
  }
}])

.controller("TodoCtrl", ['$scope', function ($scope) {
	console.log("Chaining is working");

$scope.todos = [
{title: "clean", created_at: 1288323623006},
{title: "sleep"}
];

$scope.delete = function(todo) {
	var index = $scope.todos.indexOf(todo)
	$scope.todos.splice(index,1);

}	
$scope.newTodo = "Enter task";
$scope.addNewTodo = function() {
 	$scope.todos.push({title: $scope.newTodo,created_at: new Date()});
 	$scope.newTodo = " "


	
}
  

  
}])




