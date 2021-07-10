storeContentController.$inject = ["$scope", "$rootScope", "$http"];

function storeContentController($scope, $rootScope, $http) {
    $scope.categories = [];
    $scope.products = [];
    $http.get("/category").then((res) => {
        $scope.categories = res.data.category;
        $rootScope.categories = $scope.categories;
    }, (err) => {
        console.console.error(err);
    });
    $http.get("/product").then((res) => {
        $scope.products = res.data.products;
    }, (err) => {
        console.console.error(err);
    });
}

export default {
    name: "storeContentCtrl",
    ctrl: storeContentController
};
