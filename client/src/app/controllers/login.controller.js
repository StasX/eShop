loginController.$inject = ["$scope", "$http"];

function loginController($scope, $http) {
    $scope.productsCount = 0;
    $http.get("/product/total").then((res) => {
        $scope.productsCount = res.data.total;
    }, (err) => {
        console.error(err);
    })

    $scope.login = function () {
        $http.post("/user/login", {
            user: $scope.user,
            pass: $scope.pass
        });
    }
}


export default {
    name: "loginController",
    ctrl: loginController
}
