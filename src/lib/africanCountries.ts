import { AfricanCountry } from "@/types"

// Citation category fallbacks by language (unverified ones marked with comment)
// Verified: sw → "Makala zinazohitaji vyanzo"
// All others use known MediaWiki standard names — verify before production

export const AFRICAN_COUNTRIES: Record<string, AfricanCountry> = {
  "404": {
    isoNumeric: "404", isoAlpha2: "KE", name: "Kenya",
    languages: ["Swahili", "English"], wikiLang: "sw",
    stubCategory: "Fupi",
    citationCategory: "Makala zinazohitaji vyanzo", // ∂∂verified
    activeEditors: 310, gap: "medium",
  },
  "566": {
    isoNumeric: "566", isoAlpha2: "NG", name: "Nigeria",
    languages: ["Hausa", "Yoruba", "Igbo"], wikiLang: "ha",
    stubCategory: "Taƙaitaccen_labari",
    citationCategory: "Articles needing additional references", // unverified
    activeEditors: 220, gap: "high",
  },
  "231": {
    isoNumeric: "231", isoAlpha2: "ET", name: "Ethiopia",
    languages: ["Amharic"], wikiLang: "am",
    stubCategory: "አጭር_መጣጥፎች",
    citationCategory: "Articles needing additional references", // unverified
    activeEditors: 45, gap: "high",
  },
  "834": {
    isoNumeric: "834", isoAlpha2: "TZ", name: "Tanzania",
    languages: ["Swahili"], wikiLang: "sw",
    stubCategory: "Fupi",
    citationCategory: "Makala zinazohitaji vyanzo", // verified
    activeEditors: 180, gap: "medium",
  },
  "288": {
    isoNumeric: "288", isoAlpha2: "GH", name: "Ghana",
    languages: ["Twi", "Akan"], wikiLang: "tw",
    stubCategory: "stub",
    citationCategory: "Articles needing additional references", // unverified
    activeEditors: 55, gap: "high",
  },
  "710": {
    isoNumeric: "710", isoAlpha2: "ZA", name: "South Africa",
    languages: ["Zulu", "Xhosa", "Afrikaans"], wikiLang: "zu",
    stubCategory: "stub",
    citationCategory: "Articles needing additional references", // unverified
    activeEditors: 185, gap: "high",
  },
  "818": {
    isoNumeric: "818", isoAlpha2: "EG", name: "Egypt",
    languages: ["Arabic"], wikiLang: "ar",
    stubCategory: "بذرة",
    citationCategory: "مقالات تحتاج مصادر", // unverified — standard Arabic Wikipedia name
    activeEditors: 380, gap: "low",
  },
  "504": {
    isoNumeric: "504", isoAlpha2: "MA", name: "Morocco",
    languages: ["Arabic", "Amazigh"], wikiLang: "ar",
    stubCategory: "بذرة",
    citationCategory: "مقالات تحتاج مصادر", // unverified
    activeEditors: 210, gap: "low",
  },
  "012": {
    isoNumeric: "012", isoAlpha2: "DZ", name: "Algeria",
    languages: ["Arabic"], wikiLang: "ar",
    stubCategory: "بذرة",
    citationCategory: "مقالات تحتاج مصادر", // unverified
    activeEditors: 180, gap: "low",
  },
  "706": {
    isoNumeric: "706", isoAlpha2: "SO", name: "Somalia",
    languages: ["Somali"], wikiLang: "so",
    stubCategory: "stub",
    citationCategory: "Articles needing additional references", // unverified
    activeEditors: 18, gap: "critical",
  },
  "466": {
    isoNumeric: "466", isoAlpha2: "ML", name: "Mali",
    languages: ["French", "Bambara"], wikiLang: "bm",
    stubCategory: "stub",
    citationCategory: "Articles needing additional references", // unverified
    activeEditors: 12, gap: "critical",
  },
  "562": {
    isoNumeric: "562", isoAlpha2: "NE", name: "Niger",
    languages: ["Hausa", "French"], wikiLang: "ha",
    stubCategory: "Taƙaitaccen_labari",
    citationCategory: "Articles needing additional references", // unverified
    activeEditors: 6, gap: "critical",
  },
  "148": {
    isoNumeric: "148", isoAlpha2: "TD", name: "Chad",
    languages: ["Arabic", "French"], wikiLang: "ar",
    stubCategory: "بذرة",
    citationCategory: "مقالات تحتاج مصادر", // unverified
    activeEditors: 5, gap: "critical",
  },
  "729": {
    isoNumeric: "729", isoAlpha2: "SD", name: "Sudan",
    languages: ["Arabic"], wikiLang: "ar",
    stubCategory: "بذرة",
    citationCategory: "مقالات تحتاج مصادر", // unverified
    activeEditors: 28, gap: "high",
  },
  "508": {
    isoNumeric: "508", isoAlpha2: "MZ", name: "Mozambique",
    languages: ["Portuguese"], wikiLang: "pt",
    stubCategory: "Esboço",
    citationCategory: "!Artigos que carecem de fontes", // unverified — standard pt Wikipedia name
    activeEditors: 15, gap: "critical",
  },
  "450": {
    isoNumeric: "450", isoAlpha2: "MG", name: "Madagascar",
    languages: ["Malagasy"], wikiLang: "mg",
    stubCategory: "stub",
    citationCategory: "Articles needing additional references", // unverified
    activeEditors: 62, gap: "high",
  },
  "180": {
    isoNumeric: "180", isoAlpha2: "CD", name: "DR Congo",
    languages: ["French", "Swahili", "Lingala"], wikiLang: "sw",
    stubCategory: "Fupi",
    citationCategory: "Makala zinazohitaji vyanzo", // verified
    activeEditors: 35, gap: "critical",
  },
  "024": {
    isoNumeric: "024", isoAlpha2: "AO", name: "Angola",
    languages: ["Portuguese"], wikiLang: "pt",
    stubCategory: "Esboço",
    citationCategory: "!Artigos que carecem de fontes", // unverified
    activeEditors: 22, gap: "critical",
  },
  "800": {
    isoNumeric: "800", isoAlpha2: "UG", name: "Uganda",
    languages: ["Swahili", "English"], wikiLang: "sw",
    stubCategory: "Fupi",
    citationCategory: "Makala zinazohitaji vyanzo", // verified
    activeEditors: 88, gap: "high",
  },
  "646": {
    isoNumeric: "646", isoAlpha2: "RW", name: "Rwanda",
    languages: ["Kinyarwanda"], wikiLang: "rw",
    stubCategory: "stub",
    citationCategory: "Articles needing additional references", // unverified
    activeEditors: 42, gap: "high",
  },
  "686": {
    isoNumeric: "686", isoAlpha2: "SN", name: "Senegal",
    languages: ["Wolof", "French"], wikiLang: "wo",
    stubCategory: "stub",
    citationCategory: "Articles needing additional references", // unverified
    activeEditors: 14, gap: "critical",
  },
  "120": {
    isoNumeric: "120", isoAlpha2: "CM", name: "Cameroon",
    languages: ["French", "English"], wikiLang: "fr",
    stubCategory: "ébauche",
    citationCategory: "Article manquant de références", // unverified — standard fr Wikipedia name
    activeEditors: 48, gap: "high",
  },
  "788": {
    isoNumeric: "788", isoAlpha2: "TN", name: "Tunisia",
    languages: ["Arabic"], wikiLang: "ar",
    stubCategory: "بذرة",
    citationCategory: "مقالات تحتاج مصادر", // unverified
    activeEditors: 95, gap: "medium",
  },
  "434": {
    isoNumeric: "434", isoAlpha2: "LY", name: "Libya",
    languages: ["Arabic"], wikiLang: "ar",
    stubCategory: "بذرة",
    citationCategory: "مقالات تحتاج مصادر", // unverified
    activeEditors: 42, gap: "medium",
  },
  "894": {
    isoNumeric: "894", isoAlpha2: "ZM", name: "Zambia",
    languages: ["English", "Nyanja"], wikiLang: "ny",
    stubCategory: "stub",
    citationCategory: "Articles needing additional references", // unverified
    activeEditors: 30, gap: "critical",
  },
  "716": {
    isoNumeric: "716", isoAlpha2: "ZW", name: "Zimbabwe",
    languages: ["Shona", "English"], wikiLang: "sn",
    stubCategory: "stub",
    citationCategory: "Articles needing additional references", // unverified
    activeEditors: 40, gap: "critical",
  },
  "384": {
    isoNumeric: "384", isoAlpha2: "CI", name: "Côte d'Ivoire",
    languages: ["French"], wikiLang: "fr",
    stubCategory: "ébauche",
    citationCategory: "Article manquant de références", // unverified
    activeEditors: 20, gap: "critical",
  },
  "854": {
    isoNumeric: "854", isoAlpha2: "BF", name: "Burkina Faso",
    languages: ["French", "Mooré"], wikiLang: "fr",
    stubCategory: "ébauche",
    citationCategory: "Article manquant de références", // unverified
    activeEditors: 10, gap: "critical",
  },
  "516": {
    isoNumeric: "516", isoAlpha2: "NA", name: "Namibia",
    languages: ["Afrikaans", "English"], wikiLang: "af",
    stubCategory: "stub",
    citationCategory: "Articles needing additional references", // unverified
    activeEditors: 25, gap: "critical",
  },
  "072": {
    isoNumeric: "072", isoAlpha2: "BW", name: "Botswana",
    languages: ["Tswana", "English"], wikiLang: "tn",
    stubCategory: "stub",
    citationCategory: "Articles needing additional references", // unverified
    activeEditors: 18, gap: "critical",
  },
  "454": {
    isoNumeric: "454", isoAlpha2: "MW", name: "Malawi",
    languages: ["Nyanja", "English"], wikiLang: "ny",
    stubCategory: "stub",
    citationCategory: "Articles needing additional references", // unverified
    activeEditors: 22, gap: "critical",
  },
  "232": {
    isoNumeric: "232", isoAlpha2: "ER", name: "Eritrea",
    languages: ["Tigrinya"], wikiLang: "ti",
    stubCategory: "stub",
    citationCategory: "Articles needing additional references", // unverified
    activeEditors: 8, gap: "critical",
  },
  "728": {
    isoNumeric: "728", isoAlpha2: "SS", name: "South Sudan",
    languages: ["English", "Arabic"], wikiLang: "ar",
    stubCategory: "بذرة",
    citationCategory: "مقالات تحتاج مصادر", // unverified
    activeEditors: 4, gap: "critical",
  },
  "324": {
    isoNumeric: "324", isoAlpha2: "GN", name: "Guinea",
    languages: ["French"], wikiLang: "fr",
    stubCategory: "ébauche",
    citationCategory: "Article manquant de références", // unverified
    activeEditors: 9, gap: "critical",
  },
  "694": {
    isoNumeric: "694", isoAlpha2: "SL", name: "Sierra Leone",
    languages: ["English"], wikiLang: "en",
    stubCategory: "stub",
    citationCategory: "Articles needing additional references", // unverified
    activeEditors: 12, gap: "critical",
  },
  "204": {
    isoNumeric: "204", isoAlpha2: "BJ", name: "Benin",
    languages: ["French"], wikiLang: "fr",
    stubCategory: "ébauche",
    citationCategory: "Article manquant de références", // unverified
    activeEditors: 11, gap: "critical",
  },
  "768": {
    isoNumeric: "768", isoAlpha2: "TG", name: "Togo",
    languages: ["French"], wikiLang: "fr",
    stubCategory: "ébauche",
    citationCategory: "Article manquant de références", // unverified
    activeEditors: 9, gap: "critical",
  },
  "478": {
    isoNumeric: "478", isoAlpha2: "MR", name: "Mauritania",
    languages: ["Arabic"], wikiLang: "ar",
    stubCategory: "بذرة",
    citationCategory: "مقالات تحتاج مصادر", // unverified
    activeEditors: 8, gap: "critical",
  },
}

export const AFRICAN_ISO_NUMERICS = new Set(Object.keys(AFRICAN_COUNTRIES))

export const getCountryByAlpha2 = (alpha2: string): AfricanCountry | null => {
  return Object.values(AFRICAN_COUNTRIES).find(
    (c) => c.isoAlpha2 === alpha2.toUpperCase()
  ) ?? null
}

export const getGapColor = (gap: AfricanCountry["gap"]): string => {
  const colors = {
    critical: "#E24B4A",
    high: "#F0997B",
    medium: "#EF9F27",
    low: "#9FE1CB",
  }
  return colors[gap]
}