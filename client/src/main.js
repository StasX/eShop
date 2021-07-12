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

import productShelfDirective from "./app/directives/storeContent";
import fileModelDirective from "../src/app/directives/fileModel";
import productNameValidation from "../src/app/directives/productNameValidation";
import priceValidation from "../src/app/directives/priceValidation";

// config router
app.config(router);

// controllers
const controllers = [loginCtrl, managementCtrl, storeContentCtrl];
controllers.forEach((ctrl) => {
    app.controller(ctrl.name, ctrl.ctrl);
});

// direcctives

const directives = [productShelfDirective, fileModelDirective, productNameValidation, priceValidation];
directives.forEach((directive) => {
    app.directive(directive.name, directive.directive);
});
