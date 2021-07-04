loginController.$inject = ["$scope", "$http", "$location"];

function loginController($scope, $http, $location) {
    $scope.productsCount = 0;
    $http.get("/product/total").then((res) => {
        $scope.productsCount = res.data.total;
    }, (err) => {
        console.error(err);
    })

    $scope.login = function () {
        $http.post("/user", {
            user: $scope.user,
            pass: $scope.pass
        }).then((res) => {
            const path = res.data.role ? "/management" : "/shop";
            $location.path(path);
        }, (err) => {
            console.error(err);
        });
    }
}


export default {
    name: "loginController",
    ctrl: loginController
}
