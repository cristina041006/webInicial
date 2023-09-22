
const libros =[]; /**Array donde almacenaremos los libros */
const tabla =document.getElementById('tabla');
const botonA =document.getElementById('add');
const botonB =document.getElementById('delete');

/**Añadimos los eventos a los botones correspondiente */
botonA.addEventListener('click', aniadir);
botonB.addEventListener('click', borrar);


/**Añadimos los atributos del libro a la tabla */
function aniadir(){
    /**Capturamos los elementos  */
    const nombre =document.getElementById('nombre');
    const categoria =document.getElementById('categoria');
    const precio =document.getElementById('precio');

    /**Si el libro no esta en nuestro array, es decir en la tabla,
     * crearemos los elementos necesarios en forma de arbol para ir 
     * añadiendo los hijos a los padres correspondientes, al final 
     * lo añadimos a la array, si el libro esta en la tabla saltara una
     * alerta 
     */
    if(libros.includes(nombre.value)){
        alert('Este libro ya esta en la lista');
        
    }else{
        texto1 = document.createTextNode(nombre.value);
        texto2 = document.createTextNode(precio.value);
        texto3 = document.createTextNode(categoria.value);

        const Anombre= document.createElement('TD');
        const Aprecio= document.createElement('TD');
        const Acategoria= document.createElement('TD');

        Anombre.appendChild(texto1);
        Aprecio.appendChild(texto2);
        Acategoria.appendChild(texto3);

        const tr = document.createElement('TR');

        tr.appendChild(Anombre);
        tr.appendChild(Acategoria);
        tr.appendChild(Aprecio);

        tabla.appendChild(tr);

        libros.push(nombre.value);
    }
   
}


/**Borramos la fila donde se encuentra el nombre que el usuario introduce,
 * si no existe saltara una alerta
*/
function borrar(){

    /**Capturamos los elementos y colocamos una bandera*/
    const libroBorrar = document.getElementById('borrar');
    const trs = document.getElementsByTagName('tr');
    let borrado = false

    /**recorremos todas las filas mirando una por una la primera columna
     * donde se encuentra el nombre del libro
     */
    for (let i=1; i<trs.length && !borrado; i++) {
        const fila = trs[i];
        const columna = fila.getElementsByTagName('td')[0];
        let contenido = columna.textContent;

        if ( libroBorrar.value === contenido) {
            trs[i].remove();
            borrado=true;
                
        }
        
        /**Borramos el libro del array para que podamos volver a itroducir
         * el libro anteriormente borrado
         */
        for (let a=0; a<libros.length && borrado; a++) {
            if (contenido === libros[a]){
                libros.splice(a);
            } 
        }
    }

    if (!borrado){
        alert('Este libro no esta en la lista')
    }
    
}




