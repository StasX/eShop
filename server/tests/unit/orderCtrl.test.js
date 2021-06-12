const orderCtrl = require("../../src/controllers/orderCtrl");
const Order = require("../../src/models/Order");

Order.create = jest.fn();

describe("orderCtrl.get", () => {
    it("should have a get function", () => {
        expect(typeof orderCtrl.get).toBe("function");
    });

});

describe("orderCtrl.add", () => {
    it("should have an add function", () => {
        expect(typeof orderCtrl.add).toBe("function");
    });

});
