import { useLocale } from "next-intl";

// Database items (products, gallery, projects) are stored in Bulgarian.
// Translations live next to the original field with a locale suffix:
//   { name: "Маслена картина", name_en: "Oil painting" }
// If a translation is missing, the Bulgarian text is shown instead.
export function localize(item, field, locale) {
  if (!item) return undefined;
  if (locale && locale !== "bg") {
    const translated = item[`${field}_${locale}`];
    if (translated) return translated;
  }
  return item[field];
}

// In components: const l = useLocalize(); l(product, "name")
export function useLocalize() {
  const locale = useLocale();
  return (item, field) => localize(item, field, locale);
}
