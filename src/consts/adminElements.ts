import ProductosIcon from "@icons/ProductosIcon.astro"
import ServiciosIcon from "@icons/ServiciosIcon.astro"
import CambioPreciosIcon from "@icons/CambioPreciosIcon.astro"
import SubirIcon from "@icons/SubirIcon.astro"
import CorreosIcon from "@icons/CorreosIcon.astro"
import ConfigIcon from "@icons/ConfigIcon.astro"
import ComprasIcon from "@icons/ComprasIcon.astro"
import FinanzasIcon from "@icons/FinanzasIcon.astro"
import ConsultasIcon from "@icons/ConsultasIcon.astro"
import OfertasPeriodosIcon from "@icons/OfertasPeriodosIcon.astro"

export const adminElements = [
  {
    label: "Productos",
    href: "/admin/productos",
    icon: ProductosIcon,
    items: [
      {
        label: "Categorías",
        href: "#categorias"
      },
      {
        label: "Sub categorías",
        href: "#sub-categorias"
      },
      {
        label: "Unidades",
        href: "#unidades"
      },
      {
        label: "Tallas",
        href: "#tallas"
      },
      {
        label: "Catálogo de productos",
        href: "#catalogo"
      }
    ]
  },
  {
    label: "Servicios",
    href: "/admin/servicios",
    icon: ServiciosIcon,
    items: [
      {
        label: "Categorías",
        href: "#categorias"
      },
      {
        label: "Catálogo de servicios",
        href: "#catalogo"
      }
    ]
  },
  {
    label: "Cambio de precios",
    href: "/admin/cambio-de-precios",
    icon: CambioPreciosIcon,
    items: [
      {
        label: "Registrar cambio de precios",
        href: "#cambio-precios"
      }
    ]
  },
  {
    label: "Ofertas por períodos",
    href: "/admin/ofertas-por-periodos",
    icon: OfertasPeriodosIcon,
    items: [
      {
        label: "Nueva oferta",
        href: "#nueva-oferta"
      }
    ]
  },
  {
    label: "Subir orden XML",
    href: "/admin/subir-xml",
    icon: SubirIcon,
  },
  {
    label: "Correos",
    href: "/admin/correos",
    icon: CorreosIcon,
    items: [
      {
        label: "Envía correos a clientes",
        href: "#envia-correos"
      }
    ]
  },
  {
    label: "Configuraciones",
    href: "/admin/configuraciones",
    icon: ConfigIcon,
    items: [
      {
        label: "Sucursales",
        href: "#sucursales"
      },
      {
        label: "Actividades económicas",
        href: "#actividades-economicas"
      },
      {
        label: "Usuarios",
        href: "#usuarios"
      },
      {
        label: "Profesionales",
        href: "#profesionales"
      },
      {
        label: "Vendedores",
        href: "#vendedores"
      },
      {
        label: "Clasif. Proveedores",
        href: "#clasif-proveedores"
      },
      {
        label: "Vehículos",
        href: "#vehiculos",
        subItems: [
          {
            label: "Marcas",
            href: "#vehiculos-marcas"
          },
          {
            label: "Modelos",
            href: "#vehiculos-modelos"
          }
        ]
      },
      {
        label: "Finanzas",
        href: "#finanzas",
        subItems: [
          {
            label: "Deudas iniciales CxC",
            href: "#finanzas-deudas-cxc"
          },
          {
            label: "Deudas iniciales CxP",
            href: "#finanzas-deudas-cxp"
          },
          {
            label: "Tipos de ingresos",
            href: "#finanzas-ingresos"
          },
          {
            label: "Tipos de egresos",
            href: "#finanzas-egresos"
          },
          {
            label: "Descuentos",
            href: "#finanzas-descuentos"
          },
          {
            label: "Días de crédito",
            href: "#finanzas-dias-credito"
          },
          {
            label: "Límites de crédito",
            href: "#finanzas-limites-credito"
          }
        ]
      },
      {
        label: "Configuración general",
        href: "#configuracion-general"
      },
      {
        label: "URL Para Reservas de Servicios",
        href: "#configuracion-reservas-servicios"
      }
    ]
  }
]

