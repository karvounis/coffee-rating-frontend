app.controller('loginController', ['config', '$location', '$scope', 'authenticationService',
    function (config, $location, $scope, authenticationService) {
        $scope.login = function () {
            $scope.dataLoading = true;
            authenticationService.login($scope.user).then(function (response) {
                authenticationService.setCredentials($scope.user.email, response.data.userId, response.data.id);
                $location.path('/');
            }, function (response) {
                $scope.dataLoading = false;
            });
        }
    }]);
