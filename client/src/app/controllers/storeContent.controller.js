storeContentController.$inject = ["$scope", "$rootScope", "$http"];

function storeContentController($scope, $rootScope, $http) {
    $scope.categories = [];
    $http.get("/category").then((res) => {
        $scope.categories = res.data;
    }, (err) => {
        console.console.error(err);
    });
}

export default {
    name: "storeContentCtrl",
    ctrl: storeContentController
};
