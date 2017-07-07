app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        // Main
        .when('/', {
            templateUrl: '/assets/templates/main.html',
            controller: 'mainController'
        })
        .when('/add_flavor', {
            templateUrl: '/assets/templates/flavor.html',
            controller: 'flavorController'
        })
        .when('/login', {
            controller: 'loginController',
            templateUrl: 'assets/templates/login.html'
        })
        .when('/register', {
            controller: 'registerController',
            templateUrl: 'assets/templates/register.html'
        })
        .otherwise({
            redirectTo: '/login'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);
