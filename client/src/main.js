import "./styles.scss";
import {
    app
} from "../src/app/app";

import {
    router
} from "../src/app/router";
import loginCtrl from "../src/app/controllers/login.controller";
import managementCtrl from "../src/app/controllers/management.controller";
import storeContentCtrl from "../src/app/controllers/storeContent.controller";

import productShelfDirective from "../src/app/directives/productShelf";
import fileModelDirective from "../src/app/directives/fileModel";
import productNameValidationDirective from "../src/app/directives/productNameValidation";

// config router
app.config(router);

// controllers
const controllers = [loginCtrl, managementCtrl, storeContentCtrl];
controllers.forEach((ctrl) => {
    app.controller(ctrl.name, ctrl.ctrl);
});

// direcctives

const directives = [productShelfDirective, fileModelDirective, productNameValidationDirective];
directives.forEach((directive) => {
    app.directive(directive.name, directive.directive);
});
