import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import loginUser from './controllers/LoginController';
import './App.css'; // Asegúrate de tener este archivo para estilos personalizados

function App() {
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (usuario, contrasena) => {
        loginUser(usuario, contrasena, setMensaje, setError);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Iniciar Sesión</h2>
                            <LoginForm onLogin={handleLogin} mensaje={mensaje} error={error} />
                        </div>
                    </div>
                    <div className="card mt-4 custom-card">
                        <div className="card-body">
                            <p className="card-text">Prueba el formulario con las siguientes credenciales:</p>
                            <p className="card-text">Login 100% funcioando con la api de Joel Arguello estudiante de ingeniera de software</p>
                            <p className="card-text"><b>Usuario:</b> admin</p>
                            <p className="card-text"><b>Clave:</b> admin</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
