import { Influencer } from "./clases.js";
import { Articulo } from "./clases.js";
import { Venta } from "./clases.js";

// TABLA DE INFLUENCERS
const influencers = [];
const tablaInfluencers = document.getElementById("tablaInfluencers");
const formInfluencer = document.getElementById("formInfluencer");
const nombreInput = document.getElementById("nombre");
const mailInput = document.getElementById("mail");
const comisionInput = document.getElementById("comision");
const modalInfluencers = document.getElementById("modalInfluencers");
const ordenarInfluencers = document.getElementById("ordenarNombre");

// TABLA DE ARTICULOS
const articulos = [];
const tablaArticulos = document.getElementById("tablaArticulos");
const codigoArticulo = document.getElementById("codigoArticulo");
const descripcionArticulo = document.getElementById("descripcionArticulo");
const precioArticulo = document.getElementById("precioArticulo");
const formArticulo = document.getElementById("formArticulo");
const modalArticulo = document.getElementById("modalArticulo");
const ordenarArticulos = document.getElementById("ordenarTabla");

// TABLA DE VENTAS
const ventas = [];
const tablaVentas = document.getElementById("tablaVentas");
const listadoArticulos = document.getElementById("listadoArticulos");
const botonVenta = document.getElementById("agregarVenta");

// FUNCIONES

// Funcion Listar INFLUENCERS //
function mostrarInfluencers(){
    tablaInfluencers.innerHTML = "";
    for(let influencer of influencers){
        tablaInfluencers.innerHTML +=`
            <tr>
              <td>${influencer.nombre}</td>
              <td>${influencer.mail}</td>
              <td>${influencer.comision}</td>
              <td>${influencer.total}</td>
              <td>${influencer.etiqueta}</td>
              <td>${influencer.detalle}</td>
            </tr>
            `;
    }
}

// Funcion Listar ARTÍCULOS //
function mostrarArticulos(){
    tablaArticulos.innerHTML = "";
    for(let articulo of articulos){
        tablaArticulos.innerHTML +=`
            <tr>
              <td>${articulo.codigo}</td>
              <td>${articulo.descripcion}</td>
              <td>${articulo.precio}</td>
            </tr>
            `;
    }
}

// Funcion Listar VENTAS //
function mostrarVentas(){
    for(let venta of ventas){
        tablaVentas.innerHTML +=`
            <tr>
              <td>${venta.numero}</td>
              <td>${venta.codigo}</td>
              <td>${venta.influencer}</td>
              <td>${venta.cantidad}</td>
              <td>${venta.medio}</td>
            </tr>
            `;
    }
}


function listarArticulos() { 
    
    for(let articulo of articulos){
    listadoArticulos.innerHTML=`<option value="${articulo.codigo}">${articulo.codigo}</option>`;
    }
}

// EVENTOS INFLUENCERS////

// AGREGAR INFLUENCER //
formInfluencer.addEventListener("submit", (event) => {
        event.preventDefault();
        let nuevoInfluencer = new Influencer(
        nombreInput.value,
        mailInput.value,
        comisionInput.value
    );
    influencers.push(nuevoInfluencer);
    mostrarInfluencers();
    
    formInfluencer.reset();
    modalInfluencers.close();
}) 

// ORDENAR INFLUENCERS //

ordenarInfluencers.addEventListener("click", () => {
    var ascendente = true;

    if(ascendente){
        influencers.sort((influencerAnterior, influencerPosterior) => {
            influencerAnterior.nombre.localeCompare(influencerPosterior.nombre)
        })

    }else{
        influencers.sort((influencerAnterior,influencerPosterior) =>
            influencerAnterior.nombre.localeCompare(influencerPosterior.nombre)
        );

    }

    ascendente = !ascendente;

    mostrarInfluencers();
});

// EVENTOS ARTÍCULOS ////

// AGREGAR ARTÍCULO //
formArticulo.addEventListener("submit", (event) => {

    event.preventDefault();
    let nuevoArticulo = "";
    nuevoArticulo = new Articulo(
        codigoArticulo.value,
        descripcionArticulo.value,
        precioArticulo.value
    );
    
    articulos.push(nuevoArticulo);
    mostrarArticulos();

    formArticulo.reset();
    modalArticulo.close();
})

// ORDENAR ARTÍCULOS //
// ordenarArticulos.addEventListener("click", () => {
//     var ascendente = true;

//     if(ascendente){
//         influencers.sort((influencerAnterior, influencerPosterior) => {
//             influencerAnterior.nombre.localeCompare(influencerPosterior.nombre)
//         })

//     }else{
//         influencers.sort((influencerAnterior,influencerPosterior) =>
//             influencerAnterior.nombre.localeCompare(influencerPosterior.nombre)
//         );

//     }

//     ascendente = !ascendente;

//     mostrarInfluencers();
// });

// EVENTOS VENTAS //

botonVenta.addEventListener("click", () => {
       let nuevaVenta = new Venta(
        codigoArticulo.value,
        descripcionArticulo.value,
        precioArticulo.value
    );
    ventas.push(nuevaVenta);
    mostrarVentas();
})



