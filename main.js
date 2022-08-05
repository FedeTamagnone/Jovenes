let cfc = ["Pera", "Naranja"];
let septiembre = ["Manzana", "Pera"];
let crisol = ["Manzana", "Naranja"]


const boton = document.getElementById('boton')
const buscarTipo = document.getElementById('buscarTipo')


/* function aleatorio(datos) {
    let indiceAleatorio = Math.floor(Math.random() * datos.length);
    return datos[indiceAleatorio]
} */
boton.addEventListener("click", () => {
    if (buscarTipo.value == "CFC") {

        Swal.fire('¡Hola! Sos un Melón, busca a una Pera o Sandía para orar!')

    } else if (buscarTipo.value == "Crisol") {

        Swal.fire('¡Hola! Sos una Pera, busca a una Sandía o Melón para orar!')


    } else if (buscarTipo.value == "24 de Septiembre") {
        Swal.fire('¡Hola! Sos una Sandía, busca a una Pera o Melón para orar!')

    }
})