storeContentController.$inject = ["$scope", "$rootScope", "$http"];

function storeContentController($scope, $rootScope, $http) {
    $scope.categories = [];
    $scope.products = [];
    $http.get("/category").then((res) => {
        $scope.categories = res.data.category;
        $rootScope.categories = res.data.category;
    }, (err) => {
        console.error(err);
    });
    $http.get("/product").then((res) => {
        $scope.products = res.data.products;
    }, (err) => {
        console.error(err);
    });
}

export default {
    name: "storeContentCtrl",
    ctrl: storeContentController
};
