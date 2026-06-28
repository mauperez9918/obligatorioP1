 /* <!-- Mauricio Perez Nro: 378914 - Mariano Albornoz  Nro: 357964 --> */

import { Influencer } from "./clases.js";
import { Articulo } from "./clases.js";
import { Venta } from "./clases.js";
import { Sistema } from "./clases.js";

// SISTEMAS
const sistema = new Sistema();


// INFLUENCERS
const tablaInfluencers = document.getElementById("tablaInfluencers");
const formInfluencer = document.getElementById("formInfluencer");
const nombreInput = document.getElementById("nombre");
const mailInput = document.getElementById("mail");
const comisionInput = document.getElementById("comision");
const modalInfluencers = document.getElementById("modalInfluencers");
const ordenarInfluencers = document.getElementById("ordenarNombre");
const botonDetalle = document.getElementById("botonDetalle");

// ARTÍCULOS
const tablaArticulos = document.getElementById("tablaArticulos");
const formArticulo = document.getElementById("formArticulo");
const codigoArticuloInput = document.getElementById("codigoArticulo");
const descripcionArticuloInput = document.getElementById("descripcionArticulo");
const precioArticuloInput = document.getElementById("precioArticulo");
const modalArticulo = document.getElementById("modalArticulo");
const ordenarArticulos = document.getElementById("ordenarTabla");
let ascendente = true;

// VENTAS
const tablaVentas = document.getElementById("tablaVentas");
const formVenta = document.getElementById("formVenta");
const desplegableArticulos = document.getElementById("desplegableArticulos");
const desplegableInfluencers = document.getElementById("desplegableInfluencers");
const cantidadInput = document.getElementById("cantidad");
const desplegableMedios = document.getElementById("desplegableMedios");
const modalVenta = document.getElementById("modalVenta");
const labelNumeroVenta = document.getElementById("labelNumeroVenta");
const botonEliminarVenta = document.getElementById("botonEliminarVenta");
let numeroVenta = 1;

//// FUNCIONES ////

// Funcion Listar INFLUENCERS //
function mostrarInfluencers(){
    tablaInfluencers.innerHTML = "";
    for(let influencer of sistema.listaInfluencers){
        tablaInfluencers.innerHTML +=`
            <tr>
              <td>${influencer.nombre}</td>
              <td>${influencer.mail}</td>
              <td>${influencer.comision}</td>
              <td>${influencer.total}</td>
              <td>${influencer.etiqueta}</td>
              <td><button id=${influencer.nombre}>VENTAS</button></td>            
            </tr>
            `;
    }

    for(let influencer of sistema.listaInfluencers){
    document.getElementById(influencer.nombre).addEventListener("click", () => {
        var contenido = "";
        for(let venta of influencer.detalle){
          
            contenido += ("Nro " + venta.numero +  "→  " + venta.cantidad + "→  " + venta.codigoArticulo + " c/u Precio " + " Total $" + "Total en numero" + "→  " + "Comisión" + "\n");
        }
        alert(contenido);
    });
    }   
}

// Funcion Listar ARTÍCULOS //
function mostrarArticulos(){
    tablaArticulos.innerHTML = "";
    for(let articulo of sistema.listaArticulos){
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
    for(let venta of sistema.listaVentas){
        tablaVentas.innerHTML +=`
            <tr>
              <td>${venta.numero}</td>
              <td>${venta.codigoArticulo}</td>
              <td>${venta.influencer}</td>
              <td>${venta.cantidad}</td>
              <td>${venta.medio}</td>
              <td><button id="botonEliminar${venta.numero}">❌</button></td>
            </tr>
            `;
    }

    for(let venta of sistema.listaVentas){
    document.getElementById("botonEliminar" + venta.numero).addEventListener("click", () => {
        let ventaEliminar = sistema.listaVentas.indexOf(venta);
        sistema.listaVentas.splice(ventaEliminar, 1);
        mostrarVentas();
        mostrarInfluencers();
    });
}
}


function actualizarDesplegables() { 
    desplegableInfluencers.innerHTML ="";
    desplegableArticulos.innerHTML ="";

    for(let influencer of sistema.listaInfluencers){
    desplegableInfluencers.innerHTML +=`<option value="${influencer.nombre}">${influencer.nombre}</option>`;
    }

    for(let articulo of sistema.listaArticulos){
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
    sistema.agregarInfluencer(nuevoInfluencer);
    mostrarInfluencers();
    actualizarDesplegables();
    formInfluencer.reset();
    modalInfluencers.close();
}) 

// ORDENAR INFLUENCERS //

ordenarInfluencers.addEventListener("click", () => {

    if(ascendente){
        sistema.listaInfluencers.sort((influencerAnterior, influencerPosterior) => {
           return influencerAnterior.nombre.localeCompare(influencerPosterior.nombre)
        })

    }else{
        sistema.listaInfluencers.sort((influencerAnterior,influencerPosterior) => {
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
    
    sistema.agregarArticulo(nuevoArticulo);
    mostrarArticulos();
    actualizarDesplegables();
    formArticulo.reset();
    modalArticulo.close();
})

// ORDENAR ARTÍCULOS //
ordenarArticulos.addEventListener("click", () => {

    if(ascendente){
        sistema.listaArticulos.sort((articuloAnterior, articuloPosterior) => {
            return articuloAnterior.codigo.localeCompare(articuloPosterior.codigo)
        })

    }else{
        sistema.listaArticulos.sort((articuloAnterior,articuloPosterior) => {
            return articuloPosterior.codigo.localeCompare(articuloAnterior.codigo)
    }
    );

    }

    ascendente = !ascendente;

    mostrarArticulos();
});

// EVENTOS VENTAS //

formVenta.addEventListener("submit", (event) => {

    var influencer = desplegableInfluencers.value;
    event.preventDefault();
    var nuevaVenta = new Venta(
    numeroVenta,
    desplegableArticulos.value,
    influencer,
    cantidadInput.value,
    desplegableMedios.value
    );

    numeroVenta++;
    labelNumeroVenta.textContent = "Nro: " + numeroVenta;
    sistema.agregarVenta(nuevaVenta);    
    
    sistema.agregarVentaDetalle(influencer, nuevaVenta);
    mostrarVentas();
    modalVenta.close();
    formVenta.reset();

})


/*
botonEliminarVenta.addEventListener("click", () => {
    
    actualizarDesplegables();
})
*/

