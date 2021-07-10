managementController.$inject = ["$scope", "$rootScope", "$http"];

function managementController($scope, $rootScope, $http) {
    $scope.fileStatus = "Please choise file";
    $scope.selectedCategory = "Select category";
    $scope.showImg = false;
    $scope.productName = "Add new product";
    $scope.showProductForm = false;
    $scope.showMenu = false;
    $scope.categories = $rootScope.categories || [];
    $scope.file = {};

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

    $scope.save = () => {

    }

}

export default {
    name: "managementController",
    ctrl: managementController
}
