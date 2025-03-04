const website = require('./website')

module.exports = {
  'en-au': {
    default: true,
    path: 'en',
    locale: 'en-au',
    siteLanguage: 'en',
    ogLang: 'en_AU',
    defaultTitle: website.title,
    defaultTitleAlt: website.titleAlt,
    defaultDescription: 'Basierend auf gatsby-starter-prismic mit Unterstützung für Lokalisierung (i18n)',
    headline: 'Schreiben und Veröffentlichen für LekoArts',
    category: 'Kategorie',
    categories: 'Kategorien',
    was: 'wurde',
    were: 'wurden',
    tagged: 'markiert mit',
    recent: 'Neue',
    projects: 'Projekte',
    allCategories: 'Alle Kategorien',
    entries: 'Einträge',
  },
  'zh-cn': {
    path: 'zh',
    locale: 'zh-cn',
    siteLanguage: 'zh',
    ogLang: 'zh-CN',
    defaultTitle: website.title,
    defaultTitleAlt: website.titleAlt,
    defaultDescription: website.description,
    headline: website.headline,
    category: 'Category',
    categories: 'Categories',
    was: 'was',
    were: 'were',
    tagged: 'tagged with',
    recent: 'Recent',
    projects: 'projects',
    allCategories: 'All categories',
    entries: 'entries',
  },
}
