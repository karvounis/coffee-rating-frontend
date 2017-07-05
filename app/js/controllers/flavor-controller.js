app.controller('flavorController', ['$scope', '$window', 'backendService', function ($scope, $window, backendService) {
    console.log('flavorController');
    $scope.goToOverview =  function () {
        $window.location.href = '/';
    };
}]);