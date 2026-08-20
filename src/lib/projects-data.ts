export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description?: string;
  image: string;
  link?: string;
}

export interface ProjectProps {
  project: ProjectItem;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 1,
    title: "Sprint Custom — E-commerce & Personalización",
    category: "Fullstack, E-commerce",
    description:
      "Plataforma de comercio electrónico end-to-end con arquitectura sólida en NestJS y Next.js 14. Incluye checkout integrado con Mercado Pago, procesamiento de webhooks, autenticación con rate limiting y dashboard de administración para control de stock e imágenes optimizadas en la nube.",
    image: "/images/P1.jpg",
    link: "https://sprint-ecommerce-web.onrender.com/",
  },
  {
    id: 2,
    title: "PowerGym — Plataforma de Gestión Fitness",
    category: "Frontend / Web App",
    description:
      "Aplicación web para administración de gimnasios con control de acceso basado en roles (cliente, coach y administrador). Desarrollada con Next.js y Tailwind CSS, incluye catálogo interactivo de clases, reserva de cupos y flujo de membresías orientado a una UX fluida.",
    image: "/images/P2.jpg",
    link: "https://pf-front-ijjg.vercel.app/",
  },
  {
    id: 3,
    title: "Shala Agni — Landing Page Minimalista",
    category: "EN CONSTRUCCION",
    description:
      "Landing page desarrollada con Vite y React, enfocada en proyectar la identidad de bienestar y paz de la marca. Diseñada bajo un enfoque minimalista con maquetación cuidada, tipografía serifa sobria y tonos cálidos que transmiten serenidad al usuario.",
    image: "/images/P3.jpg",
  },
];
