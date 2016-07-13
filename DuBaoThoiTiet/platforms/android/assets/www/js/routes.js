//Định tuyến các trang
weatherApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .state('forecast', {
        url: '/forecast',
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    .state('forecastD', {
        url: '/forecast/:days',
         templateUrl: 'pages/forecast.html',
         controller: 'forecastController'
     })
    $urlRouterProvider.otherwise('/');
})