import { createI18n } from 'vue-i18n';

// Import the JS files
import pranaPulse from '~/content/pranaPulse.js';
import cyclesEn from '~/content/cycles-en.js';
import cyclesEs from '~/content/cycles-es.js';

const formatCyclesNames = (cycles, lang) => {
  let formattedCycles = {};
  cycles.forEach(cycle => {
    formattedCycles[cycle.key] = cycle.displayName[lang];
  });
  return formattedCycles;
};

const messages = {
  en: {
    pranaPulse: {
      theory: pranaPulse.theory.en,
      cycles: formatCyclesNames(pranaPulse.cycles, "en")
    },
    cycles: cyclesEn
  },
  es: {
    pranaPulse: {
      theory: pranaPulse.theory.es,
      cycles: formatCyclesNames(pranaPulse.cycles, "es")
    },
    cycles: cyclesEs
  }
};

console.log("MESSAGES:::::::" , messages)
export default defineNuxtPlugin(nuxtApp => {
  const i18n = createI18n({
    legacy: false,
    locale: 'es',
    fallbackLocale: 'es',
    messages
  });

  nuxtApp.vueApp.use(i18n);
});