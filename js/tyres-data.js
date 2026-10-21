/* Baber Tyres Corporation — Catalog data
   Image paths point to images/products/*.jpg sourced as real photographs. */

const WHATSAPP_NUMBER = "923174724400"; // 0317-4724400 in international format

const TYRES = [
  { id: "t01", brand: "Michelin", size: "185/65R15", pattern: "Energy XM2+", vehicleType: "Car", stock: "in", image: "images/products/michelin-tyre-1.jpg", imported: true },
  { id: "t02", brand: "Michelin", size: "215/60R17", pattern: "Primacy 4", vehicleType: "SUV/4x4", stock: "in", image: "images/products/michelin-tyre-1.jpg", imported: true },
  { id: "t03", brand: "Michelin", size: "12.00R20", pattern: "XZY3", vehicleType: "Truck/Commercial", stock: "in", image: "images/products/truck-tyre-1.jpg", imported: true },
  { id: "t04", brand: "Yokohama", size: "195/65R15", pattern: "BluEarth ES32", vehicleType: "Car", stock: "in", image: "images/products/yokohama-tyre-1.jpg", imported: true },
  { id: "t05", brand: "Yokohama", size: "265/65R17", pattern: "Geolandar G015", vehicleType: "SUV/4x4", stock: "in", image: "images/products/yokohama-tyre-1.jpg", imported: true },
  { id: "t06", brand: "Yokohama", size: "7.00-12", pattern: "Y83 Forklift", vehicleType: "Lifter/Forklift", stock: "limited", image: "images/categories/forklift-tyres.jpg", imported: true },
  { id: "t07", brand: "Rapid", size: "165/70R13", pattern: "P609", vehicleType: "Car", stock: "in", image: "images/products/rapid-tyre-1.jpg", imported: true },
  { id: "t08", brand: "Rapid", size: "205/65R16", pattern: "P609 SUV", vehicleType: "SUV/4x4", stock: "in", image: "images/products/rapid-tyre-1.jpg", imported: true },
  { id: "t09", brand: "Duhow", size: "195/60R15", pattern: "HD618", vehicleType: "Car", stock: "in", image: "images/products/rapid-tyre-1.jpg", imported: true },
  { id: "t10", brand: "Duhow", size: "235/75R15", pattern: "HD927 A/T", vehicleType: "Off-Road", stock: "in", image: "images/products/duhow-tyre-1.jpg", imported: true },
  { id: "t11", brand: "Dunlop", size: "205/55R16", pattern: "SP Sport LM704", vehicleType: "Car", stock: "in", image: "images/products/dunlop-tyre-1.jpg", imported: false },
  { id: "t12", brand: "Dunlop", size: "225/65R17", pattern: "Grandtrek AT25", vehicleType: "SUV/4x4", stock: "limited", image: "images/products/dunlop-tyre-1.jpg", imported: false },
  { id: "t13", brand: "Dunlop", size: "10.00R20", pattern: "SP348", vehicleType: "Truck/Commercial", stock: "in", image: "images/products/dunlop-tyre-1.jpg", imported: false },
  { id: "t14", brand: "General", size: "185/70R14", pattern: "Altimax RT43", vehicleType: "Car", stock: "in", image: "images/products/general-tyre-1.jpg", imported: false },
  { id: "t15", brand: "General", size: "265/70R16", pattern: "Grabber AT3", vehicleType: "Off-Road", stock: "in", image: "images/products/general-tyre-1.jpg", imported: false },
  { id: "t16", brand: "General", size: "6.50-10", pattern: "Lifter Classic", vehicleType: "Lifter/Forklift", stock: "in", image: "images/categories/forklift-tyres.jpg", imported: false },
  { id: "t17", brand: "Armstrong", size: "175/70R13", pattern: "Blem A", vehicleType: "Car", stock: "in", image: "images/products/armstrong-tyre-1.jpg", imported: false },
  { id: "t18", brand: "Armstrong", size: "31x10.5R15", pattern: "Desert Dog M/T", vehicleType: "Off-Road", stock: "limited", image: "images/products/armstrong-tyre-1.jpg", imported: false },
];

const BRANDS = [
  { name: "Yokohama", imported: true, blurb: "Japanese engineering renowned for silent rides, fuel efficiency and long tread life — our flagship import line." },
  { name: "Rapid", imported: true, blurb: "High-performance European-spec tyres offering dependable grip and value for daily city and highway driving." },
  { name: "Michelin", imported: true, blurb: "The world's benchmark in tyre technology — exceptional safety, durability and all-weather performance." },
  { name: "Duhow", imported: true, blurb: "Modern all-terrain and passenger tyre ranges built for durability on Pakistan's demanding road conditions." },
  { name: "Dunlop", imported: false, blurb: "A century-old motorsport heritage brand trusted for sporty handling and consistent braking performance." },
  { name: "General", imported: false, blurb: "American-engineered tyres known for rugged construction, ideal for SUVs, 4x4s and light commercial use." },
  { name: "Armstrong", imported: false, blurb: "Reliable, budget-friendly tyres built for everyday passenger cars and off-road utility vehicles." },
];

function waLink(message){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function waLinkForTyre(t){
  const msg = `Hello Baber Tyres Corporation, I'd like to enquire about the ${t.brand} ${t.size} (${t.pattern}) tyre. Is it currently in stock?`;
  return waLink(msg);
}
