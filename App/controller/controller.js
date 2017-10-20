app.controller("server",["$scope","server",function($scope,server){
    server.getProducts("GET", "http://localhost:8999/data").then(function (result) {
        $scope.productItems = result;
        console.log(result)
    });
}]);