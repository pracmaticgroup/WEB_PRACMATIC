import { useState } from "react";
import { NavLink } from "react-router-dom";

const enlaces = [
  { nombre: "Inicio", ruta: "/", end: true },
  { nombre: "Nosotros", ruta: "/nosotros" },
  { nombre: "Productos", ruta: "/productos" },
  { nombre: "Contacto", ruta: "/contacto" },
];

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-amber-400/15 bg-[#f5b942]/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300">
      {/* Brillo superior dorado */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />

      {/* CONTENEDOR PRINCIPAL */}
<div className="mx-auto flex min-h-[50px] w-full max-w-7xl items-center justify-between gap-6 px-8 sm:px-12 lg:px-16">
        {/* LOGOTIPO */}
<NavLink
  to="/"
  onClick={() => setMenuAbierto(false)}
  aria-label="PRACMATIC - Inicio"
  style={{
    marginLeft: "40px",
    flexShrink: 0,
  }}
  className="group relative"
>
  <span className="bg-gradient-to-r from-[#e50914] to-[#f5b942] bg-clip-text text-2xl font-black tracking-[0.16em] text-transparent transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(229,9,20,0.45)] sm:text-3xl">
    PRACMATIC
  </span>

  <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-[#e50914] to-[#f5b942] transition-all duration-500 group-hover:w-full" />
</NavLink>

        {/* BOTÓN DEL MENÚ MÓVIL */}
        <button
          type="button"
          className="group relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-amber-400/20 bg-white/[0.03] transition-all duration-300 hover:border-red-500/60 hover:bg-red-700/10 hover:shadow-[0_0_18px_rgba(153,27,27,0.2)] md:hidden"
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

        {/* NAVEGACIÓN */}
        <nav
          id="navegacion-principal"
          aria-label="Navegación principal"
          className={`${
            menuAbierto
              ? "visible translate-y-0 opacity-100"
              : "invisible pointer-events-none -translate-y-3 opacity-0"
          } absolute inset-x-0 top-full flex flex-col gap-2 border-b border-amber-400/15 bg-[#100707]/95 px-5 py-5 shadow-2xl shadow-black/40 backdrop-blur-2xl transition-all duration-300 md:visible md:pointer-events-auto md:static md:translate-y-0 md:flex-row md:items-center md:gap-3 md:border-0 md:bg-transparent md:p-0 md:opacity-100 md:shadow-none md:backdrop-blur-none`}
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
              className="group relative flex items-center overflow-hidden rounded-lg px-4 py-3 text-sm font-medium text-white transition-all duration-300 md:py-2"
            >
              {({ isActive }) => (
                <>
                  {/* Fondo activo y hover */}
                  <span
                    className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-red-800/20"
                        : "bg-transparent group-hover:bg-red-900/15"
                    }`}
                  />

                  {/* Texto */}
                  <span
                    className={`relative z-10 transition-transform duration-300 group-hover:-translate-y-px ${
                      isActive ? "text-amber-100" : "text-white"
                    }`}
                  >
                    {enlace.nombre}
                  </span>

                  {/* Línea inferior roja y dorada */}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-[2px] origin-center rounded-full bg-gradient-to-r from-red-700 via-red-500 to-amber-400 transition-transform duration-300 md:bottom-0 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />

                  {/* Borde dorado sutil del enlace activo */}
                  {isActive && (
                    <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-amber-400/10" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Línea luminosa inferior */}
      <div className="pointer-events-none absolute bottom-0 left-[10%] h-px w-[80%] bg-gradient-to-r from-transparent via-red-700/50 to-amber-400/30" />
    </header>
  );
}

export default Navbar;