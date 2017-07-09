var app = angular.module('KPNFrontend', ['ngRoute', 'angularRate'])
    .run(['$location', '$rootScope', 'authenticationService', function ($location, $rootScope, authenticationService) {
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            if (restrictedPage && !authenticationService.isAuthenticated()) {
                $location.path('/login');
            }
        });
    }]);
