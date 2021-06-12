const cartCtrl = require("../../src/controllers/cartCtrl");
const httpMocks = require("node-mocks-http");

const Cart = require("../../src/models/Cart");

Cart.create = jest.fn();

let req, res, next;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
});

describe("cartCtrl.getOpen", () => {
    it("should have a getOpen function", () => {
        expect(typeof cartCtrl.getOpen).toBe("function");
    });

});

describe("cartCtrl.open", () => {
    it("should have an open function", () => {
        expect(typeof cartCtrl.open).toBe("function");
    });
    it("should to call Cart.create", () => {

        expect(Cart.create).toBeCalledWith(Cart);
    });

});

describe("cartCtrl.update", () => {
    it("should have an update function", () => {
        expect(typeof cartCtrl.update).toBe("function");
    });

});

describe("cartCtrl.close", () => {
    it("should have a close function", () => {
        expect(typeof cartCtrl.close).toBe("function");
    });

});
