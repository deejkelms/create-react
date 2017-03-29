import { englishMessages } from 'admin-on-rest'
// import frenchMessages from 'aor-language-french'

import customEnglishMessages from './en'
// import customFrenchMessages from './fr'

export default {
  // fr: { ...frenchMessages, ...customFrenchMessages },
  en: { ...englishMessages, ...customEnglishMessages }
}
