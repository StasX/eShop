loginController.$inject = ["$scope", "$http"];

function loginController($scope, $http) {
    $scope.productsCount = 0;

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
