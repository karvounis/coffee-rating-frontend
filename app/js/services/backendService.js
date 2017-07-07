app.factory('backendService', ['$http', 'config', function ($http, config) {
    return {
        getAllDrinks: function () {
            return $http({
                method: 'GET',
                url: config.kpn_api_url + '/api/drinks'
            });
        },

        putDrink: function (data, drink_id) {
            return $http({
                method: 'PUT',
                data: data,
                url: config.kpn_api_url + '/api/drinks/' + drink_id
            });
        },

        postDrink: function (data) {
            return $http({
                method: 'POST',
                data: data,
                url: config.kpn_api_url + '/api/drinks/'
            });
        },

        addFlavor: function (data) {
            return $http({
                method: 'POST',
                data: data,
                url: config.kpn_api_url + '/api/drinks/'
            });
        }
    }
}]);
