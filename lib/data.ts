export type Condition = "Fresh import" | "Locally used" | "Brand new" | "In transit";

export type Vehicle = {
  id: string;
  make: string;
  model: string;
  trim?: string;
  year: number;
  price: number | null;
  mileage: number;
  fuel: "Petrol" | "Diesel" | "Hybrid" | "Electric";
  transmission: "Automatic" | "Manual" | "CVT";
  body: "SUV" | "Sedan" | "Hatchback" | "Wagon" | "Pickup" | "Van" | "Minivan";
  drive: string;
  seats: number;
  colour: string;
  city: string;
  condition: Condition;
  image: string;
  featured?: boolean;
  hot?: boolean;
  grade?: string;
  chassis: string;
  features?: string[];
  landed?: { label: string; value: number }[];
};

export const vehicles: Vehicle[] = [
  {
    id: "toyota-harrier-z-2019", image: "/cars/toyota-harrier-z-2019.jpg",
    make: "Toyota", model: "Harrier", trim: "Z · 2.0L", year: 2019,
    price: 3450000, mileage: 48000, fuel: "Petrol", transmission: "CVT", body: "SUV",
    drive: "2WD", seats: 5, colour: "Pearl White", city: "Nairobi",
    condition: "Fresh import", featured: true, grade: "4.5", chassis: "ZSU60-xxxxxxx",
    features: ["Leather seats", "Reverse camera", "Push start", "Alloy rims", "Climate control", "6 airbags"],
    landed: [
      { label: "Vehicle (CIF Mombasa)", value: 2480000 },
      { label: "Import duty + excise + VAT", value: 720000 },
      { label: "Clearing + inland transport", value: 250000 },
    ],
  },
  {
    id: "toyota-fielder-wxb-2020", image: "/cars/toyota-fielder-wxb-2020.jpg",
    make: "Toyota", model: "Corolla Fielder", trim: "WxB Hybrid", year: 2020,
    price: 2150000, mileage: 62000, fuel: "Hybrid", transmission: "CVT", body: "Wagon",
    drive: "2WD", seats: 5, colour: "Silver", city: "Nairobi",
    condition: "Fresh import", featured: true, grade: "4.5", chassis: "NKE165-xxxxxxx",
    features: ["Hybrid", "Reverse camera", "Push start", "Alloy rims"],
  },
  {
    id: "toyota-probox-2017", image: "/cars/toyota-probox-2017.jpg",
    make: "Toyota", model: "Probox", trim: "GL", year: 2017,
    price: 1190000, mileage: 120000, fuel: "Petrol", transmission: "Automatic", body: "Wagon",
    drive: "2WD", seats: 5, colour: "White", city: "Mombasa",
    condition: "Locally used", chassis: "NCP160-xxxxxxx",
    features: ["Business ready", "High roof", "Power windows"],
  },
  {
    id: "toyota-rav4-hybrid-2021", image: "/cars/toyota-rav4-hybrid-2021.jpg",
    make: "Toyota", model: "RAV4", trim: "Hybrid AWD", year: 2021,
    price: 4250000, mileage: 55000, fuel: "Hybrid", transmission: "CVT", body: "SUV",
    drive: "AWD", seats: 5, colour: "Black", city: "Nairobi",
    condition: "Fresh import", featured: true, hot: true, grade: "5", chassis: "AXAH54-xxxxxxx",
    features: ["Hybrid AWD", "Leather", "Power tailgate", "Safety Sense"],
  },
  {
    id: "toyota-prado-2018", image: "/cars/toyota-prado-2018.jpg",
    make: "Toyota", model: "Land Cruiser Prado", trim: "TX-L Diesel", year: 2018,
    price: 5860000, mileage: 90000, fuel: "Diesel", transmission: "Automatic", body: "SUV",
    drive: "4WD", seats: 7, colour: "White", city: "Nairobi",
    condition: "Fresh import", grade: "4.5", chassis: "GDJ150-xxxxxxx",
    features: ["7 seats", "Sunroof", "Leather", "4WD", "Reverse camera"],
  },
  {
    id: "toyota-axio-hybrid-2019", image: "/cars/toyota-axio-hybrid-2019.jpg",
    make: "Toyota", model: "Corolla Axio", trim: "Hybrid G", year: 2019,
    price: 1850000, mileage: 70000, fuel: "Hybrid", transmission: "CVT", body: "Sedan",
    drive: "2WD", seats: 5, colour: "Silver", city: "Kiambu",
    condition: "Fresh import", grade: "4.5", chassis: "NKE165-xxxxxxx",
    features: ["Hybrid", "Push start", "Reverse camera"],
  },
  {
    id: "isuzu-dmax-2021", image: "/cars/isuzu-dmax-2021.jpg",
    make: "Isuzu", model: "D-Max", trim: "LS 4WD", year: 2021,
    price: 4950000, mileage: 35000, fuel: "Diesel", transmission: "Automatic", body: "Pickup",
    drive: "4WD", seats: 5, colour: "Pearl White", city: "Nairobi",
    condition: "Fresh import", hot: true, grade: "5", chassis: "RG-xxxxxxx",
    features: ["4WD", "Diff lock", "Reverse camera", "Bed liner"],
  },
  {
    id: "nissan-note-epower-2020", image: "/cars/nissan-note-epower-2020.jpg",
    make: "Nissan", model: "Note", trim: "e-Power X", year: 2020,
    price: 1750000, mileage: 62000, fuel: "Hybrid", transmission: "Automatic", body: "Hatchback",
    drive: "2WD", seats: 5, colour: "Blue", city: "Mombasa",
    condition: "In transit", chassis: "HE12-xxxxxxx",
    features: ["e-Power", "ProPILOT", "Reverse camera"],
  },
  {
    id: "mazda-cx5-2019", image: "/cars/mazda-cx5-2019.jpg",
    make: "Mazda", model: "CX-5", trim: "XD Diesel", year: 2019,
    price: 3180000, mileage: 78000, fuel: "Diesel", transmission: "Automatic", body: "SUV",
    drive: "AWD", seats: 5, colour: "Grey", city: "Nairobi",
    condition: "Fresh import", grade: "4.5", chassis: "KF-xxxxxxx",
    features: ["AWD", "Leather", "Sunroof", "Heads-up display"],
  },
  {
    id: "subaru-forester-2018", image: "/cars/subaru-forester-2018.jpg",
    make: "Subaru", model: "Forester", trim: "XT", year: 2018,
    price: 2650000, mileage: 95000, fuel: "Petrol", transmission: "CVT", body: "SUV",
    drive: "AWD", seats: 5, colour: "Green", city: "Nakuru",
    condition: "Locally used", chassis: "SJ-xxxxxxx",
    features: ["Symmetrical AWD", "Powered seats", "Reverse camera"],
  },
  {
    id: "toyota-hiace-2020", image: "/cars/toyota-hiace-2020.jpg",
    make: "Toyota", model: "HiAce", trim: "Van", year: 2020,
    price: 3950000, mileage: 88000, fuel: "Diesel", transmission: "Automatic", body: "Van",
    drive: "2WD", seats: 14, colour: "White", city: "Mombasa",
    condition: "Fresh import", hot: true, grade: "4.5", chassis: "GDH320-xxxxxxx",
    features: ["14 seats", "PSV ready", "Dual AC"],
  },
  {
    id: "toyota-vitz-2019", image: "/cars/toyota-vitz-2019.jpg",
    make: "Toyota", model: "Vitz", trim: "F Safety", year: 2019,
    price: 1290000, mileage: 54000, fuel: "Petrol", transmission: "CVT", body: "Hatchback",
    drive: "2WD", seats: 5, colour: "Red", city: "Eldoret",
    condition: "Fresh import", grade: "4.5", chassis: "KSP130-xxxxxxx",
    features: ["Reverse camera", "Push start", "Low mileage"],
  },
];

