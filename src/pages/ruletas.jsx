
import { 
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Settings,
  Headphones,
  Zap,
  Award,
  ChevronDown,
  CircleCheck,
  Monitor, 
  Users, 
  Gamepad2, 
  Disc, 
  Tv, 
  Palette, 
  Lock, 
  Cpu, 
  Ruler,

  Mail,
  MessageCircle,

} from "lucide-react";

import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
const especificaciones = [
  {
    numero: "01",
    icon: Monitor,
    titulo: "Modelo",
    valor: "V6 (Cabinet / Gabinete)",
  },
  {
    numero: "02",
    icon: Users,
    titulo: "Capacidad de jugadores",
    valor: "6 jugadores",
  },
  {
    numero: "03",
    icon: Gamepad2,
    titulo: "Configuraciones de juego",
    valor: "Ruleta, rueda de dados (dice wheel) o cubilete de dados (dice tumbler)",
  },
  {
    numero: "04",
    icon: Disc,
    titulo: "Opciones de ruleta",
    valor: "Giro simple, giro doble, rueda de luz, cero simple/doble/triple",
  },
  {
    numero: "05",
    icon: Tv,
    titulo: "Pantalla de señalización",
    valor: "LED de 55 pulgadas",
  },
  {
    numero: "06",
    icon: Monitor,
    titulo: "Monitores de jugador",
    valor: "23.8 pulgadas con última interfaz UI y paquetes de juegos",
  },
  {
    numero: "07",
    icon: Palette,
    titulo: "Personalización",
    valor: "Colores personalizados, teclados de apuestas y botones adaptables",
  },
  {
    numero: "08",
    icon: Lock,
    titulo: "Acceso y seguridad",
    valor: "Fácil acceso al validador de billetes y cajero (cashbox)",
  },
  {
    numero: "09",
    icon: Cpu,
    titulo: "Compatibilidad",
    valor: "Compatible con sistemas de seguimiento de jugadores (player tracking)",
  },
  {
    numero: "10",
    icon: Ruler,
    titulo: "Ancho (Width)",
    valor: "2730 mm [107.5\"]",
  },
  {
    numero: "11",
    icon: Ruler,
    titulo: "Largo (Length)",
    valor: "2310 mm [91\"]",
  },
  {
    numero: "12",
    icon: Ruler,
    titulo: "Alto (Height)",
    valor: "1000 mm [39.4\"]",
  },
];
const beneficios = [
  {
    icon: Cpu,
    numero: "01",
    titulo: "Tecnología especializada",
    descripcion:
      "Una solución electrónica pensada para integrar innovación y entretenimiento en espacios profesionales.",
  },
  {
    icon: Award,
    numero: "02",
    titulo: "Calidad y presencia",
    descripcion:
      "Un equipo que aporta presencia y una propuesta tecnológica diferenciada a tu establecimiento.",
  },
  {
    icon: Zap,
    numero: "03",
    titulo: "Adaptabilidad",
    descripcion:
      "Conoce las posibilidades de configuración del equipo según las características de tu negocio.",
  },
  {
    icon: Headphones,
    numero: "04",
    titulo: "Asesoría comercial",
    descripcion:
      "Te acompañamos durante el proceso de consulta para que conozcas el equipo y sus características.",
  },
];


