import React, { useState, useEffect } from "react";
import FormularioProducto from "./components/FormularioProducto";
import TablaProducto from "./components/TablaProducto";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [productos, setProductos] = useState([]);
  const [productoEditando, setProductoEditando] = useState(null);

  const API_URL = "http://localhost:3001/productos"; // URL de json-server

  // 1. Cargar productos desde json-server al iniciar la app
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  // 2. Agregar producto (POST)
  const agregarProducto = (nuevoProducto) => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoProducto),
    })
      .then((res) => res.json())
      .then((data) => setProductos([...productos, data]))
      .catch((error) => console.error("Error al agregar producto:", error));
  };

  // 3. Eliminar producto (DELETE)
  const eliminarProducto = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => {
        const nuevosProductos = productos.filter((p) => p.id !== id);
        setProductos(nuevosProductos);
      })
      .catch((error) => console.error("Error al eliminar producto:", error));
  };

  // 4. Editar producto (prepara formulario)
  const editarProducto = (producto) => {
    setProductoEditando(producto);
  };

  // 5. Actualizar producto (PUT)
  const actualizarProducto = (productoActualizado) => {
    fetch(`${API_URL}/${productoActualizado.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productoActualizado),
    })
      .then((res) => res.json())
      .then((data) => {
        const productosActualizados = productos.map((p) =>
          p.id === data.id ? data : p
        );
        setProductos(productosActualizados);
        setProductoEditando(null);
      })
      .catch((error) => console.error("Error al actualizar producto:", error));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Control de Productos</h2>

      <FormularioProducto
        onAgregar={agregarProducto}
        productoEditando={productoEditando}
        onActualizar={actualizarProducto}
      />

      <TablaProducto
        productos={productos}
        onEliminar={eliminarProducto}
        onEditar={editarProducto}
      />
    </div>
  );
}

export default App;
