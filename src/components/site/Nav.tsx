import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/lang";
import { languages } from "@/content/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const { d, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: d.nav.about },
    { href: "#menu", label: d.nav.menu },
    { href: "#gallery", label: d.nav.gallery },
    { href: "#location", label: d.nav.location },
    { href: "#contact", label: d.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-night/95 backdrop-blur-md border-b border-night-foreground/10"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg tracking-[0.35em] text-night-foreground"
          aria-label="Palermo"
        >
          PALERMO
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-night-foreground/80 transition-colors hover:text-gold after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className="flex items-center rounded-full border border-night-foreground/20 p-0.5"
            role="group"
            aria-label="Language"
          >
            {languages.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                className={cn(
                  "rounded-full px-2.5 py-1 text-[0.68rem] font-semibold tracking-wider transition-colors",
                  lang === l.code
                    ? "bg-primary text-primary-foreground"
                    : "text-night-foreground/70 hover:text-night-foreground",
                )}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="ml-1 rounded-full border border-night-foreground/20 p-2 text-night-foreground lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 pb-6 sm:px-8" aria-label="Mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-night-foreground/10 py-3 font-display text-lg text-night-foreground/90"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
