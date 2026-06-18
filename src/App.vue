<template>
  <main class="bg-slate-950 min-h-screen text-slate-100 p-8 font-sans">
    <div class="max-w-4xl mx-auto">
      <!-- Header con tu Marca personal -->
      <header class="flex flex-col items-center mb-16 text-center pt-8">
        <img
          src="/logo.png"
          alt="Rianov-Projects Logo"
          class="h-28 mb-4 object-contain"
          onerror="this.style.display = 'none'"
        />
        <h1 class="text-4xl font-extrabold tracking-tight text-white mb-2">
          Rianov-Projects
        </h1>
        <p class="text-slate-400 text-lg max-w-md font-mono text-sm">
          PROJECTS BECOME REALITY
        </p>
      </header>

      <!-- Grid de proyectos -->
      <section class="grid md:grid-cols-2 gap-6">
        <!-- Aquí usamos nuestro nuevo componente -->
        <ProjectCard
          title="Generador de QRs"
          description="Herramienta de alto rendimiento para generar códigos QR personalizados con configuración avanzada de colores y gradientes."
          link="https://qr.rianov-projects.com"
          :tags="['Vue 3', 'Docker', 'Tailwind']"
          status="Estable"
        />

        <!-- Tarjeta 2: Espacio para el siguiente proyecto (la dejamos estática por ahora) -->
        <div
          class="group bg-slate-900/40 border border-slate-800/60 border-dashed rounded-2xl p-6 flex flex-col h-full justify-center items-center text-center opacity-60"
        >
          <p class="text-slate-500 font-mono text-xs">
            Próximo laboratorio en desarrollo...
          </p>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
// Importamos el componente
import ProjectCard from "./components/ProjectCard.vue";
</script>
