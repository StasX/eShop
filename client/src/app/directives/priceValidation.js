function priceValidation() {
    return {
        require: "ngModel",
        link: function (scope, element, attr, ctrl) {
            function priceValidate(value) {
                ctrl.$setValidity("productPrice", value > 0);
                return value;
            }
            ctrl.$parsers.push(priceValidate);
        }
    }
}

export default {
    name: "priceValidation",
    directive: priceValidation
}
