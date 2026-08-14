/**
 * ─────────────────────────────────────────────────────────────
 *  PALERMO — EDITABLE CONTENT FILE
 *  Everything the restaurant owner may want to change lives here.
 *  Replace the PLACEHOLDER values below with the real information.
 * ─────────────────────────────────────────────────────────────
 */

/** Contact details — REPLACE THE PLACEHOLDERS BELOW */
export const contact = {
  /** e.g. "+995 5XX XX XX XX" — leave empty to show a placeholder chip */
  phone: "",
  /** e.g. "https://instagram.com/..." */
  instagram: "",
  /** e.g. "https://facebook.com/..." */
  facebook: "",
  /** Google Maps link (address search — replace with the exact business listing) */
 maps: "https://www.google.com/maps/search/?api=1&query=Palermo+Restaurant+Ureki+Georgia",
mapsEmbed:
  "https://www.google.com/maps?q=Palermo+Restaurant+Ureki+Georgia&output=embed",};

/** Set to false to hide the live-music section entirely */
export const showLiveMusic = true;

export const hours = ["09:00 – 00:00"] as const;

export type Lang = "ka" | "en" | "ru";

export const languages: { code: Lang; label: string }[] = [
  { code: "ka", label: "ქარ" },
  { code: "en", label: "ENG" },
  { code: "ru", label: "РУС" },
];

/** Menu categories. Add dishes with `price: ""` to keep the price placeholder. */
export type MenuItem = { ka: string; en: string; ru: string; price?: string };
export type MenuCategory = {
  id: string;
  ka: string;
  en: string;
  ru: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "khachapuri",
    ka: "ხაჭაპური",
    en: "Khachapuri",
    ru: "Хачапури",
    items: [
      { ka: "აჭარული ხაჭაპური", en: "Adjarian khachapuri", ru: "Аджарский хачапури" },
      { ka: "იმერული ხაჭაპური", en: "Imeretian khachapuri", ru: "Имеретинский хачапури" },
      { ka: "მეგრული ხაჭაპური", en: "Megrelian khachapuri", ru: "Мегрельский хачапури" },
    ],
  },
  {
    id: "khinkali",
    ka: "ხინკალი",
    en: "Khinkali",
    ru: "Хинкали",
    items: [
      { ka: "ხინკალი ხორცით", en: "Khinkali with meat", ru: "Хинкали с мясом" },
      { ka: "ხინკალი ყველით", en: "Khinkali with cheese", ru: "Хинкали с сыром" },
    ],
  },
  {
    id: "salads",
    ka: "სალათები",
    en: "Salads",
    ru: "Салаты",
    items: [
      { ka: "სეზონური სალათი", en: "Seasonal salad", ru: "Сезонный салат" },
      { ka: "სალათი ნიგვზით", en: "Salad with walnuts", ru: "Салат с орехами" },
    ],
  },
  {
    id: "soups",
    ka: "სუპები",
    en: "Soups",
    ru: "Супы",
    items: [
      { ka: "ხარჩო", en: "Kharcho", ru: "Харчо" },
      { ka: "დღის სუპი", en: "Soup of the day", ru: "Суп дня" },
    ],
  },
  {
    id: "meat",
    ka: "ხორცეული",
    en: "Meat dishes",
    ru: "Мясные блюда",
    items: [
      { ka: "მწვადი", en: "Mtsvadi (grilled meat)", ru: "Мцвади (шашлык)" },
      { ka: "ხორცის კერძი", en: "Meat dish", ru: "Мясное блюдо" },
    ],
  },
  {
    id: "kebab",
    ka: "ქაბაბი",
    en: "Kebab",
    ru: "Кебаб",
    items: [{ ka: "ქაბაბი", en: "Kebab", ru: "Кебаб" }],
  },
  {
    id: "fish",
    ka: "თევზეული",
    en: "Fish",
    ru: "Рыба",
    items: [{ ka: "შემწვარი თევზი", en: "Grilled fish", ru: "Жареная рыба" }],
  },
  {
    id: "chicken",
    ka: "ქათამი",
    en: "Chicken",
    ru: "Курица",
    items: [{ ka: "ქათმის კერძი", en: "Chicken dish", ru: "Блюдо из курицы" }],
  },
  {
    id: "sides",
    ka: "გარნირი",
    en: "Sides",
    ru: "Гарниры",
    items: [
      { ka: "შემწვარი კარტოფილი", en: "Fried potatoes", ru: "Жареный картофель" },
      { ka: "ბოსტნეულის გარნირი", en: "Vegetable side", ru: "Овощной гарнир" },
    ],
  },
  {
    id: "pasta",
    ka: "მაკარონი",
    en: "Pasta",
    ru: "Паста",
    items: [{ ka: "მაკარონი", en: "Pasta", ru: "Паста" }],
  },
  {
    id: "drinks",
    ka: "სასმელები",
    en: "Drinks",
    ru: "Напитки",
    items: [
      { ka: "უალკოჰოლო სასმელები", en: "Soft drinks", ru: "Безалкогольные напитки" },
      { ka: "ცხელი სასმელები", en: "Hot drinks", ru: "Горячие напитки" },
    ],
  },
];

