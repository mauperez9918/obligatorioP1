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

    borrarVenta(venta){
     let ventaEliminar = this.listaVentas.indexOf(venta);
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

    obtenerArticuloPorCodigo(codigoArticulo){
        for (let articulo of this.listaArticulos){
            if(articulo.codigo == codigoArticulo){
                return articulo;
            }
        }
    }

    // ACTUALIZAR ETIQUETAS
actualizarEtiquetas() {

    //SIN VENTAS
    for (let influencer of this.listaInfluencers){
        influencer.etiqueta = "";
        if(influencer.total == 0){
            influencer.etiqueta = "🟦";
        }
    }

    //TOP COMISION
    let maxTotal = 0;
    for (let influencer of this.listaInfluencers){
        if (influencer.total > maxTotal){
            maxTotal = influencer.total;
        }
    }
    for (let influencer of this.listaInfluencers){
        if (influencer.total === maxTotal && maxTotal > 0){
            influencer.etiqueta += "🔥";
        }
    }

    //VENTA MAS CARA
    let maxMonto = 0;
    for (let influencer of this.listaInfluencers){
        for (let venta of influencer.detalle){
            if (venta.monto > maxMonto){
                maxMonto = venta.monto;
            }
        }
    }
    for (let influencer of this.listaInfluencers){
        for (let venta of influencer.detalle){
            if (venta.monto === maxMonto && maxMonto > 0){
                influencer.etiqueta += "🟢";
            }
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
    this.etiqueta = "🟦";
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

        constructor(numero, codigoArticulo, influencer, cantidad, medio, monto){
            this.numero = numero;
            this.codigoArticulo = codigoArticulo;
            this.influencer = influencer;
            this.cantidad = cantidad;
            this.medio = medio;
            this.monto = monto;
        }

    };