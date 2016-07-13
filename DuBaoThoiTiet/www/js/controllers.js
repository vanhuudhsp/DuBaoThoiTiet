// Các controllers
weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    })
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$stateParams', 'cityService', function ($scope, $resource, $stateParams, cityService) {
    $scope.city = cityService.city;
    $scope.days = $stateParams.days || 2;
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } });
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days, lang: 'vi', units: 'metric', APPID: 'efd929b8c471b2a11adee319ed694670' });

    console.log($scope.weatherResult);
    $scope.convertToDate = function (dt) {
        return new Date(dt * 1000);
    };
}]);
