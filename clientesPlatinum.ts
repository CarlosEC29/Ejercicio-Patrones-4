import { Descuento } from './descuento';
// Implementación de la estrategia de descuento para clientes platinum.
// 20% de descuento en todos los productos.
export class ClientesPlatinum implements Descuento {
    aplicarDescuento(precio: number): number {
        return precio * 0.8;
    }
}