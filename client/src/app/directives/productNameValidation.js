function productNameValidation() {
    return {
        require: "ngModel",
        link: function (scope, element, attr, ctrl) {
            function prodNameValidation(value) {
                ctrl.$setValidity("productName", /^\w+(\s?\d*\w*)*$/.test(value));
                return value;
            }
            ctrl.$parsers.push(prodNameValidation);
        }
    }
}

export default {
    name: "productNameValidation",
    directive: productNameValidation
}
