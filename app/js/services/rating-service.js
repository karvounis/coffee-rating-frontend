app.factory('ratingService', ['$http', 'config', function ($http, config) {
    return {
        getAllRatingsOfUser: function (userId) {
            return $http({
                method: 'GET',
                url: config.kpn_api_url + '/api/ratings?filter={"where":{"reviewerId":"' + userId + '"}}'
            });
        },
        createRating: function (data) {
            return $http({
                method: 'POST',
                data: data,
                url: config.kpn_api_url + '/api/ratings'
            });
        },
        updateRating: function (data, ratingId) {
            return $http({
                method: 'PUT',
                data: data,
                url: config.kpn_api_url + '/api/ratings/' + ratingId
            });
        }
    }
}]);