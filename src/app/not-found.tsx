import Link from "next/link";
import { Home } from "lucide-react";
import { CYBER_RED, CYBER_CYAN, CYBER_EYEBROW_CLASS } from "@/lib/theme";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 text-white">
      <div className="relative max-w-md p-8 sm:p-10">
        {/* Marcadores de esquina, mismo lenguaje que el resto del sitio */}
        <div
          className="absolute -top-px -left-px w-3.5 h-3.5 border-l-2 border-t-2"
          style={{ borderColor: CYBER_RED }}
        />
        <div
          className="absolute -bottom-px -right-px w-3.5 h-3.5 border-r-2 border-b-2"
          style={{ borderColor: CYBER_RED }}
        />

        <div
          className={CYBER_EYEBROW_CLASS}
          style={{ color: `${CYBER_CYAN}b3` }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: CYBER_RED }}
          />
          System.error
        </div>

        <h1
          className="text-7xl sm:text-8xl font-extrabold tracking-widest"
          style={{
            color: CYBER_CYAN,
            textShadow: "0 0 20px rgba(103,232,249,0.5)",
          }}
        >
          404
        </h1>

        <div className="space-y-2 mt-5">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-100">
            Ruta no encontrada
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            La página que buscas no existe, se movió, o nunca estuvo aquí.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border rounded-sm font-mono text-xs sm:text-sm uppercase tracking-[0.15em] transition-colors duration-300 hover:bg-cyan-300/10"
            style={{
              borderColor: `${CYBER_CYAN}99`,
              color: "#e6fbff",
              textShadow: "0 0 8px rgba(103,232,249,0.4)",
            }}
          >
            <Home className="w-4 h-4" strokeWidth={1.5} />
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
