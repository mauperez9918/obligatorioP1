 /* <!-- Mauricio Perez Nro: 378914 - Mariano Albornoz  Nro: 357964 --> */

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
const formArticulo = document.getElementById("formArticulo");
const codigoArticuloInput = document.getElementById("codigoArticulo");
const descripcionArticuloInput = document.getElementById("descripcionArticulo");
const precioArticuloInput = document.getElementById("precioArticulo");
const modalArticulo = document.getElementById("modalArticulo");
const ordenarArticulos = document.getElementById("ordenarTabla");
let ascendente = true;

// TABLA DE VENTAS
const ventas = [];
const tablaVentas = document.getElementById("tablaVentas");
const formVenta = document.getElementById("formVenta");
const desplegableArticulos = document.getElementById("desplegableArticulos");
const desplegableInfluencers = document.getElementById("desplegableInfluencers");
const cantidadInput = document.getElementById("cantidad");
const desplegableMedios = document.getElementById("desplegableMedios");
const modalVenta = document.getElementById("modalVenta");
const labelNumeroVenta = document.getElementById("labelNumeroVenta");
let numeroVenta = 1;

//// FUNCIONES ////

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
    tablaVentas.innerHTML = "";
    for(let venta of ventas){
        tablaVentas.innerHTML +=`
            <tr>
              <td>${venta.numero}</td>
              <td>${venta.codigoArticulo}</td>
              <td>${venta.influencer}</td>
              <td>${venta.cantidad}</td>
              <td>${venta.medio}</td>
            </tr>
            `;
    }
}


function actualizarDesplegables() { 
    desplegableInfluencers.innerHTML ="";
    desplegableArticulos.innerHTML ="";

    for(let influencer of influencers){
    desplegableInfluencers.innerHTML +=`<option value="${influencer.nombre}">${influencer.nombre}</option>`;
    }

    for(let articulo of articulos){
    desplegableArticulos.innerHTML +=`<option value="${articulo.codigo}">${articulo.codigo}</option>`;
    }
}

//// EVENTOS INFLUENCERS////

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
    actualizarDesplegables();
    formInfluencer.reset();
    modalInfluencers.close();
}) 

// ORDENAR INFLUENCERS //

ordenarInfluencers.addEventListener("click", () => {

    if(ascendente){
        influencers.sort((influencerAnterior, influencerPosterior) => {
           return influencerAnterior.nombre.localeCompare(influencerPosterior.nombre)
        })

    }else{
        influencers.sort((influencerAnterior,influencerPosterior) => {
          return influencerPosterior.nombre.localeCompare(influencerAnterior.nombre)
        }
        );
    }

    ascendente = !ascendente;

    mostrarInfluencers();
});

//// EVENTOS ARTÍCULOS ////

// AGREGAR ARTÍCULO //
formArticulo.addEventListener("submit", (event) => {

    event.preventDefault();
    let nuevoArticulo = "";
    nuevoArticulo = new Articulo(
        codigoArticuloInput.value,
        descripcionArticuloInput.value,
        precioArticuloInput.value
    );
    
    articulos.push(nuevoArticulo);
    mostrarArticulos();
    actualizarDesplegables();
    formArticulo.reset();
    modalArticulo.close();
})

// ORDENAR ARTÍCULOS //
ordenarArticulos.addEventListener("click", () => {

    if(ascendente){
        articulos.sort((articuloAnterior, articuloPosterior) => {
            return articuloAnterior.codigo.localeCompare(articuloPosterior.codigo)
        })

    }else{
        articulos.sort((articuloAnterior,articuloPosterior) => {
            return articuloPosterior.codigo.localeCompare(articuloAnterior.codigo)
    }
    );

    }

    ascendente = !ascendente;

    mostrarArticulos();
});

// EVENTOS VENTAS //

formVenta.addEventListener("submit", (event) => {
  
    event.preventDefault();
    let nuevaVenta = new Venta(
    numeroVenta,
    desplegableArticulos.value,
    desplegableInfluencers.value,
    cantidadInput.value,
    desplegableMedios.value
    );

    numeroVenta++;
    labelNumeroVenta.textContent = "Nro: " + numeroVenta;
    ventas.push(nuevaVenta);
    mostrarVentas();
    modalVenta.close();
    formVenta.reset();
})