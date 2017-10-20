/**
 * Created by Nan on 2017/10/18.
 */
var app = angular.module("app", ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("server", {
            url: "/server",
            templateUrl: "App/View/server.html",
            controller: "server"
        });
    $urlRouterProvider.otherwise("/server");
});