
import {
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Handshake,
  Target,
  Eye,
  Award,
  Lightbulb,
  Users,
  Gem,
  CheckCircle2,
  MoveUpRight,
} from "lucide-react";

import Navbar from "../components/Navbar";
import "./Nosotros.css";

const values = [
  {
    number: "01",
    title: "Calidad",
    description:
      "Seleccionamos equipos y soluciones teniendo en cuenta su calidad, funcionalidad y capacidad para responder a las necesidades del sector.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Innovación",
    description:
      "Nos acercamos a las nuevas tecnologías y tendencias que contribuyen a la evolución de la industria del entretenimiento.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Confianza",
    description:
      "Construimos relaciones comerciales transparentes, basadas en el respeto, la responsabilidad y el cumplimiento.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Compromiso",
    description:
      "Nos enfocamos en comprender cada necesidad para ofrecer una atención comercial cercana y orientada a soluciones.",
    icon: Award,
  },
];

const principles = [
  {
    number: "01",
    title: "Conocimiento del sector",
    description:
      "Comprendemos las necesidades del mercado de equipos para casinos y del entretenimiento.",
    icon: Cpu,
  },
  {
    number: "02",
    title: "Atención personalizada",
    description:
      "Escuchamos a nuestros clientes para orientar cada solicitud de acuerdo con sus necesidades.",
    icon: Users,
  },
  {
    number: "03",
    title: "Calidad en cada propuesta",
    description:
      "Priorizamos soluciones que aporten funcionalidad, tecnología y valor a cada proyecto.",
    icon: Gem,
  },
];

const goldText =
  "bg-gradient-to-r from-[#FFF1BC] via-[#D6AD61] to-[#A87932] bg-clip-text text-transparent";

const label =
  "text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D6AD61] sm:text-xs";

