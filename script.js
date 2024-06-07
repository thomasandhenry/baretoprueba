// script.js

document.addEventListener('DOMContentLoaded', function() {
    const alumnoForm = document.getElementById('alumnoForm');
    const listaAlumnos = document.getElementById('listaAlumnos');
    const formularioProfe = document.getElementById('formularioProfe');

    if (alumnoForm) {
        alumnoForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const asignatura = document.getElementById('asignatura').value;
            const alumno = { nombre, asignatura };

            let alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
            alumnos.push(alumno);
            localStorage.setItem('alumnos', JSON.stringify(alumnos));

            alert('Información enviada con éxito');
            alumnoForm.reset();
        });
    }

    if (listaAlumnos) {
        const alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
        alumnos.forEach(alumno => {
            const li = document.createElement('li');
            li.textContent = `Nombre: ${alumno.nombre}, Asignatura Favorita: ${alumno.asignatura}`;
            listaAlumnos.appendChild(li);
        });
    }

    if (formularioProfe) {
        formularioProfe.addEventListener('submit', function(event) {
            event.preventDefault();
            const password = document.getElementById('password').value;
            if (password === 'soyprofe') {
                location.href = 'profesor.html';
            } else {
                alert('Contraseña incorrecta');
            }
        });
    }
});

function mostrarFormularioProfesor() {
    document.getElementById('formularioProfesor').style.display = 'block';
}

function ocultarFormularioProfesor() {
    document.getElementById('formularioProfesor').style.display = 'none';
}


