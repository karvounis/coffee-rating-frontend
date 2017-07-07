app.controller('mainController', ['$scope', '$rootScope', '$location', 'backendService', 'authenticationService',
    function ($scope, $rootScope, $location, backendService, authenticationService) {
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
            authenticationService.logout(authenticationService.getAccessToken()).then(function (response) {
                authenticationService.clearCredentials();
                $location.path('/login');
            });
        };
    }]);