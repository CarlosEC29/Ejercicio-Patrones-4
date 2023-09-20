"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesPlatinum = void 0;
// Implementación de la estrategia de descuento para clientes platinum.
// 20% de descuento en todos los productos.
var ClientesPlatinum = /** @class */ (function () {
    function ClientesPlatinum() {
    }
    ClientesPlatinum.prototype.aplicarDescuento = function (precio) {
        return precio * 0.8;
    };
    return ClientesPlatinum;
}());
exports.ClientesPlatinum = ClientesPlatinum;
