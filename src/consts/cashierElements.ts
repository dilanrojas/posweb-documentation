import VehiculosIcon from "@icons/VehiculosIcon.astro"
import ConsultasIcon from "@icons/ConsultasIcon.astro"
import GestionAgendaIcon from "@icons/GestionAgendaIcon.astro"
import OrdenesIcon from "@icons/OrdenesIcon.astro"
import CalendarioIcon from "@icons/CalendarioIcon.astro"
import ApartadosIcon from "@icons/ApartadosIcon.astro"
import VentasIcon from "@icons/VentasIcon.astro"
import FinanzasIcon from "@icons/FinanzasIcon.astro"

export const cashierElements = [
  {
    label: "Vehículos",
    href: "/cajero/vehiculos",
    icon: VehiculosIcon,
    items: [
      {
        label: "Nuevo vehículo",
        href: "#nuevo-vehiculo"
      }
    ]
  },
  {
    label: "Ordenes de trabajo",
    href: "/cajero/ordenes-de-trabajo",
    icon: OrdenesIcon,
    items: [
      {
        label: "Nueva orden de trabajo",
        href: "#nueva-orden-trabajo"
      }
    ]
  },
  {
    label: "Calendarios",
    href: "/cajero/calendarios",
    icon: CalendarioIcon,
    items: [
      {
        label: "Ordenes de trabajo",
        href: "#calendario-ordenes-trabajo"
      },
      {
        label: "Servicios",
        href: "#calendario-servicios"
      },
      {
        label: "Servicios programados",
        href: "#calendario-servicios-programados"
      }
    ]
  },
  {
    label: "Gestión de agenda",
    href: "/cajero/gestion-de-agenda",
    icon: GestionAgendaIcon,
    items: [
      {
        label: "Crear agenda",
        href: "#gestion-crear-agenda"
      },
      {
        label: "Gestionar agenda",
        href: "#gestion-gestionar-agenda"
      }
    ]
  },
  {
    label: "Finanzas",
    href: "/cajero/finanzas",
    icon: FinanzasIcon,
    items: [
      {
        label: "Caja",
        href: "#finanzas-caja"
      },
      {
        label: "Cuentas por cobrar",
        href: "#finanzas-cxcobrar",
        subItems: [
          {
            label: "Estados de cuenta",
            href: "#cxcobrar-estados-cuenta"
          },
          {
            label: "Recibos",
            href: "#cxcobrar-recibos"
          },
          {
            label: "Recibos anulados",
            href: "#cxcobrar-recibos-anulados"
          }
        ]
      },
      {
        label: "Otros ingresos",
        href: "#finanzas-otros-ingresos"
      },
      {
        label: "Otros egresos",
        href: "#finanzas-otros-egresos"
      }
    ]
  },
  {
    label: "Ventas",
    href: "/cajero/ventas",
    icon: VentasIcon,
    items: [
      {
        label: "Clientes",
        href: "#ventas-clientes"
      },
      {
        label: "Cotizaciones",
        href: "#ventas-cotizaciones"
      },
      {
        label: "Nueva venta",
        href: "#ventas-nueva-venta"
      },
      {
        label: "Notas de crédito",
        href: "#ventas-notas-credito"
      }
    ]
  },
  {
    label: "Apartados",
    href: "/cajero/apartados",
    icon: ApartadosIcon,
    items: [
      {
        label: "Nuevo apartado",
        href: "#apartados-nuevo"
      },
      {
        label: "Consultar pagos",
        href: "#apartados-consultar-pagos"
      },
      {
        label: "Productos apartados",
        href: "#apartados-productos"
      }
    ]
  },
  {
    label: "Consultas y Reportes",
    href: "/cajero/consultas-y-reportes",
    icon: ConsultasIcon,
    items: [
      {
        label: "Pinpad",
        href: "#consultas-pinpad",
      }
    ]
  }
]