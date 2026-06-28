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

    borrarVenta(nombreInfluencer, venta){
     this.listaVentas.splice(venta, 1);
    }

    agregarVentaDetalle(nombreInfluencer, nuevaVenta) {
     for (let influencer of this.listaInfluencers){
        if (influencer.nombre == nombreInfluencer) {
            influencer.detalle.push(nuevaVenta);
        }
     }
    }

    // FUNCION CALCULAR COMISIÓN POR VENTA //
    calcularComisionPorVenta(influencer, venta) {

     for (let articulo of this.listaArticulos){

       if(articulo.codigo == venta.codigoArticulo){
       var totalVenta = articulo.precio * venta.cantidad;
       }
     }

    return (influencer.comision * totalVenta) / 100;
    }

    // FUNCION CALCULAR TOTAL POR VENTA //
    calcularTotalPorVenta(venta) {

     for (let articulo of this.listaArticulos){

       if(articulo.codigo == venta.codigoArticulo){
       return articulo.precio * venta.cantidad;
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