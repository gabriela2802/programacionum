// constantes del formato:
var salto = '<br>';

//problema a resolver:
var problema1 = '1. Haga un algoritmo que calcule e imprima el área de un circulo =>Área =π r 2';
document.write(problema1,salto);

//variable a ingresar:
var radio = 3; //variable

//constantes:
var pi = 3.1416;

//operaciones: 
var area = (pi*(radio*radio));

//resultado: 
document.write('Área = ',area,salto,salto);

// ------------------------------------------------------------------------------------------------------------------------------

//problema a resolver:
var problema2 = '2. Haga un algoritmo que calcule e imprima el área de un triangulo => Área = (b*h) /2';
document.write(problema2,salto);

//variables a ingresar 
var Ária = 2; 

//constante:
var base = 2
var altura = 2

// operacion:
var area = (base*altura)/2;

//resultado:
document.write('Área = ',area,salto,salto);

//------------------------------------------------------------------------------------------------------------------------------------

//problema a resolver:
var problema3 = '3. Diseñar un algoritmo a través del cual se pueda calcular la siguiente expresión: Z= y1-y2/x1-x2';
document.write(problema3,salto);

//variables a ingresar:
var y1=9
var y2=5
var x1=7
var x2=4

//constante:
var z

//operaciones:
var Z= ((y1-y2) / (x1-x2))

//resolver:
document.write('z= ', Z,salto,salto);

//-------------------------------------------------------------------------------------------------------------------

//problema a resolver:
var problema4 = '4.diseñar un algoritmo para la converción de una medida de metros a pies y pulgadas,donde se sabeque 1 metro es igual a 3.28pies y 1 pie es igual a 12 pulgadas';
document.write(problema4,salto)

//variable a ingresar:
var metros=17
var ft=3.28
var pulgadas=12

//operaciones:
var ft= metros*(ft/metros)
var pulgadas= ft*(pulgadas/ft)

//resolver:
 document.write('metros=',metros,salto,salto); document.write('ft=', ft ,salto,salto);document.write('pulgada=', pulgadas,salto,salto);

//---------------------------------------------------------------------------------------------------------------------------------------

//problema a resolver:
var problema5 = '5.Elabore un algoritmo que convierta una temperatura dada en centígrados a fahrenheit. Tener en cuenta la siguiente fórmula: ºF= 9/5 ºC + 32';
document.write(problema5,salto)

//variable a ingresar:
var gC=25
var gf=9/5

//operaciones:
var gf= (9/5 * gC + 32 )

//resolver:
document.write('gf=',gf,salto,salto);

//--------------------------------------------------------------------------------------------------------------------------------------

//problema a resolver:
var problema6 ='6.Hacer un algoritmo para calcular el IVA de un valor digitado por el teclado, mostrar este resultado y el de sumar el IVA al valor digitado';
document.write(problema6,salto)

//variable a ingresar:
var valor=2500
var iva =19

//operaciones:
var valor= valor+iva

//resolver:
document.write('valor=',valor,salto,salto)

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//problema a resolver:
var problema7='7.Elabore un algoritmo para mostrar la cantidad de miles, centenas, decenas y unidades de un número entero digitado por teclado';
document.write(problema7,salto);

//variable a ingresar:
var cifra=1592;
var miles
var centenas
var decenas
var unidades

// operaciones:
miles=(cifra/ 1000)
miles=miles
centenas=(cifra/100)
centenas=centenas
decenas=(cifra/10)
decenas=decenas=((miles*100)+(centenas*10))
decenas =decenas 
unidades= cifra=((miles*1000)+(centenas*100)+(decenas*10)) 
unidades=unidades

//resolver:
document.write('cifra',cifra,salto,salto);
document.write('miles,',miles,salto,salto,);
document.write('centenas',centenas,salto,salto);
document.write('decenas',decenas,salto,salto);
 document.write('las unidades son',unidades,salto,salto);

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//problema a resolver:
var problema8='8. Elaborar un algoritmo que permita leer el nombre de un empleado, el número de horas extras diurnas, horas extras nocturnas y el valor básico hora. Se debe calcular el valor a pagar en una quincena teniendo en cuenta que el recargo de la hora extra diurna es del 25% y el de la nocturna es del 75%';
document.write(problema8,salto);

// variable a ingresar:
var nombre= 'gabriela'
var hed=21250
var hen=29750
var vh=17000
var mes=360000
var quincena=362250
var rxd='1,25%'
var rxn='1,75%'

