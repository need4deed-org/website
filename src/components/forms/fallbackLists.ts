import { ListsOfOptionsType } from "./types";

export const locations = [
  { id: "Mitte", title: { de: "Mitte", en: "Mitte" } },
  { id: "Moabit", title: { de: "Moabit", en: "Moabit" } },
  { id: "Wedding", title: { de: "Wedding", en: "Wedding" } },
  {
    id: "Friedrichshain",
    title: { de: "Friedrichshain", en: "Friedrichshain" },
  },
  { id: "Kreuzberg", title: { de: "Kreuzberg", en: "Kreuzberg" } },
  { id: "Pankow", title: { de: "Pankow", en: "Pankow" } },
  {
    id: "Prenzlauer Berg",
    title: { de: "Prenzlauer Berg", en: "Prenzlauer Berg" },
  },
  { id: "Weißensee", title: { de: "Weißensee", en: "Weißensee" } },
  {
    id: "Charlottenburg",
    title: { de: "Charlottenburg", en: "Charlottenburg" },
  },
  { id: "Wilmersdorf", title: { de: "Wilmersdorf", en: "Wilmersdorf" } },
  { id: "Spandau", title: { de: "Spandau", en: "Spandau" } },
  { id: "Steglitz", title: { de: "Steglitz", en: "Steglitz" } },
  { id: "Zehlendorf", title: { de: "Zehlendorf", en: "Zehlendorf" } },
  { id: "Tempelhof", title: { de: "Tempelhof", en: "Tempelhof" } },
  { id: "Schöneberg", title: { de: "Schöneberg", en: "Schöneberg" } },
  { id: "Neukölln", title: { de: "Neukölln", en: "Neukölln" } },
  { id: "Treptow", title: { de: "Treptow", en: "Treptow" } },
  { id: "Köpenick", title: { de: "Köpenick", en: "Köpenick" } },
  { id: "Marzahn", title: { de: "Marzahn", en: "Marzahn" } },
  { id: "Hellersdorf", title: { de: "Hellersdorf", en: "Hellersdorf" } },
  { id: "Lichtenberg", title: { de: "Lichtenberg", en: "Lichtenberg" } },
  { id: "Reinickendorf", title: { de: "Reinickendorf", en: "Reinickendorf" } },
  { id: "Tegel", title: { de: "Tegel", en: "Tegel" } },
  { id: "Rudow", title: { de: "Rudow", en: "Rudow" } },
  { id: "Remotely", title: { de: "Remotely", en: "Remotely" } },
];

const activities = [
  { id: "Daycare", title: { en: "Daycare", de: "Kinderbetreuung" } },
  { id: "Sports", title: { en: "Sports", de: "Sport" } },
  {
    id: "Language café",
    title: { en: "German language Cafe", de: "Sprachcafé" },
  },
  {
    id: "Translation",
    title: {
      en: "Translation at Accommodation Centers",
      de: "Sprachmittlung in Unterkünften",
    },
  },
  {
    id: "Fillout German forms",
    title: { en: "Fillout German forms", de: "Ausfüllhilfe" },
  },
  { id: "Arts", title: { en: "Arts & Crafts", de: "Basteln" } },
  { id: "Gardening", title: { en: "Gardening", de: "Gartenarbeit" } },
  {
    id: "One-day",
    title: {
      en: "One-day Volunteering (e.g. Festivals, Cleanups)",
      de: "Eintägiges Engagement (z. B. Feier, Aufräumaktionen)",
    },
  },
  {
    id: "Playing",
    title: { en: "Playing board games", de: "Brettspiele spielen" },
  },
  {
    id: "Reading",
    title: {
      en: "Reading books for children",
      de: "Bücher vorlesen für Kinder",
    },
  },
  {
    id: "Activities-women",
    title: { en: "Activities for women", de: "Aktivitäten für Frauen*" },
  },
  {
    id: "Activities-men",
    title: { en: "Activities for men", de: "Aktivitäten für Männer*" },
  },
  { id: "Tutoring", title: { en: "Assist with homework", de: "Nachhilfe" } },
  {
    id: "Clothing Sorting",
    title: { en: "Sorting clothing", de: "Kleiderkammer" },
  },
  {
    id: "Excursions",
    title: { en: "Organizing excursions", de: "Ausflüge organisieren" },
  },
  { id: "Miscellaneous", title: { en: "Miscellaneous", de: "Sonstiges" } },
  { id: "Mentorship", title: { en: "Mentorship", de: "Mentoren" } },
];

