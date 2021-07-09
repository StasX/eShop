import template from "../views/storeContent.html";

function storeContent() {
    return {
        template: template,
        restrict: "E"
    };
}

export default {
    directive: storeContent,
    name: "storeContent"
};
