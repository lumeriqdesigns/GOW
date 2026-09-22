// Glorious One World (GOW) — Product Catalog
// Edit this file to add/update products. Redeploy to Vercel after changes.
// For full CMS later: migrate to Sanity or Payload.

let PRODUCTS = [
  // ========== PENDANT & DROPPING LIGHTS ==========
  {
    id: "pend-001",
    name: "Aurora Crystal Pendant",
    category: "pendant",
    categoryLabel: "Pendant & Dropping Lights",
    price: 85000,
    discountPrice: 72000,
    stock: 12,
    badge: "Bestseller",
    shortDesc: "Elegant crystal drop pendant with warm LED glow. Perfect for dining rooms and entryways.",
    description: "The Aurora Crystal Pendant features hand cut K9 crystals that cascade light in a soft, luxurious pattern. Includes dimmable LED module (2700K warm white), adjustable hanging length up to 1.5m, and brushed gold finish. Ideal for modern Nigerian homes seeking statement lighting without excess heat.",
    specs: {
      "Material": "K9 Crystal + Brushed Gold Metal",
      "Bulb Type": "Integrated LED (12W)",
      "Color Temp": "2700K Warm White",
      "Dimmable": "Yes (compatible with standard dimmers)",
      "Voltage": "220-240V",
      "Warranty": "2 Years"
    },
    images: ["pendant-infinity-gold.jpg", "pendant-ring-crystal.jpg"],
    featured: true
  },
  {
    id: "pend-002",
    name: "Nordic Globe Drop Light",
    category: "pendant",
    categoryLabel: "Pendant & Dropping Lights",
    price: 45000,
    discountPrice: null,
    stock: 28,
    badge: null,
    shortDesc: "Minimalist frosted glass globe pendant. Clean Scandinavian design for kitchens and bedrooms.",
    description: "Simple yet sophisticated frosted glass sphere suspended on a black fabric cord. Provides even, glare free ambient light. Easy to install, comes with all mounting hardware. Perfect for open plan living or clustered installations above kitchen islands.",
    specs: {
      "Material": "Frosted Glass + Matte Black Metal",
      "Bulb Type": "E27 Socket (LED recommended)",
      "Max Wattage": "40W",
      "Cord Length": "1.2m adjustable",
      "Voltage": "220-240V",
      "Warranty": "1 Year"
    },
    images: ["pendant-rings-blue.jpg", "pendant-infinity-gold.jpg"],
    featured: true
  },
  {
    id: "pend-003",
    name: "Industrial Cage Pendant Set",
    category: "pendant",
    categoryLabel: "Pendant & Dropping Lights",
    price: 38000,
    discountPrice: 32000,
    stock: 15,
    badge: "Sale",
    shortDesc: "Set of 3 vintage industrial cage pendants. Bold character for bars, lofts and restaurants.",
    description: "Black metal cage design with Edison style filament bulbs included. Sold as a set of three with staggered lengths for visual interest. Creates dramatic focal points in commercial or residential spaces.",
    specs: {
      "Material": "Powder coated Steel",
      "Bulb Type": "E27 Filament (3x included)",
      "Finish": "Matte Black",
      "Cord": "Textile, 1.5m each",
      "Voltage": "220-240V",
      "Warranty": "1 Year"
    },
    images: ["pendant-cage.jpg"],
    featured: false
  },
  {
    id: "pend-004",
    name: "Golden Rain Drop Cluster",
    category: "pendant",
    categoryLabel: "Pendant & Dropping Lights",
    price: 125000,
    discountPrice: null,
    stock: 6,
    badge: "Premium",
    shortDesc: "Multi drop gold finished pendant cluster. Luxury centrepiece for double volume spaces.",
    description: "Nine individual teardrop glass elements suspended at varying heights from a circular canopy. Gold plated hardware and warm LED. Transforms any hallway or living room into a gallery-like experience.",
    specs: {
      "Material": "Hand blown Glass + Gold plated Brass",
      "Bulb Type": "Integrated LED",
      "Color Temp": "3000K",
      "Drops": "9 individual",
      "Voltage": "220-240V",
      "Warranty": "3 Years"
    },
    images: ["pendant-gold.jpg"],
    featured: true
  },

  // ========== LUXURY CHANDELIERS ==========
  {
    id: "chan-001",
    name: "Imperial Crystal Chandelier",
    category: "chandelier",
    categoryLabel: "Luxury Chandeliers",
    price: 450000,
    discountPrice: 385000,
    stock: 4,
    badge: "Luxury",
    shortDesc: "Grand 12-arm crystal chandelier. Statement piece for large living rooms and stairwells.",
    description: "Opulent 12-light crystal chandelier with cascading crystal strands and polished chrome frame. Designed for high ceilings. Includes remote dimmer and all installation hardware. A true centrepiece that elevates any formal space.",
    specs: {
      "Arms": "12 lights",
      "Material": "K9 Crystal + Chrome",
      "Bulb Type": "E14 (12x, LED recommended)",
      "Max Height": "1.8m adjustable",
      "Voltage": "220-240V",
      "Warranty": "3 Years"
    },
    images: ["chandelier-crystal-black.jpg", "chandelier-rings-warm.jpg"],
    featured: true
  },
  {
    id: "chan-002",
    name: "Modern Ring Chandelier",
    category: "chandelier",
    categoryLabel: "Luxury Chandeliers",
    price: 195000,
    discountPrice: null,
    stock: 9,
    badge: null,
    shortDesc: "Contemporary circular LED chandelier. Sleek geometric form for modern interiors.",
    description: "Double ring design with continuous LED strip providing uniform illumination. Matte black or gold options. Lightweight aluminium construction makes installation straightforward even on standard ceilings.",
    specs: {
      "Diameter": "60cm / 80cm options",
      "Material": "Aluminium + Acrylic Diffuser",
      "Light Source": "Integrated LED 40W",
      "Color Temp": "3000K / 4000K selectable",
      "Voltage": "220-240V",
      "Warranty": "2 Years"
    },
    images: ["chandelier-rings-warm.jpg", "chandelier-crystal-black.jpg"],
    featured: true
  },
  {
    id: "chan-003",
    name: "Vintage Brass Candle Chandelier",
    category: "chandelier",
    categoryLabel: "Luxury Chandeliers",
    price: 275000,
    discountPrice: 245000,
    stock: 5,
    badge: "Limited",
    shortDesc: "Classic 8-arm brass chandelier with candle style bulbs. Timeless elegance.",
    description: "Solid brass construction with antique finish and crystal accents. Candle style LED bulbs included for authentic warm glow without the heat or risk of real candles. Perfect for traditional and transitional homes.",
    specs: {
      "Arms": "8 lights",
      "Material": "Solid Brass + Crystal",
      "Bulb Type": "E14 Candle LED (included)",
      "Finish": "Antique Brass",
      "Voltage": "220-240V",
      "Warranty": "2 Years"
    },
    images: ["chandelier-brass.jpg"],
    featured: false
  },

  // ========== WALL BRACKETS & SCONCES ==========
  {
    id: "wall-001",
    name: "Luna Wall Sconce Pair",
    category: "wall",
    categoryLabel: "Wall Brackets & Sconces",
    price: 52000,
    discountPrice: 45000,
    stock: 20,
    badge: "Bestseller",
    shortDesc: "Pair of modern up/down wall sconces. Soft ambient lighting for hallways and bedrooms.",
    description: "Sleek cylindrical sconces that cast light both upward and downward. Ideal for creating layered lighting schemes. Sold as a pair. Easy surface mount installation. Available in black, white or gold finish.",
    specs: {
      "Sold As": "Pair",
      "Material": "Aluminium + Frosted Glass",
      "Light Source": "Integrated LED 8W each",
      "Beam": "Up & Down",
      "Voltage": "220-240V",
      "Warranty": "2 Years"
    },
    images: ["wall-luna.jpg"],
    featured: true
  },
  {
    id: "wall-002",
    name: "Art Dec Brass Wall Bracket",
    category: "wall",
    categoryLabel: "Wall Brackets & Sconces",
    price: 68000,
    discountPrice: null,
    stock: 11,
    badge: null,
    shortDesc: "Single articulated brass wall light with adjustable arm. Functional elegance.",
    description: "Fully adjustable arm and swivel head allow precise light direction. Ideal for reading nooks, bedside or task lighting. Solid brass with clear glass shade. Hardwired installation.",
    specs: {
      "Material": "Solid Brass + Clear Glass",
      "Bulb Type": "E27 (max 40W)",
      "Arm Reach": "40cm adjustable",
      "Finish": "Polished Brass",
      "Voltage": "220-240V",
      "Warranty": "1 Year"
    },
    images: ["wall-artdeco.jpg"],
    featured: false
  },
  {
    id: "wall-003",
    name: "Cube Minimal Wall Light",
    category: "wall",
    categoryLabel: "Wall Brackets & Sconces",
    price: 28000,
    discountPrice: 24000,
    stock: 35,
    badge: "Value",
    shortDesc: "Compact cube wall light. Clean lines for contemporary spaces and corridors.",
    description: "Ultra minimal cube form with opal diffuser. Provides soft, even wall wash light. Perfect for apartments and commercial corridors where space and style matter equally.",
    specs: {
      "Material": "Die cast Aluminium",
      "Light Source": "Integrated LED 6W",
      "Color Temp": "3000K",
      "IP Rating": "IP44 (bathroom safe)",
      "Voltage": "220-240V",
      "Warranty": "2 Years"
    },
    images: ["wall-cube.jpg"],
    featured: false
  },

  // ========== ROPE & STRIP LIGHTS ==========
  {
    id: "strip-001",
    name: "Premium RGB LED Strip Kit 5m",
    category: "strip",
    categoryLabel: "Rope & Strip Lights",
    price: 35000,
    discountPrice: 28000,
    stock: 50,
    badge: "Popular",
    shortDesc: "5-metre addressable RGB LED strip with remote and power supply. Mood lighting made easy.",
    description: "High density 60 LEDs/m RGB strip with adhesive backing. Includes IR remote for colour, brightness and effects. Cuttable every 3 LEDs. Perfect for under cabinet, TV backlighting, or architectural accents. Waterproof option available.",
    specs: {
      "Length": "5 metres",
      "LEDs": "60/m SMD 5050",
      "Control": "IR Remote + App option",
      "Power": "12V 3A adapter included",
      "IP Rating": "IP20 (indoor) / IP65 available",
      "Warranty": "1 Year"
    },
    images: ["strip-rgb.jpg"],
    featured: true
  },
  {
    id: "strip-002",
    name: "Warm White COB LED Strip 10m",
    category: "strip",
    categoryLabel: "Rope & Strip Lights",
    price: 42000,
    discountPrice: null,
    stock: 30,
    badge: null,
    shortDesc: "10-metre seamless COB LED strip. No visible dots — pure continuous light.",
    description: "COB (Chip on Board) technology delivers completely uniform light with zero spotting. Ideal for cove lighting, mirror illumination and professional installations. Includes dimmable driver.",
    specs: {
      "Length": "10 metres",
      "Technology": "COB LED",
      "Color Temp": "2700K Warm White",
      "CRI": ">90",
      "Power": "24V driver included",
      "Warranty": "2 Years"
    },
    images: ["strip-cob.jpg"],
    featured: false
  },
  {
    id: "rope-001",
    name: "Outdoor Rope Light 20m",
    category: "strip",
    categoryLabel: "Rope & Strip Lights",
    price: 55000,
    discountPrice: 48000,
    stock: 18,
    badge: "Outdoor",
    shortDesc: "Heavy duty 20m outdoor rope light. Weatherproof for gardens, pergolas and events.",
    description: "Thick PVC jacketed rope light rated for outdoor use. Warm white or multi colour options. Connectable sections. Creates magical ambiance for outdoor entertaining and festive occasions.",
    specs: {
      "Length": "20 metres",
      "IP Rating": "IP65",
      "Bulb Type": "LED",
      "Voltage": "220V (direct plug)",
      "Connectable": "Yes",
      "Warranty": "1 Year"
    },
    images: ["rope-outdoor.jpg"],
    featured: false
  },

  // ========== ELECTRICAL MATERIALS ==========
  {
    id: "elec-001",
    name: "Schneider Electric 20A Circuit Breaker",
    category: "electrical",
    categoryLabel: "Electrical Materials",
    price: 8500,
    discountPrice: null,
    stock: 100,
    badge: "Trusted Brand",
    shortDesc: "Genuine Schneider 20A single pole MCB. Reliable protection for your circuits.",
    description: "Original Schneider Electric Acti9 series miniature circuit breaker. 20A single pole, C curve. Essential for residential and commercial distribution boards. Guaranteed authentic stock.",
    specs: {
      "Brand": "Schneider Electric",
      "Rating": "20A Single Pole",
      "Curve": "C",
      "Breaking Capacity": "6kA",
      "Standard": "IEC 60898",
      "Warranty": "Manufacturer"
    },
    images: ["elec-breaker.jpg"],
    featured: true
  },
  {
    id: "elec-002",
    name: "Legrand 2 Gang Switch Module",
    category: "electrical",
    categoryLabel: "Electrical Materials",
    price: 6500,
    discountPrice: 5500,
    stock: 80,
    badge: null,
    shortDesc: "Premium Legrand double switch. Smooth action, modern design, long life.",
    description: "Legrand Valena or similar series 2 gang switch. Soft touch mechanism rated for 100,000 operations. Available in white, ivory and anthracite. Compatible with standard Nigerian wall boxes.",
    specs: {
      "Brand": "Legrand",
      "Type": "2 Gang 1-Way",
      "Rating": "10A 250V",
      "Finish": "White (other colours on request)",
      "Mounting": "Flush",
      "Warranty": "2 Years"
    },
    images: ["elec-switch.jpg"],
    featured: false
  },
  {
    id: "elec-003",
    name: "1.5mm² Copper Cable 100m Coil",
    category: "electrical",
    categoryLabel: "Electrical Materials",
    price: 28000,
    discountPrice: null,
    stock: 40,
    badge: null,
    shortDesc: "Genuine copper 1.5mm² single core cable. 100 metres. For lighting circuits.",
    description: "High purity copper conductor with PVC insulation. Suitable for lighting and low power circuits. Meets Nigerian and international standards. Sold as full 100m coil for contractors.",
    specs: {
      "Conductor": "Copper 1.5mm²",
      "Length": "100 metres",
      "Insulation": "PVC",
      "Colour": "Red / Black / Green available",
      "Standard": "IEC 60227",
      "Warranty": "N/A"
    },
    images: ["elec-cable.jpg"],
    featured: false
  },
  {
    id: "elec-004",
    name: "Complete Distribution Board Kit 12-Way",
    category: "electrical",
    categoryLabel: "Electrical Materials",
    price: 95000,
    discountPrice: 85000,
    stock: 8,
    badge: "Contractor Pack",
    shortDesc: "Ready to install 12-way consumer unit with main switch and breakers.",
    description: "Complete surface or flush mount distribution board including 63A main switch, 12 MCB positions, and busbar. Ideal for new builds and major renovations. Professional quality components.",
    specs: {
      "Ways": "12",
      "Main Switch": "63A",
      "Enclosure": "Metal, IP40",
      "Includes": "Busbar + Earth bar",
      "Standard": "IEC 61439",
      "Warranty": "1 Year"
    },
    images: ["elec-db.jpg"],
    featured: true
  },
  {
    id: "elec-005",
    name: "Waterproof Junction Box Pack (10pcs)",
    category: "electrical",
    categoryLabel: "Electrical Materials",
    price: 12000,
    discountPrice: 9800,
    stock: 60,
    badge: null,
    shortDesc: "Pack of 10 IP65 junction boxes. Essential for outdoor and damp locations.",
    description: "Durable plastic junction boxes with rubber seals. Multiple cable entry points. Perfect for outdoor lighting installations, bathrooms and industrial areas. Includes terminal blocks.",
    specs: {
      "Quantity": "10 pieces",
      "IP Rating": "IP65",
      "Material": "ABS Plastic",
      "Entries": "Multiple knockouts",
      "Size": "Standard 80x80mm",
      "Warranty": "N/A"
    },
    images: ["elec-jb.jpg"],
    featured: false
  }
];

// Category metadata for filters and navigation
const CATEGORIES = [
  { id: "all", label: "All Products", icon: "" },
  { id: "pendant", label: "Pendant & Dropping Lights", icon: "" },
  { id: "chandelier", label: "Luxury Chandeliers", icon: "" },
  { id: "wall", label: "Wall Brackets & Sconces", icon: "" },
  { id: "strip", label: "Rope & Strip Lights", icon: "" },
  { id: "electrical", label: "Electrical Materials", icon: "" }
];

// Helper: format price in Naira
function formatPrice(amount) {
  return "₦" + amount.toLocaleString("en-NG");
}

// Resolve product image: supports local filenames AND full Sanity CDN URLs
function productImageUrl(img) {
  if (!img) return '';
  if (typeof img !== 'string') return '';
  if (img.startsWith('http://') || img.startsWith('https://') || img.startsWith('//') || img.startsWith('data:')) {
    return img;
  }
  return 'images/' + img.replace(/^images\//, '');
}


// Helper: get product by ID
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}

// Helper: get products by category
function getProductsByCategory(catId) {
  if (catId === "all" || !catId) return PRODUCTS;
  return PRODUCTS.filter(p => p.category === catId);
}

// Helper: get featured products
function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.featured);
}
