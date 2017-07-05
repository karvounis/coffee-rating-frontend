app.controller('flavorController', ['$scope', '$window', 'backendService', function ($scope, $window, backendService) {

    $scope.goToOverview =  function () {
        $window.location.href = '/';
    };

    $scope.addFlavor = function(drink) {
        backendService.postDrink(drink).then(function (response) {
            console.log(response);
        });
    };
}]);