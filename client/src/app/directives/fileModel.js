//fileModel.$inject["$rootScope"];

function fileModel($parse) {
    return {
        restrict: 'A',
        link: (scope, element, attr) => {
            "use strict"
            const model = $parse(attr.fileModel);
            const modelSetter = model.assign;
            element.bind('change', () => {
                const files = element[0].files;
                if (files.length == 1) {
                    scope.$apply(() => {
                        modelSetter(scope, element[0].files[0]);
                    });
                };
            });
        }
    }
}

export default {
    directive: fileModel,
    name: "fileModel"
}
