import { useState } from "react";
import { menu } from "@/content/site";
import { useLang } from "@/lib/lang";
import { cn } from "@/lib/utils";

export function MenuSection() {
  const { d, lang } = useLang();
  const [active, setActive] = useState(menu[0]!.id);
  const current = menu.find((c) => c.id === active) ?? menu[0]!;


  return (
    <section id="menu" className="bg-night py-20 text-night-foreground sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">{d.menuS.eyebrow}</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">{d.menuS.title}</h2>

        <div className="mt-8 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
            {menu.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                aria-pressed={active === c.id}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm whitespace-nowrap transition-all duration-300",
                  active === c.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-night-foreground/20 text-night-foreground/75 hover:border-gold/60 hover:text-gold",
                )}
              >
                {c[lang]}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-night-foreground/10 bg-night-foreground/[0.04] p-5 sm:p-8">
          <h3 className="text-2xl text-gold">{current[lang]}</h3>
          <ul className="mt-6 divide-y divide-night-foreground/10">
            {current.items.map((item) => (
              <li
                key={item.en}
                className="flex items-baseline gap-4 py-4 transition-colors hover:text-gold"
              >
                <span className="text-base sm:text-lg">{item[lang]}</span>
                <span
                  className="h-px flex-1 border-b border-dotted border-night-foreground/25"
                  aria-hidden="true"
                />
                <span className="rounded-full border border-dashed border-night-foreground/25 px-3 py-1 text-xs text-night-foreground/55">
                  {item.price || d.menuS.price}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 max-w-2xl text-sm text-night-foreground/55">{d.menuS.note}</p>
      </div>
    </section>
  );
}
