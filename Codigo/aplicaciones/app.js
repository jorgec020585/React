/*let nombre = prompt("Ingrese su nombre")
let edad = parseInt(prompt("Ingrese su edad"))
alert("Hola " + nombre + ", tenes " + edad + " años")
//document.write(nombre.length + edad)
document.write(`la cantidad de letras de tu nombre mas tu edad es ${nombre.length+edad}`)*/
/*if (2 > 3){
    document.write("verdadero")
    //return("verdadero"),corta la ejecucion y devuelve valor
}
else{
    document.write("falso")
}
function suma (num1,num2){
    document.writeln()
    document.write(num1+num2)
}
suma(2,3)*/
/*let nombre = prompt("Nombre: ")
let edad = parseInt(prompt("Edad: "))
if(edad > 18){
    var hoy = new Date();
    alert("Puede pasar");
    if(hoy.getHours() >= 18 && hoy.getHours() <= 22){
        alert(`Paga entrada \nValor: ${nombre.length+edad}`);
    }
    else{
        alert("No paga entrada");
    }
    alert("No puede entrar");
}*/

// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
/*const nuevaString = "hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 45;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;
*/


function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
    return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
    return(x + y);
}

function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  return (y - x);
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
    return x * y
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
    return x / y
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
    return (x === y);
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
    return str1.length === str2.length
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
    return num < 90
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
    return num > 50
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
    return x % y
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
    return num % 2 === 0
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  return !esPar(num)
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
    return Math.pow(num,2)
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return Math.pow(num,3)
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow(num,exponent)
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  Math.round(num)
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
    return Math.ceil(num)
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
    return Math.random();
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if(numero === 0){
    return false
  }
  else{
    if(numero > 0){return "positivo"}
    else{return "negativo"}
  }
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  str+="!";
  return str
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
  var nomApel= `${nombre} ${apellido}`;
  return `Soy, ${nomApel} -> ${nombre} ${apellido}`
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return `Hola ${nombre}`
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  return alto * ancho
}

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return lado * 4
}

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return base * altura / 2
}

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro *1.2
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
  var vocales = ["a","e","i","o","u"]
  return vocales.includes(letra);
}
console.log(esVocal("t"))