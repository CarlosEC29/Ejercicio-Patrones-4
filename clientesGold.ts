import { Descuento } from './descuento';
// Implementación de la estrategia de descuento para clientes gold.
// 20% de descuento en productos > 10000 pesos.
export class ClientesGold implements Descuento {
    aplicarDescuento(precio: number): number {
        if (precio > 10000) {
            return precio * 0.8;
        }
        return precio;
    }
}