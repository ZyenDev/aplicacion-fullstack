import { Pedido } from '@/types';
import { fetchClienteById } from '../../../services/nodered';
import Link from 'next/link';

export default async function ClientePage({ params }: { params: { id: string } }) {
  const { data } = await fetchClienteById(params.id);
  const cliente = data.clientes_by_pk;

  return (
    <div className="container mx-auto p-8">
      <Link href="/" className="text-blue-500 mb-4 inline-block">← Volver</Link>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-2">{cliente.nombre} {cliente.apellido}</h1>
        <p className="text-gray-600 mb-6">{cliente.email}</p>
        
        <h2 className="text-xl font-semibold mb-4">Pedidos</h2>
        <ul className="space-y-3">
          {cliente.pedidos.map((pedido: Pedido) => (
            <li key={pedido.id} className="border-b pb-3">
              <p><span className="font-medium">Producto:</span> {pedido.producto}</p>
              <p><span className="font-medium">Cantidad:</span> {pedido.cantidad}</p>
              <p className="text-sm text-gray-500">
                {new Date(pedido.fecha_pedido).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}