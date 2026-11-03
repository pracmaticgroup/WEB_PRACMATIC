
import {
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Headphones,
  Zap,
  Gamepad2,
  CircleDot,
  Monitor,
    CircleCheck,
  Mail,
  MessageCircle
} from "lucide-react";

import Navbar from "../components/Navbar";
const products = [
  {
    number: "01",
    title: "Máquinas de casino",
    description:
      "Máquinas de casino de marcas reconocidas internacionalmente, que combinan tecnología avanzada, diseños innovadores.",
    image: "\producto maquina.png",
    icon: <Gamepad2 size={28} />,
  },
  {
    number: "02",
    title: "Ruletas electrónicas",
    description:
      "Ruletas electrónicas de tecnología avanzada, con diseños sofisticados, sistemas de precisión y experiencias de juego inmersivas.",
    image: "\Ruletaalf.png",
    icon: <CircleDot size={28} />,
  },
  {
    number: "03",
    title: "Sistemas para juego",
    description:
      "Repuestos, kioscos y soluciones tecnológicas especializadas que garantizan mayor funcionalidad, eficiencia y respaldo.",
    image: "/productos2.png",
    icon: <Monitor size={28} />,
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Calidad y confianza",
    description:
      "Equipos seleccionados con criterios de calidad y confiabilidad.",
  },
  {
    icon: Cpu,
    title: "Tecnología moderna",
    description:
      "Soluciones que integran innovación y entretenimiento.",
  },
  {
    icon: Headphones,
    title: "Atención comercial",
    description:
      "Acompañamiento para encontrar equipos según cada necesidad.",
  },
];

const accentText =
  "bg-gradient-to-r from-[#e50914] via-[#f04432] to-[#f5b942] bg-clip-text text-transparent";

const sectionLabel =
  "mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#f5b942]";

const paragraph =
  "text-sm leading-7 text-zinc-400 sm:text-base";

