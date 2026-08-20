import { LayoutTemplate, ShoppingCart, Building2, Blocks } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: number;
  title: string;
  icon: LucideIcon;
  description: string;
}

export interface ServiceProps {
  service: ServiceItem;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 1,
    title: "Landing Pages",
    icon: LayoutTemplate,
    description:
      "Páginas de una sola vista pensadas para convertir, con diseño responsivo y carga rápida.",
  },
  {
    id: 2,
    title: "Ecommerce",
    icon: ShoppingCart,
    description:
      "Tiendas en línea con carrito, pagos integrados y gestión de inventario real.",
  },
  {
    id: 3,
    title: "Portales Empresariales",
    icon: Building2,
    description:
      "Sitios corporativos que transmiten seriedad y organizan la información de tu negocio.",
  },
  {
    id: 4,
    title: "Arquitectura Web",
    icon: Blocks,
    description:
      "Backend y estructura sólida: bases de datos, autenticación y APIs pensadas para escalar.",
  },
];
