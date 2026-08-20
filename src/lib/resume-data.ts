import { GraduationCap, LucideIcon, Scale, Code2 } from "lucide-react";

export interface ResumeItem {
  id: number;
  role: string;
  icon: LucideIcon;
  date: string;
  description?: string;
}

export interface ResumeProps {
  resume: ResumeItem;
}

export const WORK_DATA: ResumeItem[] = [
  {
    id: 1,
    role: "Fullstack Developer — Sprint Custom",
    icon: Code2,
    date: "06/2026 - Presente",
    description:
      "Ecommerce propio con NestJS y Next.js: checkout, pagos con Mercado Pago, autenticación JWT y panel administrativo.",
  },
  {
    id: 2,
    role: "Frontend Developer — PowerGym",
    icon: Code2,
    date: "02/2026 - 03/2026",
    description:
      "Plataforma colaborativa de gestión para gimnasios, con roles diferenciados y sistema de reservas.",
  },
  {
    id: 3,
    role: "Asesor Jurídico — Derecho Familiar",
    icon: Scale,
    date: "2016 - 2024",
    description:
      "Asesoría jurídica, análisis de expedientes y redacción de contratos en práctica independiente.",
  },
];

export const EDUCATION_DATA: ResumeItem[] = [
  {
    id: 1,
    role: "Full Stack Web Developer — Henry Bootcamp",
    icon: GraduationCap,
    date: "06/2025 - 03/2026",
  },
  {
    id: 2,
    role: "Licenciatura en Abogado — Universidad de Guadalajara",
    icon: GraduationCap,
    date: "11/2012 - 06/2016",
  },
];
