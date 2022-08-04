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
        function aleatorio(cfc) {
            let indiceAleatorio = Math.floor(Math.random() * cfc.length);
            return cfc[indiceAleatorio]
        }
        console.log(aleatorio(cfc));
        Swal.fire('¡Hola! Sos una Manzana, busca a una ' + aleatorio(cfc) + ' para orar!')

    } else if (buscarTipo.value == "Crisol") {
        function aleatorio(crisol) {
            let indiceAleatorio = Math.floor(Math.random() * crisol.length);
            return crisol[indiceAleatorio]
        }
        Swal.fire('¡Hola! Sos una Pera, busca a una ' + aleatorio(crisol) + ' para orar!')
        console.log(aleatorio(crisol));

    } else if (buscarTipo.value == "24 de Septiembre") {
        function aleatorio(septiembre) {
            let indiceAleatorio = Math.floor(Math.random() * septiembre.length);
            return septiembre[indiceAleatorio]
        }
        Swal.fire('¡Hola! Sos una Naranja, busca a una ' + aleatorio(septiembre) + ' para orar!')
        console.log(aleatorio(septiembre));
    }
})