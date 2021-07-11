managementController.$inject = ["$scope", "$rootScope", "$http"];

function managementController($scope, $rootScope, $http) {
    $scope.fileStatus = "Please choise file";
    $scope.selectedCategory = "Select category";
    $scope.showImg = false;
    $scope.productName = "Add new product";
    $scope.showProductForm = false;
    $scope.showMenu = false;
    $scope.categories = $rootScope.categories || [];
    $scope.product = {
        img: null
    };
    $scope.imgSrc = $scope.product.img ? URL.createObjectURL($scope.product.img) : "";

    $scope.$watch(function () {
        return $rootScope.categories;
    }, function () {
        $scope.categories = $rootScope.categories;
    }, true);

    $scope.createNewProduct = () => {
        $scope.productName = "New product...";
        $scope.showProductForm = true;
    }
    $scope.openMenu = () => {
        $scope.showMenu = !$scope.showMenu;
    }
    $scope.setCategory = (index) => {
        $scope.selectedCategory = $scope.categories[index].name;
        $scope.selectedCategoryIndex = index;
        $scope.showMenu = false;
    }
    $scope.$watch("product.img", () => {
        if ($scope.product.img) {
            $scope.imgSrc = URL.createObjectURL($scope.product.img);
            $scope.showImg = true;
        }
    }, false);

    $scope.save = () => {

    }

}

export default {
    name: "managementController",
    ctrl: managementController
}
