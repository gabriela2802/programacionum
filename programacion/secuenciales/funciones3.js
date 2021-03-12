//constante de formato:
var salto = '<br>';

//estructuras simples

//problema 1
document.write(' 1. Un hombre desea saber cuánto dinero se genera por concepto de intereses sobre la cantidad que tiene en inversión en el banco. El decidirá reinvertir los intereses siempre y cuando estos excedan a $7000, y en ese caso desea saber cuánto dinero tendrá finalmente en su cuenta. ',salto,salto);

//variable
var valorfinalcuenta;

//constante

const valorencuenta = 350000
const porcentaje = 2
const intereses = 7000

//operaciones
valorfinalcuenta = ((valorencuenta*porcentaje/100) + valorencuenta)

document.write('el valor final que hay en la cuenta es de = ',valorfinalcuenta,salto,salto);

//-----------------------------------------------------------------------------------------------------------------------------------------------

//problema 2
document.write('2. Determinar si un alumno aprueba a reprueba un curso, sabiendo que aprobara si su promedio de tres calificaciones es mayor o igual a 70; reprueba en caso contrario.',salto,salto);

//variables 
var notafinal;

//constantes
const cal1 = 38
const cal2 = 20
const cal3 = 15

//operacion
notafinal = (cal1 + cal2 + cal3)

document.write('su promedi final es =',notafinal,salto,salto);

//---------------------------------------------------------------------------------------------------------------------------

//problema 3
document.write('3. En un almacén se hace un 20% de descuento a los clientes cuya compra supere los $1000 ¿Cuál será la cantidad que pagara una persona por su compra?',salto,salto);

//variables
var descuento;
var totalapagar;

//constantes
const valorcompramenor= 1000
const porcentajepro = 20
const  valorcompra2 = 20000

//condicionales

if (valorcompramenor) {
    var descuento = ((valorcompramenor * porcentajepro) / 100)
    var totalapagar = valorcompramenor - descuento
    document.write('descuento de compra menor =',descuento,salto,salto,' total a pagar =',totalapagar,salto,salto);
}

