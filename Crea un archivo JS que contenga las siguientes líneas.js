// Una cadena de texto con tu Nombre
var nombre = "carlos alberto"
//Otra cadena de texto con tu Apellido
var apellido = "coronado uribe"
//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
var estudiante = nombre + " " + apellido
// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
var estudianteMayus = estudiante.toUpperCase()
//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
var estudianteMinus = estudiante.toLowerCase()
// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
var c = estudiante.length
//Una variable que contenga la primera letra del Nombre
var pm = nombre.charAt(0)
//Otra variable que contenga la última letra del Apellido
var lda = apellido.slice(-1)
//Una cadena de texto que elimine los espacios de la variable "estudiante"
var e = estudiante.replace(/\s+/g, "");
// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
var n = estudiante.includes(nombre) 
console.log(n)