export default function Nosotros() {
  return (
    <>
      <Navbar />

      <main className="relative isolate min-h-screen overflow-x-clip bg-[#0b0707] pt-[50px] text-white selection:bg-[#e50914]/30">

        {/* FONDO GENERAL */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-250px] top-[500px] h-[500px] w-[500px] rounded-full bg-[#A92129]/10 blur-[150px]" />
          <div className="absolute right-[-200px] top-[1800px] h-[450px] w-[450px] rounded-full bg-[#D6AD61]/[0.04] blur-[140px]" />
        </div>

        {/* ==================================================
            01. PORTADA EDITORIAL
        ================================================== */}

        <section className="relative mx-auto max-w-[1600px] px-5 pb-16 pt-20 sm:px-10 sm:pb-24 sm:pt-28 lg:px-16">

          <div className="grid items-end gap-12 lg:grid-cols-[1.35fr_0.65fr]">


<div className="relative">

  {/* IDENTIFICADOR DE EMPRESA */}
  <div className="mb-9 flex items-center gap-4 animate-[fadeInUp_0.9s_ease-out_both]">
    <span className="h-[1px] w-12 origin-left bg-[#D6AD61] animate-[expandLine_1.2s_ease-out_both]" />

    <span className={`${label} animate-[fadeInUp_1s_ease-out_both]`}>
      PRACMATIC · NUESTRA EMPRESA
    </span>
  </div>

  {/* FRASE INTRODUCTORIA */}
  <p className="mb-3 font-mono text-xs tracking-[0.35em] text-white/40 animate-[fadeInUp_1.1s_ease-out_both]">
    CONOCE NUESTRA ESENCIA
  </p>

  {/* TÍTULO PRINCIPAL */}
  <h1 className="text-[clamp(3.8rem,10vw,9rem)] font-semibold leading-[0.83] tracking-[-0.085em]">

    <span className="inline-block animate-[fadeInUp_1.2s_ease-out_both]">
      Somos
    </span>

    <br />

    <span
      className={`${goldText} relative inline-block animate-[fadeInUp_1.5s_ease-out_both]`}
    >
      PRACMATIC.

      {/* DESTELLO DORADO */}
      <span className="pointer-events-none absolute inset-0 animate-[goldShine_4s_ease-in-out_2s_infinite] bg-gradient-to-r from-transparent via-white/70 to-transparent bg-clip-text text-transparent">
        PRACMATIC.
      </span>
    </span>
  </h1>
</div>


            <div className="max-w-md pb-2 lg:justify-self-end">
              <div className="mb-6 h-[2px] w-16 bg-gradient-to-r from-[#e50914] to-[#D6AD61]" />

              <p className="text-lg font-medium leading-8 text-white sm:text-xl">
                Tecnología, entretenimiento e innovación para una industria
                en constante evolución.
              </p>

              <p className="mt-5 text-sm leading-8 text-zinc-500">
                Somos una empresa especializada en la comercialización de
                equipos para casinos, comprometida con la calidad y la
                atención comercial.
              </p>

              <a
                href="#nuestra-empresa"
                className="group mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#D6AD61] transition hover:text-white"
              >
                Descubrir nuestra empresa
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>

          {/* Imagen panorámica protagonista */}
          <div className="relative mt-16 sm:mt-24">

            <div className="absolute -inset-3 border border-[#D6AD61]/10 sm:-inset-5" />

            <div className="relative h-[340px] overflow-hidden bg-[#160D0D] sm:h-[480px] lg:h-[590px]">

<img
  src="/Elegancia dorada de casino.png"
  alt="Equipamiento tecnológico para casinos"
  className="h-[450px] w-full object-contain transition duration-1000 hover:scale-[1.025]"
/>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/20" />

              <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-between gap-5 p-6 sm:flex-row sm:items-end sm:p-10">

<div className="animate-[elegantFloat_6s_ease-in-out_infinite]">
  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#D6AD61] animate-[goldPulse_5s_ease-in-out_infinite]">
    Nuestra identidad
  </p>

  <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-4xl">
    Experiencia que impulsa
    <br />
    <span className="bg-gradient-to-r from-white via-[#F3D99B] to-white bg-clip-text text-transparent bg-[length:200%_100%] animate-[goldShine_7s_ease-in-out_infinite]">
      nuevas oportunidades.
    </span>
  </h2>
</div>

                <span className="font-mono text-xs tracking-widest text-white/50">
                  PRACMATIC / 001
                </span>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                TECNOLOGÍA · ENTRETENIMIENTO · INNOVACIÓN
              </span>

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                EST. PRACMATIC
              </span>
            </div>
          </div>
        </section>

        {/* ==================================================
            02. QUIÉNES SOMOS
        ================================================== */}

        <section
          id="nuestra-empresa"
          className="border-y border-white/[0.07] bg-[#100A0A] px-5 py-24 sm:px-10 sm:py-32 lg:px-16"
        >
          <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-28">

            <div>
              <p className={label}>01 / QUIÉNES SOMOS</p>

              <h2 className="mt-8 text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl">
                Una empresa con
                <br />
                <span className={goldText}>visión de futuro.</span>
              </h2>

              <div className="mt-10 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-[#e50914]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  Nuestra trayectoria comienza aquí
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center">

              <p className="text-justify text-base leading-9 text-zinc-300 sm:text-lg sm:leading-10">
                <strong className="text-white">PRACMATIC</strong> es una
                empresa orientada a la comercialización de equipos para
                casinos y soluciones destinadas al sector del entretenimiento.
                Nuestro portafolio comprende máquinas de casino, ruletas
                electrónicas y diversos productos complementarios.
              </p>

              <p className="mt-7 text-justify text-sm leading-9 text-zinc-500 sm:text-base">
                Creemos que cada cliente tiene necesidades particulares.
                Por eso, nuestra propuesta se centra en ofrecer información
                clara, alternativas adecuadas y acompañamiento durante el
                proceso comercial.
              </p>

              <div className="mt-12 grid grid-cols-2 border-t border-white/10 pt-8">

                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D6AD61]">
                    Nuestra esencia
                  </span>
                  <p className="mt-3 text-xl font-semibold text-white">
                    Calidad
                  </p>
                </div>

                <div className="border-l border-white/10 pl-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D6AD61]">
                    Nuestro enfoque
                  </span>
                  <p className="mt-3 text-xl font-semibold text-white">
                    Confianza
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            03. MISIÓN Y VISIÓN
        ================================================== */}

        <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-10 sm:py-32 lg:px-16">

          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>
              <p className={label}>02 / DIRECCIÓN ESTRATÉGICA</p>

              <h2 className="mt-7 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">
                Nuestro propósito.
                <br />
                <span className={goldText}>Nuestro horizonte.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-8 text-zinc-500">
              Una identidad construida sobre objetivos claros y una visión
              orientada al crecimiento y la evolución del sector.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">

            {/* MISIÓN */}
            <article className="group relative min-h-[390px] overflow-hidden border border-white/10 bg-[#140C0C] p-8 transition duration-500 hover:border-[#A92129]/50 sm:p-12">

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#A92129]/10 blur-[90px]" />

              <div className="relative flex h-full flex-col">

                <div className="flex items-center justify-between">
                  <Target size={31} className="text-[#E67878]" />

                  <span className="font-mono text-xs text-white/30">
                    01 — PROPÓSITO
                  </span>
                </div>

                <div className="mt-auto pt-20">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D6AD61]">
                    Lo que hacemos
                  </p>

                  <h3 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Misión
                  </h3>

                  <p className="mt-7 max-w-xl text-sm leading-8 text-zinc-400 sm:text-base">
                    Comercializar máquinas de casino, ruletas electrónicas
                    y equipos para juegos de azar, ofreciendo productos
                    y alternativas que respondan a las necesidades de
                    nuestros clientes, mediante una atención profesional
                    basada en la calidad, la innovación y la confianza.
                  </p>

                </div>
              </div>
            </article>

            {/* VISIÓN */}
            <article className="group relative min-h-[390px] overflow-hidden border border-[#D6AD61]/20 bg-[#151109] p-8 transition duration-500 hover:border-[#D6AD61]/50 sm:p-12">

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D6AD61]/[0.07] blur-[90px]" />

              <div className="relative flex h-full flex-col">

                <div className="flex items-center justify-between">
                  <Eye size={31} className="text-[#D6AD61]" />

                  <span className="font-mono text-xs text-white/30">
                    02 — HORIZONTE
                  </span>
                </div>

                <div className="mt-auto pt-20">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D6AD61]">
                    Hacia dónde vamos
                  </p>

                  <h3 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Visión
                  </h3>

                  <p className="mt-7 max-w-xl text-sm leading-8 text-zinc-400 sm:text-base">
                    Consolidarnos como una empresa reconocida en la
                    comercialización de equipos para casinos, destacándonos
                    por la calidad de nuestro portafolio, la atención
                    personalizada y nuestra capacidad para responder
                    a las nuevas tendencias del sector del entretenimiento.
                  </p>

                </div>
              </div>
            </article>

          </div>
        </section>

        {/* ==================================================
            04. VALORES CORPORATIVOS
        ================================================== */}

        <section className="border-y border-white/[0.07] bg-[#100A0A] px-5 py-24 sm:px-10 sm:py-32 lg:px-16">

          <div className="mx-auto max-w-[1400px]">

            <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">

              <div>
                <p className={label}>03 / NUESTRA ESENCIA</p>

                <h2 className="mt-7 text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">
                  Principios que
                  <br />
                  <span className={goldText}>nos representan.</span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-8 text-zinc-500 lg:justify-self-end">
                Los valores son el fundamento de nuestra identidad y orientan
                cada decisión, cada propuesta y cada relación comercial.
              </p>
            </div>

            <div className="border-t border-white/10">

              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="group grid gap-5 border-b border-white/10 py-8 transition-colors hover:bg-white/[0.015] sm:grid-cols-[70px_1fr_1.2fr_50px] sm:items-center sm:gap-8 sm:py-10"
                  >

                    <span className="font-mono text-sm tracking-widest text-[#D6AD61]/60">
                      {item.number}
                    </span>

                    <h3 className="text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-[#D6AD61] sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="max-w-lg text-sm leading-8 text-zinc-500">
                      {item.description}
                    </p>

                    <div className="hidden h-12 w-12 items-center justify-center border border-white/10 text-[#D6AD61] transition-all duration-300 group-hover:border-[#D6AD61]/40 group-hover:bg-[#D6AD61]/10 sm:flex">
                      <Icon size={21} />
                    </div>

                  </article>
                );
              })}

            </div>
          </div>
        </section>

        {/* ==================================================
            05. NUESTRA FORMA DE TRABAJAR
        ================================================== */}

      <section
  className="mx-auto max-w-[1400px] px-5 py-24 sm:px-10 sm:py-32 lg:px-16"
