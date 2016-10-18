export default function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('access/signin');
    $urlRouterProvider.when('', 'access/signin');
    
    $stateProvider
        .state('access', {
            abstract: true,
            url: '/access',
            template: '<div ui-view></div>'
        })
        .state('access.signin', {
            url: '/signin',
            templateProvider: ($templateCache) => {
                return $templateCache.get('login/controllers/signin/signin.controller.html');
            },
            controller: 'SigninController as signin'
        })
        .state('access.signup', {
            url: '/signup',
            templateProvider: ($templateCache) => {
                return $templateCache.get('login/controllers/signup/signup.controller.html');
            },
            controller: 'SignupController as signup'
        })
    ;
    
};