type Dict = {
  nav: { about: string; menu: string; gallery: string; location: string; contact: string };
  hero: { eyebrow: string; title: string; subtitle: string; text: string; cta1: string; cta2: string };
  about: { eyebrow: string; title: string; p1: string; p2: string };
  menuS: { eyebrow: string; title: string; note: string; price: string };
  gallery: { eyebrow: string; title: string; note: string };
  music: { eyebrow: string; title: string; text: string };
  location: { eyebrow: string; title: string; button: string; address: string[] };
  hoursS: { eyebrow: string; title: string; days: string[]; everyDay: string };
  contactS: {
    eyebrow: string;
    title: string;
    call: string;
    instagram: string;
    facebook: string;
    maps: string;
    placeholder: string;
  };
  footer: { tagline: string; hours: string; rights: string; disclaimer: string };
};

export const t: Record<Lang, Dict> = {
  ka: {
    nav: { about: "ჩვენ შესახებ", menu: "მენიუ", gallery: "გალერეა", location: "მდებარეობა", contact: "კონტაქტი" },
    hero: {
      eyebrow: "ურეკი • შავი ზღვა",
      title: "PALERMO",
      subtitle: "რესტორანი ურეკში",
      text: "ქართული სამზარეულო ზღვის სიახლოვეს — თბილი ატმოსფერო, ოჯახური სუფრა და საღამოები, რომელთაც არ ჩქარობ.",
      cta1: "მენიუს ნახვა",
      cta2: "მდებარეობა",
    },
    about: {
      eyebrow: "ჩვენ შესახებ",
      title: "სუფრა ურეკის გულში",
      p1: "პალერმო ურეკის ცენტრში მდებარე რესტორანია, სადაც ქართულ სამზარეულოს კომფორტულ და თბილ გარემოში მიირთმევთ.",
      p2: "ადგილი მოსახერხებელია როგორც ოჯახური სადილისთვის, ისე მეგობრებთან საღამოს გასატარებლად.",
    },
    menuS: {
      eyebrow: "მენიუ",
      title: "კერძების კატეგორიები",
      note: "ფასები და კერძების სრული ჩამონათვალი განახლდება რესტორნის მიერ მოწოდებული ინფორმაციის მიხედვით.",
      price: "ფასი",
    },
    gallery: { eyebrow: "გალერეა", title: "მაგიდიდან", note: "ფოტოები დროებითია — ჩანაცვლდება რესტორნის ნამდვილი ფოტოებით." },
    music: {
      eyebrow: "საღამო",
      title: "ცოცხალი მუსიკა",
      text: "საღამოს პალერმოში შეგიძლიათ ისიამოვნოთ ცოცხალი მუსიკით.",
    },
    location: {
      eyebrow: "მდებარეობა",
      title: "სად გვიპოვით",
      button: "Google Maps-ში ნახვა",
      address: ["Palermo Restaurant", "ექვთიმე თაყაიშვილის ქუჩა 67", "ურეკი, გურია, საქართველო"],
    },
    hoursS: {
      eyebrow: "სამუშაო საათები",
      title: "ყოველდღე ღიაა",
      days: ["ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი", "კვირა"],
      everyDay: "ყოველდღე 09:00–00:00",
    },
    contactS: {
      eyebrow: "კონტაქტი",
      title: "დაგვიკავშირდით",
      call: "დარეკვა",
      instagram: "Instagram",
      facebook: "Facebook",
      maps: "Google Maps",
      placeholder: "დასამატებელია",
    },
    footer: {
      tagline: "რესტორანი • ურეკი, საქართველო",
      hours: "სამუშაო საათები: 09:00–00:00",
      rights: "ყველა უფლება დაცულია.",
      disclaimer: "საიტი დემო ვერსიაა. საკონტაქტო ინფორმაცია განახლდება რესტორნის დადასტურების შემდეგ.",
    },
  },
  en: {
    nav: { about: "About", menu: "Menu", gallery: "Gallery", location: "Location", contact: "Contact" },
    hero: {
      eyebrow: "Ureki • Black Sea",
      title: "PALERMO",
      subtitle: "Restaurant in Ureki",
      text: "Georgian cuisine close to the sea — a warm room, a generous table and evenings worth taking slowly.",
      cta1: "View menu",
      cta2: "Location",
    },
    about: {
      eyebrow: "About",
      title: "A table in the heart of Ureki",
      p1: "Palermo is a restaurant in Ureki serving Georgian cuisine in a comfortable, welcoming setting.",
      p2: "It suits a family lunch just as well as an unhurried evening with friends.",
    },
    menuS: {
      eyebrow: "Menu",
      title: "Our categories",
      note: "Prices and the full dish list will be updated with information provided by the restaurant.",
      price: "Price",
    },
    gallery: { eyebrow: "Gallery", title: "From the table", note: "Placeholder photography — to be replaced with the restaurant's own photos." },
    music: {
      eyebrow: "Evenings",
      title: "Live music",
      text: "In the evening at Palermo you can enjoy live music.",
    },
    location: {
      eyebrow: "Location",
      title: "Where to find us",
      button: "View on Google Maps",
      address: ["Palermo Restaurant", "67 Ekvtime Takaishvili Street", "Ureki, Guria, Georgia"],
    },
    hoursS: {
      eyebrow: "Opening hours",
      title: "Open every day",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      everyDay: "Every day 09:00–00:00",
    },
    contactS: {
      eyebrow: "Contact",
      title: "Get in touch",
      call: "Call",
      instagram: "Instagram",
      facebook: "Facebook",
      maps: "Google Maps",
      placeholder: "To be added",
    },
    footer: {
      tagline: "Restaurant • Ureki, Georgia",
      hours: "Opening hours: 09:00–00:00",
      rights: "All rights reserved.",
      disclaimer: "Demo website. Contact details will be updated once confirmed by the restaurant.",
    },
  },
  ru: {
    nav: { about: "О нас", menu: "Меню", gallery: "Галерея", location: "Локация", contact: "Контакты" },
    hero: {
      eyebrow: "Уреки • Чёрное море",
      title: "PALERMO",
      subtitle: "Ресторан в Уреки",
      text: "Грузинская кухня рядом с морем — тёплая атмосфера, щедрый стол и неспешные вечера.",
      cta1: "Смотреть меню",
      cta2: "Локация",
    },
    about: {
      eyebrow: "О нас",
      title: "Стол в сердце Уреки",
      p1: "Palermo — ресторан в Уреки с грузинской кухней в уютной и приветливой обстановке.",
      p2: "Подходит и для семейного обеда, и для спокойного вечера с друзьями.",
    },
    menuS: {
      eyebrow: "Меню",
      title: "Категории блюд",
      note: "Цены и полный список блюд будут обновлены по информации от ресторана.",
      price: "Цена",
    },
    gallery: { eyebrow: "Галерея", title: "Со стола", note: "Временные фотографии — будут заменены реальными фото ресторана." },
    music: {
      eyebrow: "Вечера",
      title: "Живая музыка",
      text: "Вечером в Palermo вы можете насладиться живой музыкой.",
    },
    location: {
      eyebrow: "Локация",
      title: "Как нас найти",
      button: "Открыть в Google Maps",
      address: ["Palermo Restaurant", "ул. Эквтиме Такаишвили 67", "Уреки, Гурия, Грузия"],
    },
    hoursS: {
      eyebrow: "Часы работы",
      title: "Открыто каждый день",
      days: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
      everyDay: "Каждый день 09:00–00:00",
    },
    contactS: {
      eyebrow: "Контакты",
      title: "Свяжитесь с нами",
      call: "Позвонить",
      instagram: "Instagram",
      facebook: "Facebook",
      maps: "Google Maps",
      placeholder: "Будет добавлено",
    },
    footer: {
      tagline: "Ресторан • Уреки, Грузия",
      hours: "Часы работы: 09:00–00:00",
      rights: "Все права защищены.",
      disclaimer: "Демо-сайт. Контактные данные будут обновлены после подтверждения рестораном.",
    },
  },
};
