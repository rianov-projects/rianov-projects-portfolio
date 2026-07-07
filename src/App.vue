<template>
  <main class="bg-slate-950 min-h-screen text-slate-100 p-8 font-sans flex flex-col justify-between">
    <div class="max-w-4xl mx-auto w-full flex-grow">
      
      <header class="flex flex-col items-center mb-12 text-center pt-8">
        <img
          src="/logo.png"
          alt="Rianov-Projects Logo"
          class="h-28 mb-4 object-contain"
          onerror="this.style.display = 'none'"
        />
        <h1 class="text-4xl font-extrabold tracking-tight text-white mb-2">
          Rianov-Projects
        </h1>
        <p class="text-red-500 font-mono text-xs uppercase tracking-widest mb-6">
          Projects become reality
        </p>

        <div class="max-w-2xl bg-slate-900/40 border border-slate-800 rounded-2xl p-6 text-left md:text-center backdrop-blur-sm">
          <p class="text-slate-300 text-sm leading-relaxed">
            Bienvenido a mi laboratorio personal de desarrollo. Este espacio está diseñado para conceptualizar, construir y desplegar soluciones de software bajo metodologías ágiles y estándares modernos de arquitectura. Todo el código fuente expuesto aquí es de carácter 
            <span class="text-red-400 font-semibold">Open-Source</span>, desarrollado con fines experimentales y formativos.
          </p>
        </div>
      </header>

      <section class="grid md:grid-cols-2 gap-6 mb-16">
        <ProjectCard
          title="Generador de QRs"
          description="Herramienta de alto rendimiento para generar códigos QR personalizados con configuración avanzada de colores y gradientes."
          link="https://rianov-projects.com/qr/"
          :tags="['Vue 3', 'Docker', 'Tailwind']"
          status="Estable"
        />

        <div
          class="group bg-slate-900/20 border border-slate-800/60 border-dashed rounded-2xl p-6 flex flex-col h-full justify-center items-center text-center opacity-50 min-h-[200px]"
        >
          <p class="text-slate-500 font-mono text-xs">
            Próximo laboratorio en desarrollo...
          </p>
        </div>
      </section>
    </div>

    <footer class="w-full max-w-4xl mx-auto border-t border-slate-900 pt-8 pb-4 text-center">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-mono">
        <div>
          © 2026 <span class="text-slate-400 font-sans font-semibold">Alejandro Riaño Velasco</span>. 
          Todos los derechos morales reservados.
        </div>
        <div class="flex gap-4">
          <span>Código Abierto bajo Licencia <span class="text-slate-400">MIT</span></span>
          <span>•</span>
          <a 
            href="https://github.com/tu-usuario-de-github" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="hover:text-red-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
import ProjectCard from "./components/ProjectCard.vue";
</script>