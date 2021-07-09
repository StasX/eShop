managementController.$inject = ["$scope", "$http"];

function managementController($scope, $http) {
    $scope.fileStatus = "Please choise file";
    $scope.selectedCategory = "Select category";
    $scope.showImg = false;
}

export default {
    name: "managementController",
    ctrl: managementController
}
