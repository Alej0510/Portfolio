import { c as createComponent } from './astro-component_C71iDw3E.mjs';
import { n as createRenderInstruction, h as addAttribute, r as renderTemplate, o as renderComponent, p as renderHead, q as renderSlot, m as maybeRenderHead, v as Fragment } from './entrypoint_BqKIaYMu.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/Alejo/Desktop/Code/Own/Portfolio/node_modules/.pnpm/astro@6.2.1_@vercel+functio_66e99e1cdd08dc3b100c754d192f3a28/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Alejo/Desktop/Code/Own/Portfolio/node_modules/.pnpm/astro@6.2.1_@vercel+functio_66e99e1cdd08dc3b100c754d192f3a28/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Alejandro Cardona Monsalve — Web Developer",
    description = "Web Developer specialized in React, Next.js, and modern web technologies."
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet"><link rel="icon" type="image/svg+xml" href="/icon.svg">${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Alejo/Desktop/Code/Own/Portfolio/src/layouts/Layout.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav id="navbar" class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-6 bg-black/85 backdrop-blur-lg border-b border-teal/10 transition-all duration-300 max-md:px-6 max-md:py-5"> <a href="/" class="font-display font-extrabold text-2xl tracking-tight text-[#F5F5F5] hover:text-teal transition-colors">
AC<span class="text-teal">.</span> </a> <ul class="flex list-none gap-10 max-md:hidden"> ${["about-me", "skills", "projects", "contact"].map((s) => renderTemplate`<li> <a${addAttribute(`#${s}`, "href")} class="text-xs font-normal tracking-widest uppercase text-[#888] hover:text-[#F5F5F5] transition-colors relative group"> ${s.replace("-", " ")} <span class="absolute -bottom-0.5 left-0 w-0 h-px bg-teal transition-all duration-300 group-hover:w-full"></span> </a> </li>`)} </ul> <button id="hamburger" aria-label="Menu" class="hidden flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1 max-md:flex"> <span class="block w-6 h-0.5 bg-[#F5F5F5] transition-all"></span> <span class="block w-6 h-0.5 bg-[#F5F5F5] transition-all"></span> <span class="block w-6 h-0.5 bg-[#F5F5F5] transition-all"></span> </button> </nav> <div id="mobileMenu" class="hidden fixed inset-0 bg-black z-40 flex-col items-center justify-center"> <ul class="list-none text-center"> ${["about-me", "skills", "projects", "contact"].map((s) => renderTemplate`<li class="my-6"> <a${addAttribute(`#${s}`, "href")} class="mobile-link font-display text-5xl font-bold text-[#F5F5F5] hover:text-teal transition-colors capitalize"> ${s.replace("-", " ")} </a> </li>`)} </ul> </div> ${renderScript($$result, "C:/Users/Alejo/Desktop/Code/Own/Portfolio/src/components/Nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Alejo/Desktop/Code/Own/Portfolio/src/components/Nav.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section id="inicio" class="relative min-h-screen grid grid-cols-2 gap-16 items-center px-16 pt-20 overflow-hidden max-lg:grid-cols-1 max-lg:px-6 max-lg:pt-24 max-lg:pb-12 max-lg:text-left" data-astro-cid-bbe6dxrz> <!-- Background --> <div class="absolute inset-0 pointer-events-none" data-astro-cid-bbe6dxrz> <div class="absolute inset-0" style="background-image: linear-gradient(rgba(0,188,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,188,212,0.04) 1px, transparent 1px); background-size: 60px 60px;" data-astro-cid-bbe6dxrz></div> <div class="absolute w-[480px] h-[480px] rounded-full opacity-15 blur-[80px] bg-teal top-[-80px] right-[-80px] animate-float" data-astro-cid-bbe6dxrz></div> <div class="absolute w-[280px] h-[280px] rounded-full opacity-10 blur-[80px] bg-teal-dark bottom-16 left-[10%]" style="animation: blobFloat 10s ease-in-out infinite reverse;" data-astro-cid-bbe6dxrz></div> </div> <!-- Content --> <div class="relative z-10 animate-fade-up max-lg:order-1" data-astro-cid-bbe6dxrz> <div class="inline-flex items-center gap-2 text-[0.7rem] tracking-wider uppercase text-teal border border-teal px-4 py-1.5 rounded-full mb-8" data-astro-cid-bbe6dxrz> <span class="w-1.5 h-1.5 rounded-full bg-teal" data-astro-cid-bbe6dxrz></span>
Available for projects
</div> <h1 class="font-display font-extrabold text-[3.5rem] leading-[1] tracking-tight mb-5 max-lg:text-[2.8rem]" data-astro-cid-bbe6dxrz>
Alejandro<br data-astro-cid-bbe6dxrz> <span class="text-teal" data-astro-cid-bbe6dxrz>Cardona</span> </h1> <p class="font-display text-sm font-semibold tracking-widest uppercase text-[#888] mb-5" data-astro-cid-bbe6dxrz>
Web <span class="text-[#F5F5F5]" data-astro-cid-bbe6dxrz>Developer</span> </p> <p class="text-[0.95rem] text-[#CCC] max-w-md leading-[1.85] mb-10" data-astro-cid-bbe6dxrz>
Software Engineering student who creates dynamic, accessible, and
      optimized interfaces. Specialized in the React ecosystem and modern web
      technologies.
</p> <div class="flex gap-4 flex-wrap" data-astro-cid-bbe6dxrz> <a class="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 font-display text-[0.8rem] font-bold tracking-[0.05em] uppercase text-white transition-all duration-500 hover:scale-[1.05] active:scale-[0.98]" href="/Curriculum.pdf" target="_blank" data-astro-cid-bbe6dxrz> <!-- Animated Gradient Background --> <div class="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal to-teal-dark bg-[length:200%_auto] animate-gradient-x" data-astro-cid-bbe6dxrz></div> <!-- Hover Glow Overlay --> <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]" data-astro-cid-bbe6dxrz></div> <!-- Shimmer Effect --> <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" data-astro-cid-bbe6dxrz></div> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="relative z-10 transition-transform duration-500 group-hover:rotate-[12deg] group-hover:scale-110" data-astro-cid-bbe6dxrz> <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" data-astro-cid-bbe6dxrz></path> <path d="M14 2v4a2 2 0 0 0 2 2h4" data-astro-cid-bbe6dxrz></path> <path d="M10 9H8" data-astro-cid-bbe6dxrz></path> <path d="M16 13H8" data-astro-cid-bbe6dxrz></path> <path d="M16 17H8" data-astro-cid-bbe6dxrz></path> </svg> <span class="relative z-10" data-astro-cid-bbe6dxrz>Curriculum</span> </a> <a href="#contacto" class="group relative inline-flex items-center gap-2 px-8 py-4 text-[0.75rem] font-bold tracking-[0.2em] uppercase text-[#F5F5F5] transition-all duration-300" data-astro-cid-bbe6dxrz> <span class="relative z-10 group-hover:text-teal transition-colors" data-astro-cid-bbe6dxrz>
Contact
<span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-teal transition-all duration-300 group-hover:w-full" data-astro-cid-bbe6dxrz></span> </span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-teal" data-astro-cid-bbe6dxrz> <path d="M5 12h14" data-astro-cid-bbe6dxrz></path> <path d="m12 5 7 7-7 7" data-astro-cid-bbe6dxrz></path> </svg> </a> </div> </div> <!-- Visual --> <div class="relative z-10 flex flex-col gap-6 max-lg:order-2" style="animation: fadeUp 0.8s 0.2s ease both;" data-astro-cid-bbe6dxrz> <!-- Code card --> <div class="bg-[#181818] border border-[#222] rounded-lg overflow-hidden shadow-2xl hover:-translate-y-1 hover:shadow-teal/10 hover:border-teal/20 transition-all duration-300" data-astro-cid-bbe6dxrz> <div class="flex items-center gap-2 px-5 py-3 bg-[#222] border-b border-white/5" data-astro-cid-bbe6dxrz> <span class="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" data-astro-cid-bbe6dxrz></span> <span class="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" data-astro-cid-bbe6dxrz></span> <span class="w-2.5 h-2.5 rounded-full bg-[#28C840]" data-astro-cid-bbe6dxrz></span> <span class="ml-auto text-[0.72rem] text-[#888] font-mono" data-astro-cid-bbe6dxrz>alejandro.tsx</span> </div> <pre class="p-6 font-mono text-[0.8rem] leading-[1.85] overflow-x-auto" data-astro-cid-bbe6dxrz><code data-astro-cid-bbe6dxrz><span class="text-[#C792EA]" data-astro-cid-bbe6dxrz>const</span> <span class="text-[#82AAFF]" data-astro-cid-bbe6dxrz>Alejandro</span> <span class="text-[#888]" data-astro-cid-bbe6dxrz>=</span> () <span class="text-[#888]" data-astro-cid-bbe6dxrz>=&gt;</span> &#123;
  <span class="text-[#C792EA]" data-astro-cid-bbe6dxrz>const</span> skills <span class="text-[#888]" data-astro-cid-bbe6dxrz>=</span> [
    <span class="text-teal" data-astro-cid-bbe6dxrz>'Astro'</span>, <span class="text-teal" data-astro-cid-bbe6dxrz>'React'</span>, <span class="text-teal" data-astro-cid-bbe6dxrz>'TypeScript'</span>,
    <span class="text-teal" data-astro-cid-bbe6dxrz>'Tailwind'</span>, <span class="text-teal" data-astro-cid-bbe6dxrz>'PostgreSQL'</span>, <span class="text-teal" data-astro-cid-bbe6dxrz>'Supabase'</span>,
    <span class="text-teal" data-astro-cid-bbe6dxrz>'C#'</span>, <span class="text-teal" data-astro-cid-bbe6dxrz>'Git'</span>
  ];

  <span class="text-[#C792EA]" data-astro-cid-bbe6dxrz>return</span> (
    <span class="text-[#F07178]" data-astro-cid-bbe6dxrz>&lt;Developer</span>
      <span class="text-[#FFCB6B]" data-astro-cid-bbe6dxrz>name</span><span class="text-[#888]" data-astro-cid-bbe6dxrz>=</span><span class="text-teal" data-astro-cid-bbe6dxrz>"Alejandro"</span>
      <span class="text-[#FFCB6B]" data-astro-cid-bbe6dxrz>location</span><span class="text-[#888]" data-astro-cid-bbe6dxrz>=</span><span class="text-teal" data-astro-cid-bbe6dxrz>"Medellín 🇨🇴"</span>
      <span class="text-[#FFCB6B]" data-astro-cid-bbe6dxrz>open</span><span class="text-[#888]" data-astro-cid-bbe6dxrz>=</span>&#123;<span class="text-[#C792EA]" data-astro-cid-bbe6dxrz>true</span>&#125;
      <span class="text-[#FFCB6B]" data-astro-cid-bbe6dxrz>skills</span><span class="text-[#888]" data-astro-cid-bbe6dxrz>=</span>&#123;skills&#125;
    <span class="text-[#F07178]" data-astro-cid-bbe6dxrz>/&gt;</span>
  );
&#125;;</code></pre> </div> <!-- Stats --> <div class="grid grid-cols-2 divide-x divide-[#222] border border-[#222] rounded-lg overflow-hidden" data-astro-cid-bbe6dxrz> ${[
    { num: "8+", label: "Technologies" },
    { num: "B2", label: "English" }
  ].map((s) => renderTemplate`<div class="bg-[#181818] px-4 py-5 text-center hover:bg-[#222] transition-colors" data-astro-cid-bbe6dxrz> <span class="block font-display font-extrabold text-[1.6rem] text-teal leading-none mb-1" data-astro-cid-bbe6dxrz> ${s.num} </span> <span class="text-[0.65rem] tracking-[0.1em] uppercase text-[#888]" data-astro-cid-bbe6dxrz> ${s.label} </span> </div>`)} </div> </div> </section>`;
}, "C:/Users/Alejo/Desktop/Code/Own/Portfolio/src/components/Hero.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about-me" class="relative py-32 px-16 max-md:py-20 max-md:px-6" data-astro-cid-v2cbyr3p> <div class="max-w-6xl mx-auto grid grid-cols-2 gap-24 items-center max-lg:grid-cols-1 max-lg:gap-12" data-astro-cid-v2cbyr3p> <!-- Left --> <div data-astro-cid-v2cbyr3p> <div class="flex items-center gap-4 mb-8" data-astro-cid-v2cbyr3p> <span class="font-display text-[0.72rem] font-bold text-teal opacity-60" data-astro-cid-v2cbyr3p>01</span> <span class="text-[0.68rem] tracking-widest uppercase text-[#888]" data-astro-cid-v2cbyr3p>About me</span> </div> <h2 class="font-display font-extrabold text-[2rem] leading-tight tracking-tight mb-7" data-astro-cid-v2cbyr3p>
Building the web<br data-astro-cid-v2cbyr3p> <span class="text-teal" data-astro-cid-v2cbyr3p>of the future</span> </h2> <p class="text-[0.92rem] text-[#CCC] leading-[1.85] mb-4" data-astro-cid-v2cbyr3p>
I am Alejandro Cardona, a <strong class="text-[#F5F5F5] font-medium" data-astro-cid-v2cbyr3p>Software Engineering</strong> student at the Institución Universitaria Pascual Bravo, Medellín. I am passionate
        about turning ideas and designs into modern, fast, and accessible web experiences.
</p> <p class="text-[0.92rem] text-[#CCC] leading-[1.85] mb-10" data-astro-cid-v2cbyr3p>
I work confidently with <strong class="text-[#F5F5F5] font-medium" data-astro-cid-v2cbyr3p>HTML, CSS, JavaScript, React, and Next.js</strong>, and I strive to write clean and maintainable code. Always learning.
</p> <!-- Languages --> <div class="flex flex-col gap-4" data-astro-cid-v2cbyr3p> ${[
    { name: "Spanish", pct: 100, level: "Native" },
    { name: "English", pct: 70, level: "B2" }
  ].map((l) => renderTemplate`<div class="grid items-center gap-4" style="grid-template-columns: 80px 1fr 40px" data-astro-cid-v2cbyr3p> <span class="text-[0.78rem] text-[#CCC]" data-astro-cid-v2cbyr3p>${l.name}</span> <div class="h-[3px] bg-[#222] rounded-full overflow-hidden" data-astro-cid-v2cbyr3p> <div class="h-full rounded-full origin-left animate-bar-grow"${addAttribute(`width:${l.pct}%; background: linear-gradient(90deg,#0097A7,#00BCD4);`, "style")} data-astro-cid-v2cbyr3p></div> </div> <span class="text-[0.68rem] text-teal font-medium text-right" data-astro-cid-v2cbyr3p> ${l.level} </span> </div>`)} </div> </div> <!-- Right: Profile Card --> <div class="bg-[#181818] border border-[#222] rounded-xl p-12 flex flex-col gap-6 hover:border-teal/30 transition-colors" data-astro-cid-v2cbyr3p> <!-- Avatar --> <div class="relative w-20" data-astro-cid-v2cbyr3p> <div class="w-20 h-20 rounded-full flex items-center justify-center font-display font-extrabold text-2xl text-black" style="background: linear-gradient(135deg,#0097A7,#00BCD4)" data-astro-cid-v2cbyr3p>
AC
</div> <div class="absolute -inset-1 rounded-full border border-teal opacity-40" style="animation: ringPulse 3s ease-in-out infinite;" data-astro-cid-v2cbyr3p></div> </div> <div data-astro-cid-v2cbyr3p> <h3 class="font-display font-bold text-lg mb-1" data-astro-cid-v2cbyr3p>Alejandro Cardona</h3> <p class="text-[0.75rem] tracking-[0.1em] uppercase text-teal" data-astro-cid-v2cbyr3p>
Frontend Developer
</p> </div> <!-- Details --> <div class="flex flex-col gap-3" data-astro-cid-v2cbyr3p> ${[
    { icon: "phone", text: "+57 320 7710042" },
    { icon: "mail", text: "alejandrocm1406@gmail.com" },
    { icon: "pin", text: "Medellín, Colombia" }
  ].map((d) => renderTemplate`<div class="flex items-center gap-3 text-[0.8rem] text-[#CCC]" data-astro-cid-v2cbyr3p> <svg class="text-teal shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-v2cbyr3p> ${d.icon === "phone" && renderTemplate`<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.22 4.04 2 2 0 012.2 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.41a16 16 0 006.68 6.68l.56-.56a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" data-astro-cid-v2cbyr3p></path>`} ${d.icon === "mail" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-v2cbyr3p": true }, { "default": ($$result2) => renderTemplate` <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-astro-cid-v2cbyr3p></path> <polyline points="22,6 12,13 2,6" data-astro-cid-v2cbyr3p></polyline> ` })}`} ${d.icon === "pin" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-v2cbyr3p": true }, { "default": ($$result2) => renderTemplate` <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" data-astro-cid-v2cbyr3p></path> <circle cx="12" cy="10" r="3" data-astro-cid-v2cbyr3p></circle> ` })}`} </svg> ${d.text} </div>`)} </div> <!-- Education --> <div class="flex items-start gap-3 p-4 bg-[#222] rounded-md border-l-2 border-teal" data-astro-cid-v2cbyr3p> <svg class="text-teal mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-v2cbyr3p> <path d="M22 10v6M2 10l10-5 10 5-10 5z" data-astro-cid-v2cbyr3p></path><path d="M6 12v5c3 3 9 3 12 0v-5" data-astro-cid-v2cbyr3p></path> </svg> <div data-astro-cid-v2cbyr3p> <p class="text-[0.83rem] font-medium mb-0.5" data-astro-cid-v2cbyr3p>Software Engineering</p> <p class="text-[0.72rem] text-[#888]" data-astro-cid-v2cbyr3p>
I.U. Pascual Bravo · 2024 – Present
</p> </div> </div> </div> </div> </section>`;
}, "C:/Users/Alejo/Desktop/Code/Own/Portfolio/src/components/About.astro", void 0);

