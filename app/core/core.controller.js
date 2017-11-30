angular.module('angular-trans-si-core.module')

    .controller('translateCtrl', function ($translate) {

        const self = this;

        self.changeLanguage = function (langKey) {

            $translate.use(langKey)

        }

    })