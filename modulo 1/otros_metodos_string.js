let nombre_de_hermano = "Franco Mayorga";

console.log(nombre_de_hermano.startsWith("M"));
//la funcion startsWith hace una pregunta a la variable y le pregunta si el string adentro de la variable empieza con la letra
//indicada, si la primera palabra del string empieza con la letra indicada entonces devuelve un resultado verdadero.
//en caso de estar equivocado la consola devuelve un resultado false
console.log(nombre_de_hermano.startsWith("F"));
// al colocar la letra correcta el resultado de vuelta se convierte en verdadero.
//si no se usa la mayuscula o minuscula correcta el resultado sera false

let juego_nuevo = "   Mortal Kombat 1      ";
let juego_nuevo_trimmeado = juego_nuevo.trim();
console.log(juego_nuevo_trimmeado.length);
console.log(juego_nuevo_trimmeado);     
//el trim es una funcion aplicable como la MODIFICACION de una variable que lo que hace es recortar los espacios libres fuera de ambos lados del string sin afectar el interior.


let una_variable = "limon";
console.log(una_variable.repeat(6));
//.repeat es una funcion que sirve para repetir un string la cantidad de veces indicada dentro de los parentesis. 


let variable_de_torreta = "Soy distinto";
console.log(variable_de_torreta.replace("distinto" , "diferente"));
//La funcion replace deja reemplazar una parte o la todo un string entero indicado entre comillas por otro nuevo indicado siguiendo con una coma y otras comillas
//con esto se puede reemplazar una palabra o varias. 

console.log(variable_de_torreta.replaceAll("o", "a"));
//replaceAll se puede usar para reemplazar todas las letras indicadas de un string por otras, asimismo con una unica palabra indicada
//pero cambiara todas las palabras que cumplan con los requisitos de estar escritas iguales y tenes las mismas mayusculas y/o minusculas.




