import { Influencer } from "./clases.js";
import { Articulo } from "./clases.js";

// TABLA DE INFLUENCERS
const influencers = [];
const tablaInfluencers = document.getElementById("tablaInfluencers");
const botonInfluencer = document.getElementById("agregarInfluencer");
const nombreInput = document.getElementById("nombre");
const mailInput = document.getElementById("mail");
const comisionInput = document.getElementById("comision");

// TABLA DE ARTICULOS
const articulos = [];
const codigoArticulo = document.getElementById("codigoArticulo");
const descripcionArticulo = document.getElementById("descripcionArticulo");
const precioArticulo = document.getElementById("precioArticulo");
const botonArticulo = document.getElementById("agregarArticulo");

function mostrarInfluencers(){
    for(let influencer of influencers){
        console.log(influencer);
        
        tablaInfluencers.innerHTML += `
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


// BOTONES
botonInfluencer.addEventListener("click", () => {
    let nuevoInfluencer = new Influencer(
        nombreInput.value,
        mailInput.value,
        comisionInput.value
    );
    influencers.push(nuevoInfluencer)
    mostrarInfluencers();
}) 


botonArticulo.addEventListener("click", () => {
    let nuevoArticulo = new Articulo(
        codigoArticulo.value,
        descripcionArticulo.value,
        precioArticulo.value
    );
    articulos.push(nuevoArticulo)
    mostrarArticulo();
})