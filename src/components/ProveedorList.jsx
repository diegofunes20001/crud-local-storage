import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProveedorList = ({ proveedores, updateProveedor, deleteProveedor }) => {
  return (
    <div>
      <h2>Provider List</h2>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Contacto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map((proveedor) => (
            <tr key={proveedor.id}>
              <td>{proveedor.nombre}</td>
              <td>{proveedor.direccion}</td>
              <td>{proveedor.telefono}</td>
              <td>{proveedor.email}</td>
              <td>{proveedor.contacto}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteProveedor(proveedor.id)}> Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProveedorList;