"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = exports.TipoDeCliente = void 0;
var clientesRegulares_1 = require("./clientesRegulares");
var clientesGold_1 = require("./clientesGold");
var clientesPlatinum_1 = require("./clientesPlatinum");
// Enumeración de los tipos de cliente
var TipoDeCliente;
(function (TipoDeCliente) {
    TipoDeCliente[TipoDeCliente["Regular"] = 0] = "Regular";
    TipoDeCliente[TipoDeCliente["Gold"] = 1] = "Gold";
    TipoDeCliente[TipoDeCliente["Platinum"] = 2] = "Platinum";
})(TipoDeCliente || (exports.TipoDeCliente = TipoDeCliente = {}));
// Clase Cliente que utiliza una estrategia de descuento
var Cliente = /** @class */ (function () {
    function Cliente(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.setDescuento();
    }
    Cliente.prototype.setDescuento = function () {
        switch (this.tipo) {
            case TipoDeCliente.Regular:
                this.estrategiaDedescuento = new clientesRegulares_1.ClientesRegulares();
                break;
            case TipoDeCliente.Gold:
                this.estrategiaDedescuento = new clientesGold_1.ClientesGold();
                break;
            case TipoDeCliente.Platinum:
                this.estrategiaDedescuento = new clientesPlatinum_1.ClientesPlatinum();
                break;
        }
    };
    Cliente.prototype.compra = function (nombreProducto, precio) {
        var precioDescuento = this.estrategiaDedescuento.aplicarDescuento(precio);
        console.log("".concat(this.nombre, " ha comprado ").concat(nombreProducto, " por ").concat(precioDescuento, " pesos."));
    };
    return Cliente;
}());
exports.Cliente = Cliente;