const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Skills;
  const skills = [
    {
      name: "HTML",
      icon: "html5.svg",
      desc: "Semantics, accessibility, and structure."
    },
    {
      name: "CSS",
      icon: "css.svg",
      desc: "Modern layouts, animations, responsive design."
    },
    {
      name: "JavaScript",
      icon: "javascript.svg",
      desc: "ES6+, DOM, async/await."
    },
    {
      name: "TypeScript",
      icon: "typescript.svg",
      desc: "Type-safe JavaScript."
    },
    {
      name: "React",
      icon: "react_light.svg",
      desc: "Hooks, components, state management."
    },
    {
      name: "Next.js",
      icon: "nextjs_icon_dark.svg",
      desc: "SSR, SSG, routing, API routes."
    },
    {
      name: "Tailwind CSS",
      icon: "tailwindcss.svg",
      desc: "Utility-first, responsive, dark mode."
    },
    {
      name: "PostgreSQL",
      icon: "postgresql.svg",
      desc: "Queries, relations, modeling."
    },
    {
      name: "Astro",
      icon: "astro-icon-dark.svg",
      desc: "Build fast websites with components."
    },
    {
      name: "Supabase",
      icon: "supabase.svg",
      desc: "PostgreSQL, Authentication, Storage."
    },
    {
      name: "C#",
      icon: "csharp.svg",
      desc: "Basic OOP knowledge."
    },
    {
      name: "Git & GitHub",
      icon: "git.svg",
      desc: "Version control and collaborative workflow."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="skills" class="relative py-32 px-16 bg-[#0A0A0A] overflow-hidden max-md:py-24 max-md:px-6" data-astro-cid-ab4ihpzs> <div class="absolute top-1/4 -left-20 w-96 h-96 bg-teal/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" data-astro-cid-ab4ihpzs></div> <div class="absolute bottom-1/4 -right-20 w-80 h-80 bg-teal/5 rounded-full blur-[100px] animate-float pointer-events-none" data-astro-cid-ab4ihpzs></div> <div class="max-w-6xl mx-auto relative z-10" data-astro-cid-ab4ihpzs> <div class="flex items-center gap-4 mb-6" data-astro-cid-ab4ihpzs> <div class="w-8 h-[1px] bg-teal opacity-50" data-astro-cid-ab4ihpzs></div> <span class="font-display text-[0.7rem] font-bold text-teal tracking-[0.2em] uppercase" data-astro-cid-ab4ihpzs>Expertise</span> </div> <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16" data-astro-cid-ab4ihpzs> <div data-astro-cid-ab4ihpzs> <h2 class="font-display font-extrabold text-[2.5rem] leading-none tracking-tight mb-4" data-astro-cid-ab4ihpzs>
Stack & <span class="text-teal drop-shadow-[0_0_15px_rgba(0,188,212,0.3)]" data-astro-cid-ab4ihpzs>Technologies</span> </h2> <div class="h-1 w-20 bg-teal rounded-full" data-astro-cid-ab4ihpzs></div> </div> <p class="text-[0.9rem] text-white/50 max-w-sm leading-relaxed" data-astro-cid-ab4ihpzs>
I specialize in building performant web applications using modern tools
        and industry best practices.
</p> </div> <div class="flex flex-wrap items-center justify-center gap-x-12 gap-y-12 max-w-6xl mx-auto" data-astro-cid-ab4ihpzs> ${skills.map((s, i) => renderTemplate`<div class="flex items-center gap-4 cursor-default" data-astro-cid-ab4ihpzs> <div class="relative flex items-center justify-center w-10 h-10" data-astro-cid-ab4ihpzs> <img${addAttribute(`/skills/${s.icon}`, "src")}${addAttribute(s.name, "alt")} class="w-8 h-8 object-contain relative z-10" data-astro-cid-ab4ihpzs> </div> <div class="flex flex-col -space-y-1" data-astro-cid-ab4ihpzs> <span class="font-display text-[0.6rem] font-bold text-teal" data-astro-cid-ab4ihpzs> ${String(i + 1).padStart(2, "0")} </span> <span class="font-display font-black text-2xl md:text-3xl tracking-tighter uppercase text-white" data-astro-cid-ab4ihpzs> ${s.name} </span> </div> </div>`)} </div> </div> </section>`;
}, "C:/Users/Alejo/Desktop/Code/Own/Portfolio/src/components/Skills.astro", void 0);

const $$ProjectMockup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ProjectMockup;
  const { src, alt = "", variant = "dark" } = Astro2.props;
  const barBg = variant === "light" ? "#e5e5e5" : "#1e1e1e";
  const hasSrc = typeof src === "string" && src.length > 0;
  return renderTemplate`${maybeRenderHead()}<div class="mockup-frame" data-astro-cid-kk54in3g> <div class="mockup-bar"${addAttribute(`background:${barBg};`, "style")} data-astro-cid-kk54in3g> <span class="dot" style="background:#ff5f57;" data-astro-cid-kk54in3g></span> <span class="dot" style="background:#febc2e;" data-astro-cid-kk54in3g></span> <span class="dot" style="background:#28c840;" data-astro-cid-kk54in3g></span> </div> ${hasSrc ? renderTemplate`<img class="mockup-img"${addAttribute(src, "src")}${addAttribute(alt, "alt")} loading="lazy" decoding="async" width="1600" height="1000" data-astro-cid-kk54in3g>` : renderTemplate`<div class="mockup-fallback" role="img"${addAttribute(alt, "aria-label")} data-astro-cid-kk54in3g> <svg class="fallback-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-kk54in3g> <rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-astro-cid-kk54in3g></rect> <circle cx="8.5" cy="8.5" r="1.5" data-astro-cid-kk54in3g></circle> <polyline points="21 15 16 10 5 21" data-astro-cid-kk54in3g></polyline> </svg> </div>`} </div>`;
}, "C:/Users/Alejo/Desktop/Code/Own/Portfolio/src/components/ProjectMockup.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Projects;
  const projects = [
    {
      title: "Raíces",
      slug: "raices",
      desc: "Website for a cafe located in Marinilla, Antioquia, Colombia.",
      tags: ["Astro", "Tailwind", "TS"],
      color: "#4CAF50",
      mockup: "/mockups/raices.png",
      status: "In progress",
      liveLink: "https://raices-cafe.vercel.app/",
      repoLink: "https://github.com/Alej0510/Raices"
    },
    {
      title: "To-Do App",
      slug: "to-do-app",
      desc: "A simple To-Do application for managing daily tasks with dark mode toggle.",
      tags: ["React", "TS"],
      color: "#FF9800",
      mockup: "/mockups/to-do-app.png",
      status: "Completed",
      liveLink: "https://to-do-two-wheat.vercel.app/",
      repoLink: "https://github.com/Alej0510/To-Do"
    },
    {
      title: "5 Direcciones",
      slug: "5-direcciones",
      desc: "Website for a business consulting firm located in Medellín, Colombia.",
      tags: ["Astro", "Tailwind", "TS"],
      color: "#E91E63",
      mockup: "/mockups/5-direcciones.png",
      status: "Completed",
      liveLink: "https://5direcciones.vercel.app/",
      repoLink: "https://github.com/Alej0510/5Direcciones"
    },
    {
      title: "Estilo Gráfico",
      slug: "estilo-grafico",
      desc: "A website for a graphic design company located in Medellín, Colombia.",
      tags: ["Astro", "Tailwind", "TS"],
      color: "#00BCD4",
      mockup: "/mockups/estilo-grafico.png",
      status: "Completed",
      liveLink: "https://www.estilografico.co/",
      repoLink: "https://github.com/Alej0510/estilo-grafico"
    }
  ];
  const statusStyle = {
    Live: "bg-teal/10 text-teal border border-teal/30",
    "In progress": "bg-amber-500/10 text-amber-400 border border-amber-500/30",
    Completed: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
  };
  return renderTemplate`${maybeRenderHead()}<section id="projects" class="py-32 px-16 max-md:py-20 max-md:px-6" data-astro-cid-amng4zvp> <div class="max-w-6xl mx-auto" data-astro-cid-amng4zvp> <div class="flex items-center gap-4 mb-5" data-astro-cid-amng4zvp> <span class="font-display text-[0.72rem] font-bold text-teal opacity-60" data-astro-cid-amng4zvp>03</span> <span class="text-[0.68rem] tracking-widest uppercase text-[#888]" data-astro-cid-amng4zvp>Projects</span> </div> <h2 class="font-display font-extrabold text-[2rem] leading-tight tracking-tight mb-4" data-astro-cid-amng4zvp>
What I've <span class="text-teal" data-astro-cid-amng4zvp>built</span> </h2> <div class="flex items-center gap-2 text-[0.78rem] text-[#888] bg-[#181818] border border-[#222] border-l-2 border-l-teal px-4 py-3 rounded mb-12" data-astro-cid-amng4zvp> <svg class="text-teal shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-amng4zvp> <circle cx="12" cy="12" r="10" data-astro-cid-amng4zvp></circle><line x1="12" y1="8" x2="12" y2="12" data-astro-cid-amng4zvp></line><line x1="12" y1="16" x2="12.01" y2="16" data-astro-cid-amng4zvp></line> </svg>
I'm a developer in training. These projects represent my learning process. Contact
      me if you want to collaborate!
</div> <div class="grid grid-cols-2 gap-6 mb-12 max-md:grid-cols-1" data-astro-cid-amng4zvp> ${projects.map((p, i) => renderTemplate`<div class="project-card bg-[#181818] border border-[#222] rounded-xl p-8 flex flex-col gap-4 relative overflow-hidden transition-all duration-300 hover:-translate-y-1"${addAttribute(`--accent:${p.color}; animation: fadeUp 0.6s ${i * 0.1}s ease both;`, "style")} data-astro-cid-amng4zvp> <div class="mockup-wrap relative mb-1" data-astro-cid-amng4zvp> ${renderComponent($$result, "ProjectMockup", $$ProjectMockup, { "src": p.mockup, "alt": p.title, "data-astro-cid-amng4zvp": true })} <span${addAttribute(`absolute top-2.5 right-2.5 z-10 text-[0.65rem] font-medium tracking-[0.1em] uppercase px-3 py-1 rounded-full ${statusStyle[p.status]}`, "class")} data-astro-cid-amng4zvp> ${p.status} </span> </div> <h3 class="font-display font-bold text-[1.05rem]" data-astro-cid-amng4zvp>${p.title}</h3> <p class="text-[0.85rem] text-[#CCC] leading-relaxed flex-1" data-astro-cid-amng4zvp> ${p.desc} </p> <div class="flex gap-2 flex-wrap mb-2" data-astro-cid-amng4zvp> ${p.tags.map((t) => renderTemplate`<span class="text-[0.65rem] font-medium tracking-wide px-3 py-1 bg-[#222] rounded-full text-[#888] transition-all" data-astro-cid-amng4zvp> ${t} </span>`)} </div> <div class="flex items-center gap-3 mt-auto pt-6 border-t border-white/5" data-astro-cid-amng4zvp> ${p.liveLink && renderTemplate`<a${addAttribute(p.liveLink, "href")} target="_blank" rel="noopener noreferrer" class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-teal/10 border border-teal/20 rounded-lg text-[0.72rem] font-bold text-teal hover:bg-teal hover:text-black transition-all duration-300" data-astro-cid-amng4zvp> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-amng4zvp> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-astro-cid-amng4zvp></path> <polyline points="15 3 21 3 21 9" data-astro-cid-amng4zvp></polyline> <line x1="10" y1="14" x2="21" y2="3" data-astro-cid-amng4zvp></line> </svg>
Live Demo
</a>`} ${p.repoLink && renderTemplate`<a${addAttribute(p.repoLink, "href")} target="_blank" rel="noopener noreferrer" class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-[0.72rem] font-bold text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300" data-astro-cid-amng4zvp> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-amng4zvp> <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" data-astro-cid-amng4zvp></path> </svg>
GitHub
</a>`} </div> </div>`)} </div> <div class="flex justify-center" data-astro-cid-amng4zvp> <a href="https://github.com/Alej0510?tab=repositories" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 px-8 py-3.5 bg-[#181818] border border-[#222] rounded-lg text-[0.83rem] text-[#CCC] hover:border-teal hover:text-[#F5F5F5] hover:-translate-y-0.5 transition-all" data-astro-cid-amng4zvp> <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-amng4zvp> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-astro-cid-amng4zvp></path> </svg>
View all my repos on GitHub
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-amng4zvp> <path d="M7 17L17 7M17 7H7M17 7v10" data-astro-cid-amng4zvp></path> </svg> </a> </div> </div> </section>`;
}, "C:/Users/Alejo/Desktop/Code/Own/Portfolio/src/components/Projects.astro", void 0);

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="relative py-32 px-16 bg-[#111] overflow-hidden max-md:py-20 max-md:px-6"> <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none" style="background: radial-gradient(ellipse at center, rgba(0,188,212,0.07) 0%, transparent 70%);"></div> <div class="max-w-6xl mx-auto relative z-10"> <div class="flex items-center gap-4 mb-5"> <span class="font-display text-[0.72rem] font-bold text-teal opacity-60">04</span> <span class="text-[0.68rem] tracking-widest uppercase text-[#888]">Contact</span> </div> <div class="grid grid-cols-2 gap-24 items-start mt-2 max-lg:grid-cols-1 max-lg:gap-12"> <!-- Left --> <div> <h2 class="font-display font-extrabold text-[2rem] leading-tight tracking-tight mb-5">
Have a project<br>in mind?
</h2> <p class="text-[0.92rem] text-[#CCC] leading-relaxed mb-10 max-w-sm">
I'm open to freelance opportunities, collaborations, and junior
          positions. Write to me and let's talk.
</p> <div class="flex flex-col gap-3"> ${[
    {
      href: "mailto:alejandrocm1406@gmail.com",
      icon: "mail",
      label: "Email",
      val: "alejandrocm1406@gmail.com"
    },
    {
      href: "tel:+573207710042",
      icon: "phone",
      label: "Phone",
      val: "+57 320 7710042"
    },
    {
      href: "https://github.com/Alej0510",
      icon: "github",
      label: "GitHub",
      val: "github.com/Alej0510"
    }
  ].map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(item.href.startsWith("http") ? "_blank" : void 0, "target")} rel="noopener noreferrer" class="flex items-center gap-4 p-4 bg-[#181818] border border-[#222] rounded-lg hover:border-teal hover:translate-x-1 transition-all group"> <div class="w-9 h-9 bg-[#222] rounded-md flex items-center justify-center text-teal shrink-0"> <svg width="16" height="16" viewBox="0 0 24 24"${addAttribute(item.icon === "github" ? "currentColor" : "none", "fill")}${addAttribute(item.icon !== "github" ? "currentColor" : void 0, "stroke")} stroke-width="2"> ${item.icon === "mail" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path> <polyline points="22,6 12,13 2,6"></polyline> ` })}`} ${item.icon === "phone" && renderTemplate`<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.22 4.04 2 2 0 012.2 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.41a16 16 0 006.68 6.68l.56-.56a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>`} ${item.icon === "github" && renderTemplate`<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>`} </svg> </div> <div class="flex flex-col flex-1"> <span class="text-[0.65rem] tracking-[0.12em] uppercase text-[#888] mb-0.5"> ${item.label} </span> <span class="text-[0.82rem] text-[#F5F5F5]">${item.val}</span> </div> <svg class="text-[#888] group-hover:text-teal transition-colors shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M7 17L17 7M17 7H7M17 7v10"></path> </svg> </a>`)} <div class="flex items-center gap-4 p-4 bg-[#181818] border border-[#222] rounded-lg"> <div class="w-9 h-9 bg-[#222] rounded-md flex items-center justify-center text-teal shrink-0"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle> </svg> </div> <div class="flex flex-col"> <span class="text-[0.65rem] tracking-[0.12em] uppercase text-[#888] mb-0.5">Location</span> <span class="text-[0.82rem] text-[#F5F5F5]">Medellín, Colombia</span> </div> </div> </div> </div> <!-- Right: Form --> <form id="contactForm" class="bg-[#181818] border border-[#222] rounded-xl p-10 flex flex-col gap-5"> ${[
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Your name"
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "you@email.com"
    },
    {
      id: "subject",
      label: "Subject",
      type: "text",
      placeholder: "What do you want to talk about?"
    }
  ].map((f) => renderTemplate`<div class="flex flex-col gap-2"> <label${addAttribute(f.id, "for")} class="text-[0.68rem] tracking-[0.12em] uppercase text-[#888]"> ${f.label} </label> <input${addAttribute(f.id, "id")}${addAttribute(f.id, "name")}${addAttribute(f.type, "type")}${addAttribute(f.placeholder, "placeholder")} autocomplete="off" class="bg-[#222] border border-white/5 rounded-md px-4 py-3 text-[#F5F5F5] font-body text-[0.88rem] outline-none placeholder-[#555] focus:border-teal transition-colors"> </div>`)} <div class="flex flex-col gap-2"> <label for="message" class="text-[0.68rem] tracking-[0.12em] uppercase text-[#888]">Message</label> <textarea id="message" name="message"${addAttribute(5, "rows")} placeholder="Tell me about your project..." class="bg-[#222] border border-white/5 rounded-md px-4 py-3 text-[#F5F5F5] font-body text-[0.88rem] outline-none placeholder-[#555] focus:border-teal transition-colors resize-y"></textarea> </div> <button type="submit" class="submit-btn flex items-center justify-center gap-3 py-3.5 px-8 bg-teal text-black font-body text-[0.82rem] font-medium tracking-[0.08em] uppercase rounded-md hover:bg-teal-dark hover:shadow-sm hover:shadow-teal/20 transition-all mt-2"> <span>Send message</span> <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon> </svg> </button> </form> </div> </div> </section> ${renderScript($$result, "C:/Users/Alejo/Desktop/Code/Own/Portfolio/src/components/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Alejo/Desktop/Code/Own/Portfolio/src/components/Contact.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="py-12 px-16 border-t border-[#222] max-md:px-6"> <div class="max-w-6xl mx-auto"> <div class="flex items-center justify-between gap-4 flex-wrap max-sm:flex-col max-sm:items-start"> <p class="text-[0.75rem] text-[#888]">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Alejandro Cardona — Medellín, Colombia
</p> <p class="text-[0.75rem] text-[#888]">
Made with astro <span class="text-teal">Astro</span> & ☕
</p> </div> </div> </footer>`;
}, "C:/Users/Alejo/Desktop/Code/Own/Portfolio/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Alejo/Desktop/Code/Own/Portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/Alejo/Desktop/Code/Own/Portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
