import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css' // Asegúrate de que esta ruta coincida con tu archivo CSS de Tailwind
import App from './App.vue'

// 1. Importamos los diccionarios
import es from './locales/es.json'
import en from './locales/en.json'
import pt from './locales/pt.json'
import de from './locales/de.json'
import it from './locales/it.json'
import fr from './locales/fr.json'
import ar from './locales/ar.json'
import ru from './locales/ru.json'
import zh from './locales/zh.json'
import ja from './locales/ja.json'
import ko from './locales/ko.json'

// 2. Configuramos la instancia de i18n
const i18n = createI18n({
  legacy: false, // Debe estar en false para usar el Composition API (<script setup>)
  locale: 'es', // El idioma por defecto al cargar la página
  fallbackLocale: 'en', // Si falta un texto en español, usará el de inglés
  messages: { es, en, pt, de, it, fr, ar, ru, zh, ja, ko }
})

// 3. Montamos la aplicación con el plugin de idiomas
const app = createApp(App)
app.use(i18n)
app.mount('#app')