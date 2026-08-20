export const CYBER_RED = "#ff334b";
export const CYBER_CYAN = "#67e8f9";

// Fondo global (body, navbar en estado "top", glow del DotField)
export const CYBER_BG = "#0a0f16";

// Fondo compartido de tarjetas/paneles (Services, Resume, Projects, Skills, Contact...)
export const CYBER_PANEL = "#0d121c";

// Clases reutilizables para que toda tarjeta/panel hable el mismo idioma visual:
// fondo oscuro translúcido + borde sutil que se ilumina en cian al hacer hover.
export const CYBER_PANEL_CLASS =
  "bg-[#0d121c]/80 border border-gray-800 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-300/50";

// Eyebrow tag reutilizable (punto rojo pulsante + etiqueta mono en mayúsculas)
// usado en el encabezado de cada sección (Services.list, Skills.stack, etc).
export const CYBER_EYEBROW_CLASS =
  "flex items-center justify-center gap-2 mb-3 font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase";
