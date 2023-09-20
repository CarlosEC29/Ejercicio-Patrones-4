// Interfaz para las estrategias de descuento.
export interface Descuento {
    aplicarDescuento(precio: number): number;
}