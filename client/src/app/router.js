import loginTemplate from "./views/login.html";
import registerTemplate from "./views/register.html";
import shopTemplate from "./views/shop.html";
import orderTemplate from "./views/order.html";
import logoutTemplate from "./views/logout.html";
import managementTemplate from "./views/management.html";

router.$inject = ["$routeProvider"];

function router($routeProvider) {
    $routeProvider
        .when("/login", {
            template: loginTemplate,
            controller: "loginController"
        })
        .when("/register", {
            template: registerTemplate,
            controller: "registerController"
        })
        .when("/shop", {
            template: shopTemplate,
            controller: "shopController"
        })
        .when("/order", {
            template: orderTemplate,
            controller: "orderController"
        })
        .when("/logout", {
            template: logoutTemplate,
            controller: "logoutController"
        })
        .when("/management", {
            template: managementTemplate,
            controller: "managementController"
        })
        .otherwise({
            redirect: "/shop"
        });
}

export {
    router
};