export default function Ruleta() {

const imagenes = [
  "/FOTOS/1.jpeg",
  "/FOTOS/2.jpeg",
  "/FOTOS/3.jpeg",
  "/FOTOS/4.jpeg",
  "/FOTOS/5.jpeg",
  "/FOTOS/6.jpeg",
  "/FOTOS/7.jpeg",
  "/FOTOS/8.jpeg",
  "/FOTOS/9.jpeg",
  "/FOTOS/10.jpeg",
  "/FOTOS/11.jpeg"
  
];


    
const imagenesRuleta = [
  "https://alfastreet.si/wp-content/uploads/2025/07/VLine-V6-0001-scaled.jpeg",
  "https://alfastreet.si/wp-content/uploads/2025/07/VLine-V6-0002-scaled.jpeg",
  "https://alfastreet.si/wp-content/uploads/2025/07/VLine-V6-0003-scaled.jpeg",
  "https://alfastreet.si/wp-content/uploads/2025/07/VLine-V6-0004-scaled.jpeg",
  "https://alfastreet.si/wp-content/uploads/2025/07/VLine-V6-0005-scaled.jpeg",
    "https://alfastreet.si/wp-content/uploads/2025/07/VLine-V8-0005-scaled.jpeg",
];

const [imagenActual, setImagenActual] = useState(0);

useEffect(() => {
  const intervalo = setInterval(() => {
    setImagenActual((actual) => (actual + 1) % imagenesRuleta.length);
  }, 4000);

  return () => clearInterval(intervalo);
}, []);


  return (

    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#080707] pt-[50px] text-white">

        {/* HERO PRINCIPAL */}
        <section className="relative isolate min-h-[760px] overflow-hidden">

          {/* Fondo decorativo */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_45%,rgba(130,20,20,0.22),transparent_48%),linear-gradient(110deg,#080707_35%,#130909_100%)]" />

          <div className="absolute right-[-10%] top-[5%] h-[600px] w-[600px] rounded-full bg-red-700/10 blur-[140px]" />

          <div className="absolute left-0 top-0 h-full w-full opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
              backgroundSize: "75px 75px",
            }}
          />

          <div className="relative mx-auto grid min-h-[760px] max-w-[1450px] items-center gap-5 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-16">

            {/* INFORMACIÓN */}
            <div className="relative z-20 max-w-xl">

              <div className="mb-9 flex items-center gap-3">
                <span className="h-px w-10 bg-[#c9a45c]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.32em] text-[#d7b875]">
                  PRACMATIC / EQUIPAMIENTO
                </span>
              </div>

              <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-red-500">
                Experiencia · Tecnología · Innovación
              </p>

<h1 className="text-6xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl xl:text-[90px]">
  Ruleta
  <span className="mt-2 block text-white">
    Electrónica
  </span>
  <span className="mt-2 block bg-gradient-to-r from-[#e50914] via-[#D6AD61] to-[#96702e] bg-clip-text text-transparent">
    ALFASTREET.
  </span>
</h1>

              <p className="mt-9 max-w-md text-base leading-8 text-white/55 sm:text-lg">
                Tecnología diseñada para transformar espacios de
                entretenimiento. Descubre un equipo que combina presencia,
                innovación y equipamiento profesional.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5">

                <a
                  href="#especificaciones"
                  className="group inline-flex min-h-14 items-center gap-4 rounded-full bg-gradient-to-r from-[#d9bc7c] to-[#a47b36] px-8 text-xs font-extrabold tracking-[0.12em] text-[#120d07] shadow-[0_10px_35px_rgba(201,164,92,0.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(201,164,92,0.3)]"
                >
                  EXPLORAR EQUIPO
                  <ArrowUpRight size={19} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                <a
                  href="/contacto"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-white/65 transition hover:text-[#d9bc7c]"
                >
                  CONSULTAR DISPONIBILIDAD
                  <ArrowRight size={15} />
                </a>

              </div>

              {/* Indicadores */}
              <div className="mt-16 grid max-w-md grid-cols-2 border-t border-white/10 pt-7">

   

              </div>
            </div>

            {/* EXHIBICIÓN DEL PRODUCTO */}
            <div className="relative flex min-h-[490px] items-center justify-center lg:min-h-[650px]">

              {/* Iluminación */}
              <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/20 blur-[110px] sm:h-[530px] sm:w-[530px]" />

              <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a45c]/10 sm:h-[550px] sm:w-[550px]" />

              <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] sm:h-[460px] sm:w-[460px]" />

              {/* Línea de suelo */}
              <div className="absolute bottom-[10%] left-1/2 h-12 w-[75%] -translate-x-1/2 rounded-[50%] bg-red-700/20 blur-[35px]" />