export const makes = Array.from(new Set(vehicles.map((v) => v.make))).sort();
export const bodies = Array.from(new Set(vehicles.map((v) => v.body))).sort();
export const cities = Array.from(new Set(vehicles.map((v) => v.city))).sort();

export function getVehicle(id: string) {
  return vehicles.find((v) => v.id === id);
}

export const banks = [
  { name: "KCB Bank", product: "Asset finance", rate: 13.5 },
  { name: "Equity Bank", product: "Vehicle loan", rate: 14.0 },
  { name: "NCBA", product: "Asset finance", rate: 13.8 },
  { name: "Co-operative Bank", product: "Vehicle loan", rate: 13.5 },
  { name: "Stanbic Bank", product: "Vehicle & asset", rate: 14.5 },
  { name: "Diamond Trust Bank", product: "Vehicle loan", rate: 14.2 },
];

export const importSteps = [
  { n: 1, title: "Quote & reserve", sub: "M-Pesa deposit", body: "Pick a car or request a model. Get a fixed landed-cost quote, then reserve with a refundable deposit." },
  { n: 2, title: "Buy at auction", sub: "1–2 weeks", body: "We bid and buy at inspected Japanese, UK or Dubai auctions on your behalf." },
  { n: 3, title: "KEBS inspection", sub: "3–5 days", body: "Mandatory pre-shipment roadworthiness inspection; you receive the CoC and auction sheet." },
  { n: 4, title: "Ship to Mombasa", sub: "25–40 days", body: "RoRo freight to the Port of Mombasa, tracked live from your account." },
  { n: 5, title: "Clear & pay duty", sub: "3–10 days", body: "Licensed clearing agent files on KRA iCMS; import duty, excise, VAT, IDF and RDL paid." },
  { n: 6, title: "Register & deliver", sub: "NTSA", body: "NTSA registration and roadworthiness, then doorstep delivery." },
];

