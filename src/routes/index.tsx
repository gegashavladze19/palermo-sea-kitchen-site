import { createFileRoute } from "@tanstack/react-router";
import { Phone, Instagram, Facebook, MapPin, Clock, ArrowRight, Music2 } from "lucide-react";

import { LangProvider, useLang } from "@/lib/lang";
import { contact, showLiveMusic, hours } from "@/content/site";
import { Nav } from "@/components/site/Nav";
import { MenuSection } from "@/components/site/MenuSection";
import { Gallery } from "@/components/site/Gallery";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import liveMusic from "@/assets/live-music.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Palermo Restaurant — Ureki, Georgia" },
      {
        name: "description",
        content:
          "Palermo Restaurant in Ureki, Georgia. Georgian cuisine, khinkali, khachapuri and more. Open every day 09:00–00:00.",
      },
      { property: "og:title", content: "Palermo Restaurant — Ureki, Georgia" },
      {
        property: "og:description",
        content:
          "Palermo Restaurant in Ureki, Georgia. Georgian cuisine, khinkali, khachapuri and more.",
      },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Palermo",
          servesCuisine: "Georgian",
          address: {
            "@type": "PostalAddress",
            streetAddress: "67 Ekvtime Takaishvili Street",
            addressLocality: "Ureki",
            addressRegion: "Guria",
            addressCountry: "GE",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "09:00",
              closes: "00:00",
            },
          ],
        }),
      },
    ],
  }),
  component: () => (
    <LangProvider>
      <Page />
    </LangProvider>
  ),
});

