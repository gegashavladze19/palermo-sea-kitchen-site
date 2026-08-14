import { useLang } from "@/lib/lang";
import khachapuriAdjaruli from "@/assets/khachapuri-adjaruli.jpg.asset.json";
import khinkali from "@/assets/khinkali.jpg.asset.json";
import grilledPlatter from "@/assets/grilled-platter.jpg.asset.json";
import kharcho from "@/assets/kharcho.jpg.asset.json";
import terrace from "@/assets/terrace.jpg.asset.json";

/** Official photos of Palermo Restaurant, Ureki. */
const photos = [
  { src: khachapuriAdjaruli.url, alt: "Adjarian khachapuri at Palermo" },
  { src: khinkali.url, alt: "Georgian khinkali at Palermo" },
  { src: grilledPlatter.url, alt: "Grilled vegetables and fish platter" },
  { src: kharcho.url, alt: "Kharcho soup" },
  { src: terrace.url, alt: "Outdoor terrace seating at Palermo" },
];


export function Gallery() {
  const { d } = useLang();
  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">{d.gallery.eyebrow}</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">{d.gallery.title}</h2>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {photos.map((p, i) => (
            <figure
              key={p.alt}
              className={
                "group relative overflow-hidden rounded-2xl bg-secondary " +
                (i === 0 ? "col-span-2 lg:col-span-2 lg:row-span-2" : "")
              }
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 bg-night/0 transition-colors duration-500 group-hover:bg-night/15" />
            </figure>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">{d.gallery.note}</p>
      </div>
    </section>
  );
}
