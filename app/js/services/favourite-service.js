app.factory('favouriteService', ['$http', 'config', function ($http, config) {
    return {
        getAllFavouritesOfUser: function (userId) {
            return $http({
                method: 'GET',
                url: config.kpn_api_url + '/api/reviewers/'+ userId + '/favourites'
            });
        },
        createFavourite: function (data, userId) {
            return $http({
                method: 'POST',
                data: data,
                url: config.kpn_api_url + '/api/reviewers/'+ userId + '/favourites'
            });
        },
        updateFavourite: function (data, userId, favouriteId) {
            return $http({
                method: 'PUT',
                data: data,
                url: config.kpn_api_url + '/api/reviewers/'+ userId + '/favourites/' + favouriteId
            });
        }
    }
}]);