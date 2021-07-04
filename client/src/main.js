import "./styles.scss";
import {
    app
} from "../src/app/app";

import {
    router
} from "../src/app/router";
import loginCtrl from "../src/app/controllers/login.controller";
import managementController from "../src/app/controllers/management.controller";

// config router
app.config(router);

// controllers
const controllers = [loginCtrl, managementController];
controllers.forEach((ctrl) => {
    app.controller(ctrl.name, ctrl.ctrl);
});
