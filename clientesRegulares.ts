import { Descuento } from './descuento';
// Implementación de la estrategia de descuento para clientes regulares.
// Sin descuento para clientes regulares.
export class ClientesRegulares implements Descuento {
    aplicarDescuento(precio: number): number {
        return precio;
    }
}