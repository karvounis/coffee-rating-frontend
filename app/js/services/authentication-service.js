app.factory('authenticationService', ['$http', 'config', '$rootScope', function ($http, config, $rootScope) {
    return {
        login: function (data) {
            return $http({
                method: 'POST',
                data: data,
                url: config.kpn_api_url + '/api/reviewers/login'
            });
        },
        logout: function (accessToken) {
            return $http({
                method: 'POST',
                url: config.kpn_api_url + '/api/reviewers/logout?access_token=' + accessToken
            });
        },
        register: function (data) {
            return $http({
                method: 'POST',
                data: data,
                url: config.kpn_api_url + '/api/reviewers'
            });
        },
        setAccessToken: function (email, accessToken) {
            $rootScope.globals = {
                currentUser: {
                    email: email,
                    accessToken: accessToken
                }
            };
        },
        isAuthenticated: function () {
            return $rootScope.globals && $rootScope.globals.currentUser && $rootScope.globals.currentUser.accessToken;
        },
        clearCredentials: function () {
            $rootScope.globals = {};
        }
    }
}]);
