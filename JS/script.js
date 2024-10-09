// Registrar usuario
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
        localStorage.setItem(email, JSON.stringify({ name, password }));
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        document.getElementById('register-form').reset();
    } else {
        alert('Por favor completa todos los campos');
    }
});

// Iniciar sesión
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const storedUser = JSON.parse(localStorage.getItem(email));

    if (storedUser && storedUser.password === password) {
        alert('Inicio de sesión exitoso');
        window.location.href = 'home.html'; // Redirigir a home
    } else {
        alert('Correo o contraseña incorrectos');
    }
});
