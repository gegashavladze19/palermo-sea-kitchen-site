/**
 * ─────────────────────────────────────────────────────────────
 *  PALERMO — MENU DATA (owner-editable)
 *
 *  Every dish below is one object. To edit the menu you only
 *  need to change these objects — no UI code involved.
 *
 *    id          unique key
 *    category    must match one of the ids in `menuCategories`
 *    ka/en/ru    dish name in each language
 *    desc        optional short description (ka/en/ru)
 *    price       leave "" to show the "ფასი" placeholder chip
 *    photo       optional key from `photos` below (real Palermo photo)
 *    featured    true = also appears in the "რჩეული კერძები" block
 *    available   set to false to temporarily hide a dish
 *    unconfirmed true = name/detail still to be confirmed by the restaurant
 *
 *  A category button only appears when it has at least one
 *  available item.
 * ─────────────────────────────────────────────────────────────
 */

import khachapuriAdjaruli from "@/assets/khachapuri-adjaruli.jpg.asset.json";
import khachapuri from "@/assets/khachapuri.jpg.asset.json";
import khinkali from "@/assets/khinkali.jpg.asset.json";
import kharcho from "@/assets/kharcho.jpg.asset.json";
import grilledPlatter from "@/assets/grilled-platter.jpg.asset.json";
import meatStew from "@/assets/meat-stew.jpg.asset.json";
import cutletPuree from "@/assets/cutlet-puree.jpg.asset.json";
import ketsiCheese from "@/assets/ketsi-cheese.jpg.asset.json";
import mtsvadiSalad from "@/assets/mtsvadi-salad.jpg.asset.json";
import potatoWedges from "@/assets/potato-wedges.jpg.asset.json";
import hall from "@/assets/hall.jpg.asset.json";
import terrace from "@/assets/terrace.jpg.asset.json";
import interior from "@/assets/interior.jpg.asset.json";

/** Real Palermo photographs. Add new ones here and reference the key on a dish. */
export const photos = {
  khachapuriAdjaruli: khachapuriAdjaruli.url,
  khachapuri: khachapuri.url,
  khinkali: khinkali.url,
  kharcho: kharcho.url,
  grilledPlatter: grilledPlatter.url,
  meatStew: meatStew.url,
  cutletPuree: cutletPuree.url,
  ketsiCheese: ketsiCheese.url,
  mtsvadiSalad: mtsvadiSalad.url,
  potatoWedges: potatoWedges.url,
  hall: hall.url,
  terrace: terrace.url,
  interior: interior.url,
} as const;

export type PhotoKey = keyof typeof photos;

export type Tri = { ka: string; en: string; ru: string };

export type Dish = {
  id: string;
  category: string;
  ka: string;
  en: string;
  ru: string;
  desc?: Tri;
  price?: string;
  photo?: PhotoKey;
  featured?: boolean;
  available?: boolean;
  unconfirmed?: boolean;
};

export const menuCategories: { id: string; ka: string; en: string; ru: string }[] = [
  { id: "georgian", ka: "ქართული კერძები", en: "Georgian dishes", ru: "Грузинские блюда" },
  { id: "khachapuri", ka: "ხაჭაპური", en: "Khachapuri", ru: "Хачапури" },
  { id: "khinkali", ka: "ხინკალი", en: "Khinkali", ru: "Хинкали" },
  { id: "cold", ka: "ცივი კერძები", en: "Cold starters", ru: "Холодные закуски" },
  { id: "salads", ka: "სალათები", en: "Salads", ru: "Салаты" },
  { id: "soups", ka: "სუპები", en: "Soups", ru: "Супы" },
  { id: "meat", ka: "ხორცეული", en: "Meat", ru: "Мясные блюда" },
  { id: "grill", ka: "ქაბაბი და გრილი", en: "Kebab & grill", ru: "Кебаб и гриль" },
  { id: "chicken", ka: "ქათამი", en: "Chicken", ru: "Курица" },
  { id: "fish", ka: "თევზეული", en: "Fish", ru: "Рыба" },
  { id: "sides", ka: "გარნირი", en: "Sides", ru: "Гарниры" },
  { id: "pasta", ka: "მაკარონი / პასტა", en: "Pasta", ru: "Паста" },
  { id: "drinks", ka: "სასმელები", en: "Drinks", ru: "Напитки" },
  { id: "wine", ka: "ღვინო", en: "Wine", ru: "Вино" },
];

