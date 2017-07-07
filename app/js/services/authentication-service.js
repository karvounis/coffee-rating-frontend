app.factory('authenticationService', ['$http', 'config', '$window',
    function ($http, config, $window) {
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
                $window.localStorage.email = email;
                $window.localStorage.accessToken = accessToken;
            },
            isAuthenticated: function () {
                return !!$window.localStorage.accessToken;
            },
            clearCredentials: function () {
                $window.localStorage.email = null;
                $window.localStorage.accessToken = null;
            },
            getAccessToken: function () {
                return $window.localStorage.accessToken;
            }
        }
    }]);