export const guides = [
  { slug: "import-japan-2026", image: "/cars/guide-import.jpg", category: "Importing", title: "How to import a car from Japan to Kenya: the complete 2026 guide", read: 9, featured: true },
  { slug: "kra-duty-explained", image: "/cars/guide-duty.jpg", category: "KRA & duty", title: "KRA import duty explained: CRSP, excise and VAT", read: 6 },
  { slug: "fuel-efficient-kenya", image: "/cars/toyota-fielder-wxb-2020.jpg", category: "Buying guides", title: "Best fuel-efficient cars in Kenya (2026)", read: 8 },
  { slug: "car-financing-qualify", image: "/cars/guide-finance.jpg", category: "Financing", title: "Car financing: how to qualify with a bank", read: 5 },
  { slug: "probox-vs-fielder", image: "/cars/toyota-probox-2017.jpg", category: "Buying guides", title: "Probox vs Fielder: which fits your business?", read: 6 },
  { slug: "hybrid-vs-petrol", image: "/cars/guide-hybrid.jpg", category: "EV & hybrid", title: "Hybrid vs petrol in Nairobi traffic", read: 5 },
  { slug: "shipping-ug-tz-rw", image: "/cars/toyota-hiace-2020.jpg", category: "Importing", title: "Shipping to Uganda, Tanzania and Rwanda", read: 9 },
  { slug: "auction-grades", image: "/cars/toyota-vitz-2019.jpg", category: "Importing", title: "Auction grades explained (3.5 vs 4.5)", read: 6 },
  { slug: "servicing-imports", image: "/cars/subaru-forester-2018.jpg", category: "Maintenance", title: "Servicing a fresh import in Kenya", read: 5 },
];

export const branches = [
  { name: "Nairobi (HQ)", addr: "Ngong Road, opposite Prestige Mall", hours: "Mon–Sat 8am–6pm · Sun 10am–4pm", phone: "+254 700 000 000" },
  { name: "Mombasa", addr: "Port area, Changamwe", hours: "Mon–Sat 8am–6pm", phone: "+254 700 000 001" },
  { name: "Eldoret", addr: "Kenyatta Street", hours: "Mon–Sat 8am–5pm", phone: "+254 700 000 002" },
];

export const WHATSAPP = "https://wa.me/254700000000";
export const PHONE = "+254 700 000 000";
export const EMAIL = "sales@savannamotors.co.ke";
