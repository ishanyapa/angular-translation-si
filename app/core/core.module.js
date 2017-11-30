angular.module('angular-trans-si-core.module', [

    'pascalprecht.translate',
    'ngMaterial'
])

    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en', {
            'TITLE': 'Welcome!',
            'PARAGRAPH': 'This is a paragraph'
        });

        $translateProvider.translations('si', {
            'TITLE': 'ආයුබෝවන්!',
            'PARAGRAPH': 'මෙය පරිච්ඡේදයකි'
        });

        $translateProvider.preferredLanguage('en');
    }]);