//operacion:
rxd=vh*hed
rxn=vh*hen
quincena=((mes/2)+(rxd*hed)+(rxn*hen))

//resolver=
document.write('nombre',nombre,salto,salto)
document.write('hed',hed,salto,salto)
document.write('hen',hen,salto,salto)
document.write('quincena',quincena,salto,salto)
document.write('mes',mes,salto,salto)

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//problema a resolver:
var problema9='9.Elaborar un algoritmo que lea el nombre de un producto, el valor unitario, el saldo inicial al comienzo del mes, las entradas y las salidas durante el mes. Se debe calcular el saldo final del mes y el valor de dicha mercancía';
document.write(problema9,salto);

//variables a ingresar:
var producto=nombre
var valor=20000
var entrada =50000
var salida=20000
var valorf=70000

//operaciones:
valorf =salida + entrada

//resolver:
document.write('valorf',valorf,salto,salto)

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//problema a resolver:
var problema10='10. Elaborar un algoritmo que permita leer el nombre y valor de venta de 3 productos de una tienda de insumos agrícolas. Sobre el 1er producto se hace un descuento del 2.5%, sobre el 2º un descuento del 1.8% y sobre el 3ro el 1.3%. Se debe calcular el valor final que debe de pagar el cliente por la mercancía comprada';
document.write(problema10,salto);

//variable a ingresar:
var Vc1=200000;
var Vc2=150000;
var Vc3=120000;
var C1='0,025%'
var C2='0,018%'
var C3='0,013%'
var vfp1=100
var vfp2=100
var vfp3=100

//operaciones:
Vfp1=(Vc1*C1);
Vfp2=(Vc2*C2);
Vfp3=(Vc3*C3);

//resolver:
document.write('Vfp1',Vfp1,salto,salto)
document.write('Vfp2',Vfp2,salto,salto)
document.write('Vfp3',Vfp3,salto,salto)

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var problema11= '11.En la prueba final de atletismo de los 50 metros planos en los juegos olímpicos, se obtuvo el tiempo utilizado por cada uno de los 8 atletas participantes. Se debe imprimir la velocidad promedio (Metros/Segundos) en que los atletas corrieron.';
document.write(problema11,salto)

//variable a ingresar:
var A=50
var velocidad=9.955
var b=2
var C=4
var D=5
var E=10
var F=6
var G=8
var H=7
var I=9

//operacion:
velocidad=((50/2 + 50/4 + 50/5 + 50/10 + 50/6 + 50/8 + 50/7 + 50/9)/8);

//resolver:
document.write('velocidad',velocidad,salto,salto)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var problema12='12.Elaborar un algoritmo que permita intercambiar el valor de dos variables. Ejemplo: Si la variable A=5 y la B=8, luego del proceso debe quedar así: A=8 y B=5.';
document.write(problema12,salto)

//variable a ingresar:
var a1=7
var b=17

//operacion:
b=a1
a1=b

//resolver:
document.write('a1',a1,salto,salto)
document.write('b',b,salto,salto)

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var problema13='13. Se debe leer una cantidad de 6 dígitos que debe ser múltiplo de 1.000 y que representa el valor que va a retirar una persona de un cajero electrónico. Se debe de imprimir cuantos billetes de 50.000, 20.000, 10.000, 5.000, 2.000 y 1.000 debe entregar dicha máquina. Ejemplo: Se desea retirar 238.000. El cajero debería entregar 4 billetes de 50.000, 1 billete de 20.000, 1 billete de 10.000, 1 billete de 5.000, 1 billete de 2.000 y 1 billete de 1.000.';
document.write(problema13,salto)

//variable a ingresar:
var cifra=354000
var multiplo=354
var bille50=7
var bille20=0
var bille10=0
var bille5=0
var bille2=2

//operacion:
multiplo=cifra/1000
bille50=cifra/50000
bille20=(cifra-(bille50*50000))
bille10=(cifra-(bille50*50000)-(bille20*20000))
bille5=(cifra-(bille50*50000)-(bille20*20000)-(bille10*10000))
bille2=(cifra-(bille50*50000)-(bille20*20000)-(bille10*10000)-(bille5*5000))

//resolver:
document.write('multiplo',multiplo,salto,salto)
document.write('bille50',bille50,salto,salto)
document.write('bille20',bille20,salto,salto)
document.write('bille10',bille10,salto,salto)
document.write('bille5',bille5,salto,salto)
document.write('bille2',bille2,salto,salto)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
