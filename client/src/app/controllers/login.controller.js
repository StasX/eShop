function loginController($scope, $http) {
    $scope.login = function () {
        $http.post("/user/login", {
            user: $scope.user,
            pass: $scope.pass
        });
    }
}


export default {
    name: "loginController",
    ctrl: [$scope, $http, loginController]
}
