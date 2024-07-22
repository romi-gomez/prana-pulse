import { createI18n } from 'vue-i18n';

// Import the JS files
import pranaPulse from '~/content/pranaPulse.js';
import cyclesEn from '~/content/cycles-en.js';
import cyclesEs from '~/content/cycles-es.js';
import homepageEn from '~/content/homepage-en.json';
import homepageEs from '~/content/homepage-es.json';
import signupEn from '~/content/signup-en.json';
import signupEs from '~/content/signup-es.json';

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
    cycles: cyclesEn,
    homepage: homepageEn,
    signup: signupEn
  },
  es: {
    pranaPulse: {
      theory: pranaPulse.theory.es,
      cycles: formatCyclesNames(pranaPulse.cycles, "es")
    },
    cycles: cyclesEs,
    homepage: homepageEs,
    signup: signupEs
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