{/* PASARELA DE IMÁGENES */}
<div className="relative z-10 flex h-[490px] w-full items-center justify-center lg:h-[650px]">

  {imagenesRuleta.map((imagen, index) => (
    <img
      key={imagen}
      src={imagen}
      alt={`Ruleta electrónica PRACMATIC - Vista ${index + 1}`}
      className={`absolute inset-0 mx-auto max-h-[570px] h-full w-full object-contain
        drop-shadow-[0_35px_45px_rgba(0,0,0,0.9)]
        transition-all duration-[1200ms] ease-in-out
        ${
          imagenActual === index
            ? "scale-100 opacity-100"
            : "scale-[0.96] opacity-0"
        }`}
    />
  ))}

  {/* Indicadores */}
  <div className="absolute -bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
    {imagenesRuleta.map((_, index) => (
      <button
        key={index}
        onClick={() => setImagenActual(index)}
        aria-label={`Ver imagen ${index + 1}`}
        className={`h-1 rounded-full transition-all duration-500 ${
          imagenActual === index
            ? "w-9 bg-[#c9a45c]"
            : "w-3 bg-white/25 hover:bg-white/60"
        }`}
      />
    ))}
  </div>

</div>

              {/* Etiqueta flotante */}
              <div className="absolute bottom-[13%] left-[2%] z-20 hidden rounded-xl border border-white/10 bg-[#100b0b]/80 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#c9a45c]">
                  MODELO
                </p>
                <p className="mt-1 text-sm font-semibold tracking-wider">
                  V5
                </p>
              </div>



              {/* Número decorativo */}
              <span className="pointer-events-none absolute bottom-[-3%] right-[3%] select-none text-[150px] font-black leading-none text-white/[0.025] sm:text-[220px]">
                01
              </span>

            </div>
          </div>

          {/* Indicador inferior */}
          <a
            href="#especificaciones"
            className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-white/35 transition hover:text-[#c9a45c] md:flex"
          >
            DESCUBRIR
            <ChevronDown size={17} className="animate-bounce" />
          </a>

        </section>

        {/* PRESENTACIÓN EDITORIAL */}
<section className="relative overflow-hidden border-y border-white/[0.07] bg-[#100b0b] px-6 py-20 lg:py-24">

  <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

    {/* VIDEO DE PRESENTACIÓN */}
    <div className="relative group">

      {/* Iluminación de fondo */}
      <div className="absolute -inset-5 rounded-3xl bg-[#c9a45c]/[0.08] blur-3xl transition duration-700 group-hover:bg-[#c9a45c]/[0.15]" />

      <div className="relative overflow-hidden rounded-2xl border border-[#c9a45c]/25 bg-black p-2 shadow-2xl shadow-black/50">

        {/* Encabezado del video */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#c9a45c] shadow-[0_0_10px_#c9a45c]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/60">
              Software Presentation
            </span>
          </div>

          <span className="text-[9px] tracking-widest text-[#c9a45c]/70">
            PRACMATIC
          </span>
        </div>

        {/* Reproductor */}
        <div className="relative aspect-video overflow-hidden rounded-xl bg-[#080808]">


  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    controls
    playbackRate={0.75}
    className="h-full w-full object-contain"
  >
    <source
      src="https://alfastreet.si/wp-content/uploads/2025/08/Games-Main-1.mp4"
      type="video/mp4"
    />
    Tu navegador no admite la reproducción de video.
  </video>


        </div>

        {/* Pie del video */}
        <div className="flex items-center justify-between px-4 py-3">
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
            Tecnología y soluciones digitales
          </p>

          <span className="text-[9px] font-semibold tracking-widest text-[#c9a45c]">
            cortesia alfastreet
          </span>
        </div>

      </div>
    </div>

    {/* INFORMACIÓN */}
    <div className="relative">

      <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#c9a45c]">
        01 / CONOCE EL EQUIPO
      </p>

      <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        Tecnología que
        <span className="block text-[#c9a45c]">
          marca presencia.
        </span>
      </h2>

      <div className="mt-8 border-l border-[#c9a45c]/30 pl-7 lg:pl-9">

        <p className="max-w-xl text-base leading-8 text-white/55">
          Cada equipo representa una oportunidad para incorporar
          tecnología al sector del entretenimiento. En PRACMATIC
          ponemos a tu disposición soluciones de equipamiento para
          casinos, acompañadas de asesoría comercial y atención
          especializada.
        </p>

        <div className="mt-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d9bc7c]">
          <span className="h-px w-9 bg-[#c9a45c]" />
          Conoce sus características
        </div>

      </div>

    </div>

  </div>
</section>

        {/* ESPECIFICACIONES */}
        <section
          id="especificaciones"
          className="scroll-mt-20 relative overflow-hidden px-6 py-24 lg:py-32"
        >

          <div className="absolute right-[-10%] top-0 h-96 w-96 rounded-full bg-red-800/10 blur-[130px]" />

          <div className="relative mx-auto max-w-7xl">

            <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">

              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#c9a45c]">
                  02 / DETALLES DEL PRODUCTO
                </p>

                <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  Ficha <span className="text-[#c9a45c]">técnica.</span>
                </h2>
              </div>

<p className="max-w-sm border-b border-[#c9a45c]/50 pb-3 text-sm leading-7 text-white/60">
  Información general del equipo. Consulta con nuestro
  equipo comercial para conocer sus especificaciones
  particulares.
</p>

            </div>

            <div className="border-y border-white/10">

              {especificaciones.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.numero}
                    className="group grid grid-cols-[45px_45px_1fr] items-center gap-4 border-b border-white/[0.07] py-7 transition duration-300 last:border-0 hover:bg-white/[0.025] sm:grid-cols-[65px_60px_1fr_1fr]"
                  >

                    <span className="text-xs font-medium text-white/25">
                      {item.numero}
                    </span>

                    <Icon
                      size={22}
                      className="text-[#c9a45c] transition duration-300 group-hover:scale-110"
                    />

                    <p className="text-sm text-white/50">
                      {item.titulo}
                    </p>

                    <p className="col-start-3 text-sm font-semibold text-white sm:col-start-4 sm:text-right">
                      {item.valor}
                    </p>

                  </div>
                );
              })}

            </div>

            <p className="mt-6 text-[10px] leading-6 text-white/30">
              * Las características y configuraciones específicas están
              sujetas a confirmación comercial.
            </p>

          </div>
        </section>

        {/* BENEFICIOS */}

