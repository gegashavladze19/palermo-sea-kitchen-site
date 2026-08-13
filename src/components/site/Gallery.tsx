import { useLang } from "@/lib/lang";
import khachapuri from "@/assets/gallery-khachapuri.jpg";
import khinkali from "@/assets/gallery-khinkali.jpg";
import kebab from "@/assets/gallery-kebab.jpg";
import fish from "@/assets/gallery-fish.jpg";
import salad from "@/assets/gallery-salad.jpg";
import soup from "@/assets/gallery-soup.jpg";

/** Replace these files in src/assets/ with the restaurant's own photos. */
const photos = [
  { src: khachapuri, alt: "Adjarian khachapuri" },
  { src: khinkali, alt: "Georgian khinkali" },
  { src: kebab, alt: "Grilled kebab" },
  { src: fish, alt: "Grilled fish" },
  { src: salad, alt: "Fresh salad" },
  { src: soup, alt: "Kharcho soup" },
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
