import { Container } from "@/components/container";

const images: { src: string; label: string; alt: string }[] = [
  { src: "/extra-01.jpg", label: "Toyota Land Cruiser 2022", alt: "2022 Toyota Land Cruiser GR Sport, front view" },
  { src: "/extra-02.jpg", label: "Mercedes-Benz C-Class 2022", alt: "Mercedes-Benz C-Class LWB, side view" },
  { src: "/extra-03.jpg", label: "BMW X5 2021", alt: "BMW X5, side profile" },
  { src: "/extra-04.jpg", label: "Honda CR-V 2020", alt: "Honda CR-V, front-left view" },
  { src: "/extra-05.jpg", label: "Volkswagen Golf 2021", alt: "Volkswagen Golf Sportwagen, front-right view" },
  { src: "/extra-06.jpg", label: "Audi Q5 2020", alt: "Audi Q5, front view" },
  { src: "/extra-07.jpg", label: "Ford Ranger 2022", alt: "Ford Ranger Wildtrak, front view" },
  { src: "/extra-08.jpg", label: "Mitsubishi Outlander 2021", alt: "Mitsubishi Outlander PHEV, rear view" },
  { src: "/extra-09.jpg", label: "Lexus RX 2022", alt: "Lexus RX 350 L, front view" },
  { src: "/extra-10.jpg", label: "Hyundai Tucson 2021", alt: "Hyundai Tucson Elite N-Line, front view" },
  { src: "/extra-11.jpg", label: "Kia Sportage 2022", alt: "Kia Sportage Plug-in Hybrid, front view" },
  { src: "/extra-12.jpg", label: "Nissan X-Trail 2021", alt: "Nissan X-Trail, side view" },
  { src: "/extra-13.jpg", label: "Armoured car (Japan)", alt: "Imperial Japanese armoured car, historical" },
  { src: "/extra-14.jpg", label: "Port of Mombasa", alt: "The Port of Mombasa, Kenya" },
  { src: "/extra-15.jpg", label: "Car showroom (vintage)", alt: "Ford car showroom, Sydney, c. 1950" },
  { src: "/extra-16.jpg", label: "Car carrier vessel", alt: "Car carrier vessel Liberty Peace sailing" },
  { src: "/extra-17.jpg", label: "Used car lot", alt: "Used car lot scene" },
  { src: "/extra-18.jpg", label: "Toyota Land Cruiser Prado 2022", alt: "Toyota Land Cruiser Prado, side view" },
  { src: "/extra-19.jpg", label: "Suzuki Swift 2021", alt: "Suzuki Swift Sport, rear view" },
  { src: "/extra-20.jpg", label: "Mazda CX-5 2022", alt: "Mazda CX-5, front view" },
];

export default function GalleryPage() {
  return (
    <main className="bg-sand-50 text-savanna-900">
      <Container className="py-10">
        <p className="eyebrow">Gallery · 20 real images</p>
        <h1 className="section-title mt-2">New photography for the site</h1>
        <p className="section-lead">
          Twenty real photographs sourced for the Savanna Motors website. Use them across
          inventory, guides, the hero, and section backgrounds.
        </p>
      </Container>
      <Container className="pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((img) => (
            <figure key={img.src} className="overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-lift">
              <img src={img.src} alt={img.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <figcaption className="px-3 py-2 text-xs font-semibold text-muted">{img.label}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </main>
  );
}
