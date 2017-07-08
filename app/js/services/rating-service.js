app.factory('ratingService', ['$http', 'config', function ($http, config) {
    return {
        getAllRatingsOfUser: function (userId) {
            return $http({
                method: 'GET',
                url: config.kpn_api_url + '/api/reviewers/'+ userId + '/ratings'
            });
        },
        createRating: function (data, userId) {
            return $http({
                method: 'POST',
                data: data,
                url: config.kpn_api_url + '/api/reviewers/'+ userId + '/ratings'
            });
        },
        updateRating: function (data, userId, ratingId) {
            return $http({
                method: 'PUT',
                data: data,
                url: config.kpn_api_url + '/api/reviewers/'+ userId + '/ratings/' + ratingId
            });
        }
    }
}]);