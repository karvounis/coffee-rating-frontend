app.controller('flavorController', ['$scope', '$location', '$window', 'drinksService',
    function ($scope, $location, $window, backendService) {
        $scope.goToOverview = function () {
            $location.path('/');
        };

        $scope.addFlavor = function (drink) {
            backendService.postDrink(drink).then(function (response) {
            });
        };
    }]);