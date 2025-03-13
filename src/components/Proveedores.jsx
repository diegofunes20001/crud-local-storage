import React, { useState, useEffect } from "react";
import ProveedorForm from "./ProveedorForm";
import ProveedorList from "./ProveedorList";
import CustomAlert from "./CustomAlert";

const Proveedores = () => {
  const [proveedores, setProveedores] = useState([]);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    const storedProveedores = JSON.parse(localStorage.getItem("proveedores")) || [];
    setProveedores(storedProveedores);
  }, []);

  const addProveedor = (proveedor) => {
    const newProveedores = [...proveedores, proveedor];
    setProveedores(newProveedores);
    localStorage.setItem("proveedores", JSON.stringify(newProveedores));
    setAlert({ show: true, message: "Proveedor agregado con éxito", type: "success" });
  };

  const updateProveedor = (updatedProveedor) => {
    const newProveedores = proveedores.map((proveedor) =>
      proveedor.id === updatedProveedor.id ? updatedProveedor : proveedor
    );
    setProveedores(newProveedores);
    localStorage.setItem("proveedores", JSON.stringify(newProveedores));
    setAlert({ show: true, message: "Proveedor actualizado con éxito", type: "success" });
  };

  const deleteProveedor = (id) => {
    const newProveedores = proveedores.filter((proveedor) => proveedor.id !== id);
    setProveedores(newProveedores);
    localStorage.setItem("proveedores", JSON.stringify(newProveedores));
    setAlert({ show: true, message: "Proveedor eliminado con éxito", type: "danger" });
  };

  return (
    <div className="container">
      <h1>Proveedores</h1>
      {alert.show && <CustomAlert message={alert.message} type={alert.type} />}
      <ProveedorForm addProveedor={addProveedor} />
      <ProveedorList
        proveedores={proveedores}
        updateProveedor={updateProveedor}
        deleteProveedor={deleteProveedor}
      />
    </div>
  );
};

export default Proveedores;