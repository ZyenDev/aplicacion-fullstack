export interface Pedido {
  id: number;
  producto: string;
  cantidad: number;
  fecha_pedido: string;
}

export interface Cliente {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  pedidos?: Pedido[];
}