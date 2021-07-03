import * as loginTemplate from "./views/login.html";
import * as registerTemplate from "./views/register.html";
import * as shopTemplate from "./views/shop.html";
import * as orderTemplate from "./views/order.html";

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
        .logout("/logout", {
            template: logoutTemplate,
            controller: "logoutController"
        })
        .otherwise({
            redirect: "/shop"
        });
}

export {
    router
};
