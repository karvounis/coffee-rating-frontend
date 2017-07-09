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
            setCredentials: function (email, userId, accessToken) {
                $window.localStorage.email = email;
                $window.localStorage.userId = userId;
                $window.localStorage.accessToken = accessToken;
            },
            isAuthenticated: function () {
                return !!$window.localStorage.accessToken;
            },
            clearCredentials: function () {
                $window.localStorage.email = null;
                $window.localStorage.userId = null;
                $window.localStorage.accessToken = null;
            },
            getUserId: function () {
                return $window.localStorage.userId;
            },
            getAccessToken: function () {
                return $window.localStorage.accessToken;
            }
        }
    }]);
