//constante de formato:
var salto = '<br>';

//problema 1
document.write('  1. El centro de vacunación Laureles coloca vacunas a los bebes menores de un año y la dosis a aplicar depende del peso y la edad del bebé según la siguiente fórmula:  Dosis de vacuna = (peso del bebé + 10 / 10 * meses de edad) + 8   ',salto,salto);

//constantes
const cdiez = 10;
const cocho = 8;

//variables
var dosis = 50
var peso = 40
var meses = 2

//operación
dosis = ((peso + cdiez / cdiez * meses) + cocho)

//resultado
document.write( '   dosis = ',dosis,salto,salto);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//problema 2
document.write('     2.Un empleado trabaja 48 horas en la semana a razón de $15.000 hora. El porcentaje de retención en la fuente es del 12, 5% del salario bruto. Se desea saber cuál es el salario bruto, la retención en la fuente y el salario neto del trabajador  ',salto,salto);

//constantes
const porcerete = 12.5
const valohora = 15.000
const horasdetrabajo = 48
const porcentaje = 100

//variables
var salariobruto= 720.000
var retencion  = 90.000
var salarioneto = 630.000

//operacion
salariobruto = horasdetrabajo * valohora

retencion = (salariobruto * porcerete)/100

salarioneto = salariobruto-retencion

//resultado 
document.write('   salariobruto =    ',salariobruto,salto,salto);
document.write('  retencion =  ',retencion,salto,salto);
document.write('  salarioneto =  ',salarioneto,salto,salto);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//problema 3
document.write('  3.EPM requiere de la lectura anterior en kilovatios y la lectura actual en kilovatios de un medidor de luz para determinar el consumo de electricidad de una vivienda. Teniendo comodatos de entrada la lectura inicial y la lectura final en kilovatios de un medidor, determine el consumo de los kilovatios y el monto a pagar por dicho consumo sabiendo que cada kilovatio tiene un valor de 15.000 pesos. Adicionalmente cobran el 10% del monto del consumo por concepto de aseo urbano, determine el monto total a pagar',salto,salto);

//constante
const kilovatio =15000
const monto = 10
const lecturainicial = 1621
const lecturafinal = 1792

//variables
var consumo = 2565000 
var aseourba = 256500
var totalapagar = 2821500

//operaciones

consumo = (lecturafinal - lecturainicial) * kilovatio

aseourba = (consumo * 10) / 100

totalapagar = consumo + aseourba

//resultado
document.write('  consumo =  ',consumo,salto,salto);
document.write('  aseourba = ',aseourba,salto,salto);
document.write('  totalapagar = ',totalapagar,salto,salto);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//problema 4
document.write( ' 4. En la asignatura tecnología se realizaron 5 evaluaciones. Las evaluaciones tienen una calificación del 1 a 5. La primera evaluación tiene un peso del 15%, la segunda tiene un peso del 30%, la tercera tiene un peso de 25%, la cuarta tiene un peso de 10% y la última tiene un peso del 20%. Realice un algoritmo que determine la calificación final',salto,salto);

//constante
const e1 = 5
const e2= 3
const e3= 2
const e4= 5
const e5= 4

//variables
var nota1=06
var nota2=09
var nota3=05
var nota4 =05
var nota5=02
var notafinal=27

//operaciones
nota1 = e1*15/100 
nota2 = e2*30/100
nota3 = e3*25/100
nota4 = e4*10/100
nota5 = e5*20/100
notafinal = nota1 + nota2 + nota3 + nota4 + nota5

//resolver:
document.write('  nota1=  ',nota1,salto,salto);
document.write(' nota2 = ',nota2,salto,salto);
document.write(' nota3 = ',nota3,salto,salto);
document.write(' nota4 = ',nota4,salto,salto);
document.write(' nota5 = ',nota5,salto,salto);
document.write( 'nota final = ',notafinal,salto,salto);

//----------------------------------------------------------------------------------------------------------------------------------------------------

//problema 5
document.write(' 5. Una empresa le hace los siguientes descuentos sobre el sueldo base a sus trabajadores: 1% por ley de política habitacional, 4% por Seguro Social, 0,5% por seguro paro forzoso y 5% por caja de ahorro. Realice un algoritmo que determine el monto decada descuento y el monto total a pagar al trabajador  ',salto,salto);

//constante
const salariobase  =877803
const politicahabi =1
const segurosocial =4
const seguroforzoso =05
const cajaahorro =5

//variables
var descuento1 = 8778
var descuento2 =35112
var descuento3 =4389
var descuento4 =43890
var desceuntototal =92169
var totalapagar = 785634