<section className="relative isolate overflow-hidden bg-[#080808] py-28 text-white">

      {/* ILUMINACIÓN DE FONDO */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#A92129]/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#c9a45c]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ENCABEZADO */}
        <div className="mb-16 flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c9a45c]">
            PRACMATIC · EQUIPAMIENTO PREMIUM
          </span>

          <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Tecnología que
            <span className="block bg-gradient-to-r from-[#f1dba5] via-[#c9a45c] to-[#8c672d] bg-clip-text text-transparent">
              transforma experiencias.
            </span>
          </h2>

          <p className="max-w-xl text-sm leading-7 text-white/50">
            Descubre equipos diseñados para ofrecer innovación,
            calidad y una experiencia de entretenimiento superior.
          </p>
        </div>

        {/* PRESENTACIÓN PRINCIPAL */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">

          {/* IMAGEN DEL PRODUCTO */}
          <div className="group relative flex min-h-[480px] items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#171111] via-[#0c0b0b] to-black p-8 sm:min-h-[620px]">

            {/* RESPLANDOR */}
            <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A92129]/20 blur-[100px] transition-all duration-700 group-hover:bg-[#A92129]/30" />

            {/* ANILLO DECORATIVO */}
            <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a45c]/10 transition-transform duration-1000 group-hover:scale-110 sm:h-[500px] sm:w-[500px]" />

            <div className="absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10 sm:h-[410px] sm:w-[410px]" />

            {/* IMAGEN */}
{/* PASARELA DE IMÁGENES */}
{/* PASARELA DE IMÁGENES */}
<div className="relative z-10 flex h-[480px] w-full items-center justify-center overflow-hidden sm:h-[560px]">

  {imagenes.map((imagen, index) => (
    <img
      key={imagen}
      src={imagen}
      alt={`Máquina de casino - Vista ${index + 1}`}
      className={`absolute inset-0 h-full w-full object-contain p-4
        drop-shadow-[0_35px_45px_rgba(0,0,0,0.8)]
        transition-all duration-1000 ease-in-out
        ${
          imagenActual === index
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0"
        }`}
    />
  ))}

  {/* INDICADORES */}
  <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
    {imagenes.map((_, index) => (
      <button
        key={index}
        onClick={() => setImagenActual(index)}
        aria-label={`Ver imagen ${index + 1}`}
        className={`h-1.5 rounded-full transition-all duration-500 ${
          imagenActual === index
            ? "w-9 bg-[#c9a45c]"
            : "w-3 bg-white/30 hover:bg-white/70"
        }`}
      />
    ))}
  </div>

</div>
            {/* ETIQUETA */}
            <div className="absolute left-7 top-7 z-20">
              <span className="rounded-full border border-[#c9a45c]/30 bg-black/40 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#e5c987] backdrop-blur-xl">
                Equipo destacado
              </span>
            </div>

            <div className="absolute bottom-7 right-7 z-20 text-right">
              <span className="block text-[10px] uppercase tracking-[0.3em] text-white/30">
                PRACMATIC
              </span>
              <span className="text-3xl font-light text-white/20">
                01
              </span>
            </div>
          </div>

          {/* INFORMACIÓN */}
          <div className="flex flex-col">

            <span className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
              Nuestra selección
            </span>

            <h3 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Máquina de
              <span className="block text-[#c9a45c]">
                casino premium
              </span>
            </h3>

            <p className="mt-7 text-sm leading-8 text-white/55">
              Una solución de entretenimiento que combina diseño,
              tecnología y funcionalidad. Un equipo pensado para
              espacios que buscan incorporar innovación y calidad
              en sus operaciones.
            </p>

            {/* CARACTERÍSTICAS */}
            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#c9a45c]/20 bg-[#c9a45c]/10">
                  <Cpu className="text-[#c9a45c]" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Tecnología integrada
                  </h4>
                  <p className="mt-1 text-xs text-white/40">
                    Arquitectura y sistemas especializados.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#c9a45c]/20 bg-[#c9a45c]/10">
                  <ShieldCheck className="text-[#c9a45c]" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Calidad y confiabilidad
                  </h4>
                  <p className="mt-1 text-xs text-white/40">
                    Equipamiento para uso profesional.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#c9a45c]/20 bg-[#c9a45c]/10">
                  <Zap className="text-[#c9a45c]" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Diseño y funcionalidad
                  </h4>
                  <p className="mt-1 text-xs text-white/40">
                    Una propuesta pensada para destacar.
                  </p>
                </div>
              </div>

            </div>

            {/* BOTÓN */}
            <a
              href="/contacto"
              className="group mt-10 inline-flex w-fit items-center gap-4 rounded-full bg-gradient-to-r from-[#A92129] to-[#7d1119] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_12px_35px_rgba(169,33,41,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(169,33,41,0.35)]"
            >
              Solicitar información
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>
        </div>

        {/* FRANJA INFERIOR */}
        <div className="mt-16 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">

          <div className="flex items-center gap-3">
            <Award className="text-[#c9a45c]" size={21} />
            <span className="text-xs uppercase tracking-[0.15em] text-white/50">
              Equipamiento especializado
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="text-[#c9a45c]" size={21} />
            <span className="text-xs uppercase tracking-[0.15em] text-white/50">
              Calidad y confianza
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Cpu className="text-[#c9a45c]" size={21} />
            <span className="text-xs uppercase tracking-[0.15em] text-white/50">
              Tecnología para casinos
            </span>
          </div>

        </div>

      </div>
    </section>
        {/* CIERRE COMERCIAL */}
       <section
  id="contacto"
  className="relative overflow-hidden px-6 py-28 lg:py-36"
>
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(145,20,20,0.22),transparent_65%)]" />

  <div className="relative mx-auto max-w-5xl text-center">

    <div className="mb-8 flex items-center justify-center gap-3">
      <span className="h-px w-10 bg-[#c9a45c]" />
      <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#c9a45c]">
        PRACMATIC / CONTACTO
      </span>
      <span className="h-px w-10 bg-[#c9a45c]" />
    </div>

    <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
      Tu próximo proyecto
      <span className="block bg-gradient-to-r from-[#f4dfa9] via-[#c9a45c] to-[#96702e] bg-clip-text text-transparent">
        comienza aquí.
      </span>
    </h2>

    <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/50">
      ¿Estás buscando equipos para tu casino o deseas conocer nuestras soluciones?
      Contáctanos y descubre nuestro portafolio de productos, características,
      disponibilidad y oportunidades comerciales.
    </p>

    {/* BOTONES DE CONTACTO */}
    <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-3">

      {/* CORREO */}
      <a
        href="mailto:comercial@pracmaticgroup.com"
        className="group flex min-h-[190px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#c9a45c]/60 hover:bg-[#c9a45c]/[0.07] hover:shadow-[0_20px_50px_rgba(201,164,92,0.08)]"
      >
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#c9a45c]/20 bg-[#c9a45c]/10 text-[#c9a45c] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c9a45c] group-hover:text-black">
          <Mail size={25} />
        </div>

        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
          Correo comercial
        </span>

        <span className="mt-3 break-all text-xs font-medium text-white/80 transition-colors group-hover:text-[#e5c987]">
          comercial@pracmaticgroup.com
        </span>

        <span className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#c9a45c]">
          Enviar correo
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </a>

      {/* WHATSAPP 1 */}
      <a
        href="https://wa.me/573115531458"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex min-h-[190px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#c9a45c]/60 hover:bg-[#c9a45c]/[0.07] hover:shadow-[0_20px_50px_rgba(201,164,92,0.08)]"
      >
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#c9a45c]/20 bg-[#c9a45c]/10 text-[#c9a45c] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c9a45c] group-hover:text-black">
          <MessageCircle size={25} />
        </div>

        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
          WhatsApp comercial
        </span>

        <span className="mt-3 text-base font-semibold text-white/90">
          311 553 1458
        </span>

        <span className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#c9a45c]">
          Iniciar conversación
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </a>

      {/* WHATSAPP 2 */}
      <a
        href="https://wa.me/573204906921"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex min-h-[190px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#c9a45c]/60 hover:bg-[#c9a45c]/[0.07] hover:shadow-[0_20px_50px_rgba(201,164,92,0.08)]"
      >
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#c9a45c]/20 bg-[#c9a45c]/10 text-[#c9a45c] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c9a45c] group-hover:text-black">
          <MessageCircle size={25} />
        </div>

        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
          WhatsApp comercial
        </span>

        <span className="mt-3 text-base font-semibold text-white/90">
          320 490 6921
        </span>

        <span className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#c9a45c]">
          Iniciar conversación
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </a>

    </div>

    <div className="mt-12 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/25">
      <CircleCheck size={13} className="text-[#c9a45c]/60" />
      Atención comercial PRACMATIC
    </div>

  </div>
</section>

      </main>
    </>
  );
}
