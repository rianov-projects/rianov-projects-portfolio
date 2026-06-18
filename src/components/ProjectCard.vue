<template>
  <div
    class="group bg-slate-900 border border-slate-800 rounded-2xl p-6 transition hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10 flex flex-col h-full"
  >
    <div class="flex justify-between items-start mb-4">
      <h3 class="text-xl font-bold text-slate-100">{{ title }}</h3>
      <a
        v-if="link"
        :href="link"
        target="_blank"
        class="text-slate-500 hover:text-red-500 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>

    <p class="text-slate-400 text-sm mb-6 flex-grow">{{ description }}</p>

    <div class="flex items-center justify-between mt-auto">
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="px-2 py-1 bg-slate-800 text-slate-300 text-xs font-mono rounded-md border border-slate-700"
        >
          {{ tag }}
        </span>
      </div>
      <!-- Indicador de estado dinámico -->
      <span
        class="px-2 py-0.5 text-[10px] uppercase font-bold rounded border"
        :class="statusClass"
      >
        {{ status }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  title: string;
  description: string;
  link?: string; // Lo dejamos opcional por si hay proyectos sin link aún
  tags: string[];
  status: "Estable" | "En desarrollo" | "Beta";
}>();

// Calculamos los colores según el estado
const statusClass = computed(() => {
  switch (props.status) {
    case "Estable":
      return "border-emerald-500/30 text-emerald-400 bg-emerald-500/10";
    case "En desarrollo":
      return "border-amber-500/30 text-amber-400 bg-amber-500/10";
    case "Beta":
      return "border-blue-500/30 text-blue-400 bg-blue-500/10";
    default:
      return "border-slate-500/30 text-slate-400 bg-slate-500/10";
  }
});
</script>