export default function Presentacion() {
  return (
    <>
      <Navbar />

      <main className="relative isolate min-h-screen overflow-x-clip bg-[#0b0707] pt-[50px] text-white selection:bg-[#e50914]/30 selection:text-white">
        {/* Fondo general */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -top-40 left-1/2 h-[420px] w-[min(90vw,800px)] -translate-x-1/2 rounded-full bg-[#e50914]/10 blur-[130px]" />

          <div className="absolute right-[-180px] top-[850px] h-[360px] w-[360px] rounded-full bg-[#f5b942]/[0.06] blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(245,185,66,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(245,185,66,.6) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        
{/* Presentación principal */}
<section className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-24 lg:px-12 lg:pb-28 lg:pt-28">

  {/* Columnas: texto a la izquierda e imagen a la derecha */}
  <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

    {/* Texto */}
    <div className="flex min-w-0 flex-col items-start text-left">

      <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-[#f5b942]/20 bg-[#f5b942]/[0.05] px-4 py-2">
        <span className="h-2 w-2 shrink-0 rounded-full bg-[#f5b942] shadow-[0_0_12px_rgba(245,185,66,0.65)]" />
        <span className="text-[10px] font-medium uppercase tracking-[0.13em] text-zinc-300 sm:text-xs sm:tracking-[0.2em]">
          Tecnología · Entretenimiento · Innovación
        </span>
      </div>


<h1 className="mt-8 text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
  <span className="block animate-[titleRevealLeft_3s_ease-out_both] bg-[linear-gradient(100deg,#FFF1BC_0%,#D6AD61_25%,#FFFFFF_45%,#A87932_65%,#FFF1BC_100%)] bg-[length:250%_auto] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(214,173,97,0.18)]">
    Tecnología para
  </span>

  <span className="mt-1 block animate-[titleRevealLeft_3s_ease-out_0.8s_both] bg-[linear-gradient(100deg,#FFF1BC_0%,#D6AD61_25%,#FFFFFF_45%,#A87932_65%,#FFF1BC_100%)] bg-[length:250%_auto] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(214,173,97,0.18)]">
    grandes experiencias.
  </span>
</h1>



<p className="mt-7 max-w-2xl text-justify text-sm leading-7 text-[#BDB8B8] sm:text-lg sm:leading-8">
  Somos una empresa especializada en la comercialización de{" "}
  <strong className="font-semibold text-[#ffffff]">
    EQUIPOS PARA CASINOS
  </strong>
  . Combinamos{" "}
  <strong className="font-medium text-[#ffffff]">
    tecnología, calidad y atención comercial
  </strong>{" "}
  para ofrecer soluciones al sector del entretenimiento.
</p>



      {/* Botones */}
      <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
        <a
    href="#productos"
    className="group relative isolate inline-flex min-h-[58px] items-center justify-center gap-3 overflow-hidden rounded-full border border-[#f5b942]/40 bg-gradient-to-br from-[#e50914] via-[#bd0812] to-[#78050b] px-8 py-4 text-sm font-semibold tracking-[0.02em] text-white shadow-[0_8px_30px_rgba(229,9,20,0.18),inset_0_1px_0_rgba(255,255,255,0.16)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#f5b942]/80 hover:shadow-[0_14px_40px_rgba(229,9,20,0.28),0_0_22px_rgba(245,185,66,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b942] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
  >
    {/* Reflejo metálico */}
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-[left] duration-700 ease-in-out group-hover:left-[130%]"
    />

    <span className="relative z-10">Conocer nuestros productos </span>

    <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-white/25 bg-white/[0.08] transition-all duration-300 group-hover:border-[#f5b942]/70 group-hover:bg-[#f5b942]/15">
      <ArrowUpRight
        size={16}
        strokeWidth={1.8}
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </span>
  </a>

  {/* Botón secundario */}
  <a
    href="#empresa"
    className="group relative inline-flex min-h-[58px] items-center justify-center gap-3 overflow-hidden rounded-full border border-white/[0.14] bg-gradient-to-b from-white/[0.07] to-white/[0.02] px-8 py-4 text-sm font-medium tracking-[0.02em] text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#f5b942]/50 hover:bg-gradient-to-b hover:from-[#f5b942]/[0.09] hover:to-white/[0.02] hover:text-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.2),0_0_18px_rgba(245,185,66,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b942] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
  >
    <span className="relative">Nosotros</span>

    <span className="h-px w-5 bg-gradient-to-r from-[#f5b942]/80 to-transparent transition-all duration-500 group-hover:w-9 group-hover:from-[#f5b942] group-hover:to-[#f5b942]/20" />
  </a>

          </div>
         </div>

         {/* Imagen de la máquina */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">

          <div
        aria-hidden="true"
        className="absolute inset-10 rounded-full bg-[#e50914]/20 blur-[90px]"
          />


  



{/* Imagen animada de la máquina */}
<div className="relative flex min-w-0 items-center justify-center py-6">

  {/* Halo rojo */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A92129]/25 blur-[90px] animate-pulse"
  />

  {/* Resplandor dorado */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute bottom-[12%] right-[18%] h-36 w-36 rounded-full bg-[#D6AD61]/15 blur-[75px] animate-pulse"
    style={{ animationDuration: "4s" }}
  />

  {/* Anillo luminoso */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D6AD61]/10 animate-[spin_18s_linear_infinite]"
  />

  {/* Marco elegante con bordes redondeados */}
  <div className="group relative z-10 w-full max-w-[340px] overflow-hidden rounded-[28px] border border-[#D6AD61]/20 bg-[#100B0B]/30 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-500 hover:border-[#D6AD61]/45 hover:shadow-[0_25px_70px_rgba(169,33,41,0.18)]">

    {/* Reflejo superior */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-[12%] top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#D6AD61]/70 to-transparent"
    />

    {/* Imagen */}
    <img
      src="\MAQUINASPORTADA.png"
      alt="Máquina de casino "
      style={{
        width: "100%",
        maxHeight: "500px",
        height: "auto",
        objectFit: "contain",
      }}
      className="relative block rounded-[22px] drop-shadow-[0_0_18px_rgba(169,33,41,0.22)] animate-[floatMachine_5s_ease-in-out_infinite] transition-[filter] duration-500 group-hover:drop-shadow-[0_0_25px_rgba(214,173,97,0.3)]"
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />

    {/* Línea decorativa inferior */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-[20%] bottom-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#A92129] to-[#D6AD61]"
    />
  </div>

  {/* Reflejo de luz inferior */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute bottom-[8%] left-1/2 h-5 w-48 -translate-x-1/2 rounded-full bg-[#A92129]/40 blur-xl"
  />

  {/* Identificación */}
  <p className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 text-center text-[10px] font-medium uppercase tracking-[0.3em] text-[#D6AD61]/80 sm:text-xs">
     MACHINE SLOT
  </p>

</div>





    </div>

  </div>



</section>


{/* Empresa */}

<section
  id="empresa"
  className="relative scroll-mt-20 overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-white/[0.025] via-transparent to-[#A92129]/[0.025]"
>
  {/* Iluminación ambiental */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#A92129]/10 blur-[120px]"
  />

  <div className="relative mx-auto grid w-full max-w-7xl items-start gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">

    {/* =========================================
        COLUMNA IZQUIERDA — PRESENTACIÓN
    ========================================= */}
    <div className="min-w-0">

      {/* Etiqueta corporativa */}
      <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#D6AD61]/20 bg-[#D6AD61]/[0.04] px-4 py-2">
        <span className="h-2 w-2 rounded-full bg-[#D6AD61] shadow-[0_0_12px_rgba(214,173,97,0.6)]" />

        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D6AD61] sm:text-xs">
          Conoce PRACMATIC
        </span>
      </div>

      {/* Título principal */}
<h2 className="max-w-2xl text-3xl font-semibold leading-[1.12] tracking-[-0.04em] text-[#F5F1EE] sm:text-4xl lg:text-5xl">
  <span className="bg-gradient-to-b from-[#ffffff] via-[#e67878] to-[#fc0011] bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(192,192,192,0.16)]">
    Impulsamos el entretenimiento con tecnología e innovación.
  </span>
</h2>

      {/* Descripción corporativa */}

<div className="relative mt-7">
  <p className="text-justify text-sm leading-8 text-[#C4BBBB] sm:text-base">
    En{" "}
    <strong className="font-bold tracking-wide text-white">PRACMATIC</strong>
    , somos especialistas en la{" "}
    <strong className="font-semibold text-[#c45f5f]">
      comercialización de máquinas de casino y equipos para juegos de azar
    </strong>
    . Combinamos{" "}
    <strong className="font-medium text-white">
      CALIDAD , TEGNOLOGIA , INNOVACIÓN Y ATENCIÓN COMERCIAL
    </strong>{" "}
    para ofrecer soluciones adaptadas a las necesidades de nuestros clientes,
    construyendo relaciones comerciales basadas en la{" "}
    <strong className="font-semibold text-[#ffffff]">
      confianza, la atención personalizada y el compromiso con el sector del entretenimiento
    </strong>
    .
  </p>
</div>


        {/* =========================================
          VALORES CORPORATIVOS
      ========================================= */}

      </div>

    {/* =========================================
        COLUMNA DERECHA — VISIÓN CORPORATIVA
    ========================================= */}
    <div className="relative mx-auto w-full max-w-xl lg:sticky lg:top-28 lg:max-w-none">

      {/* Halo exterior */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[12%] rounded-full bg-[#A92129]/15 blur-[90px]"
      />

      <div className="group relative overflow-hidden rounded-2xl border border-[#D6AD61]/20 bg-[#100B0B]/80 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-500 hover:border-[#D6AD61]/35 sm:rounded-3xl sm:p-9 lg:p-10">

        {/* Línea luminosa superior */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D6AD61]/70 to-transparent"
        />

        {/* Halo interior */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#A92129]/10 blur-[70px] transition-colors duration-500 group-hover:bg-[#A92129]/20"
        />

        {/* Encabezado */}
        <div className="relative flex items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D6AD61]">
              Nuestra visión
            </p>

            <p className="mt-2 text-sm text-zinc-400">
              Una industria en evolución
            </p>
          </div>

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D6AD61]/20 bg-[#D6AD61]/[0.06]">
            <Zap size={23} className="text-[#D6AD61]" />
          </div>
        </div>

        {/* Mensaje principal */}
        <div className="relative py-10 sm:py-14">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
            Nuestra filosofía
          </p>

          <h3 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Next{" "}
            <span className={accentText}>
              Level.
            </span>
          </h3>

          <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            Integramos{" "}
            <strong className="font-semibold text-white">
              equipamiento, innovación y asesoría comercial
            </strong>{" "}
            para responder a los desafíos de un sector en constante
            transformación.
          </p>
        </div>

        {/* Conceptos clave */}
        <div className="relative flex flex-wrap gap-2">
          {["Tecnología", "Entretenimiento", "Servicio"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-300 transition-colors duration-300 hover:border-[#D6AD61]/30 hover:text-[#D6AD61] sm:text-xs"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Firma visual */}
        <div className="relative mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
          <span className="h-px w-8 bg-gradient-to-r from-[#A92129] to-[#D6AD61]" />

          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
            Innovación que conecta
          </p>
        </div>

        {/* Acento inferior */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 h-[2px] w-1/2 bg-gradient-to-r from-transparent via-[#A92129] to-[#D6AD61]"
        />
      </div>
    </div>

  </div>
</section>


        {/* Productos */}
        
<section
  id="productos"
  className="scroll-mt-20 mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
>
  {/* Encabezado */}
  <div className="group relative min-w-0">

  {/* Etiqueta animada */}
  <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#A92129]/30 bg-[#A92129]/[0.07] px-4 py-2 backdrop-blur-md transition-all duration-500 hover:border-[#C0C0C0]/40 hover:bg-[#A92129]/[0.12]">

    <span className="relative flex h-2.5 w-2.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A92129] opacity-70" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E54852] shadow-[0_0_12px_rgba(229,72,82,0.8)]" />
    </span>

    <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D4D4D4] sm:text-xs">
      Nuestro portafolio
    </span>

    <ArrowUpRight
      size={14}
      className="text-[#C0C0C0] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    />
  </div>

  {/* Título principal */}
<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">

  {/* Título */}
  <div className="group relative min-w-0 flex-1">

    <h2 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
    

      <span className="relative mt-1 inline-block pb-2">
        <span className="animate-[portfolioGlow_5s_ease-in-out_infinite] bg-[linear-gradient(100deg,#FFFFFF_0%,#C0C0C0_20%,#FFFFFF_35%,#A92129_55%,#E5E5E5_75%,#FFFFFF_100%)] bg-[length:250%_auto] bg-clip-text text-transparent">
          Tecnología que marca la diferencia.
        </span>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-3 top-0 h-2 w-2 rounded-full bg-white opacity-70 shadow-[0_0_14px_rgba(255,255,255,0.9)] animate-pulse sm:-right-5"
        />
      </span>
    </h2>

    {/* Línea decorativa */}


  </div>

  {/* Descripción lateral */}
<div className="relative mt-6 max-w-xl border-l border-[#A92129]/50 pl-8 lg:mb-2 lg:ml-16 lg:mt-0 lg:max-w-[440px] lg:pl-10">

  <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C0C0C0] sm:text-xs">
    Calidad · Seguridad · Respaldo
  </span>


<p className="text-justify text-sm leading-8 text-zinc-400 sm:text-base">
  Una selección de productos de fabricantes reconocidos mundialmente, respaldada por
  nuestro compromiso con las exigencias de la industria del entretenimiento.
</p>

  {/* Acento luminoso */}
  <span
    aria-hidden="true"
    className="absolute left-[-1px] top-0 h-10 w-px bg-gradient-to-b from-[#E54852] to-transparent"
  />

</div>

</div>


</div>

  {/* Tarjetas */}
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {products.map((product) => (
      <article
        key={product.number}
        className="group relative isolate flex min-h-[390px] min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111] transition-all duration-500 hover:-translate-y-1 hover:border-[#A92129]/70 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:min-h-[430px]"
      >
        {/* Imagen de fondo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 overflow-hidden"
        >
          <img
            src={product.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover object-center opacity-65 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-80"
          />
        </div>

        {/* Degradado para legibilidad */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/45 to-[#080808]"
        />

        {/* Reflejo rojo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-[#A92129]/20 via-transparent to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Número e icono */}
        <div className="flex items-center justify-between p-6 sm:p-7">
          <span className="text-xs font-medium tracking-[0.25em] text-white/65">
            {product.number}
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-black/30 text-[#E5E5E5] backdrop-blur-md transition-all duration-300 group-hover:border-[#A92129]/70 group-hover:bg-[#A92129]/20 group-hover:text-white">
            {product.icon}
          </div>
        </div>

        {/* Contenido */}
        <div className="mt-auto p-6 pt-12 sm:p-7 sm:pt-16">
          <div className="mb-4 h-[2px] w-10 bg-gradient-to-r from-[#A92129] to-[#C0C0C0] transition-all duration-500 group-hover:w-20" />

          <h3 className="max-w-sm text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
            {product.title}
          </h3>

          <p className="mt-3 max-w-sm text-sm leading-7 text-white/70 transition-colors duration-300 group-hover:text-white/90">
            {product.description}
          </p>


          </div>

        {/* Línea inferior */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#A92129] via-[#C0C0C0] to-transparent transition-all duration-500 group-hover:w-full"
        />
      </article>
    ))}
  </div>

  <a
  href="/ruletas"
  className="mt-7 inline-flex items-center gap-3 rounded-full border border-[#c9a45c]/50 bg-[#c9a45c]/[0.06] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#e5c987] transition-all duration-300 hover:border-[#c9a45c] hover:bg-[#c9a45c] hover:text-[#100b08]"
>
  Ver portafolio
  <ArrowUpRight size={16} />
</a>
</section>


        {/* Diferenciales */}
        <section className="border-y border-white/[0.08] bg-white/[0.015]">
          <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
              <p className={sectionLabel}>Nuestro compromiso</p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Más que equipos,{" "}
                <span className={accentText}>soluciones.</span>
              </h2>

              <p className={`mx-auto mt-5 max-w-xl ${paragraph}`}>
                Trabajamos para construir relaciones comerciales
                duraderas mediante productos adecuados, asesoría
                y atención profesional.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {benefits.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="flex min-w-0 flex-col items-center text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#f5b942]/20 bg-[#e50914]/[0.08] transition duration-300 hover:border-[#f5b942]/50 hover:bg-[#e50914]/[0.14]">
                    <Icon
                      size={24}
                      className="text-[#f5b942]"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    {title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-zinc-400">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
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

        {/* Pie de página */}
        <footer className="border-t border-[#f5b942]/15 bg-[#080505]/80 px-5 py-7 sm:px-8 lg:px-12">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <a
              href="#"
              className={`text-lg font-black tracking-[0.16em] ${accentText}`}
            >
              PRACMATIC
            </a>

            <p className="text-xs leading-6 text-zinc-500">
              © {new Date().getFullYear()} PRACMATIC · Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
