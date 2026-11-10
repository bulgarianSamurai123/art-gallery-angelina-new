// One-time backfill: machine-translates existing Firebase content from Bulgarian to English
// and stores it in the *_en fields that the site reads (name_en, description_en, title_en).
//
// Usage (Node 18+), from the project root:
//   set DEEPL_API_KEY=your-key                     (Windows CMD)
//   node scripts/translate-content.mjs products    (dry run: prints, writes nothing)
//   node scripts/translate-content.mjs products --write
//
// Collections: products | gallery | projects
// Optional: set FIREBASE_URL to target another database (default: production).
// Only empty *_en fields are filled, so manual translations are never overwritten.
// Get a free DeepL API key at https://www.deepl.com/pro-api (free tier: 500k characters/month).

const FIELDS = {
  products: ["name", "description"],
  gallery: ["name"],
  projects: ["title", "description"],
};

const collection = process.argv[2];
const write = process.argv.includes("--write");
const apiKey = process.env.DEEPL_API_KEY;
const baseUrl =
  process.env.FIREBASE_URL ||
  "https://art-gallery-angelina-default-rtdb.europe-west1.firebasedatabase.app";

if (!FIELDS[collection]) {
  console.error("Pass a collection: products | gallery | projects");
  process.exit(1);
}
if (!apiKey) {
  console.error("Set the DEEPL_API_KEY environment variable first.");
  process.exit(1);
}

const deeplUrl = apiKey.endsWith(":fx")
  ? "https://api-free.deepl.com/v2/translate"
  : "https://api.deepl.com/v2/translate";

async function translate(texts) {
  const response = await fetch(deeplUrl, {
    method: "POST",
    headers: {
      Authorization: `DeepL-Auth-Key ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: texts, source_lang: "BG", target_lang: "EN-GB" }),
  });
  if (!response.ok) {
    throw new Error(`DeepL error ${response.status}: ${await response.text()}`);
  }
  const data = await response.json();
  return data.translations.map((t) => t.text);
}

const response = await fetch(`${baseUrl}/${collection}.json`);
const items = (await response.json()) || {};
const fields = FIELDS[collection];

let changed = 0;
for (const [key, item] of Object.entries(items)) {
  // Only translate fields that have Bulgarian text and no English yet
  const todo = fields.filter((f) => item[f] && !item[`${f}_en`]);
  if (todo.length === 0) continue;

  const translated = await translate(todo.map((f) => item[f]));
  const update = Object.fromEntries(todo.map((f, i) => [`${f}_en`, translated[i]]));

  console.log(`\n${collection}/${key}`);
  todo.forEach((f) => console.log(`  ${f}: ${item[f]}\n  ${f}_en: ${update[`${f}_en`]}`));

  if (write) {
    // PATCH only adds the *_en fields; the rest of the item is untouched
    const res = await fetch(`${baseUrl}/${collection}/${key}.json`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(update),
    });
    if (!res.ok) throw new Error(`Firebase error ${res.status} on ${key}`);
  }
  changed++;
}

console.log(
  `\n${changed} item(s) ${write ? "translated and saved" : "would be translated (dry run, add --write to save)"}.`
);
