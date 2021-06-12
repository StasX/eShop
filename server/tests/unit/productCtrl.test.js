const productCtrl = require("../../src/controllers/productCtrl");

describe("productCtrl.get", () => {
    it("should have a get function", () => {
        expect(typeof productCtrl.get).toBe("function");
    });

});

describe("productCtrl.add", () => {
    it("should have an add function", () => {
        expect(typeof productCtrl.logout).toBe("function");
    });

});

describe("productCtrl.register", () => {
    it("should have an update function", () => {
        expect(typeof productCtrl.register).toBe("function");
    });

});
