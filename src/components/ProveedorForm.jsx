import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

const ProveedorForm = ({ addProveedor }) => {
  const [proveedor, setProveedor] = useState({
    id: "",
    nombre: "",
    direccion: "",
    telefono: "",
    email: "",
    contacto: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProveedor({ ...proveedor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (proveedor.nombre && proveedor.direccion && proveedor.telefono && proveedor.email && proveedor.contacto) {
      addProveedor({ ...proveedor, id: uuidv4() });
      setProveedor({ id: "", nombre: "", direccion: "", telefono: "", email: "", contacto: "" });
    } else {
      alert("Todos los campos son obligatorios");
    }
  };

  return (
    <div className="container mt-5">
    <div className="row jutify-content-center">
    <form onSubmit={handleSubmit}>
        <div className="col-12 mb-3">
            <label>Nombre</label>
            <input
            type="text"
            className="form-control"
            name="nombre"
            value={proveedor.nombre}
            onChange={handleChange}
            />
        </div>
        <div className="col-12 mb-3">
            <label>Dirección</label>
            <input
            type="text"
            className="form-control"
            name="direccion"
            value={proveedor.direccion}
            onChange={handleChange}
            />
        </div>
        <div className="col-12 mb-3">
            <label>Teléfono</label>
            <input
            type="text"
            className="form-control"
            name="telefono"
            value={proveedor.telefono}
            onChange={handleChange}
            />
        </div>
        <div className="col-12 mb-3">
            <label>Email</label>
            <input
            type="email"
            className="form-control"
            name="email"
            value={proveedor.email}
            onChange={handleChange}
            />
        </div>
        <div className="col-12 mb-3">
            <label>Contacto</label>
            <input
            type="text"
            className="form-control"
            name="contacto"
            value={proveedor.contacto}
            onChange={handleChange}
            />
        </div>
      <button type="submit" className="btn btn-primary mt-3">
        Agregar Proveedor
      </button>
    </form>
    </div>
    </div>
  );
};

export default ProveedorForm;