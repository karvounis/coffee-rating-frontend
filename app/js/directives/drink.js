app.directive('drink', ['drinksService', 'ratingService', 'authenticationService',
    function (drinksService, ratingService, authenticationService) {
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
                    var data = $scope.getDrinkBasedOnId(drink_id);
                    data.favourite = is_favourite;
                    drinksService.putDrink(data, drink_id);
                };
            }],
            templateUrl: '/assets/directives/drink.html'
        };
    }]);
