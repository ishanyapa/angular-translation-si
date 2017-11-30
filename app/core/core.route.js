angular.module('angular-trans-si-core.route', [])

    .config(($stateProvider, $urlRouterProvider)=>{

        $stateProvider
            .state('translate', {
                url: '/views/translate',
                templateUrl: 'app/core/templates/translate-view.html',
                controller: 'translateCtrl as trnslt'
            })

    })