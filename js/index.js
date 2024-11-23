document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const Usuario ={
        User:username,
        Password:password
    }
    // Guardar en LocalStorage
    localStorage.setItem('useres', Usuario);


    alert('Usuario guardado en LocalStorage');
});
