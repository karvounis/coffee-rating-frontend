app.controller('mainController', ['$scope', '$location', 'drinksService', 'ratingService', 'authenticationService', 'favouriteService',
    function ($scope, $location, drinksService, ratingService, authenticationService, favouriteService) {
        drinksService.getAllDrinks().then(function (response) {
            $scope.drinks = response.data;
            $scope.drinks.forEach(function (drink) {
                drink.rating = 0;
            });
            getUsersRating();
            getUsersFavourites();
        });

        var getUsersRating = function () {
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
        };

        var getUsersFavourites = function () {
            favouriteService.getAllFavouritesOfUser(authenticationService.getUserId()).then(function (response) {
                var data = response.data;
                $scope.drinks.forEach(function (drink) {
                    data.forEach(function (item) {
                        if (drink.id == item.drinkId) {
                            drink.favourite = item.favourited;
                            drink.favouriteId = item.id;
                            return;
                        }
                    });
                })
            })
        };

        $scope.setRatingFilter = function ($event) {
            $scope.ratingFilter = $event.rating;
        };

        $scope.logout = function () {
            authenticationService.logout(authenticationService.getAccessToken()).then(function (response) {
                authenticationService.clearCredentials();
                $location.path('/login');
            });
        };

        $scope.clearFilters = function () {
            $scope.search = '';
            $scope.typeFilter = '';
            $scope.ratingFilter = '';
        }
    }]);