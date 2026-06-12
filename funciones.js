import { Influencer } from "./clases.js";
import { Articulo } from "./clases.js";
import { Venta } from "./clases.js";

// TABLA DE INFLUENCERS
const influencers = [];
const tablaInfluencers = document.getElementById("tablaInfluencers");
const botonInfluencer = document.getElementById("agregarInfluencer");
const nombreInput = document.getElementById("nombre");
const mailInput = document.getElementById("mail");
const comisionInput = document.getElementById("comision");

// TABLA DE ARTICULOS
const articulos = [];
const tablaArticulos = document.getElementById("tablaArticulos");
const codigoArticulo = document.getElementById("codigoArticulo");
const descripcionArticulo = document.getElementById("descripcionArticulo");
const precioArticulo = document.getElementById("precioArticulo");
const botonArticulo = document.getElementById("agregarArticulo");

// TABLA DE VENTAS
const ventas = [];
const tablaVentas = document.getElementById("tablaVentas");
const listadoArticulos = document.getElementById("listadoArticulos");
const botonVenta = document.getElementById("agregarVenta");

// FUNCIONES

function mostrarInfluencers(){
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

function mostrarArticulos(){
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

// EVENTOS

botonInfluencer.addEventListener("click", () => {
    let nuevoInfluencer = new Influencer(
        nombreInput.value,
        mailInput.value,
        comisionInput.value
    );
    influencers.push(nuevoInfluencer);
    mostrarInfluencers();
}) 

botonArticulo.addEventListener("click", () => {
    let nuevoArticulo = "";
    console.log("Lo que vale antes ",nuevoArticulo);
    nuevoArticulo = new Articulo(
        codigoArticulo.value,
        descripcionArticulo.value,
        precioArticulo.value
    );
    console.log("Lo que vale antes despues ", nuevoArticulo);
    
    articulos.push(nuevoArticulo);
    mostrarArticulos();
    listarArticulos();
})

botonVenta.addEventListener("click", () => {
       let nuevaVenta = new Venta(
        codigoArticulo.value,
        descripcionArticulo.value,
        precioArticulo.value
    );
    ventas.push(nuevaVenta);
    mostrarVentas();
})



