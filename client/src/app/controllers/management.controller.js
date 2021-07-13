managementController.$inject = ["$scope", "$rootScope", "$http"];

function managementController($scope, $rootScope, $http) {
    $scope.fileStatus = "Please choise file";
    $scope.selectedCategory = "Select category";
    $scope.showImg = false;
    $scope.label = "Add new product";
    $scope.showProductForm = false;
    $scope.showMenu = false;
    $scope.categories = [];
    $scope.file = null;
    $scope.imgSrc = "";
    $scope.productPrice = 0;
    $scope.fileIsValid = false;
    $scope.categoryIsValid = false;

    function validateFile() {
        const file = $scope.file;
        if (/^image\//.test(file.type)) {
            const size = file.size;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                const img = new Image();
                img.onload = function () {
                    const width = this.width;
                    const height = this.height;
                    if (size <= 1500000 && width <= 512 && height <= 512) {
                        $scope.fileIsValid = true;
                    } else {
                        $scope.fileIsValid = false;
                    }
                }
                img.src = e.target.result;
            }
        } else {
            $scope.fileIsValid = false;
        }
    }

    function validateCategory() {
        if ($scope.categories) {
            $scope.categoryIsValid = $scope.categories.indexOf($scope.category) > -1;
        }
    }

    $scope.$watch(function () {
        return $rootScope.categories;
    }, function () {
        $scope.categories = $rootScope.categories;
        validateCategory();
    }, true);

    $scope.createNewProduct = () => {
        $scope.label = "New product...";
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
    $scope.$watch("file", () => {
        if ($scope.file) {
            $scope.fileStatus = `File: "${$scope.file.name}" choised`;
            $scope.imgSrc = URL.createObjectURL($scope.file);
            $scope.showImg = true;
            validateFile();
        }
    }, false);

    $scope.save = () => {

    }

}

export default {
    name: "managementController",
    ctrl: managementController
}
