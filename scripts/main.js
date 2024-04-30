//  Solicitud de ingreso


function ingresoUsuario(){

                
let usuario = prompt("Ingrese su nombre de usuario").toLowerCase();
let clave = prompt("ingrese su contraseña").toLowerCase();
let verificacionRobot = prompt("¿Usted es un Robot? si o no").toLowerCase();

 
 while ((usuario != "robertosanchez") || (clave != "rosarosa123") || (verificacionRobot != "no")) {
 alert("El usuario o contaseña son incorrectos. ");
 usuario = prompt("Ingrese su nombre de usuario");
 clave = prompt("ingrese su contraseña");
 verificacionRobot = prompt("¿Usted es un Robot? si o no");
                    
 }
}

 ingresoUsuario();

 alert("Bienvenido Roberto Sanchez a su controlador de gastos 💸")


/* function ingresoUsuario(){
    let identificar = true;
    let intentos = 1;

    do{        
let usuario = prompt("Ingrese su nombre de usuario").toLowerCase();
let clave = prompt("ingrese su contraseña").toLowerCase();
let verificacionRobot = prompt("¿Usted es un Robot? si o no").toLowerCase();

if ((usuario == "robertosanchez") && (clave == "rosarosa123") && (verificacionRobot == "no") && (intentos <=3)) {
    alert("Bienvenido Roberto Sanchez a su controlador de gastos 💸");
    identificar = false;
}else{
    alert("El usuario o contaseña son incorrectos. Este fue tu intento número " + intentos + " de 3");
    intentos++;
    if (intentos>3){
        alert("El usuario o contraseña fueron colocados incorrectamente en 3 oportunidades. Vuelve a intentarlo más tarde");
        break;
    }
    }
}while(identificar)
}

ingresoUsuario(); 
 
alert("En este simulador podrás ver tus gastos separados en 9 categorías (Hogar, Alimentos, Transportes, Salud/deportes, Entretenimiento, Compras, Educación, Mascotas, Otros) y calcular tu balance mensual.");
*/

// Ingreso mensual

let ingresoMensual = parseInt(prompt("Coloque su ingreso de este mes"));
alert("Tu ingreso de esta semana es de " + ingresoMensual);

// Gastos mensuales

let gastoHogar = parseInt(prompt("¿Cuánto fue tu gasto en Hogar este mes? (ej: impuestos, alquiler, expensas)"));

let gastoAlimentos = parseInt(prompt("¿Cuánto gastaste en alimentos este mes?"));

let gastoTransportes = parseInt(prompt("¿Cuánto gastaste en transportes este mes? (ej: transporte público, combustible, taxi/uber)"));

let gastoBienestar = parseInt(prompt("¿Cuál fue tu gasto en bienestar este mes? (ej: estudios médicos, prepaga, gimnasio)"));

let gastoEntretenimiento = parseInt(prompt("¿Cuánto gastaste en entretenimiento este mes? (ej: cine, netflix. libros)"));

let gastoCompras = parseInt(prompt("¿Cuánto gastaste en compras este mes? (ej: ropa, tecnología, limpieza)"));

let gastoEducacion = parseInt(prompt("¿Cuánto gastaste en educación este mes?"));

let gastoMascotas = parseInt(prompt("¿Cuánto gastaste en tus mascotas este mes?"));

let gastoOtros = parseInt(prompt("¿Qué otros gastos tuviste por fuera de las categorías mencionadas? (indicar valor numérico)"));

// Suma de gastos

let gastoTotal = gastoHogar + gastoAlimentos + gastoTransportes + gastoBienestar + gastoEntretenimiento + gastoCompras + gastoEducacion + gastoMascotas +gastoOtros;

alert("Tu gasto de este mes es de $" + gastoTotal);

// Balance mensual

let balance = ingresoMensual - gastoTotal;

alert("Tu balance es de $" + balance);


if (ingresoMensual < gastoTotal) {
    alert("Estás requiriendo un contador");
} else {
    alert("Tenes $" + balance + " a tu favor. Podés ahorrarlo, invertirlo o gastar en lo que quieras");
}