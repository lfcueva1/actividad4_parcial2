// src/controllers/LoginController.js
const loginUser = async (usuario, contrasena, setMensaje, setError) => {
    try {
        const response = await fetch("https://bc.joeltest.tech/api/usuarios/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ usuario, contrasena }),
        });

        if (!response.ok) {
            throw new Error('Login fallido');
        }

        const data = await response.json();
        setMensaje('Login exitoso');
        setError('');
    } catch (error) {
        setError('Login fallido');
        setMensaje('');
    }
};

export default loginUser;
