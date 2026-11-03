
import { useState } from "react";
import { NavLink } from "react-router-dom";

const enlaces = [
  { nombre: "Inicio", ruta: "/", end: true },
  { nombre: "Nosotros", ruta: "/nosotros" },
  { nombre: "Productos", ruta: "/ruletas" },
  { nombre: "Contactanos", ruta: "/productos" },
];

// WHATSAPP CORPORATIVO
// Reemplaza 57XXXXXXXXXX por tu número, incluyendo el indicativo de Colombia.
const whatsappUrl =
  "https://api.whatsapp.com/send?phone=57XXXXXXXXXX&text=Hola%2C%20estoy%20interesado%20en%20los%20equipos%20de%20PRACMATIC.";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-amber-400/15 bg-[#f5b942]/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300">

      {/* BRILLO SUPERIOR DORADO */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />

      {/* CONTENEDOR PRINCIPAL */}
      <div className="mx-auto flex min-h-[60px] w-full max-w-7xl flex-nowrap items-center justify-between gap-3 px-4 sm:px-8 lg:px-10">

        {/* LOGOTIPO */}
        <NavLink
          to="/"
          onClick={() => setMenuAbierto(false)}
          aria-label="PRACMATIC - Inicio"
          className="group relative shrink-0"
        >
          <span className="bg-gradient-to-r from-[#e50914] to-[#f5b942] bg-clip-text text-xl font-black tracking-[0.12em] text-transparent transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(229,9,20,0.45)] sm:text-2xl lg:text-3xl">
            PRACMATIC
          </span>

          <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-[#e50914] to-[#f5b942] transition-all duration-500 group-hover:w-full" />
        </NavLink>

        {/* NAVEGACIÓN */}
        <nav
          id="navegacion-principal"
          aria-label="Navegación principal"
          className={`${
            menuAbierto
              ? "visible translate-y-0 opacity-100"
              : "invisible pointer-events-none -translate-y-3 opacity-0"
          } absolute inset-x-0 top-full flex flex-col gap-2 border-b border-amber-400/15 bg-[#100707]/95 px-5 py-5 shadow-2xl shadow-black/40 backdrop-blur-2xl transition-all duration-300 md:visible md:pointer-events-auto md:static md:translate-y-0 md:flex md:flex-1 md:flex-row md:flex-nowrap md:items-center md:justify-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:opacity-100 md:shadow-none md:backdrop-blur-none`}
        >
          {enlaces.map((enlace, index) => (
            <NavLink
              key={enlace.ruta}
              to={enlace.ruta}
              end={enlace.end}
              onClick={() => setMenuAbierto(false)}
              style={{
                transitionDelay: menuAbierto
                  ? `${index * 55}ms`
                  : "0ms",
              }}
              className="group relative flex shrink-0 items-center overflow-hidden rounded-lg px-3 py-3 text-xs font-medium text-white transition-all duration-300 lg:px-4 lg:text-sm md:py-2"
            >
              {({ isActive }) => (
                <>
                  {/* FONDO ACTIVO Y HOVER */}
                  <span
                    className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-red-800/20"
                        : "bg-transparent group-hover:bg-red-900/15"
                    }`}
                  />

                  {/* TEXTO */}
                  <span
                    className={`relative z-10 whitespace-nowrap transition-transform duration-300 group-hover:-translate-y-px ${
                      isActive ? "text-amber-100" : "text-white"
                    }`}
                  >
                    {enlace.nombre}
                  </span>

                  {/* LÍNEA INFERIOR ROJA Y DORADA */}
                  <span
                    className={`absolute bottom-1 left-3 right-3 h-[2px] origin-center rounded-full bg-gradient-to-r from-red-700 via-red-500 to-amber-400 transition-transform duration-300 md:bottom-0 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />

                  {/* BORDE DORADO DEL ENLACE ACTIVO */}
                  {isActive && (
                    <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-amber-400/10" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* ACCIONES DERECHA */}
        <div className="flex shrink-0 items-center gap-3">

          {/* BOTÓN WHATSAPP */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar a PRACMATIC por WhatsApp"
            title="Contáctanos por WhatsApp"
            className="group relative z-[60] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-green-300/60 bg-gradient-to-br from-[#4ade80] via-[#16a34a] to-[#047857] text-white shadow-[0_0_12px_rgba(34,197,94,0.55),0_0_25px_rgba(34,197,94,0.25)] transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(34,197,94,0.8)]"
          >
            {/* RESPLANDOR EXTERIOR */}
            <span className="absolute inset-[-4px] rounded-full border border-green-400/30 transition-all duration-500 group-hover:inset-[-7px] group-hover:border-green-300/60" />

            {/* ICONO WHATSAPP */}
            <svg
              viewBox="0 0 32 32"
              className="relative z-10 h-5 w-5 fill-current drop-shadow-md"
              aria-hidden="true"
            >
              <path d="M16.04 2.67C8.7 2.67 2.73 8.62 2.73 15.94c0 2.34.62 4.63 1.8 6.65L2.6 29.33l6.92-1.81a13.4 13.4 0 0 0 6.51 1.66h.01c7.33 0 13.3-5.95 13.3-13.27a13.2 13.2 0 0 0-3.9-9.4 13.25 13.25 0 0 0-9.4-3.84zm0 24.25h-.01a11.1 11.1 0 0 1-5.65-1.54l-.4-.24-4.1 1.08 1.1-4-.26-.41a11.03 11.03 0 0 1-1.7-5.87c0-6.08 4.95-11.03 11.03-11.03 2.95 0 5.72 1.15 7.8 3.23a10.96 10.96 0 0 1 3.23 7.8c0 6.08-4.95 11.03-11.04 11.03zm6.06-8.26c-.33-.17-1.95-.96-2.25-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.39.25-.72.08-.33-.17-1.4-.52-2.67-1.65-.99-.88-1.65-1.96-1.84-2.29-.19-.33-.02-.51.15-.68.15-.15.33-.39.5-.58.17-.19.22-.33.33-.55.11-.22.06-.41-.03-.58-.08-.17-.74-1.79-1.02-2.45-.27-.64-.54-.55-.74-.56l-.63-.01c-.22 0-.58.08-.88.41-.3.33-1.15 1.13-1.15 2.75s1.18 3.19 1.35 3.41c.17.22 2.32 3.54 5.62 4.96.79.34 1.4.55 1.88.7.79.25 1.5.21 2.07.13.63-.09 1.95-.8 2.23-1.57.27-.77.27-1.43.19-1.57-.08-.14-.3-.22-.63-.39z" />
            </svg>

            {/* INDICADOR LUMINOSO */}
            <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-[#07110b] bg-green-300 shadow-[0_0_10px_rgba(134,239,172,0.9)]" />
          </a>

          {/* BOTÓN MENÚ MÓVIL */}
          <button
            type="button"
            className="group relative z-50 flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border border-amber-400/20 bg-white/[0.03] transition-all duration-300 hover:border-red-500/60 hover:bg-red-700/10 hover:shadow-[0_0_18px_rgba(153,27,27,0.2)] md:hidden"
            onClick={() => setMenuAbierto((abierto) => !abierto)}
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
            aria-controls="navegacion-principal"
          >
            <span
              className={`h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                menuAbierto
                  ? "translate-y-[3.5px] rotate-45"
                  : "group-hover:w-6"
              }`}
            />

            <span
              className={`h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                menuAbierto
                  ? "-translate-y-[3.5px] -rotate-45"
                  : "group-hover:w-3"
              }`}
            />
          </button>
        </div>
      </div>

      {/* LÍNEA LUMINOSA INFERIOR */}
      <div className="pointer-events-none absolute bottom-0 left-[10%] h-px w-[80%] bg-gradient-to-r from-transparent via-red-700/50 to-amber-400/30" />
    </header>
  );
}

export default Navbar;
