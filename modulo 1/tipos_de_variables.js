var nombre = "Agustin"; 
//las variables tipo var tienen un scope global, se pueden tomar desde cualquier lugar
//pero por esta misma razon se pueden pisar facilmente ya que se superponen desde adentro de las llaves tambien

let juego_favorito = "hunt showdown";

{
let juego_favorito = "league of legends";
console.log(let = juego_favorito); 
}
console.log(let = juego_favorito)
var nombre = "Micheli" //al volver a poner otro tipo var pero que LLEVA LA MISMA DENOMINACION el sistema reemplaza dando prioridad
//al de mas abajo de la linea. 
console.log(nombre) 
const fecha_de_nacimiento = "25 de enero de 2000"   
console.log(fecha_de_nacimiento)
//Const es una variable que no puede ser modificada, osea que su valor permanece igual una vez asignado y no se puede cambiar.
//Const es una variable LOCAL que significa que se pueden usar llaves para usar una nueva variable con la misma denominacion. 
//Lo mismo sucede con Let aunque el contenido de datos dentro de los let siempre puede ser modificado, aunque si se 
//encierra un let adentro de llaves {} se debera modificar el let dentro de la llave