export const adminBranchElements = [
  {
    label: "Inventario",
    href: "/admin/sucursal/inventario",
    icon: ProductosIcon,
    items: [
      {
        label: "Productos",
        href: "#inventario-productos"
      },
      {
        label: "Servicios",
        href: "#inventario-servicios"
      },
      {
        label: "Transferencias",
        href: "#inventario-transferencias",
        subItems: [
          {
            label: "Nueva",
            href: "#transferencias-nueva"
          },
          {
            label: "Salidas",
            href: "#transferencias-salidas"
          },
          {
            label: "Entradas",
            href: "#transferencias-entradas"
          }
        ]
      },
      {
        label: "Tomas físicas",
        href: "#inventario-tomas-fisicas"
      }
    ]
  },
  {
    label: "Finanzas",
    href: "/admin/sucursal/finanzas",
    icon: FinanzasIcon,
    items: [
      {
        label: "Cuentas por pagar",
        href: "#finanzas-cxpagar",
        subItems: [
          {
            label: "Estados de cuenta",
            href: "#cxpagar-estados-cuenta"
          },
          {
            label: "Abonos",
            href: "#cxpagar-abonos"
          },
          {
            label: "Abonos anulados",
            href: "#cxpagar-recibos-anulados"
          }
        ]
      },
    ]
  },
  {
    label: "Compras",
    href: "/admin/sucursal/compras",
    icon: ComprasIcon,
    items: [
      {
        label: "Proveedores",
        href: "#compras-proveedores"
      },
      {
        label: "Ordenes de compra",
        href: "#compras-ordenes"
      },
      {
        label: "Nueva compra",
        href: "#compras-nueva-compra"
      },
      {
        label: "Notas de crédito",
        href: "#compras-notas-credito"
      }
    ]
  },
  {
    label: "Consultas y Reportes",
    href: "/admin/sucursal/consultas-y-reportes",
    icon: ConsultasIcon,
    items: [
      {
        label: "Ordenes de trabajo",
        href: "#consultas-ordenes-trabajo",
        subItems: [
          {
            label: "Ordenes de trabajo",
            href: "#ordenes-trabajo-ordenes"
          },
          {
            label: "OT Por vehículo",
            href: "#ordenes-ot-vehiculo"
          },
          {
            label: "Servicios",
            href: "#ordenes-servicios"
          },
          {
            label: "Comisiones",
            href: "#ordenes-comisiones"
          }
        ]
      },
      {
        label: "Inventario",
        href: "#consultas-inventario",
        subItems: [
          {
            label: "Mov por fecha",
            href: "#inventario-mov-fecha"
          },
          {
            label: "Mov por producto",
            href: "#inventario-mov-producto"
          },
          {
            label: "Valuación inventario",
            href: "#inventario-valuacion-inventario"
          }
        ]
      },
      {
        label: "Ventas",
        href: "#consultas-ventas",
        subItems: [
          {
            label: "Por cliente",
            href: "#ventas-por-cliente"
          },
          {
            label: "Por producto",
            href: "#ventas-por-producto"
          },
          {
            label: "Resumen x producto",
            href: "#ventas-resumen-producto"
          },
          {
            label: "Resumen x servicio",
            href: "#ventas-resumen-servicio"
          },
          {
            label: "Por servicio",
            href: "#ventas-por-servicio"
          },
          {
            label: "Por impuesto",
            href: "#ventas-por-impuesto"
          },
          {
            label: "Comisiones",
            href: "#ventas-por-comisiones"
          }
        ]
      },
      {
        label: "Compras",
        href: "#consultas-compras",
        subItems: [
          {
            label: "Por proveedor",
            href: "#compras-por-proveedor"
          },
          {
            label: "Por producto",
            href: "#compras-por-producto"
          },
          {
            label: "Resumen x producto",
            href: "#compras-resumen-producto"
          },
          {
            label: "Por impuesto",
            href: "#compras-por-impuesto"
          }
        ]
      },
      {
        label: "Resumen de cierres",
        href: "#consultas-resumen-cierres"
      }
    ]
  },
  {
    label: "Configuraciones",
    href: "/admin/sucursal/configuraciones",
    icon: ConfigIcon,
    items: [
      {
        label: "Usuarios",
        href: "#sucursal-usuarios"
      },
      {
        label: "Profesionales",
        href: "#sucursal-profesionales"
      },
      {
        label: "Vendedores",
        href: "#sucursal-vendedores"
      },
      {
        label: "Puntos de venta",
        href: "#sucursal-puntos-venta"
      },
      {
        label: "Pinpad terminals",
        href: "#sucursal-pinpad-terminals"
      },
      {
        label: "Impresoras POS",
        href: "#sucursal-impresoras"
      },
      {
        label: "Vehículos",
        href: "#sucursal-vehiculos",
        subItems: [
          {
            label: "Marcas",
            href: "#sucursal-vehiculos-marcas"
          },
          {
            label: "Modelos",
            href: "#sucursal-vehiculos-modelos"
          }
        ]
      },
      {
        label: "Configuración sucursal",
        href: "#sucursal-configuracion"
      }
    ]
  }
]