app.directive('drink', ['drinksService', 'ratingService', 'authenticationService', 'favouriteService',
    function (drinksService, ratingService, authenticationService, favouriteService) {
        return {
            restrict: 'E',
            controller: ['$scope', function ($scope) {
                $scope.changeDrinkRating = function ($event, drink_id) {
                    var drink = $scope.getDrinkBasedOnId(drink_id);
                    var data = {};
                    data.date = new Date().toISOString();
                    data.rating = $event.rating;
                    if (drink.ratingId) {
                        data.id = drink.ratingId;
                        ratingService.updateRating(data, authenticationService.getUserId(), drink.ratingId);
                    } else {
                        data.drinkId = drink_id;
                        ratingService.createRating(data, authenticationService.getUserId()).then(function (response) {
                            drink.ratingId = response.data.id;
                            drink.rating = response.data.rating;
                        });
                    }
                };

                $scope.markAs = function (is_favourite, drink_id) {
                    var drink = $scope.getDrinkBasedOnId(drink_id);
                    var data = {};
                    data.favourited = is_favourite;
                    data.drinkId = drink_id;
                    if (drink.favouriteId) {
                        favouriteService.updateFavourite(data, authenticationService.getUserId(), drink.favouriteId).then(function (response) {
                            drink.favourite = response.data.favourited;
                        });
                    } else {
                        favouriteService.createFavourite(data, authenticationService.getUserId()).then(function (response) {
                            drink.favouriteId = response.data.id;
                            drink.favourite = response.data.favourited;
                        })
                    }
                };
            }],
            templateUrl: '/assets/directives/drink.html'
        };
    }]);
