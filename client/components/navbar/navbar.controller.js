'use strict';

angular.module('onfastdesigncomApp')
    .controller('NavbarCtrl', function ($scope, $location, Auth) {
        $scope.menu = [
            {
                'title': 'Home',
                'link': '/'
            },
            {
                'title': 'About',
                'link': '/about'
            },
            {
                'title': 'Portfolio',
                'link': '/portfolio'
            },
            {
                'title': 'Blog',
                'link': 'http://blog.mikeonslow.info'
            },
            {
                'title': 'Contact',
                'link': '/contact'
            }
        ];

        $scope.isCollapsed = true;
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.getCurrentUser = Auth.getCurrentUser;

        $scope.logout = function () {
            Auth.logout();
            $location.path('/login');
        };

        $scope.isActive = function (route) {
            return route === $location.path();
        };
    });