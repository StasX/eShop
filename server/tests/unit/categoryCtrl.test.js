const categoryCtrl = require("../../src/controllers/categoryCtrl");


describe("categoryCtrl.get", () => {
    it("should have a get function", () => {
        except(typeof categoryCtrl.get).toBe("function");
    });
});

describe("categoryCtrl.add", () => {
    it("should have an add function", () => {
        except(typeof categoryCtrl.add).toBe("function");

    });
});
