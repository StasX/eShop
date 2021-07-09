import "./styles.scss";
import {
    app
} from "../src/app/app";

import {
    router
} from "../src/app/router";
import loginCtrl from "../src/app/controllers/login.controller";
import managementCtrl from "../src/app/controllers/management.controller";

import productShelfDirective from "../src/app/directives/productShelf";

// config router
app.config(router);

// controllers
const controllers = [loginCtrl, managementCtrl];
controllers.forEach((ctrl) => {
    app.controller(ctrl.name, ctrl.ctrl);
});

// direcctives

const directives = [productShelfDirective];
directives.forEach((directive) => {
    app.directive(directive.name, directive.directive);
});
