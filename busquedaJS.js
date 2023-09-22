/**
 * El usuario introduce el nomrbre de un libro para saber si lo tenemos en la base de datos
 * le devolvemos un mensaje con la respuesta.
 */


/*Creamos el array donde introducimos los libros que tenemos en stock*/ 
lista = ['Los juegos del hambre', 'Cazadores de sombras', 'Acotar', 'Harry Potter', 'Nosotros en la luna', 'Al final mueren los dos', 'El corredor del laberinto'];


/*Capturamos los elementos de nuestro HTML*/ 
const libro= document.getElementById('libro'); /**Nombre del libro */
const parrafo=document.createElement('P');/**Creamos nuevo parrafo */
const div = document.getElementById('respuesta');/**div donde va el parrafo */
const boton = document.getElementById('boton');

/**Le añadimos al boton un evento donde llamamos la funcion buscar */
boton.addEventListener('click', buscar)


function buscar(){
    
    /**Comprobamos si el libro que introduce el usuario esta en la lista, creamos el texto donde esta nuestra
     * respuesta y la añadimos al parrafo y div
     */
    if (lista.includes(libro.value)){
        const texto = document.createTextNode('¡Estas de suerte! ¡Tenemos el libro que necesitas!');
        parrafo.appendChild(texto);
        div.appendChild(p); 
    }else{
        const texto = document.createTextNode('¡Lo sentimos! En estos momentos no tenemos ese libro en Stock');
        parrafo.appendChild(texto);
        div.appendChild(parrafo);
    }
   

}

