<template>
  <main class="bg-slate-950 min-h-screen text-slate-100 p-8 font-sans flex flex-col justify-between relative">
    
    <!-- Selector de idioma personalizado con banderas -->
    <div class="absolute top-4 right-4 md:top-8 md:right-8 z-50">
      <!-- Botón visible -->
      <button 
        @click="isLangMenuOpen = !isLangMenuOpen"
        class="flex items-center gap-2 bg-slate-900/80 border border-slate-700 hover:border-slate-500 rounded-md text-xs font-mono text-slate-300 px-3 py-1.5 focus:outline-none transition-colors backdrop-blur-sm"
      >
        <img :src="`https://flagcdn.com/w20/${currentLang.flag}.png`" :alt="currentLang.label" class="w-4 h-3 object-cover rounded-sm" />
        {{ currentLang.label }}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 ml-1 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <!-- Overlay invisible para cerrar el menú al hacer clic afuera -->
      <div v-if="isLangMenuOpen" @click="isLangMenuOpen = false" class="fixed inset-0 z-40"></div>

      <!-- Lista desplegable -->
      <div v-if="isLangMenuOpen" class="absolute right-0 mt-2 w-32 bg-slate-900 border border-slate-700 rounded-md shadow-2xl overflow-hidden z-50">
        <button
          v-for="lang in languages"
          :key="lang.code"
          @click="selectLanguage(lang.code)"
          class="flex items-center gap-3 w-full text-left px-3 py-2 text-xs font-mono text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
        >
          <img :src="`https://flagcdn.com/w20/${lang.flag}.png`" :alt="lang.label" class="w-4 h-3 object-cover rounded-sm shadow-sm" />
          {{ lang.label }}
        </button>
      </div>
    </div>

    <div class="max-w-4xl mx-auto w-full flex-grow">
      
      <header class="flex flex-col items-center mb-12 text-center pt-8">
        <img
          src="/logo.svg"
          alt="Rianov-Projects Logo"
          class="h-28 mb-4 object-contain"
          onerror="this.style.display = 'none'"
        />
        <h1 class="text-4xl font-extrabold tracking-tight text-white mb-2">
          Rianov-Projects
        </h1>
        
        <p class="text-red-500 font-mono text-xs uppercase tracking-widest mb-6">
          {{ t('header.subtitle') }}
        </p>

        <div class="max-w-2xl bg-slate-900/40 border border-slate-800 rounded-2xl p-6 text-left md:text-center backdrop-blur-sm" dir="auto">
          <p class="text-slate-300 text-sm leading-relaxed">
            {{ t('header.manifest_1') }}
            <span class="text-red-400 font-semibold" dir="ltr">{{ t('header.manifest_open_source') }}</span>
            {{ t('header.manifest_2') }}
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
            href="https://github.com/rianov-projects" 
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
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ProjectCard from "./components/ProjectCard.vue";

const { t, locale } = useI18n();

// Estado para abrir/cerrar el menú
const isLangMenuOpen = ref(false);

// Diccionario de idiomas asociado a los códigos de país ISO 3166-1 alpha-2
const languages = [
  { code: 'es', label: 'Español', flag: 'co' },
  { code: 'en', label: 'English', flag: 'us' },
  { code: 'zh', label: '中文', flag: 'cn' },
  { code: 'ja', label: '日本語', flag: 'jp' },
  { code: 'ko', label: '한국어', flag: 'kr' },
  { code: 'pt', label: 'Português', flag: 'br' },
  { code: 'fr', label: 'Français', flag: 'fr' },
  { code: 'it', label: 'Italiano', flag: 'it' },
  { code: 'de', label: 'Deutsch', flag: 'de' },
  { code: 'ru', label: 'Русский', flag: 'ru' },
  { code: 'ar', label: 'العربية', flag: 'sa' }
];

// Computada para saber cuál es el idioma activo y mostrar su bandera en el botón
const currentLang = computed(() => {
  return languages.find(l => l.code === locale.value) || languages[0];
});

// Función para cambiar de idioma y cerrar el menú
const selectLanguage = (code: string) => {
  locale.value = code;
  isLangMenuOpen.value = false;
};
</script>