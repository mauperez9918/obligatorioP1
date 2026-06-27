// CLASE SISTEMA

export class Sistema {

    constructor(listaInfluencers,listaArticulos,listaVentas){
    this.listaInfluencers = [];
    this.listaArticulos = [];
    this.listaVentas = []; 
    }

    agregarInfluencer(influencer){
    this.listaInfluencers.push(influencer);
    }

    agregarArticulo(articulo){
    this.listaArticulos.push(articulo);
    }

    agregarVenta(venta){
     this.listaVentas.push(venta);   
    }
}



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

    // CLASE VENTA

    export class Venta {

        constructor(numero, codigoArticulo, influencer, cantidad, medio){
            this.numero = numero;
            this.codigoArticulo = codigoArticulo;
            this.influencer = influencer;
            this.cantidad = cantidad;
            this.medio = medio;
        }

        verVenta(){
            return {
             numero: this.numero,
             codigoArticulo: this.codigoArticulo,
             influencer: this.influencer,
             cantidad: this.cantidad,
             medio: this.medio
            }
        }

    };