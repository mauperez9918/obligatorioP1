
// CLASE INFLUENCER
export class Influencer {

    constructor(nombre, mail, comision) {
    this.nombre = nombre;
    this.mail = mail;
    this.comision = comision;  
    this.total = 0;
    this.etiqueta = "SIN ETIQUETA";
    this.detalle = "SIN VENTAS";
    }

    verInfluencer(){
    return {
        nombre: this.nombre,
        mail: this.mail,
        comision: this.comision,
        total: this.total,
        etiqueta: this.etiqueta,
        detalle: this.detalle,
          }
    }
    };

//CLASE ARTICULO
    export class Articulo {

        constructor(codigo, descripcion, precio){
            this.codigo = codigo;
            this.descripcion = descripcion;
            this.precio = precio;
        }

        verArticulo(){
            return {
                codigo: this.codigo,
                descripcion: this.descripcion,
                precio: this.precio,
            }
        }

    };

