export interface ContactItem {
  id: number;
  icon: string;
  name?: string;
  alt?: string;
  value?: string;
  href?: string;
  hoverBg?: string;
}

export const CONTACT_DATA: ContactItem[] = [
  {
    id: 1,
    icon: "/social_icons/Mail.svg",
    alt: "E-Mail",
    value: "abg.cervantes@gmail.com",
    href: "mailto:abg.cervantes@gmail.com",
  },
  {
    id: 2,
    icon: "/social_icons/Phone.svg",
    alt: "Teléfono",
    value: "(+52) 56-30-60-50-63",
    href: "tel:+525630605063",
  },
  {
    id: 3,
    icon: "/social_icons/Pin.svg",
    alt: "Ubicación",
    value: "Zapopan, Jalisco, México",
  },
];

export const SOCIAL_DATA: ContactItem[] = [
  {
    id: 1,
    name: "LinkedIn",
    icon: "/social_icons/LinkedIn.svg",
    href: "https://www.linkedin.com/in/miguel-cervantes-g/",
    hoverBg: "hover:shadow-[0_0_20px_rgba(103,232,249,0.25)]",
  },
  {
    id: 2,
    name: "GitHub",
    icon: "/social_icons/GitHub.svg",
    href: "https://github.com/MCervantesGonzalez",
    hoverBg: "hover:shadow-[0_0_20px_rgba(103,232,249,0.25)]",
  },
  {
    id: 3,
    name: "Instagram",
    icon: "/social_icons/Instagram.svg",
    href: "https://www.instagram.com/otro_tipo_gamer/",
    hoverBg: "hover:shadow-[0_0_20px_rgba(103,232,249,0.25)]",
  },
];
