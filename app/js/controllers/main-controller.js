app.controller('mainController', ['$scope', '$rootScope', '$window', '$location', 'backendService', 'authenticationService',
    function ($scope, $rootScope, $window, $location, backendService, authenticationService) {
        $scope.addFlavor = function () {
            $location.path('/add_flavor');
        };

        backendService.getAllDrinks().then(function (response) {
            $scope.drinks = response.data;
        });

        $scope.getDrinkBasedOnId = function (drink_id) {
            var returnDrink = null;
            $scope.drinks.forEach(function (drink) {
                if (drink.id == drink_id) {
                    returnDrink = drink;
                    return;
                }
            });
            return returnDrink;
        };

        $scope.logout = function () {
            authenticationService.logout($rootScope.globals.currentUser.accessToken).then(function (response) {
                authenticationService.clearCredentials();
                $location.path('/login');
            });
        };
    }]);