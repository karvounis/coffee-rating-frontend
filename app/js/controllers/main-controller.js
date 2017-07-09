app.controller('mainController', ['$scope', '$location', 'drinksService', 'ratingService', 'authenticationService', 'favouriteService',
    function ($scope, $location, drinksService, ratingService, authenticationService, favouriteService) {
        /**
         * Gets All Drinks from the API, the ratings that the user has provided and his favourites
         */
        drinksService.getAllDrinks().then(function (response) {
            $scope.drinks = response.data;
            $scope.drinks.forEach(function (drink) {
                drink.rating = 0;
            });
            getUsersRating();
            getUsersFavourites();
            getDrinkAverages();
        });

        $scope.search = '';
        $scope.typeFilter = '';
        $scope.ratingFilter = '';

        var getDrinkAverages = function () {
            drinksService.getAverages().then(function (response) {
                var data = response.data.data;
                $scope.drinks.forEach(function (drink) {
                    data.forEach(function (item) {
                        if (drink.id == item.drinkId) {
                            drink.average = item.average;
                            return;
                        }
                    });
                })
            });
        };

        setInterval(getDrinkAverages, 5000);

        /**
         * Calls the API and gets the User's ratings
         */
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

        /**
         * Calls the API and gets the User's favourite drinks.
         */
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

        $scope.setRatingFilter = function ($event, rating) {
            $scope.ratingFilter = rating;
        };

        /**
         * Logs out the User.
         */
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
        };
    }]);