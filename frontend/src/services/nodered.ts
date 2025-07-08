import { Cliente, Pedido } from "../types";

type ApiResponseClientes = {
  data: {
    clientes: Cliente[];
  };
};

type ApiResponseCliente = {
  data: {
    clientes_by_pk: Cliente;
  };
};

// Obtener todos los clientes
export const fetchClientes = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_NODERED_URL}/api/datos`);
  if (!res.ok) throw new Error("Error al obtener clientes");
  return res.json();
};

// Obtener cliente por ID
export const fetchClienteById = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_NODERED_URL}/api/cliente/${id}`);
  if (!res.ok) throw new Error("Cliente no encontrado");
  return res.json();
};