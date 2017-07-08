app.controller('mainController', ['$scope', '$location', 'drinksService', 'ratingService', 'authenticationService',
    function ($scope, $location, drinksService, ratingService, authenticationService) {
        $scope.addFlavor = function () {
            $location.path('/add_flavor');
        };

        drinksService.getAllDrinks().then(function (response) {
            $scope.drinks = response.data;
            ratingService.getAllRatingsOfUser(authenticationService.getUserId()).then(function (response) {
                var data = response.data;
                $scope.drinks.forEach(function (drink) {
                    data.forEach(function (item) {
                        if (drink.id == item.drinkId) {
                            drink.rating = item.rating;
                            drink.ratingId = item.id;
                            return;
                        }
                    });
                })
            });
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