>
  <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

    {/* TEXTO IZQUIERDO */}
    <div>
      <p className={label}>04 / NUESTRO ALCANCE</p>

      <h2 className="mt-7 text-4xl font-semibold leading-[1.12] tracking-[-0.055em] sm:text-6xl">
        Conectamos mercados,
        <br />
        <span className={goldText}>traspasamos fronteras.</span>
      </h2>

      <p className="mt-8 max-w-lg text-sm leading-9 text-zinc-400 sm:text-base">
        Nuestra presencia comercial tiene como punto de partida Colombia
        y se extiende hacia mercados estratégicos de Latinoamérica.
        Trabajamos para conectar oportunidades y acercar soluciones
        especializadas para la industria del entretenimiento.
      </p>

      <div className="mt-10 space-y-5">

        <div className="flex items-start gap-4">
          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#D6AD61] shadow-[0_0_12px_rgba(214,173,97,0.7)]" />
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Presencia nacional
            </h3>
            <p className="mt-1 text-sm leading-7 text-zinc-500">
              Colombia · Nuestro mercado principal.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="mt-1 h-2.5 w-2.5 rounded-full border border-[#D6AD61] bg-transparent shadow-[0_0_12px_rgba(214,173,97,0.3)]" />
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Proyección internacional
            </h3>
            <p className="mt-1 text-sm leading-7 text-zinc-500">
              Panamá · Perú · Ecuador.
            </p>
          </div>
        </div>

      </div>

      <a
        href="/#contacto"
        className="group mt-10 inline-flex items-center gap-3 border-b border-[#D6AD61]/40 pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-[#D6AD61] hover:text-[#D6AD61]"
      >
        Conecta con PRACMATIC
        <ArrowUpRight
          size={17}
          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </a>
    </div>

    {/* MAPA DERECHA */}
    <div className="relative overflow-hidden border border-[#D6AD61]/20 bg-[#100b0b] p-5 sm:p-8">

      {/* Brillo de fondo */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#A92129]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#D6AD61]/10 blur-[100px]" />

      <div className="relative z-10 flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D6AD61]">
            PRACMATIC GLOBAL
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
            Alcance regional
          </h3>
        </div>

        <span className="border border-[#D6AD61]/20 px-3 py-2 font-mono text-[9px] tracking-widest text-[#D6AD61]">
          LATAM
        </span>
      </div>

      {/* Imagen del mapa */}
      <div className="relative mt-8 flex min-h-[280px] items-center justify-center sm:min-h-[370px]">

<div className="relative isolate flex items-center justify-center py-5">

  {/* Resplandor neón de fondo */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6AD61]/20 blur-[85px] animate-[neonPulse_5s_ease-in-out_infinite]" />

  {/* Segundo resplandor rojizo */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A92129]/20 blur-[90px] animate-[neonPulse_7s_ease-in-out_infinite_reverse]" />

  {/* Mapa */}
  <img
    src="/mapa.png"
    alt="Mapa de Latinoamérica con presencia comercial de PRACMATIC en Colombia, Panamá, Perú y Ecuador"
    className="relative z-10 max-h-[320px] w-full object-contain opacity-90 drop-shadow-[0_0_18px_rgba(214,173,97,0.12)] animate-[mapFloat_6s_ease-in-out_infinite]"
  />

</div>
        <div className="pointer-events-none absolute bottom-2 left-0 right-0 flex justify-center">
          <span className="font-mono text-[9px] tracking-[0.3em] text-white/30">
            COLOMBIA · PANAMÁ · PERÚ · ECUADOR
          </span>
        </div>

      </div>

      {/* Países */}
      <div className="relative z-10 mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">

        {[
          { code: "CO", country: "Colombia", type: "Nacional", main: true },
          { code: "PA", country: "Panamá", type: "Internacional" },
          { code: "PE", country: "Perú", type: "Internacional" },
          { code: "EC", country: "Ecuador", type: "Internacional" },
        ].map((country) => (
          <div
            key={country.code}
            className={`border p-3 transition duration-300 hover:-translate-y-1 ${
              country.main
                ? "border-[#D6AD61]/40 bg-[#D6AD61]/[0.08]"
                : "border-white/10 bg-white/[0.02] hover:border-[#D6AD61]/30"
            }`}
          >
            <p className="font-mono text-[10px] tracking-widest text-[#D6AD61]">
              {country.code}
            </p>

            <p className="mt-2 text-xs font-semibold text-white">
              {country.country}
            </p>

            <p className="mt-1 text-[9px] uppercase tracking-wider text-zinc-500">
              {country.type}
            </p>
          </div>
        ))}

      </div>

    </div>

  </div>
</section>

        {/* ==================================================
            06. CIERRE CORPORATIVO
        ================================================== */}

        <section className="relative overflow-hidden border-t border-white/10 bg-[#100909] px-5 py-24 sm:px-10 sm:py-32 lg:px-16">

          <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#A92129]/10 blur-[140px]" />

          <div className="relative mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>
              <p className={label}>PRACMATIC · EL SIGUIENTE PASO</p>

              <h2 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Las oportunidades
                <br />
                comienzan con una
                <br />
                <span className={goldText}>buena conexión.</span>
              </h2>
            </div>

            <div className="max-w-sm">

              <p className="text-sm leading-8 text-zinc-400">
                Conoce nuestro portafolio de equipos para casinos y encuentra
                alternativas para las necesidades de tu negocio. Estamos
                preparados para atender tus consultas comerciales.
              </p>

              <a
                href="/#contacto"
                className="group mt-8 inline-flex min-h-14 items-center gap-5 bg-gradient-to-r from-[#e50914] to-[#a80710] px-7 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(229,9,20,.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(229,9,20,.3)]"
              >
                Contactar con PRACMATIC

                <MoveUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

            </div>
          </div>

          <div className="relative mx-auto mt-20 max-w-[1400px] border-t border-white/10 pt-8">

            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

              <a
                href="/"
                className={`text-xl font-black tracking-[0.2em] ${goldText}`}
              >
                PRACMATIC
              </a>

              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                Tecnología · Entretenimiento · Innovación
              </p>

              <p className="text-xs text-zinc-600">
                © {new Date().getFullYear()} PRACMATIC. Todos los derechos reservados.
              </p>

            </div>
          </div>

        </section>

      </main>
    </>
  );
}
