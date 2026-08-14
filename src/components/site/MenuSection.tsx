import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { dishes, menuCategories, menuUi, photos, type Dish } from "@/content/menu";
import { useLang } from "@/lib/lang";
import { cn } from "@/lib/utils";

export function MenuSection() {
  const { d, lang } = useLang();
  const ui = menuUi[lang];
  const [active, setActive] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [lightbox, setLightbox] = useState<Dish | null>(null);

  const available = useMemo(() => dishes.filter((x) => x.available !== false), []);

  const categories = useMemo(
    () => menuCategories.filter((c) => available.some((x) => x.category === c.id)),
    [available],
  );

  const featured = useMemo(() => available.filter((x) => x.featured).slice(0, 6), [available]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return available.filter((x) => {
      if (active !== "all" && x.category !== active) return false;
      if (!q) return true;
      return [x.ka, x.en, x.ru].some((n) => n.toLowerCase().includes(q));
    });
  }, [available, active, query]);

  const grouped = useMemo(
    () =>
      categories
        .map((c) => ({ cat: c, items: filtered.filter((x) => x.category === c.id) }))
        .filter((g) => g.items.length > 0),
    [categories, filtered],
  );

  return (
    <section id="menu" className="bg-night py-20 text-night-foreground sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">{d.menuS.eyebrow}</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">{d.menuS.title}</h2>

        {/* FEATURED */}
        {featured.length > 0 && (
          <div className="mt-12">
            <div className="flex items-end justify-between gap-4">
              <h3 className="font-display text-2xl text-gold sm:text-3xl">{ui.featured}</h3>
              <span className="hidden text-xs text-night-foreground/45 sm:block">
                {ui.featuredNote}
              </span>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((dish) => (
                <button
                  key={dish.id}
                  type="button"
                  onClick={() => dish.photo && setLightbox(dish)}
                  className="group overflow-hidden rounded-3xl border border-night-foreground/10 bg-night-foreground/[0.04] text-left transition-transform duration-500 hover:-translate-y-1"
                >
                  {dish.photo && (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={photos[dish.photo]}
                        alt={dish.en}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <span className="pointer-events-none absolute inset-0 bg-night/0 transition-colors duration-500 group-hover:bg-night/20" />
                    </div>
                  )}
                  <div className="p-5">
                    <p className="font-display text-lg text-night-foreground">{dish[lang]}</p>
                    {dish.desc && (
                      <p className="mt-2 text-sm leading-relaxed text-night-foreground/60">
                        {dish.desc[lang]}
                      </p>
                    )}
                    <span className="mt-4 inline-block rounded-full border border-dashed border-night-foreground/25 px-3 py-1 text-xs text-night-foreground/55">
                      {dish.price || d.menuS.price}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* FILTERS + SEARCH */}
        <div className="mt-14 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="-mx-5 overflow-x-auto px-5 lg:mx-0 lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max gap-2 lg:w-auto lg:flex-wrap">
              {[{ id: "all", ka: ui.all, en: ui.all, ru: ui.all }, ...categories].map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActive(c.id)}
                  aria-pressed={active === c.id}
                  className={cn(
                    "rounded-full border px-4 py-2.5 text-sm whitespace-nowrap transition-all duration-300",
                    active === c.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-night-foreground/20 text-night-foreground/75 hover:border-gold/60 hover:text-gold",
                  )}
                >
                  {(c as Record<string, string>)[lang]}
                </button>
              ))}
            </div>
          </div>

          <label className="relative flex items-center lg:w-72">
            <Search
              size={16}
              className="pointer-events-none absolute left-4 text-night-foreground/40"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={ui.search}
              aria-label={ui.search}
              className="w-full rounded-full border border-night-foreground/20 bg-night-foreground/[0.04] py-2.5 pl-11 pr-4 text-sm text-night-foreground placeholder:text-night-foreground/40 outline-none transition-colors focus:border-gold/60"
            />
          </label>
        </div>

        {/* MENU LIST */}
        <div className="mt-10 space-y-10">
          {grouped.length === 0 && (
            <p className="rounded-3xl border border-dashed border-night-foreground/15 p-10 text-center text-sm text-night-foreground/55">
              {ui.empty}
            </p>
          )}

          {grouped.map(({ cat, items }) => (
            <div key={cat.id}>
              <div className="flex items-center gap-4">
                <h3 className="font-display text-xl text-gold sm:text-2xl">
                  {(cat as Record<string, string>)[lang]}
                </h3>
                <span className="h-px flex-1 bg-night-foreground/15" aria-hidden="true" />
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {items.map((dish) =>
                  dish.photo ? (
                    <button
                      key={dish.id}
                      type="button"
                      onClick={() => setLightbox(dish)}
                      className="group flex items-center gap-4 overflow-hidden rounded-2xl border border-night-foreground/10 bg-night-foreground/[0.04] p-3 text-left transition-colors duration-300 hover:border-gold/40"
                    >
                      <span className="h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24">
                        <img
                          src={photos[dish.photo]}
                          alt={dish.en}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <DishText dish={dish} lang={lang} unconfirmedLabel={ui.unconfirmed} />
                        <span className="mt-2 inline-block rounded-full border border-dashed border-night-foreground/25 px-3 py-1 text-xs text-night-foreground/55">
                          {dish.price || d.menuS.price}
                        </span>
                      </span>
                    </button>
                  ) : (
                    <div
                      key={dish.id}
                      className="flex items-center gap-4 rounded-2xl border border-night-foreground/10 p-4 transition-colors duration-300 hover:border-gold/40"
                    >
                      <span className="min-w-0 flex-1">
                        <DishText dish={dish} lang={lang} unconfirmedLabel={ui.unconfirmed} />
                      </span>
                      <span className="shrink-0 rounded-full border border-dashed border-night-foreground/25 px-3 py-1 text-xs text-night-foreground/55">
                        {dish.price || d.menuS.price}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm text-night-foreground/55">{d.menuS.note}</p>
      </div>

      {/* LIGHTBOX */}
      {lightbox?.photo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.en}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-night/90 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label={menuUi[lang].close}
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 rounded-full border border-night-foreground/25 p-2.5 text-night-foreground transition-colors hover:border-gold hover:text-gold"
          >
            <X size={18} />
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            className="max-h-full w-full max-w-3xl overflow-hidden rounded-3xl bg-night-foreground/[0.06]"
          >
            <img
              src={photos[lightbox.photo]}
              alt={lightbox.en}
              className="max-h-[70svh] w-full object-contain"
            />
            <figcaption className="p-5">
              <p className="font-display text-xl text-night-foreground">{lightbox[lang]}</p>
              {lightbox.desc && (
                <p className="mt-2 text-sm text-night-foreground/65">{lightbox.desc[lang]}</p>
              )}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

function DishText({
  dish,
  lang,
  unconfirmedLabel,
}: {
  dish: Dish;
  lang: "ka" | "en" | "ru";
  unconfirmedLabel: string;
}) {
  return (
    <>
      <span className="block text-base text-night-foreground sm:text-lg">{dish[lang]}</span>
      {dish.desc && (
        <span className="mt-1 block text-sm leading-relaxed text-night-foreground/55">
          {dish.desc[lang]}
        </span>
      )}
      {dish.unconfirmed && (
        <span className="mt-1 block text-[0.7rem] tracking-wide text-gold/70 uppercase">
          {unconfirmedLabel}
        </span>
      )}
    </>
  );
}
