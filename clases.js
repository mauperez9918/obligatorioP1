export class Influencer {
    nombre = this.nombre;
    mail = this.mail;
    comision = this.comision;
    total = this.total;
    etiqueta = this.etiqueta;
    detalle = this.detalle;
    

    crearInfluencer(nombre, mail, comision, total, etiqueta, detalle) {
    this.nombre = nombre;
    this.mail = mail;
    this.comision = comision;
    this.total = total;
    this.etiqueta = etiqueta;
    this.detalle = detalle;

    return {
    nombre: nombre,
    mail: mail,
    comision: comision,
    total: total,
    etiqueta: etiqueta,
    detalle: detalle,
    }
    };
}

const influencer = new Influencer();
console.log(influencer.crearInfluencer("Mariano", "No tengo correo", "10%", "100$", "sin etiqueta", "Pocas ventas"));