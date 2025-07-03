CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR NOT NULL,
  apellido VARCHAR NOT NULL,
  email VARCHAR UNIQUE NOT NULL
);

CREATE TABLE pedidos (
  id SERIAL PRIMARY KEY,
  cliente_id INTEGER REFERENCES clientes(id),
  producto VARCHAR NOT NULL,
  cantidad INTEGER NOT NULL,
  fecha_pedido TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Datos de ejemplo
INSERT INTO clientes (nombre, apellido, email) VALUES
('Juan', 'Pérez', 'juan@example.com'),
('María', 'López', 'maria@example.com'),
('Carlos', 'García', 'carlos@example.com');

INSERT INTO pedidos (cliente_id, producto, cantidad) VALUES
(1, 'Camisa', 2),
(1, 'Zapatos', 1),
(2, 'Libro', 3),
(3, 'Laptop', 1);