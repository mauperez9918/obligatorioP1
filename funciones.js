import { Influencer } from "./clases";
const influencers = [];
const botonAgregar = document.getElementById("agregarInfluencer");

function crearInfluencer(nombre, mail, comision, total, etiqueta, detalle){
const influencer = new Influencer();;
const nuevoInfluencer = influencer.crearInfluencer(nombre, mail, comision, total, etiqueta, detalle);
influencers.push(nuevoInfluencer);
return "El influencer fue agregado";
}

botonAgregar.addEventListener("Onclick", () => {
    
    crearInfluencer()
})
