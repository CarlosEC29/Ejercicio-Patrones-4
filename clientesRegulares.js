"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesRegulares = void 0;
// Implementación de la estrategia de descuento para clientes regulares.
// Sin descuento para clientes regulares.
var ClientesRegulares = /** @class */ (function () {
    function ClientesRegulares() {
    }
    ClientesRegulares.prototype.aplicarDescuento = function (precio) {
        return precio;
    };
    return ClientesRegulares;
}());
exports.ClientesRegulares = ClientesRegulares;
