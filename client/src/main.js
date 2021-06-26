import {
    app
} from "../src/app/app";

import router from "../src/app/router";
import login from "../src/app/controllers/login.controller";

// config router
app.config(router);

// controllers
app.controller(login.name, login.ctrl);
