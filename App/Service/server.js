app.factory("server", ["baseServer", function (baseServer) {
    return {
        getProducts: function (type, url) {
            return baseServer.ajax(type, url);
        }
    }
}]);