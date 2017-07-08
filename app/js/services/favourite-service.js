app.factory('favouriteService', ['$http', 'config', function ($http, config) {
    return {
        getAllFavouritesOfUser: function (userId) {
            return $http({
                method: 'GET',
                url: config.kpn_api_url + '/api/favourites?filter={"where":{"reviewerId":"' + userId + '"}}'
            });
        },
        createFavourite: function (data) {
            return $http({
                method: 'POST',
                data: data,
                url: config.kpn_api_url + '/api/favourites'
            });
        },
        updateFavourite: function (data, favouriteId) {
            return $http({
                method: 'PUT',
                data: data,
                url: config.kpn_api_url + '/api/favourites/'+ favouriteId
            });
        }
    }
}]);