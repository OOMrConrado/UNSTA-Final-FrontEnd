import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function FormularioProducto({ onAgregar, productoEditando, onActualizar }) {
  const [categoria, setCategoria] = useState("");
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");

  useEffect(() => {
    if (productoEditando) {
      setCategoria(productoEditando.categoria);
      setProducto(productoEditando.producto);
      setCantidad(productoEditando.cantidad);
      setPrecio(productoEditando.precio);
    } else {
      // Limpiar campos si no hay productoEditando
      setCategoria("");
      setProducto("");
      setCantidad("");
      setPrecio("");
    }
  }, [productoEditando]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!categoria || !producto || !cantidad || !precio) {
      alert("Por favor complete todos los campos.");
      return;
    }

    const datosProducto = {
      categoria,
      producto,
      cantidad: parseInt(cantidad),
      precio: parseFloat(precio),
      total: parseInt(cantidad) * parseFloat(precio),
      fecha: productoEditando ? productoEditando.fecha : new Date().toLocaleDateString(),
    };

    if (productoEditando) {
      // En actualización mantenemos id y fecha
      datosProducto.id = productoEditando.id;
      datosProducto.fecha = productoEditando.fecha;
      onActualizar(datosProducto);
    } else {
      // En creación, id y fecha los asigna json-server
      onAgregar(datosProducto);
    }

    // Limpiar el formulario
    setCategoria("");
    setProducto("");
    setCantidad("");
    setPrecio("");
  };

  return (
    <Form onSubmit={handleSubmit} className="border p-3 rounded shadow-sm mb-4">
      <Row className="g-3">
        <Col xs={12} md={3}>
          <Form.Group controlId="formCategoria">
            <Form.Label>Categoría</Form.Label>
            <Form.Select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
              <option value="">Seleccionar</option>
              <option value="Limpieza">Limpieza</option>
              <option value="Comestibles">Comestibles</option>
              <option value="Descartables">Descartables</option>
              <option value="Bebidas">Bebidas</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col xs={12} md={3}>
          <Form.Group controlId="formProducto">
            <Form.Label>Producto</Form.Label>
            <Form.Control
              type="text"
              value={producto}
              onChange={(e) => setProducto(e.target.value)}
              placeholder="Ej: Jabón en polvo"
            />
          </Form.Group>
        </Col>

        <Col xs={12} md={2}>
          <Form.Group controlId="formCantidad">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              min="1"
            />
          </Form.Group>
        </Col>

        <Col xs={12} md={2}>
          <Form.Group controlId="formPrecio">
            <Form.Label>Precio Unitario ($)</Form.Label>
            <Form.Control
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              step="0.01"
              min="0"
            />
          </Form.Group>
        </Col>

        <Col xs={12} md={2} className="d-flex align-items-end">
          <Button type="submit" variant={productoEditando ? "warning" : "primary"} className="w-100">
            {productoEditando ? "Actualizar" : "Agregar"}
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FormularioProducto;
