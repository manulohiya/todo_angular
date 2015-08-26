angular.module('todoApp', ["ngRoute"])

.config(['$routeProvider', '$locationProvider',
   function($routeProvider, $locationProvider) {
     $routeProvider.
       when('/', {
         templateUrl: 'templates/todos.html',
         controller: 'TodoCtrl'
       }).
       when('/about', {
       	templateUrl: 'templates/about.html'
         
     }).
       when('/lists', {
       	templateUrl: 'templates/lists.html',
       	controller: 'ListCtrl'
         
     }).
       otherwise({
         redirectTo: '/'
       });

       // use the HTML5 History API for pretty URLs. Doesnt let you refresh.
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });

   }])





.controller("MainCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.term = "cellar door";	
  $scope.showAlert = function() {
    alert($scope.term);
  }
}])

.controller("TodoCtrl", ['$scope', function ($scope) {
	console.log("Chaining is working on Todo");

$scope.todos = [
{title: "clean"},
{title: "sleep"}
];

$scope.delete = function(todo) {
	var index = $scope.todos.indexOf(todo)
	$scope.todos.splice(index,1);

}	
$scope.newTodo = "Enter task";
$scope.addNewTodo = function() {
 	$scope.todos.push({title: $scope.newTodo, created_at: new Date()});
 	$scope.newTodo = " "


	
}
  

  
}])


.controller("ListCtrl", ['$scope', function ($scope) {
	console.log("Chaining is working on Lists");

$scope.lists = [
{title: "work"},
{title: "family"}
];


 
}])


.directive('currentWeather', function() {
	console.log("currentWeather directive is working");
  return {
    restrict: 'E',
    scope: {
      city: '@'
    },
    template: '<div class="current-weather"><h4>Weather for {{city}}</h4>{{weather.main.temp}}</div>',
    //tempalteUrl: 'templates/current-weather-template.html',
    //transclude: true,
    controller: ['$scope', '$http',
      function ($scope, $http) {
        var url = "http://api.openweathermap.org/data/2.5/weather?mode=json&cnt=7&units=imperial&callback=JSON_CALLBACK&q="
        $scope.getWeather = function(city) {
          $http({ method: 'JSONP', url: url + city })
            .success(function(data) {
              $scope.weather = data;
            });
        }
    }],
    link: function (scope, element, attrs) {
      scope.weather = scope.getWeather(attrs.city);
    }
  }
});






