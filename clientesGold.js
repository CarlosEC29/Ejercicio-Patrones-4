"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesGold = void 0;
// Implementación de la estrategia de descuento para clientes gold.
// 20% de descuento en productos > 10000 pesos.
var ClientesGold = /** @class */ (function () {
    function ClientesGold() {
    }
    ClientesGold.prototype.aplicarDescuento = function (precio) {
        if (precio > 10000) {
            return precio * 0.8;
        }
        return precio;
    };
    return ClientesGold;
}());
exports.ClientesGold = ClientesGold;
