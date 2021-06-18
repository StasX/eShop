import {
    app
} from "./app";
import * as loginTemplate from "./views/login.html";
import * as registerTemplate from "./views/register.html";
import * as shopTemplate from "./views/shop.html";
import * as reviewTemplate from "./views/review.html";
import * as orderTemplate from "./views/order.html";


app.config([$routeProvider, function ($routeProvider) {
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
        .when("/review", {
            template: reviewTemplate,
            controller: "reviewController"
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
        })
}]);