export const dishes: Dish[] = [
  /* ── ხაჭაპური ─────────────────────────────── */
  {
    id: "adjaruli",
    category: "khachapuri",
    ka: "აჭარული ხაჭაპური",
    en: "Adjarian khachapuri",
    ru: "Аджарский хачапури",
    desc: {
      ka: "ნავის ფორმის ხაჭაპური ყველით, კვერცხითა და კარაქით.",
      en: "Boat-shaped cheese bread with egg and butter.",
      ru: "Хачапури-лодочка с сыром, яйцом и маслом.",
    },
    photo: "khachapuriAdjaruli",
    featured: true,
    price: "",
  },
  {
    id: "megruli",
    category: "khachapuri",
    ka: "მეგრული ხაჭაპური",
    en: "Megrelian khachapuri",
    ru: "Мегрельский хачапури",
    price: "",
  },
  {
    id: "imeruli",
    category: "khachapuri",
    ka: "ხაჭაპური (იმერული)",
    en: "Khachapuri (Imeretian)",
    ru: "Хачапури (имеретинский)",
    photo: "khachapuri",
    featured: true,
    price: "",
  },
  {
    id: "lobiani",
    category: "khachapuri",
    ka: "ლობიანი",
    en: "Lobiani",
    ru: "Лобиани",
    price: "",
  },

  /* ── ხინკალი ──────────────────────────────── */
  {
    id: "khinkali",
    category: "khinkali",
    ka: "ხინკალი",
    en: "Khinkali",
    ru: "Хинкали",
    desc: {
      ka: "ხელით დაგრეხილი ხინკალი.",
      en: "Hand-folded Georgian dumplings.",
      ru: "Хинкали ручной лепки.",
    },
    photo: "khinkali",
    featured: true,
    price: "",
  },

  /* ── ქართული კერძები ──────────────────────── */
  {
    id: "meat-stew",
    category: "georgian",
    ka: "ხორცის კერძი საწებელში — დასადასტურებელია",
    en: "Meat dish in sauce — to be confirmed",
    ru: "Мясное блюдо в соусе — уточняется",
    desc: {
      ka: "კერძის ზუსტი დასახელება რესტორანთან დასაზუსტებელია.",
      en: "Exact dish name to be confirmed with the restaurant.",
      ru: "Точное название блюда уточняется у ресторана.",
    },
    photo: "meatStew",
    featured: true,
    unconfirmed: true,
    price: "",
  },
  {
    id: "ketsi-cheese",
    category: "georgian",
    ka: "კეცში მომზადებული კერძი ყველით — დასადასტურებელია",
    en: "Clay-pot dish baked with cheese — to be confirmed",
    ru: "Блюдо в кеци с сыром — уточняется",
    photo: "ketsiCheese",
    featured: true,
    unconfirmed: true,
    price: "",
  },
  {
    id: "badrijani",
    category: "cold",
    ka: "ბადრიჯანი ნიგვზით",
    en: "Aubergine with walnuts",
    ru: "Баклажаны с орехами",
    price: "",
  },

  /* ── სალათები ─────────────────────────────── */
  {
    id: "kitri-pomidori",
    category: "salads",
    ka: "კიტრი-პომიდვრის სალათი",
    en: "Cucumber & tomato salad",
    ru: "Салат из огурцов и помидоров",
    desc: {
      ka: "სეზონური ბოსტნეული, ხახვი და მწვანილი.",
      en: "Seasonal vegetables with onion and herbs.",
      ru: "Сезонные овощи с луком и зеленью.",
    },
    photo: "mtsvadiSalad",
    featured: true,
    price: "",
  },
  {
    id: "greek",
    category: "salads",
    ka: "ბერძნული სალათი",
    en: "Greek salad",
    ru: "Греческий салат",
    price: "",
  },
  {
    id: "chicken-salad",
    category: "salads",
    ka: "ქათმის სალათი",
    en: "Chicken salad",
    ru: "Салат с курицей",
    price: "",
  },
  {
    id: "mushroom-salad",
    category: "salads",
    ka: "სოკოს სალათი — დასადასტურებელია",
    en: "Mushroom salad — to be confirmed",
    ru: "Салат с грибами — уточняется",
    unconfirmed: true,
    price: "",
  },

  /* ── სუპები ───────────────────────────────── */
  {
    id: "kharcho",
    category: "soups",
    ka: "ხარჩო",
    en: "Kharcho",
    ru: "Харчо",
    photo: "kharcho",
    price: "",
  },
  {
    id: "soup-day",
    category: "soups",
    ka: "დღის სუპი — დასადასტურებელია",
    en: "Soup of the day — to be confirmed",
    ru: "Суп дня — уточняется",
    unconfirmed: true,
    price: "",
  },

  /* ── ხორცეული ─────────────────────────────── */
  {
    id: "pork",
    category: "meat",
    ka: "ღორის ხორცი",
    en: "Pork",
    ru: "Свинина",
    price: "",
  },
  {
    id: "lamb",
    category: "meat",
    ka: "ცხვრის ხორცი",
    en: "Lamb",
    ru: "Баранина",
    price: "",
  },
  {
    id: "cutlet",
    category: "meat",
    ka: "კატლეტი პიურეთი — დასადასტურებელია",
    en: "Cutlet with mashed potato — to be confirmed",
    ru: "Котлета с пюре — уточняется",
    photo: "cutletPuree",
    unconfirmed: true,
    price: "",
  },

  /* ── ქაბაბი და გრილი ──────────────────────── */
  {
    id: "kebab",
    category: "grill",
    ka: "ქაბაბი",
    en: "Kebab",
    ru: "Кебаб",
    price: "",
  },
  {
    id: "mtsvadi",
    category: "grill",
    ka: "შაშლიკი / მწვადი",
    en: "Shashlik / mtsvadi",
    ru: "Шашлык / мцвади",
    desc: {
      ka: "ნაკვერცხალზე შემწვარი ხორცი ხახვით.",
      en: "Charcoal-grilled meat served with onion.",
      ru: "Мясо на углях с луком.",
    },
    photo: "mtsvadiSalad",
    price: "",
  },
  {
    id: "grill-platter",
    category: "grill",
    ka: "გრილზე მომზადებული კერძები",
    en: "Dishes from the grill",
    ru: "Блюда на гриле",
    photo: "grilledPlatter",
    featured: true,
    price: "",
  },

  /* ── ქათამი ───────────────────────────────── */
  {
    id: "chicken-dish",
    category: "chicken",
    ka: "ქათმის კერძები",
    en: "Chicken dishes",
    ru: "Блюда из курицы",
    price: "",
  },
  {
    id: "chicken-fillet",
    category: "chicken",
    ka: "ქათმის ფილე",
    en: "Chicken fillet",
    ru: "Куриное филе",
    price: "",
  },

  /* ── თევზეული ─────────────────────────────── */
  {
    id: "fish",
    category: "fish",
    ka: "თევზის კერძები",
    en: "Fish dishes",
    ru: "Рыбные блюда",
    price: "",
  },

  /* ── გარნირი ──────────────────────────────── */
  {
    id: "wedges",
    category: "sides",
    ka: "სოფლური კარტოფილი",
    en: "Country-style potatoes",
    ru: "Картофель по-деревенски",
    desc: {
      ka: "ხრაშუნა კარტოფილი სოუსთან ერთად.",
      en: "Crisp potato wedges served with a dip.",
      ru: "Хрустящий картофель с соусом.",
    },
    photo: "potatoWedges",
    featured: true,
    price: "",
  },
  {
    id: "fries",
    category: "sides",
    ka: "კარტოფილი ფრი",
    en: "French fries",
    ru: "Картофель фри",
    price: "",
  },
  {
    id: "puree",
    category: "sides",
    ka: "პიურე",
    en: "Mashed potato",
    ru: "Пюре",
    price: "",
  },

  /* ── მაკარონი / პასტა ─────────────────────── */
  {
    id: "pasta",
    category: "pasta",
    ka: "მაკარონი / პასტა",
    en: "Pasta",
    ru: "Паста",
    price: "",
  },

  /* ── სასმელები ────────────────────────────── */
  {
    id: "coffee",
    category: "drinks",
    ka: "ყავა",
    en: "Coffee",
    ru: "Кофе",
    price: "",
  },
  {
    id: "soft",
    category: "drinks",
    ka: "უალკოჰოლო სასმელები",
    en: "Soft drinks",
    ru: "Безалкогольные напитки",
    price: "",
  },

  /* ── ღვინო ────────────────────────────────── */
  {
    id: "wine",
    category: "wine",
    ka: "ღვინო",
    en: "Wine",
    ru: "Вино",
    price: "",
  },
];

/** UI labels for the menu block. */
export const menuUi = {
  ka: {
    featured: "რჩეული კერძები",
    featuredNote: "ფოტოები გადაღებულია პალერმოში.",
    all: "ყველა",
    search: "მოძებნე კერძი...",
    empty: "ამ კატეგორიაში კერძი ვერ მოიძებნა.",
    unconfirmed: "დასადასტურებელია",
    close: "დახურვა",
  },
  en: {
    featured: "Featured dishes",
    featuredNote: "Photographs taken at Palermo.",
    all: "All",
    search: "Search a dish...",
    empty: "No dishes found in this category.",
    unconfirmed: "To be confirmed",
    close: "Close",
  },
  ru: {
    featured: "Избранные блюда",
    featuredNote: "Фотографии сделаны в Palermo.",
    all: "Все",
    search: "Найти блюдо...",
    empty: "В этой категории блюд не найдено.",
    unconfirmed: "Уточняется",
    close: "Закрыть",
  },
} as const;
