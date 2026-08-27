export interface NavLink {
  id: number;
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { id: 1, label: "Inicio", href: "#home" },
  { id: 2, label: "Servicios", href: "#services" },
  { id: 3, label: "Proyectos", href: "#projects" },
  { id: 4, label: "Historia Profesional", href: "#resume" },
  { id: 5, label: "Tecnologias", href: "#skills" },
  { id: 6, label: "Contacto", href: "#contact" },
];
