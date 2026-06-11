import { Influencer } from "./clases.js";
const influencers = [];
const tablaInfluencers = document.getElementById("tablaInfluencers");
const botonAgregar = document.getElementById("agregarInfluencer");
const nombreInput = document.getElementById("nombre");
const mailInput = document.getElementById("mail");
const comisionInput = document.getElementById("comision");

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

botonAgregar.addEventListener("click", () => {
    let nuevoInfluencer = new Influencer(
        nombreInput.value,
        mailInput.value,
        comisionInput.value
    );
    influencers.push(nuevoInfluencer)
    mostrarInfluencers();
}) 


