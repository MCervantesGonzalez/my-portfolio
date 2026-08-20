"use client";

import React, { FormEvent, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/Helper/animations";
import { CONTACT_DATA, SOCIAL_DATA } from "@/lib/contact-data";
import { CYBER_RED, CYBER_CYAN, CYBER_PANEL_CLASS } from "@/lib/theme";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          text: "[SYSTEM]: Mensaje enviado correctamente.",
        });
        form.reset();
      } else {
        setStatus({
          type: "error",
          text: `[ERROR]: ${data.message || "No se pudo enviar el mensaje."}`,
        });
      }
    } catch (error) {
      console.error("Error al enviar el formulario de contacto:", error);
      setStatus({
        type: "error",
        text: "[ERROR]: Fallo de conexión de red.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "px-4 py-3.5 bg-[#05080e]/80 text-white outline-none border border-gray-800 focus:border-cyan-300/60 transition-colors rounded-sm w-full placeholder:text-gray-500 font-mono text-sm";

  return (
    <section id="contact" className="py-20">
      {/* Encabezado */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-16"
      >
        <div
          className="flex items-center justify-center gap-2 mb-3 font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase"
          style={{ color: `${CYBER_CYAN}b3` }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: CYBER_RED }}
          />
          Contact.init
        </div>
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white">
          Hablemos de tu <span style={{ color: CYBER_CYAN }}>proyecto</span>
        </h2>
      </motion.div>

      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* CONTENIDO DE TEXTO */}
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-100">
            Agendemos una llamada si crees que puedo ayudarte.
          </h3>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Contáctame hoy mismo y hablemos sobre cómo puedo ayudarte a alcanzar
            tus objetivos.
          </p>

          {/* LISTA DE INFORMACIÓN DE CONTACTO */}
          <div className="mt-8 space-y-5">
            {CONTACT_DATA.map((contact) => (
              <div key={contact.id} className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 shrink-0 flex items-center justify-center rounded-sm ${CYBER_PANEL_CLASS}`}
                >
                  <Image
                    src={contact.icon}
                    alt={contact.alt || "Icono de contacto"}
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                </div>
                {contact.href ? (
                  <a
                    href={contact.href}
                    className="text-base sm:text-lg font-medium text-gray-300 hover:text-cyan-300 transition-colors"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-base sm:text-lg font-medium text-gray-300">
                    {contact.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* REDES SOCIALES */}
          <div className="flex items-center gap-4 mt-8">
            {SOCIAL_DATA.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`w-12 h-12 flex items-center justify-center rounded-sm transition-all duration-300 hover:-translate-y-1 ${CYBER_PANEL_CLASS} ${social.hoverBg}`}
              >
                <Image
                  src={social.icon}
                  alt={social.alt || social.name || "Icono social"}
                  width={22}
                  height={22}
                  className="w-5.5 h-5.5 object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* FORMULARIO */}
        <form
          onSubmit={handleSubmit}
          className={`relative p-6 md:p-10 rounded-sm ${CYBER_PANEL_CLASS}`}
        >
          {/* Marcadores de esquina */}
          <div
            className="absolute -top-px -left-px w-3.5 h-3.5 border-l-2 border-t-2"
            style={{ borderColor: CYBER_RED }}
          />
          <div
            className="absolute -bottom-px -right-px w-3.5 h-3.5 border-r-2 border-b-2"
            style={{ borderColor: CYBER_RED }}
          />

          {/* Campo Honeypot oculto para evitar SPAM de bots */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
          />

          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="sr-only">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Nombre"
                autoComplete="name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Correo electrónico"
                autoComplete="email"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Teléfono
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Teléfono (Opcional)"
                autoComplete="tel"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tu mensaje"
                rows={4}
                className={`${inputClass} resize-none`}
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full sm:w-auto px-10 py-3.5 border rounded-sm font-mono text-xs sm:text-sm uppercase tracking-[0.15em] transition-colors duration-300 hover:bg-cyan-300/10 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            style={{
              borderColor: `${CYBER_CYAN}99`,
              color: "#e6fbff",
              textShadow: `0 0 8px rgba(103,232,249,0.4)`,
            }}
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>

          {/* Mensaje de respuesta visual */}
          {status && (
            <p
              className={`mt-4 font-mono text-xs ${
                status.type === "success" ? "text-cyan-300" : "text-red-400"
              }`}
            >
              {status.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
