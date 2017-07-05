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

        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);