//operaciones
descuento1 = (salariobase * politicahabi) / 100
descuento2 = (salariobase * segurosocial) / 100
descuento3 = (salariobase * seguroforzoso) / 100
descuento4 = (salariobase * cajaahorro) / 100
totalapagar = (salariobase - desceuntototal)

//resolver
document.write(' descuento 1 = ',descuento1,salto,salto);
document.write(' descuento 2 = ',descuento2,salto,salto);
document.write(' descuento 3 = ',descuento3,salto,salto);
document.write(' descuento 4 = ',descuento4,salto,salto);
document.write(' total a pagar trabajador = ',totalapagar,salto,salto);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//problema 6
document.write('  6. Campos de Paz vende parcelas a crédito, donde el cliente da una inicial y el resto lo paga en 24 cuotas, pero con un incremento del 20% sobre lo que quedó debiendo. Teniendo como dato de entrada el precio de la parcela determine el monto de cada cuota y el precio final de la parcela. ',salto,salto);

//constante
const parcela = 600000
const cuoinicial =200000
const cuotas = 24
const intereses = 20
const debe = 400000

//variables
var montocadacuota = 20000
var preciofinalparcela = 480000

//operacion

preciofinalparcela =  ((debe * intereses / 100 )+ debe)
montocadacuota = preciofinalparcela/cuotas

//resolver

document.write(' monto cada cuota = ',montocadacuota,salto,salto);
document.write(' precio final parcela = ',preciofinalparcela,salto,salto);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//problema 7
document.write(' Diseñar el algoritmo correspondiente a un programa que calcule el área y el perímetro de un triángulo rectángulo dada la base y la altura  ',salto,salto);

//constante
const base = 24
const altura = 7
const X = 25

//variable
var área =84
var perimetro = 56

//operaciones

área = ((base * altura) / 2)
perimetro = base + altura + X

//resolver
document.write(' área = ',área,salto,salto);
document.write(' perimetro ',perimetro,salto,salto);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//problema 8
document.write(' 8. Un banco paga a sus ahorrista un interés del 1.5% sobre el monto ahorrado. Teniendo como dato de entrada el saldo inicial del ahorrista determine el saldo final. ',salto,salto);

//constante
const saldoini = 877803
const monotoahorrado = 15

//variable
var saldofinal = 131670

//operaciones
saldofinal = ((saldoini *monotoahorrado)/100);

//resolver
document.write(' saldo fina = ',saldofinal,salto,salto);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//problema 9
document.write(' 9. Calcular el volumen de un cono = 1/3  r2h ',salto,salto);

//constante
const pi= 3.1416
const num = 1/3

//variable
var al= 1
var radio =3


//operaciones
var volumencono = (num* pi * al) * (radio*radio);

//resolver
document.write(' volumen cono = ' ,volumencono,salto,salto);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//problema 10
document.write(' 10 Una empresa paga a sus empleados además del sueldo base una bonificación especial de 10 %. por cada hijo. Realice un algoritmo que determine el monto de la bonificación y el monto total a pagar al trabajador.',salto,salto);

//constante
const sueldoba = 877803
const  hijos= 2

//variables
var bonificación = 87780
var salarioapagar=1053363

//operacion
salarioapagar= sueldoba+(bonificación*hijos);

//resolver
document.write(' sueldo a apagar = ',salarioapagar,salto,salto);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//problema 11
document.write(' 11. Una institución educativa le paga a sus profesores $20.000 por hora y le hace un descuento del 5% por concepto de caja ahorro. Determine el monto del descuento y el monto total a pagar al profesor. ',salto,salto);

//constante
const pagahora = 20000
const cajaahorra=5

//variable
var montodescuento = 1000
var montototalpaga=19000

//operaciones
montodescuento = (pagahora * cajaahorro)/100
montototalpaga = pagahora - montodescuento

//resolver
document.write(' monto descuento = ',montodescuento,salto,salto);
document.write(' total a pagar al maestro = ',montototalpaga,salto,salto);

//-------------------------------------------------------------------------------------------------------------------------------------

//problema 12
document.write(' 12. Una inmobiliaria vende terrenos a $ 550.000 por el metro cuadrado. El cliente debedar una inicial y el resto lo paga en 12 cuotas. Determine el monto de cada cuota. ',salto,salto);

//constantes
const terrenos = 550000
const cuotainicial = 280000
const cuota = 12

//variables
var montodecadacuota=22500

//operacion 
montocadacuota = (terrenos- cuotainicial) / cuota

//resolver
document.write(' monto de cada cuota ',montocadacuota,salto,salto);

//-----------------------------------------------------------------------------------------------------------------------------------------------------