/* <!-- Mauricio Perez Nro: 378914 - Mariano Albornoz  Nro: 357964 --> */

// CLASE SISTEMA

export class Sistema {
  constructor(listaInfluencers, listaArticulos, listaVentas) {
    this.listaInfluencers = [];
    this.listaArticulos = [];
    this.listaVentas = [];
  }

  agregarInfluencer(influencer) {
    this.listaInfluencers.push(influencer);
  }

  agregarArticulo(articulo) {
    this.listaArticulos.push(articulo);
  }

  agregarVenta(venta) {
    this.listaVentas.push(venta);
    this.actualizarGrafico();
  }

  borrarVenta(influencer, numeroVenta, comision) {
    influencer.total = influencer.total - comision;
    for (let i = 0; i < influencer.detalle.length; i++) {
      if (influencer.detalle[i].numero == numeroVenta) {
        influencer.detalle.splice(i, 1);
      }
    }
    let ventaEliminar = this.listaVentas.indexOf(numeroVenta);
    influencer.total = influencer.total - comision;

    for (let venta of this.listaVentas) {
      if (venta.numero == numeroVenta) {
        influencer.detalle.splice(this.listaVentas.indexOf(numeroVenta), 1);
      }
    }

    this.listaVentas.splice(ventaEliminar, 1);
  }

  agregarVentaDetalle(nombreInfluencer, nuevaVenta) {
    for (let influencer of this.listaInfluencers) {
      if (influencer.nombre == nombreInfluencer) {
        influencer.detalle.push(nuevaVenta);
      }
    }
  }

  // FUNCION CALCULAR COMISIÓN POR VENTA //
  calcularComisionPorVenta(influencer, venta) {
    for (let articulo of this.listaArticulos) {
      if (articulo.codigo == venta.codigoArticulo) {
        var totalVenta = articulo.precio * venta.cantidad;
      }
    }

    return (influencer.comision * totalVenta) / 100;
  }

  // FUNCION CALCULAR TOTAL POR VENTA //
  calcularTotalPorVenta(venta) {
    for (let articulo of this.listaArticulos) {
      if (articulo.codigo == venta.codigoArticulo) {
        return articulo.precio * venta.cantidad;
      }
    }
  }

  obtenerArticuloPorCodigo(codigoArticulo) {
    for (let articulo of this.listaArticulos) {
      if (articulo.codigo == codigoArticulo) {
        return articulo;
      }
    }
  }

  // ACTUALIZAR ETIQUETAS
  actualizarEtiquetas() {
    //SIN VENTAS
    for (let influencer of this.listaInfluencers) {
      influencer.etiqueta = "";
      if (influencer.total == 0) {
        influencer.etiqueta = "🟦";
      }
    }

    //TOP COMISION
    let maxTotal = 0;
    for (let influencer of this.listaInfluencers) {
      if (influencer.total > maxTotal) {
        maxTotal = influencer.total;
      }
    }
    for (let influencer of this.listaInfluencers) {
      if (influencer.total === maxTotal && maxTotal > 0) {
        influencer.etiqueta += "🔥";
      }
    }

    //VENTA MAS CARA
    let maxMonto = 0;
    for (let influencer of this.listaInfluencers) {
      for (let venta of influencer.detalle) {
        if (venta.monto > maxMonto) {
          maxMonto = venta.monto;
        }
      }
    }
    for (let influencer of this.listaInfluencers) {
      for (let venta of influencer.detalle) {
        if (venta.monto === maxMonto && maxMonto > 0) {
          influencer.etiqueta += "🟢";
        }
      }
    }
  }

  // ARTICULO MAS VENDIDO
  articuloMasVendido() {
    for (let articulo of this.listaArticulos) {
      articulo.etiqueta = "";
    }

    let maxCantidad = 0;
    for (let articulo of this.listaArticulos) {
      let total = 0;
      for (let venta of this.listaVentas) {
        if (venta.codigoArticulo === articulo.codigo) {
          total += Number(venta.cantidad);
        }
      }
      if (total > maxCantidad) {
        maxCantidad = total;
      }
    }

    for (let articulo of this.listaArticulos) {
      let total = 0;
      for (let venta of this.listaVentas) {
        if (venta.codigoArticulo === articulo.codigo) {
          total += Number(venta.cantidad);
        }
      }
      if (total === maxCantidad && maxCantidad > 0) {
        articulo.etiqueta = "⭐";
      }
    }
  }

  mayorMontoPorMedio() {
    let ventasInstagram = 0;
    let ventasYouTube = 0;
    let ventasX = 0;
    let ventasTikTok = 0;
    let ventasFacebook = 0;
    let ventasOtras = 0;

    for (let venta of this.listaVentas) {
      if (venta.medio == "Instagram") {
        ventasInstagram += venta.monto;
      }

      if (venta.medio == "YouTube") {
        ventasYouTube += venta.monto;
      }

      if (venta.medio == "X") {
        ventasX += venta.monto;
      }

      if (venta.medio == "TikTok") {
        ventasTikTok += venta.monto;
      }

      if (venta.medio == "Facebook") {
        ventasFacebook += venta.monto;
      }

      if (venta.medio == "Otras") {
        ventasOtras += venta.monto;
      }
    }

    let ventasPorMedio = [
      ventasInstagram,
      ventasYouTube,
      ventasX,
      ventasTikTok,
      ventasFacebook,
      ventasOtras,
    ];

    let mayorVenta = ventasPorMedio[0];

    for (let i = 1; i < ventasPorMedio.length; i++) {
      if (ventasPorMedio[i] > mayorVenta) {
        mayorVenta = ventasPorMedio[i];
      }
    }

    return mayorVenta;
  }

  calcularVentasPorMedio(medio) {
    let totalVentas = 0;

    for (let venta of this.listaVentas) {
      if (venta.medio == medio) {
        totalVentas += venta.monto;
      }
    }

    return totalVentas;
  }

  actualizarGrafico() {
    let tamañoMaximo = 200;
    let tamañoMinimo = tamañoMaximo * 0.1;

    let mayorMonto = this.mayorMontoPorMedio();

    let medios = ["Instagram", "YouTube", "X", "TikTok", "Facebook", "Otras"];

    for (let medio of medios) {
      let ventas = this.calcularVentasPorMedio(medio);

      let tamaño =
        tamañoMinimo + (ventas * (tamañoMaximo - tamañoMinimo)) / mayorMonto;

      let burbuja = document.querySelector(".burbuja" + medio);

      burbuja.style.width = tamaño + "px";
      burbuja.style.height = tamaño + "px";
      burbuja.innerHTML = ventas;
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
}

//CLASE ARTICULO

export class Articulo {
  constructor(codigo, descripcion, precio, etiqueta) {
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.precio = precio;
    this.etiqueta = "";
  }
}

// CLASE VENTA

export class Venta {
  constructor(numero, codigoArticulo, influencer, cantidad, medio, monto) {
    this.numero = numero;
    this.codigoArticulo = codigoArticulo;
    this.influencer = influencer;
    this.cantidad = cantidad;
    this.medio = medio;
    this.monto = monto;
  }
}
