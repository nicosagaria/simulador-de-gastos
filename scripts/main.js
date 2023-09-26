// Ingreso de usuario

let usuario = prompt("Ingrese su nombre de usuario").toLowerCase();
let clave = prompt("ingrese su contraseña").toLowerCase();
let verificacionRobot = prompt("¿Usted es un Robot? si o no").toLowerCase();

while ((usuario != "robertosanchez") || (clave != "operacionrosarosa123") || (verificacionRobot != "no")) {
    alert("El usuario o contaseña son incorrectos");
    usuario = prompt("Ingrese su nombre de usuario");
    clave = prompt("ingrese su contraseña");
    verificacionRobot = prompt("¿Usted es un Robot? si o no");
}

alert("Bienvenido Roberto Sanchez a su controlador de gastos");

// Ingreso de gastos semanales

let ingresoSemanal = parseInt(prompt("Coloque su ingreso de esta semana"));
alert("Tu ingreso de esta semana es de " + ingresoSemanal);

let gastoComida = parseInt(prompt("¿Cuánto gastaste en comida esta semana?"));

let gastoTransporte = parseInt(prompt("¿Cuánto gastaste en tansporte esta semana?"));

let gastoOcio = parseInt(prompt("¿Cuánto gastaste en ocio esta semana?"));

let gastoImpuestos = parseInt(prompt("¿Cuánto gastaste en impuestos esta semana?"));


let gastoTotal = gastoComida + gastoTransporte + gastoOcio + gastoImpuestos;

alert("Tu gasto de esta semana es de $" + gastoTotal);

let balance = ingresoSemanal - gastoTotal;

alert("Tu balance es de $" + balance);

if (ingresoSemanal < gastoTotal) {
    alert("Estás requiriendo un contador");
} else {
    alert("Tenes $" + balance + " para gastar en lo que quieras");
}