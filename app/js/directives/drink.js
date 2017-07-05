app.directive('drink', ['backendService', function (backendService) {
    return {
        restrict: 'E',
        controller: ['$scope', '$http', 'config', function ($scope, $http, config) {
            $scope.changeDrinkRating = function ($event, drink_id) {
                var data = $scope.getDrinkBasedOnId(drink_id);
                data.rating = $event.rating;
                backendService.putDrink(data, drink_id);
            };

            $scope.markAs =function (is_favourite, drink_id) {
                var data = $scope.getDrinkBasedOnId(drink_id);
                data.favourite = is_favourite;
                backendService.putDrink(data, drink_id);
            };
        }],
        templateUrl: '/assets/directives/drink.html'
    };
}]);
