import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap

const LoginForm = ({ onLogin, mensaje, error }) => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(usuario, contrasena);
    };

    return (
        <div>
            {mensaje && <div className="alert alert-success">{mensaje}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control mb-2" // Clases de Bootstrap
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    placeholder="Usuario"
                />
                <input
                    type="password"
                    className="form-control mb-2" // Clases de Bootstrap
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    placeholder="Contraseña"
                />
                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
            </form>
        </div>
    );
};

export default LoginForm;
