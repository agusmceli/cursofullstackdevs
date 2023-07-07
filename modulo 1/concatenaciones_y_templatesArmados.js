let nombre = "Agustin";  
let apellido = "gonzalez";
let juego_favorito = "hunt showdown"
let nombre_perro = "scooby"
let nombre_completo = nombre + " " + apellido
console.log(nombre_completo)

//las concatenaciones con la unificacion de uno o mas strings por medio del uso del simbolo +. sin embargo
//Si no se crea un espacio vacio con comillas ej:" " el string unificado quedara todo junto sin espacio por lo que debe indicarse


//sin embargo para strings largos donde hay que concatenar mas de 3 o 4 strings lo mas sencillo es armar un template literal
//Un template literal es un string armado para implementar el uso de las variables requeridas. 
//y se implementa con las comillas traseras ``
let saludo = `hola mi nombre es ${nombre_completo}, mi juego de pc favorito es ${juego_favorito} y tengo un perro que se llama ${nombre_perro}`
console.log(saludo)
    