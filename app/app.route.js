angular.module('angular-trans-si.route', [
    'ui.router',
    'angular-trans-si-core.route'
])

    .config(($stateProvider, $urlRouterProvider)=>{
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: 'app/core/home.html'
            })
    })