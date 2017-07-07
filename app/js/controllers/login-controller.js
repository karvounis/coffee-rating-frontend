app.controller('loginController', ['config', '$http', '$location', '$scope', 'authenticationService',
    function (config, $http, $location, $scope, authenticationService) {
        $scope.login = function () {
            $scope.dataLoading = true;
            authenticationService.login($scope.user).then(function (response) {
                authenticationService.setAccessToken($scope.user.email, response.data.id);
                $location.path('/');
            }, function (response) {
                $scope.dataLoading = false;
            });
        }
    }]);
