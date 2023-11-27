var imc;
var sexo;


function calcularIMC() {
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;
    sexo = document.getElementById('sexo').value;
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;

    if (nombre && edad && sexo && altura && peso) {
        imc = peso / ((altura / 100) * (altura / 100));
        var resultadoElement = document.getElementById('resultado');
        resultadoElement.innerHTML = 'Hola ' + nombre + ', tu IMC es: ' + imc.toFixed(2);
        if (imc < 18.5){ 
        var rutinaElement = document.getElementById('resultado2');
        rutinaElement.innerHTML = 'Su categoria es de Bajo Peso.';
        }
        else if (imc >= 18.5 && imc < 24.9) {
            var rutinaElement = document.getElementById('resultado2');
            rutinaElement.innerHTML = 'Su categoria es de Peso Normal.';
        } 
        else if (imc >= 25 && imc < 26.9) {
        var rutinaElement = document.getElementById('resultado2');
        rutinaElement.innerHTML = 'Su categoria es de Sobrepeso grado 1.';
        }
        else if (imc >= 27 && imc < 29.9) {
            var rutinaElement = document.getElementById('resultado2');
            rutinaElement.innerHTML = 'Su categoria es de Sobrepeso grado 2.';
        }  
        else if (imc >= 30 && imc < 34.9) {
            var rutinaElement = document.getElementById('resultado2');
            rutinaElement.innerHTML = 'Su categoria es de Obesidad tipo 1.';
        }  
        else if (imc >= 35 && imc < 39.9) {
            var rutinaElement = document.getElementById('resultado2');
            rutinaElement.innerHTML = 'Su categoria es de Obesidad tipo 2.';
        } 
        else if (imc >= 40 && imc < 49.9) {
            var rutinaElement = document.getElementById('resultado2');
            rutinaElement.innerHTML = 'Su categoria es de Obesidad tipo 3(mórbida).';
        } 
        else if (imc >= 50) {
            var rutinaElement = document.getElementById('resultado2');
            rutinaElement.innerHTML = 'Su categoria es de Obesidad tipo 4(Extrema).';
        } 

        }
        else {
            alert('Por favor, complete todos los campos.');
        }
}


/* Calculo de progreso en cintura */

var ici;
var sexo;
var cintura;

function calcularICI() {
    
    sexo = document.getElementById('sexo').value;
    cintura = document.getElementById('cintura').value;
    var altura = document.getElementById('altura').value;
    
    if (sexo && altura && cintura) {

        if(sexo === 'masculino' && cintura === 'ideal' ){
            ici = altura * 0.45;
            var resultadoElement = document.getElementById('resultado3');
            resultadoElement.innerHTML = 'Tu cintura debe medir ' + ici.toFixed(2) + ' cm';
        }
        else if (sexo === 'masculino' && cintura === 'buena' ){
            ici = altura * 0.47;
            var resultadoElement = document.getElementById('resultado3');
            resultadoElement.innerHTML = 'Tu cintura debe medir ' + ici.toFixed(2) + ' cm';   
        }
        else if (sexo === 'masculino' && cintura === 'normal' ){
            ici = altura * 0.50;
            var resultadoElement = document.getElementById('resultado3');
            resultadoElement.innerHTML = 'Tu cintura debe medir ' + ici.toFixed(2) + ' cm';  
        }
        if(sexo === 'femenino' && cintura === 'ideal' ){
            ici = altura * 0.45;
            var resultadoElement = document.getElementById('resultado3');
            resultadoElement.innerHTML = 'Tu cintura debe medir ' + ici.toFixed(2) + ' cm';
        }
        else if (sexo === 'femenino' && cintura === 'buena' ){
            ici = altura * 0.47;
            var resultadoElement = document.getElementById('resultado3');
            resultadoElement.innerHTML = 'Tu cintura debe medir ' + ici.toFixed(2) + ' cm';   
        }
        else if (sexo === 'femenino' && cintura === 'normal' ){
            ici = altura * 0.50;
            var resultadoElement = document.getElementById('resultado3');
            resultadoElement.innerHTML = 'Tu cintura debe medir ' + ici.toFixed(2) + ' cm';  
        }
    }
        else {
            alert('Por favor, complete todos los campos.');
        }
    }