const activitiesAccompanying = [
  {
    id: "Accompanying to government appointments",
    title: {
      en: "Accompanying to government appointments",
      de: "Begleitung: Termine bei Behörden* ",
    },
  },
  {
    id: "Apartment viewing accompanying",
    title: {
      en: "Apartment viewing accompanying",
      de: "Begleitung: Wohnungsbesichtigungen",
    },
  },
  {
    id: "Schools meetings ccompanying",
    title: {
      en: "Schools meetings ccompanying",
      de: "Begleitung: Termine in Schulen und Kitas",
    },
  },
  { id: "Accompanying", title: { en: "Accompanying", de: "Wegbegleitung" } },
  {
    id: "Accompanying to doctors'",
    title: { en: "Accompanying to doctors' ", de: "Begleitung: Arzttermine" },
  },
];

const fallbackLists: ListsOfOptionsType = {
  locations,
  activities,
  activitiesAccompanying,
  skills: [
    { id: "Woodworking", title: { en: "Woodworking", de: "Holzverarbeitung" } },
    { id: "Drawing", title: { en: "Drawing", de: "Zeichnen" } },
    { id: "Painting", title: { en: "Painting", de: "Malen" } },
    { id: "Sewing", title: { en: "Sewing", de: "Nähen" } },
    { id: "Knitting", title: { en: "Knitting", de: "Stricken" } },
    { id: "Repairs", title: { en: "Repairs", de: "Reparaturen" } },
    { id: "Cooking", title: { en: "Cooking", de: "Kochen" } },
    { id: "Teaching", title: { en: "Teaching", de: "Lehren" } },
    { id: "Programming", title: { en: "Programming", de: "Programmieren" } },
    {
      id: "Public speaking",
      title: { en: "Public speaking", de: "Öffentliches Sprechen" },
    },
    { id: "Gardening", title: { en: "Gardening", de: "Gartenarbeit" } },
    {
      id: "Landscaping",
      title: { en: "Landscaping", de: "Landschaftsgestaltung" },
    },
    { id: "Carpentry", title: { en: "Carpentry", de: "Tischlerei" } },
    { id: "Decorating", title: { en: "Decorating", de: "Dekorieren" } },
    {
      id: "Bike",
      title: { en: "Bike repairs", de: "Fahrradreparaturen" },
    },
    { id: "Photography", title: { en: "Photography", de: "Fotografie" } },
    { id: "Videography", title: { en: "Videography", de: "Videografie" } },
    { id: "Makeup", title: { en: "Makeup", de: "Make-up" } },
    {
      id: "Copywriting",
      title: { en: "Copywriting", de: "Kreatives Schreiben" },
    },
    { id: "Yoga", title: { en: "Yoga", de: "Yoga" } },
    { id: "Fitness", title: { en: "Fitness", de: "Fitness" } },
    { id: "Football", title: { en: "Football", de: "Fußball" } },
    { id: "Basketball", title: { en: "Basketball", de: "Basketball" } },
    { id: "Dance", title: { en: "Dance", de: "Tanzen" } },
    { id: "Chess", title: { en: "Chess", de: "Schach" } },
    { id: "Management", title: { en: "Management", de: "Management" } },
    { id: "SMM", title: { en: "SMM", de: "Social-Media-Management (SMM)" } },
    { id: "Mediation", title: { en: "Mediation", de: "Mediation" } },
    {
      id: "Event",
      title: { en: "Event planning", de: "Veranstaltungsplanung" },
    },
    { id: "Coaching", title: { en: "Coaching", de: "Coaching" } },
    { id: "Guitar", title: { en: "Guitar", de: "Gitarre" } },
    { id: "Piano", title: { en: "Piano", de: "Klavier" } },
    { id: "Singing", title: { en: "Singing", de: "Singen" } },
  ],
  languages: [
    { id: "de", title: { en: "German", de: "Deutsch" } },
    { id: "en", title: { en: "English", de: "Englisch" } },
    { id: "ar", title: { en: "Arabic", de: "Arabisch" } },
    { id: "fa", title: { en: "Farsi/Dari", de: "Farsi/Dari" } },
    { id: "tr", title: { en: "Turkish", de: "Türkisch" } },
    { id: "ru", title: { en: "Russian", de: "Russisch" } },
    { id: "uk", title: { en: "Ukrainian", de: "Ukrainisch" } },
    { id: "fr", title: { en: "French", de: "Französisch" } },
    { id: "kmr", title: { en: "Kurmanji", de: "Kurmanci" } },
    { id: "cdh", title: { en: "Sorani", de: "Sorani" } },
    { id: "hy", title: { en: "Armenian", de: "Armenisch" } },
    { id: "be", title: { en: "Belarusian", de: "Weißrussisch" } },
    { id: "ce", title: { en: "Chechen", de: "Tschetschenisch" } },
    { id: "zh", title: { en: "Chinese", de: "Chinesisch" } },
    { id: "cs", title: { en: "Czech", de: "Tschechisch" } },
    { id: "da", title: { en: "Dari", de: "Dari" } },
    { id: "nl", title: { en: "Dutch", de: "Niederländisch" } },
    { id: "ka", title: { en: "Georgian", de: "Georgisch" } },
    { id: "el", title: { en: "Greek", de: "Griechisch" } },
    { id: "he", title: { en: "Hebrew", de: "Hebräisch" } },
    { id: "hi", title: { en: "Hindi", de: "Hindi" } },
    { id: "it", title: { en: "Italian", de: "Italienisch" } },
    { id: "ps", title: { en: "Pashto", de: "Paschtu" } },
    { id: "pl", title: { en: "Polish", de: "Polnisch" } },
    { id: "pa", title: { en: "Punjabi", de: "Punjabi" } },
    { id: "rom", title: { en: "Romanes", de: "Romanes" } },
    { id: "ro", title: { en: "Romanian", de: "Rumänisch" } },
    { id: "sr", title: { en: "Serbian", de: "Serbisch" } },
    { id: "so", title: { en: "Somali", de: "Somali" } },
    { id: "es", title: { en: "Spanish", de: "Spanisch" } },
    { id: "sv", title: { en: "Swedish", de: "Schwedisch" } },
    { id: "ur", title: { en: "Urdu", de: "Urdu" } },
    { id: "vi", title: { en: "Vietnamese", de: "Vietnamesisch" } },
    { id: "zzz", title: { en: "Other", de: "Andere" } },
  ],
  leads: [
    {
      id: "platform",
      title: {
        en: "Volunteering platform",
        de: "Plattform für Freiwilligenarbeit",
      },
    },
    { id: "media", title: { en: "Social media", de: "Soziale Medien" } },
    { id: "newsletter", title: { en: "A newsletter", de: "Ein Newsletter" } },
    { id: "search", title: { en: "Web search", de: "Websuche" } },
    { id: "Friends", title: { en: "Friends", de: "Freunde" } },
    { id: "fair", title: { en: "Volunteer fair", de: "Freiwilligenmesse" } },
    { id: "Flyer", title: { en: "Flyer/Poster", de: "Flyer/Plakat" } },
  ],
};

export default fallbackLists;
