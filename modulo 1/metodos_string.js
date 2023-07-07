//STRING se refiere a los datos de tipo texto osea los que estan encerrados en comillas ""
let nombre_y_apellido = "Agustin Gonzalez Micheli"
console.log(nombre_y_apellido.length)
//.length toma un dato de una variable de texto e indica la cantidad de caracteres que esta usa en total, incluyendo los espacios.
console.log(nombre_y_apellido)
console.log(nombre_y_apellido.includes ("A"))
console.log(nombre_y_apellido.includes ("b"))
//.includes toma un dato de una variable de texto y le pregunta al dato si este mismo incluye cierto caracter, el sistema 
//devuelve true en caso de contener dicho caracter o false si es que no lo contiene. 
let mascota = "perro scooby"
console.log(mascota.toLowerCase())    
//metodo "toLowerCase" pone todo el texto de un dato en una variable a minuscula
console.log(mascota.toUpperCase())  
//contrariamente el metodo "toUpperCase" pone todo el texto de un dato en una variable a minuscula. 