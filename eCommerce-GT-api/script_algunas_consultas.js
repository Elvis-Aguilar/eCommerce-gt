//consulta para el top de 10 producto mas vendidos
db.venta_productos.aggregate([
    {
      $match: {
        fecha: {
          $gte: ISODate("2023-04-01"),
          $lt: ISODate("2023-05-01")
        }
      }
    },
    {
      $group: {
        _id: {
          nombre_producto: "$nombre_producto",
          precio_producto: "$precio_producto",
          vendedor: "$vendedor"
        },
        cantidad_vendida: { $sum: "$cantidad_vendida" }
      }
    },
    {
      $project: {
        _id: 0,
        nombre_producto: "$_id.nombre_producto",
        precio_producto: "$_id.precio_producto",
        vendedor: "$_id.vendedor",
        cantidad_vendida: 1
      }
    },
    {
      $sort: {
        cantidad_vendida: -1
      }
    },
    {
      $limit: 10
    }
])

//base para consultas
db.venta_productos.aggregate([
    // Filtrar por intervalo de tiempo
    {$match: {
      fecha_venta: {$gte: ISODate("2023-04-24"), $lte: ISODate("2022-04-30")}
    }},
  
    // Agrupar por producto y contar ventas
    {$group: {
        nombre_producto:"$producto",
        cantidad_vendida: {$sum: "$cantidad_vendida"}
    }},
  
    // Ordenar en orden descendente según cantidad de ventas
    {$sort: {
      cantidad_vendida: -1
    }}
  ]);


//formatear las fechas si fuese necesario

db.venta_productos.aggregate([
    {
      $match: {
        fecha: {
          $gte: ISODate("2023-04-01"),
          $lt: ISODate("2023-05-01")
        }
      }
    },
    {
      $group: {
        _id: {
          dpiVendedor: "$vendedor.DPI",
          nombreProducto: "$nombre_producto",
          precioPproducto: "$precio_producto",
          fechaVenta:"$fecha"
        },
        cantidad_vendida: { $sum: "$cantidad_vendida" }
      }
    },
    {
        $project: {
          _id: 0,
          dpiVendedor: "$_id.dpiVendedor",
          nombreProducto: "$_id.nombreProducto",
          precioPproducto:"$_id.precioPproducto",
          fechaVenta: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$_id.fechaVenta"
            }
          },
          cantidad_vendida: 1
        }
      }
  ])
  
//consulta de top clientes mas ganancias pro compras generan vendedor = comprador XD
db.ganancias_ventas.aggregate([
  {
    $match: {
      fecha: {
        $gte: ISODate("2023-04-01"),
        $lt: ISODate("2023-05-01")
      }
    }
  },
  {
    $group: {
      _id: {
        vendedor: "$vendedor"
      },
      ganancia_empresa: { $sum: "$ganancia_empresa" },
      ganancia_vendedor: { $sum: "$ganancia_vendedor" }
    }
  },
  {
    $project: {
      _id: 0,
      vendedor: "$_id.vendedor",
      ganancia_empresa: 1,
      ganancia_vendedor:1
    }
  },
  {
    $sort: {
      ganancia_empresa: -1
    }
  },
  {
    $limit: 5
  }
])


//consulta para el top de 5 cliente mas ventas ha realizado 
db.venta_productos.aggregate([
  {
    $match: {
      fecha: {
        $gte: ISODate("2023-04-01"),
        $lt: ISODate("2023-05-01")
      }
    }
  },
  {
    $group: {
      _id: {
        vendedor: "$vendedor"
      },
      cantidad_vendida: { $sum: "$cantidad_vendida" }
    }
  },
  {
    $project: {
      _id: 0,
      vendedor: "$_id.vendedor",
      cantidad_vendida: 1
    }
  },
  {
    $sort: {
      cantidad_vendida: -1
    }
  },
  {
    $limit: 5
  }
])

//Top 10 clientes que más pedidos han realizado
db.peticiones.aggregate([
  {
    $match: {
      fecha_venta: {
        $gte: ISODate("2023-04-01"),
        $lt: ISODate("2023-05-01")
      }
    }
  },
  {
    $group: {
      _id: "$comprador.DPI",
      comprador: { $first: "$comprador" },
      estado: { $sum: 1 }
    }
  },
  {
    $sort: {
      estado: -1
    }
  },
  {
    $limit: 10
  }
])


//Top clientes con mas productos
db.productos.aggregate([
  {
    $match: {
      estado: "Aceptado",
      cantidad_existente: { $gt: 0 }
    }
  },
  {
    $group: {
      _id: "$vendedor.DPI",
      vendedor: { $first: "$vendedor" },
      cantidad_existente: { $sum: 1 }
    }
  },
  {
    $sort: {
      cantidad: -1
    }
  },
  {
    $limit: 10
  }
])



