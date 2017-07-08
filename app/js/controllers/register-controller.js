app.controller('registerController', ['config', '$http', '$location', '$scope', 'authenticationService',
    function (config, $http, $location, $scope, authenticationService) {
        $scope.register = function () {
            $scope.dataLoading = true;
            authenticationService.register($scope.user).then(function (response) {
                authenticationService.login($scope.user).then(function (response) {
                    authenticationService.setCredentials($scope.user.email, response.data.userId, response.data.id);
                    $location.path('/');
                }, function (response) {
                    $scope.dataLoading = false;
                });
            }, function (response) {
                $scope.dataLoading = false;
            });
        }
    }]);
