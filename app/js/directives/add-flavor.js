app.directive('addFlavor', ['drinksService', function (drinksService) {
    return {
        restrict: 'E',
        scope: {
            drinks: '=',
            type: '='
        },
        controller: ['$scope', function ($scope) {
            $scope.flavorToAdd = false;
            $scope.addFlavor = function () {
                $scope.flavorToAdd = true;
            };

            $scope.cancel = function () {
                $scope.flavorToAdd = false;
            };

            $scope.save = function (drink) {
                $('#save-drink').disabled = true;
                drink.type = $scope.type;
                drinksService.postDrink(drink).then(function (response) {
                    $('#save-drink').disabled = false;
                    $scope.flavorToAdd = false;
                    var data = response.data;
                    var newFlavor = {};
                    newFlavor.id = data.id;
                    newFlavor.name = data.name;
                    newFlavor.type = $scope.type;
                    newFlavor.rating = 0;
                    $scope.drinks.push(newFlavor);
                }, function (response) {
                    $scope.sending = 'Error when creating a flavor';
                });
            }
        }],
        templateUrl: '/assets/directives/add-flavor.html'
    };
}]);
