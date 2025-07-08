import { Cliente } from '@/types';
import { fetchClientes } from '../services/nodered';

export default async function Home() {
  const { data } = await fetchClientes();
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Lista de Clientes</h1>
      <ul className="space-y-4">
        {data.clientes.map((cliente: Cliente) => (
          <li key={cliente.id} className="p-4 border rounded-lg hover:bg-gray-50">
            <a href={`/cliente/${cliente.id}`} className="block">
              <h2 className="text-xl font-semibold">{cliente.nombre} {cliente.apellido}</h2>
              <p className="text-gray-600">{cliente.email}</p>
              <p className="text-sm text-blue-500 mt-1">
                {cliente.pedidos?.length || 0} pedidos
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}