function Page() {
  const { d } = useLang();

  return (
    <div id="top">
      <Nav />

      <main>
        {/* HERO */}
        <section className="relative flex min-h-[100svh] items-end overflow-hidden">
          <img
            src={hero}
            alt="Seaside dining table at sunset in Ureki"
            width={1600}
            height={1200}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-night)" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
            <p className="rise text-[0.7rem] tracking-[0.35em] text-gold uppercase">
              {d.hero.eyebrow}
            </p>
            <h1
              className="rise mt-4 text-[clamp(3rem,17vw,9rem)] leading-[0.95] tracking-[0.06em] text-night-foreground"
              style={{ animationDelay: "0.1s" }}
            >
              {d.hero.title}
            </h1>
            <p
              className="rise mt-3 font-display text-xl text-night-foreground/85 sm:text-2xl"
              style={{ animationDelay: "0.2s" }}
            >
              {d.hero.subtitle}
            </p>
            <p
              className="rise mt-5 max-w-md text-sm leading-relaxed text-night-foreground/70 sm:text-base"
              style={{ animationDelay: "0.3s" }}
            >
              {d.hero.text}
            </p>
            <div
              className="rise mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                {d.hero.cta1} <ArrowRight size={16} />
              </a>
              <a
                href="#location"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-night-foreground/35 px-7 py-3.5 text-sm font-semibold text-night-foreground transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                {d.hero.cta2}
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow">{d.about.eyebrow}</p>
              <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">{d.about.title}</h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">{d.about.p1}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{d.about.p2}</p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
                  {d.hoursS.everyDay}
                </span>
                <span className="rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
                  Ureki, Guria
                </span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
              <img
                src={about}
                alt="Palermo restaurant dining room"
                loading="lazy"
                width={1200}
                height={1400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <MenuSection />
        <Gallery />

        {/* LIVE MUSIC — set showLiveMusic to false in src/content/site.ts to remove */}
        {showLiveMusic && (
          <section className="relative overflow-hidden">
            <img
              src={liveMusic}
              alt="Evening live music at the restaurant"
              loading="lazy"
              width={1600}
              height={1008}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-night/75"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
              <Music2 className="mx-auto text-gold" size={28} aria-hidden="true" />
              <p className="eyebrow mt-5">{d.music.eyebrow}</p>
              <h2 className="mt-3 text-3xl text-night-foreground sm:text-4xl">{d.music.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-night-foreground/80">
                {d.music.text}
              </p>
            </div>
          </section>
        )}

        {/* LOCATION + HOURS */}
        <section id="location" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="eyebrow">{d.location.eyebrow}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">{d.location.title}</h2>

            <div className="mt-10 grid gap-6 lg:grid-cols-5">
              <div className="lg:col-span-3 overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
                <iframe
                  title="Palermo location map"
                  src={contact.mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[320px] w-full sm:h-[420px]"
                />
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="rounded-3xl bg-card p-6 shadow-[var(--shadow-soft)]">
                  <MapPin className="text-primary" size={22} aria-hidden="true" />
                  <address className="mt-4 not-italic leading-relaxed">
                    {d.location.address.map((line, i) => (
                      <span key={line} className={i === 0 ? "block font-semibold" : "block text-muted-foreground"}>
                        {line}
                      </span>
                    ))}
                  </address>
                  <a
                    href={contact.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    {d.location.button} <ArrowRight size={15} />
                  </a>
                </div>

                <div className="rounded-3xl bg-card p-6 shadow-[var(--shadow-soft)]">
                  <div className="flex items-center gap-2">
                    <Clock className="text-primary" size={20} aria-hidden="true" />
                    <h3 className="text-xl">{d.hoursS.title}</h3>
                  </div>
                  <ul className="mt-4">
                    {d.hoursS.days.map((day) => (
                      <li
                        key={day}
                        className="flex justify-between border-b border-border/70 py-2.5 text-sm last:border-0"
                      >
                        <span className="text-muted-foreground">{day}</span>
                        <span className="font-medium tabular-nums">{hours[0]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-secondary/60 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="eyebrow">{d.contactS.eyebrow}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">{d.contactS.title}</h2>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <ContactButton
                href={contact.phone ? `tel:${contact.phone.replace(/\s/g, "")}` : ""}
                icon={<Phone size={18} />}
                label={d.contactS.call}
                value={contact.phone}
                placeholder={d.contactS.placeholder}
              />
              <ContactButton
                href={contact.instagram}
                icon={<Instagram size={18} />}
                label={d.contactS.instagram}
                value={contact.instagram}
                placeholder={d.contactS.placeholder}
              />
              <ContactButton
                href={contact.facebook}
                icon={<Facebook size={18} />}
                label={d.contactS.facebook}
                value={contact.facebook}
                placeholder={d.contactS.placeholder}
              />
              <ContactButton
                href={contact.maps}
                icon={<MapPin size={18} />}
                label={d.contactS.maps}
                value={contact.maps}
                placeholder={d.contactS.placeholder}
              />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-night py-14 text-night-foreground">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-2xl tracking-[0.35em]">PALERMO</p>
              <p className="mt-3 text-sm text-night-foreground/65">{d.footer.tagline}</p>
              <p className="text-sm text-night-foreground/65">
                67 Ekvtime Takaishvili Street
              </p>
              <p className="text-sm text-night-foreground/65">{d.footer.hours}</p>
            </div>
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={18} />, href: contact.instagram, label: "Instagram" },
                { icon: <Facebook size={18} />, href: contact.facebook, label: "Facebook" },
                { icon: <MapPin size={18} />, href: contact.maps, label: "Google Maps" },
              ].map((s) =>
                s.href ? (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="rounded-full border border-night-foreground/20 p-3 transition-colors hover:border-gold hover:text-gold"
                  >
                    {s.icon}
                  </a>
                ) : (
                  <span
                    key={s.label}
                    aria-label={`${s.label} — ${d.contactS.placeholder}`}
                    title={d.contactS.placeholder}
                    className="rounded-full border border-dashed border-night-foreground/20 p-3 text-night-foreground/35"
                  >
                    {s.icon}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="mt-10 border-t border-night-foreground/10 pt-6 text-xs text-night-foreground/45">
            <p>{d.footer.disclaimer}</p>
            <p className="mt-2">© {new Date().getFullYear()} Palermo. {d.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactButton({
  href,
  icon,
  label,
  value,
  placeholder,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  placeholder: string;
}) {
  const base =
    "flex items-center gap-3 rounded-2xl px-5 py-4 text-left transition-all duration-300";
  if (!value) {
    return (
      <span
        className={`${base} border border-dashed border-border bg-card/50 text-muted-foreground`}
      >
        {icon}
        <span>
          <span className="block text-sm font-semibold">{label}</span>
          <span className="block text-xs">{placeholder}</span>
        </span>
      </span>
    );
  }
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`${base} bg-card shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:text-primary`}
    >
      {icon}
      <span className="text-sm font-semibold">{label}</span>
    </a>
  );
}