if ( valorcompra2  > valorcompramenor ) {
    var descuento = ((valorcompra2 * porcentajepro) / 100)
    var totalapagar = valorcompra2 - descuento
    document.write('descuento de la compra si es mayor a compra menor = ',descuento,salto,salto, 'total a pagar = ',totalapagar,salto,salto);
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------

//problema 4 
document.write('4. Un obrero necesita calcular su salario semanal, el cual se obtiene de la siguiente manera: Si trabaja 40 horas o menos se le paga un salario de $16 por hora, si trabaja más de 40 horas se le paga un salario de $16 por cada una de las primeras 40 horas y un salario de $20 por cada hora extra. ',salto,salto);

//variable
var volorsalariosema;
var horastraba = 48
var horasextras;

//constantes
const valorhora = 16000
const valorhoraextra = 20000

//condicionales

if (valorhora > 40 ) {
    var horasextras = (horastraba-40)
    document.write( 'horas extras = ',horasextras,salto,salto);
}

if ( volorsalariosema) {  
    var volorsalariosema = + (horastraba * 40) * valorhoraextra
    document.write('valor a pagar si fuera mayor de 40 horas  =',volorsalariosema,salto,salto);
}

if ( valorhora < 40) {
    var volorsalariosema = (valorhora * horastraba)
    document.write('valor a pagar si fuera menos de 40 horas = ',volorsalariosema,salto,salto);
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------


//problema 5
document.write(' 5. Un hombre desea saber cuánto dinero se genera por concepto de intereses sobre la cantidad que tiene en inversión en el banco. El decidirá reinvertir los intereses siempre y cuando estos excedan a $7000, y en ese caso desea saber cuánto dinero tendrá finalmente en su cuenta. ',salto,salto);

//variable
var  cantidadinvertida;
var  interes;
//constante
const cantidad = 80000
const tasa = 11
const intereminimo = 7000


//condicionales
if (cantidad) {
    interes = cantidad * tasa
    document.write('los intereses quedan en = ',interes,salto,salto);    
}

if (interes > intereminimo) {
    cantidadinvertida = cantidad + interes
    document.write('cantidad total al final en la cuenta =',cantidadinvertida,salto,salto);
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//problema 6
document.write(' 6. Realizar un algoritmo Que lea dos números y los imprima en forma ascendente ',salto ,salto );

//variable
var num1;
var nume2;

//constantes
const ingresarnum1 = 3
const ingresarnum2 = 4

if (ingresarnum1 < ingresarnum2) {
    var num1 = num1,nume2;
    document.write('imprimir de menor a mayor: ',salto,'menor = ',ingresarnum1,salto,'mayor =',ingresarnum2,salto,salto);
}
else{
    var nume2 = nume2,num1;
    document.write('imprimir  el numero de menor a mayor = ',ingresarnum2,salto,salto,ingresarnum1,salto,salto);

}
//-------------------------------------------------------------------------------------------------------------------------------------

//problema 7 
document.write('7. Una persona enferma, que pesa 70 kg, se encuentra en reposo y desea saber cuántas calorías consume su cuerpo durante todo el tiempo que realice una misma actividad. Las actividades que tiene permitido realizar son únicamente dormir o estar sentado en reposo. Los datos que tiene son que estando dormido consume 1.08 calorías por minuto y estando sentado en reposo consume 1.66 calorías por minuto',salto,salto);

//variable 
var tiempo;
var calorias;
var actividad = "dormir"

//constante
const actidormir = 1.08;
const actireposo = 1.66;

//constantes
if (actividad === 'dormir') {
    var tiempo = 8; 
    var calorias = (actireposo * 60 ) * tiempo;
    document.write (salto,'Mientras duerme ',tiempo, salto, 'ha perdido un total de ',calorias,'calorias',salto,salto);    
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//problema 8
document.write('8.Hacer un algoritmo que imprima el nombre de un artículo, clave, precio original y su precio con descuento. El descuento lo hace en base a la clave, si la clave es 01 el descuento es del 10% y si la clave es 02 el descuento en del 20% (solo existen dos claves',salto,salto);

//variable 
var preciocondescuento;
var preciocondescuento2;
var descuento1;
var descuento2; 

//constantes
const clave = 1
const precio= 50000
const clave2 = 4
const nombre = 'blusa';

//condicones
if (clave===1) {
    descuento1 = ((precio * 10)/100) 
    preciocondescuento = precio - descuento1
    document.write('producto: ',nombre,salto,'clave 1: ',clave,salto,'clave 2: ',clave2,salto,'precio original:',precio,salto,'descuento 1:',descuento1,salto,' precio con descuento 1:',preciocondescuento,salto,salto);
} 

if (clave===2) {
    descuento2 = ((precio * 40)/ 100)
    preciocondescuento2 = precio - descuento2
    document.write('descuento 2:',descuento2,salto,'precio con descuento 2:',preciocondescuento2,salto,salto);
}

//----------------------------------------------------------------------------------------------------------------------------------------------
//problema 9 
document.write('9.Hacer un algoritmo que calcule el total a pagar por la compra de camisas. Si se compran tres camisas o más se aplica un descuento del 20% sobre el total de la compra y si son menos de tres camisas un descuento del 10%',salto,salto);

//variable:
var totalpagardes1;
var totalapagardes2;
var descuento1;
var descuento2;
var valcamisacom;
var valcamisacom2;

//constantes:
const costonormal = 20000
const clave0 = 20
const Clave1 = 10
const camisas1 = 3
const camisas2 = 2

//condicionales:
if (costonormal > camisas1 ) {
    valcamisacom  = costonormal * camisas1 
    descuento1 = ((valcamisacom * clave0) / 100)
    totalpagardes1 =  valcamisacom - descuento1 
    document.write(' el desceunto 1  si es mayor a 3 camisas es de:',descuento1,salto,' el total a pagar es de:',totalpagardes1,salto,salto);
}
if (costonormal > camisas2) {
    valcamisacom2  = costonormal * camisas2           
    descuento2 = ((valcamisacom2 * Clave1) / 100)
    totalapagardes2 = valcamisacom2 - descuento2
    document.write('el descuento 2 si es menor a 3 camisas es de: ',descuento2,salto,'el total a pagar es de: ',totalapagardes2,salto,salto);
} 

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//estructuras complejas:

// problema1
document.write('1. Leer 2 números; si son iguales que los multiplique, si el primero es mayor que el segundo que los reste y si no que los sume. ',salto,salto);

//variables
var nume1 = 5;
var nume2 = 3;
var resultado;
var operacion;

if (nume1 === nume2) {
   operacion = "multiplicación"
   resultado = nume1 * nume2;

}

if (nume1 > nume2) {
   operacion = "resta"
    resultado = nume1 - nume2;
} 

if (nume1 < nume2) {
    operacion = "suma" 
    resultado = nume1 + nume2;
}

document.write(' los números ingresados son: ',nume1,' y ',nume2,salto,salto ,' la operacion ejecutada fue =  ', operacion ,salto,salto, 'obteniendo como resultado = ', resultado,salto,salto);

//-----------------------------------------------------------------------------------------------------------------------

//problema2
document.write('2. Leer tres números diferentes e imprimir el número mayor de los tres.',salto,salto);

//variables
var nume1 =5;
var nume2 =4;
var nume3 =6;
var resultado;

if (nume1 > nume2 & nume1 > nume3) {
    resultado = 'numero uno = ' + nume1;
}

if (nume2 > nume1 & nume2 >nume3) {
    reslutado = 'numero dos =' + nume2;
}

if (nume3 > nume1 & nume3 > nume2) {
    resultado = 'numero tres = ' + nume3;
}

document.write('el numero mayor ingresado es =',resultado,salto,salto);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//problema3
document.write('3. Determinar la cantidad de dinero que recibirá un trabajador por concepto de las horas extras trabajadas en una empresa, sabiendo que cuando las horas de trabajo exceden de 40, el resto se consideran horas extras y que estas se pagan al doble de una hora normal cuando no exceden de 8; si las horas extras exceden de 8 se pagan las primeras 8 al doble de lo que se pagan las horas normales y el resto al triple',salto,salto);

//variables:
var Horastrabajada = 50
var resltadohoras;
var horasextras = Horastrabajada - 40
var pagohextra = (2 * horasextras)
var pagohextra3 = ((horasextras - 48)*3) 
var valhora = 15000

// constante:
const limitehnor = 40

//condicionales
if (Horastrabajada <- limitehnor) {
    resultadohoras - Horastrabajadas
}
if ((Horastrabajada > limitehnor) & horasextras <-8) {
    resultadohoras = ('las horas trabajadas son:' + Horastrabajada + 'y las horas extras son: ' + horasextras,salto,salto);
}
if (Horastrabajada > limitehnor & horasextras > 8) {
    resultadohoras = ('las horas trabajadas son:',Horastrabajada,'y las horas extras son: ',horasextras,salto,salto);
    
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

