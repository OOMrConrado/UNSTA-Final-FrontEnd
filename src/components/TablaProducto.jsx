import { Table, Button } from "react-bootstrap";

function TablaProducto({ productos, onEliminar, onEditar }) {
  return (
    <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Categoría</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {productos.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">
                No hay productos para mostrar.
              </td>
            </tr>
          ) : (
            productos.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.fecha}</td>
                <td>{prod.categoria}</td>
                <td>{prod.producto}</td>
                <td>{prod.cantidad}</td>
                <td>${prod.precio.toFixed(2)}</td>
                <td>${prod.total.toFixed(2)}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => onEditar(prod)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => onEliminar(prod.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default TablaProducto;
