const userCtrl = require("../../src/controllers/userCtrl");

describe("userCtrl.login", () => {
    it("should have a login function", () => {
        expect(typeof userCtrl.login).toBe("function");
    });

});

describe("userCtrl.logout", () => {
    it("should have a logout function", () => {
        expect(typeof userCtrl.logout).toBe("function");
    });

});

describe("userCtrl.register", () => {
    it("should have a register function", () => {
        expect(typeof userCtrl.register).toBe("function");
    });

});
