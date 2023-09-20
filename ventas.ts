import { Cliente } from './cliente';
import { TipoDeCliente } from './cliente';

const clienteRegular = new Cliente("Cliente Regular", TipoDeCliente.Regular);
const clienteGold = new Cliente("Cliente Gold", TipoDeCliente.Gold);
const clientePlatinum = new Cliente("Cliente Platinum", TipoDeCliente.Platinum);

clienteRegular.compra("Heladera Gafa, 286Lts, No Frost", 285000);
clienteGold.compra("Lavarropas Samsung, 8 Lts, 1200 rpm, frontal", 324000);
clientePlatinum.compra("Iphone 13", 690000);