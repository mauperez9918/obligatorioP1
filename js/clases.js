 /* <!-- Mauricio Perez Nro: 378914 - Mariano Albornoz  Nro: 357964 --> */

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

    agregarVentaDetalle(nombreInfluencer, nuevaVenta) {
     for (let influencer of this.listaInfluencers){
        if (influencer.nombre = nombreInfluencer) {
            influencer.detalle.push(nuevaVenta);
        }
     }
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
    this.detalle = [];
    }

    };

//CLASE ARTICULO

    export class Articulo {

        constructor(codigo, descripcion, precio){
            this.codigo = codigo;
            this.descripcion = descripcion;
            this.precio = precio;
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

    };