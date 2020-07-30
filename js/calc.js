const botonNumeros = document.getElementsByName('data-number');
const botonOperacion = document.getElementsByName('data-operacion');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonLimpiar = document.getElementsByName('data-limpiar')[0];

var resultado = document.getElementById('resultado');
var operacionActual = '';
var operacionAnterior = '';
var operacion = undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
});

botonOperacion.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonLimpiar.addEventListener('click', function(){
    limpiar();
    actualizarDisplay();
});

function selectOperacion(ope){
    if(operacionActual === '') return;
    if(operacionAnterior !== ''){
        calcular();
    }

    operacion = ope.toString();
    operacionAnterior = operacionActual;
    operacionActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(operacionAnterior);
    const actual = parseFloat(operacionActual);

    if(isNaN(anterior) || isNaN(actual)) return;

    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case '*':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }

    operacionActual = calculo;
    operacion = undefined;
    operacionAnterior = '';

}

function agregarNumero(numero){
    operacionActual = operacionActual.toString() + numero.toString();
    actualizarDisplay();
}

function limpiar(){
    operacionActual = '';
    operacionAnterior = '';
    operacion = undefined;
}

function actualizarDisplay(){
    resultado.value = operacionActual;
}