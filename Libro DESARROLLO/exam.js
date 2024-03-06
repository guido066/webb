// Agregar evento 'click' al botón de calificar
document.querySelector('button').addEventListener('click', calificar);

function calificar() {
    var respuestasCorrectas = 0;

    // Obtener respuestas seleccionadas
    var respuesta1 = document.querySelector('input[name="respuesta1"]:checked');
    var respuesta2 = document.querySelector('input[name="respuesta2"]:checked');
    var respuesta3 = document.querySelector('input[name="respuesta3"]:checked');
    var respuesta4 = document.querySelector('input[name="respuesta4"]:checked');

    // Comparar respuestas con las correctas
    if (respuesta1 && respuesta1.value === 'b') {
        respuestasCorrectas++;
    }
    if (respuesta2 && respuesta2.value === 'a') {
        respuestasCorrectas++;
    }
    if (respuesta3 && respuesta3.value === 'b') {
        respuestasCorrectas++;
    }
    if (respuesta4 && respuesta4.value === 'b') {
        respuestasCorrectas++;
    }

    // Mostrar resultados
    var resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = 'Resultados: ' + respuestasCorrectas + ' respuestas correctas de 4.';

    // Mostrar el botón de reinicio
    var reiniciarButton = document.getElementById('reiniciar');
    reiniciarButton.innerHTML = '<button type="button" onclick="reiniciar()" class="btm-from">Volver a intentar</button><br>';
    reiniciarButton.style.display = 'block';
    reiniciarButton.addEventListener('click', reiniciar);
}

function reiniciar() {
    // Lógica para reiniciar el formulario (restablecer respuestas y resultados)
    document.getElementById('quizForm').reset();
    document.getElementById('resultados').innerHTML = '';
    // Ocultar el botón de reinicio nuevamente
    document.getElementById('reiniciar').style.display = 'none';
}


