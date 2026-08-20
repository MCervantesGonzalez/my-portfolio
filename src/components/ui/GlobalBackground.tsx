"use client";

import React, { useSyncExternalStore } from "react";
import DotField from "./DotField";
import { CYBER_RED, CYBER_CYAN, CYBER_BG } from "@/lib/theme";

// No-op subscribe: nunca notifica cambios, solo nos sirve para diferenciar
// el snapshot del servidor (false) del snapshot del cliente (true) sin
// disparar un setState dentro de un efecto (lo que React 19 marca como
// anti-patrón: "Calling setState synchronously within an effect").
const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export default function GlobalBackground() {
  const isMounted = useIsClient();

  // Mientras no estemos en el cliente, no renderizamos el Canvas/SVG para
  // evitar discrepancias de hidratación con el servidor.
  if (!isMounted) {
    return <div className="fixed inset-0 z-0" style={{ backgroundColor: CYBER_BG }} />;
  }

  return (
    <div className="fixed inset-0 z-0 opacity-60 pointer-events-none">
      <DotField
        dotRadius={1.5}
        dotSpacing={16}
        bulgeStrength={70}
        glowRadius={180}
        sparkle={false}
        waveAmplitude={0}
        cursorRadius={200}
        cursorForce={0.1}
        bulgeOnly
        gradientFrom={CYBER_RED}
        gradientTo={`${CYBER_CYAN}1f`}
        glowColor={CYBER_BG}
      />
    </div>
  );
}
