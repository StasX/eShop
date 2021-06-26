import {
    app
} from "../app";


function loginController($scope, $http) {
    $scope.login = function () {
        $http.post("/user/login", {
            user: $scope.user,
            pass: $scope.pass
        });
    }
}


app.controller("loginController", [$scope, $http, loginController]);
