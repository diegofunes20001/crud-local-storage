import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

const Proveedores = () => {
    const [proveedores, setProveedores] = useState([]);
    const [nombre, setNombre] = useState('');
    const [idEditar, setIdEditar] = useState(null);
    const [alerta, setAlerta] = useState({ mostrar: false, mensaje: '', tipo: '' });

    useEffect(() => {
        const data = localStorage.getItem('proveedores');
        if (data) {
            setProveedores(JSON.parse(data));
        }
    }, []);

    const guardarProveedor = (e) => {
        e.preventDefault();
        if (!nombre) {
            mostrarAlerta('El nombre es obligatorio', 'danger');
            return;
        }

        const nuevoProveedor = { id: idEditar || Date.now(), nombre };
        const nuevosProveedores = idEditar
            ? proveedores.map(prov => (prov.id === idEditar ? nuevoProveedor : prov))
            : [...proveedores, nuevoProveedor];

        setProveedores(nuevosProveedores);
        localStorage.setItem('proveedores', JSON.stringify(nuevosProveedores));
        setNombre('');
        setIdEditar(null);
        mostrarAlerta(idEditar ? 'Proveedor editado correctamente' : 'Proveedor agregado correctamente', 'success');
    };

    const editarProveedor = (id) => {
        const proveedor = proveedores.find(prov => prov.id === id);
        setNombre(proveedor.nombre);
        setIdEditar(id);
    };

    const eliminarProveedor = (id) => {
        const nuevosProveedores = proveedores.filter(prov => prov.id !== id);
        setProveedores(nuevosProveedores);
        localStorage.setItem('proveedores', JSON.stringify(nuevosProveedores));
        mostrarAlerta('Proveedor eliminado correctamente', 'danger');
    };

    const mostrarAlerta = (mensaje, tipo) => {
        setAlerta({ mostrar: true, mensaje, tipo });
        setTimeout(() => {
            setAlerta({ mostrar: false, mensaje: '', tipo: '' });
        }, 3000);
    };

    return (
        <div className="container mt-5">
            <h2>Gestión de Proveedores</h2>
            {alerta.mostrar && <Alert variant={alerta.tipo}>{alerta.mensaje}</Alert>}
            <form onSubmit={guardarProveedor}>
                <div className="mb-3">
                    <label className="form-label">Nombre del Proveedor</label>
                    <input
                        type="text"
                        className="form-control"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    {idEditar ? 'Actualizar Proveedor' : 'Agregar Proveedor'}
                </button>
            </form>
            <h3 className="mt-4">Lista de Proveedores</h3>
            <ul className="list-group mt-3">
                {proveedores.map(prov => (
                    <li key={prov.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {prov.nombre}
                        <div>
                            <button className="btn btn-warning btn-sm me-2" onClick={() => editarProveedor(prov.id)}>Editar</button>
                            <button className="btn btn-danger btn-sm" onClick={() => eliminarProveedor(prov.id)}>Eliminar</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Proveedores;