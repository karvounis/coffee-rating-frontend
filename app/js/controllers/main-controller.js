app.controller('mainController', ['$scope', '$window', 'backendService', function ($scope, $window, backendService) {
    $scope.addFlavor =  function () {
        $window.location.href = '/add_flavor';
    };

    backendService.getAllDrinks().then(function (response) {
        $scope.drinks = response.data;
    });

    $scope.getDrinkBasedOnId = function (drink_id) {
        var returnDrink = null;
        $scope.drinks.forEach(function(drink) {
            if (drink.id == drink_id) {
                returnDrink = drink;
                return;
            }
        });
        return returnDrink;
    }
}]);