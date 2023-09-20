import { ClientesRegulares } from './clientesRegulares';
import { ClientesGold } from './clientesGold';
import { ClientesPlatinum } from './clientesPlatinum';
import { Descuento } from './descuento';

// Enumeración de los tipos de cliente
export enum TipoDeCliente {
    Regular,
    Gold,
    Platinum,
}

// Clase Cliente que utiliza una estrategia de descuento
export class Cliente {
    private estrategiaDedescuento: Descuento;

    public constructor(private nombre: string, private tipo: TipoDeCliente) {
        this.setDescuento();
    }

    public setDescuento() {
        switch (this.tipo) {
            case TipoDeCliente.Regular:
                this.estrategiaDedescuento = new ClientesRegulares();
                break;
            case TipoDeCliente.Gold:
                this.estrategiaDedescuento = new ClientesGold();
                break;
            case TipoDeCliente.Platinum:
                this.estrategiaDedescuento = new ClientesPlatinum();
                break;
        }
    }

    public compra(nombreProducto: string, precio: number) {
        const precioDescuento = this.estrategiaDedescuento.aplicarDescuento(precio);
        console.log(`${this.nombre} ha comprado ${nombreProducto} por ${precioDescuento} pesos.`);
    }
}