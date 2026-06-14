export type ServiceDetail = {
  slug: string;
  h1: string;
  title: string;
  description: string;
  keyword: string;
  intro: string;
  inclusions: string[];
  pricing: { label: string; value: string; bullets?: string[] }[];
  pricingNote?: string;
  faq: { q: string; a: string }[];
  cta: string;
};

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "lawn-care": {
    slug: "lawn-care",
    h1: "Lawn Care & Maintenance in Tampa, FL",
    title: "Lawn Care in Tampa, FL | Canvas Landscapes",
    description: "Canvas Landscapes offers lawn care in Tampa, FL. Licensed & insured. Free estimates. Call (813) 555-0192 today.",
    keyword: "lawn care Tampa FL",
    intro: "Looking for reliable lawn care in Tampa FL? Canvas Landscapes is the Tampa lawn care crew that actually shows up — weekly mowing, edging, and treatments tuned to Florida grass types. From St. Augustine to Zoysia, we keep Tampa Bay yards looking sharp all year.",
    inclusions: [
      "Weekly or bi-weekly mowing",
      "Edging, blowing, and clean-up",
      "Fertilization programs",
      "Weed and pest control",
      "Seasonal treatments for St. Augustine, Zoysia, and Bahia",
      "Healthy-growth scheduling for Tampa climate",
    ],
    pricing: [
      { label: "Basic", value: "$89/mo", bullets: ["Bi-weekly mow & edge", "Blowing & cleanup", "Curbside debris removal"] },
      { label: "Standard", value: "$149/mo", bullets: ["Weekly mow & edge", "Quarterly fertilization", "Spot weed control"] },
      { label: "Premium", value: "$219/mo", bullets: ["Weekly mow & edge", "Full fertilization program", "Weed, pest & fungus control", "Shrub trimming"] },
    ],
    faq: [
      { q: "How often do you mow in Tampa's climate?", a: "During Tampa's growing season (March–October) most lawns need weekly service. November–February we drop to bi-weekly. We adjust automatically — no guesswork." },
      { q: "Do you treat for Florida-specific weeds and pests?", a: "Yes. We treat for chinch bugs, sod webworms, dollarweed, crabgrass, and other Florida-specific issues with seasonally-appropriate products." },
      { q: "What grass types do you service?", a: "St. Augustine (Floratam, Palmetto, Seville), Empire & EMPIRE Zoysia, Bahia, and Bermuda. Each gets a tailored mowing height and treatment schedule." },
      { q: "Do I need to be home for lawn service?", a: "No. Most of our Tampa customers are at work. We'll send a service summary after each visit." },
      { q: "Do you offer annual contracts?", a: "We offer month-to-month and discounted 12-month plans. No long-term contract is required to start." },
    ],
    cta: "Get a Free Lawn Care Quote in Tampa",
  },
  "landscape-design": {
    slug: "landscape-design",
    h1: "Landscape Design & Installation in Tampa, FL",
    title: "Landscape Design in Tampa, FL | Canvas Landscapes",
    description: "Canvas Landscapes offers landscape design in Tampa, FL. Licensed & insured. Free estimates. Call (813) 555-0192 today.",
    keyword: "landscape design Tampa Bay",
    intro: "Custom landscape design Tampa Bay homeowners love. We design and install outdoor spaces built for the Florida climate — drought-tolerant plant selection, drainage-smart layouts, and timeless aesthetics that hold up to Tampa summers.",
    inclusions: [
      "On-site design consultations",
      "Custom 2D/3D landscape plans",
      "Florida-native and climate-tolerant plant selection",
      "Full installation crew",
      "Mulching and bed preparation",
      "Landscape lighting design",
    ],
    pricing: [{ label: "Custom design starts at", value: "$1,500", bullets: ["Includes consult, full plan & plant list"] }],
    pricingNote: "Installation pricing provided after free on-site estimate.",
    faq: [
      { q: "What plants work best in Tampa landscaping?", a: "We design with Florida-friendly natives like firebush, muhly grass, coontie, and dwarf yaupon — paired with feature plants like crotons, bromeliads, and bird of paradise." },
      { q: "How long does a typical Tampa landscape project take?", a: "Most residential designs are installed in 3–10 days depending on scope. We schedule around your life and Tampa's rainy afternoons." },
      { q: "Do you handle permits for HOA-restricted neighborhoods?", a: "Yes. We've worked with HOAs across South Tampa, Westchase, Wesley Chapel, and FishHawk and handle approval submissions for you." },
      { q: "Can you redesign just one section of my yard?", a: "Absolutely. Many Tampa projects start as a front entry refresh or single garden bed and grow from there." },
      { q: "Do you include landscape lighting?", a: "Yes — low-voltage LED systems are an optional add-on and included in many of our designs." },
    ],
    cta: "Start My Landscape Design in Tampa",
  },
  "hardscaping": {
    slug: "hardscaping",
    h1: "Hardscaping Services in Tampa, FL — Patios, Pavers & Retaining Walls",
    title: "Hardscaping in Tampa, FL | Canvas Landscapes",
    description: "Canvas Landscapes offers hardscaping in Tampa, FL. Licensed & insured. Free estimates. Call (813) 555-0192 today.",
    keyword: "hardscaping Tampa FL",
    intro: "Tampa hardscaping built to last. From paver patios and walkways to retaining walls and outdoor kitchens, our hardscaping crews install with proper base prep, drainage, and Florida-grade materials — so your investment holds up to Tampa's heat and rain.",
    inclusions: [
      "Paver patios & walkways",
      "Retaining walls & seat walls",
      "Outdoor kitchens & bar tops",
      "Fire pit and lounge areas",
      "Pool deck pavers & resurfacing",
      "Drainage integration",
    ],
    pricing: [{ label: "Hardscaping projects start at", value: "$3,500", bullets: ["Detailed quote after on-site visit"] }],
    pricingNote: "Most paver patios in Tampa run $4,500–$18,000 depending on size, material, and site prep.",
    faq: [
      { q: "What pavers work best for Tampa's climate?", a: "We recommend Belgard, Tremron, and Pavestone concrete pavers — UV-stable, slip-rated, and proven in Tampa's heat and humidity." },
      { q: "Do you handle pool deck pavers?", a: "Yes. Pool deck installs and resurfacing are a large part of what we do across Tampa Bay." },
      { q: "How long does a paver patio take to install?", a: "Most Tampa backyard patios are completed in 3–7 working days, including base prep and sand setting." },
      { q: "Do you offer financing on hardscaping?", a: "Yes — we partner with two financing providers offering 0% intro and long-term options for qualified Tampa homeowners." },
      { q: "Will you handle drainage at the same time?", a: "Always. Every hardscape we install is graded and integrated with drainage so water doesn't pool around the home." },
    ],
    cta: "Get a Free Hardscaping Quote in Tampa",
  },
  "irrigation": {
    slug: "irrigation",
    h1: "Irrigation & Drainage Systems in Tampa, FL",
    title: "Irrigation in Tampa, FL | Canvas Landscapes",
    description: "Canvas Landscapes offers irrigation systems in Tampa, FL. Licensed & insured. Free estimates. Call (813) 555-0192 today.",
    keyword: "irrigation system Tampa FL",
    intro: "An irrigation system Tampa FL homeowners can trust. We design, install, and service smart sprinkler systems plus full drainage solutions — engineered for Tampa's wet season downpours and dry-season watering rules.",
    inclusions: [
      "Sprinkler system design & installation",
      "Drip irrigation for beds & planters",
      "Smart Wi-Fi controllers (Rachio, Hydrawise)",
      "Repairs, audits & rezoning",
      "French drains & catch basins",
      "Yard regrading for flood prevention",
    ],
    pricing: [{ label: "Irrigation installs start at", value: "$800", bullets: ["Repairs and audits from $129"] }],
    pricingNote: "Full new-system installs typically $2,800–$5,500 depending on zones and lot size.",
    faq: [
      { q: "How often should I run sprinklers in Tampa?", a: "Tampa Bay watering restrictions usually allow 1–2 days per week. We program controllers to comply automatically." },
      { q: "Can you install a smart Wi-Fi controller?", a: "Yes — we install and configure Rachio and Hydrawise systems that adjust to local Tampa weather data." },
      { q: "What's a French drain and do I need one?", a: "A French drain is a perforated pipe in gravel that channels groundwater away from your home. Many Tampa lots benefit from one near downspouts and low spots." },
      { q: "Do you fix existing irrigation systems?", a: "Yes — broken heads, leaks, valve issues, controller resets, and full system audits are routine work for our team." },
      { q: "Will you re-zone my sprinklers if I add new plant beds?", a: "Yes. We re-zone and add drip lines as part of most landscape installs." },
    ],
    cta: "Get a Free Irrigation Quote in Tampa",
  },
  "sod-installation": {
    slug: "sod-installation",
    h1: "Sod Installation in Tampa, FL",
    title: "Sod Installation in Tampa, FL | Canvas Landscapes",
    description: "Canvas Landscapes offers sod installation in Tampa, FL. Licensed & insured. Free estimates. Call (813) 555-0192 today.",
    keyword: "sod installation Tampa FL",
    intro: "Fresh sod installation Tampa FL homeowners can rely on. We supply and install St. Augustine, Zoysia, and Bahia sod with proper soil prep, leveling, and a watering plan built for Tampa's climate — so it actually takes root.",
    inclusions: [
      "St. Augustine (Floratam, Palmetto, Seville)",
      "Empire & EMPIRE Zoysia",
      "Argentine Bahia",
      "Old sod removal & soil prep",
      "Leveling and topdressing",
      "Watering & care plan",
    ],
    pricing: [{ label: "Installed sod starts at", value: "$0.65/sq ft", bullets: ["Includes removal, prep, sod & install"] }],
    pricingNote: "Most Tampa front-yard installs run $1,200–$3,500.",
    faq: [
      { q: "What sod grows best in Tampa, FL?", a: "Floratam St. Augustine is the most popular for Tampa due to heat tolerance. Zoysia is gaining popularity for its density and lower water use." },
      { q: "Best time of year to install sod in Tampa?", a: "Spring through early fall is ideal, but Tampa's mild winters allow successful installs nearly year-round with proper watering." },
      { q: "How long until I can walk on new sod?", a: "Light foot traffic after 2 weeks; normal use after 4–6 weeks once roots are established." },
      { q: "Do I need to water new sod every day?", a: "Yes — twice daily for the first 10–14 days, then tapering. We provide a printed schedule with every install." },
      { q: "Do you remove the old grass?", a: "Yes. Every install includes removal of existing turf, debris haul-away, and soil prep before laying fresh sod." },
    ],
    cta: "Get a Free Sod Installation Quote in Tampa",
  },
  "seasonal-cleanup": {
    slug: "seasonal-cleanup",
    h1: "Seasonal Cleanup & Mulching in Tampa, FL",
    title: "Yard Cleanup in Tampa, FL | Canvas Landscapes",
    description: "Canvas Landscapes offers yard cleanup in Tampa, FL. Licensed & insured. Free estimates. Call (813) 555-0192 today.",
    keyword: "yard cleanup Tampa FL",
    intro: "Yard cleanup Tampa FL homeowners book for the dry-season refresh and wet-season recovery. Debris hauling, bed edging, fresh mulch, and shrub trimming — Canvas Landscapes leaves your Tampa property camera-ready.",
    inclusions: [
      "Leaf and debris removal",
      "Bed edging and re-shaping",
      "Fresh mulch install (pine bark, cypress, dyed)",
      "Shrub and palm trimming",
      "Storm cleanup",
      "Full haul-away",
    ],
    pricing: [{ label: "Cleanup visits start at", value: "$299", bullets: ["Per visit, sized to your property"] }],
    pricingNote: "Most full Tampa-yard cleanups run $399–$899.",
    faq: [
      { q: "When is the best time for a Tampa yard cleanup?", a: "Most Tampa homeowners book a major refresh before the wet season (May) and again after hurricane season (late October)." },
      { q: "What mulch holds up best in Tampa?", a: "Cypress and pine bark are most durable in Tampa's heat and rain. Dyed mulches look great but fade faster in full Florida sun." },
      { q: "Do you haul away storm debris?", a: "Yes — branches, fronds, fallen limbs, and palm boots all get loaded and hauled the same day." },
      { q: "Can you trim my palms during a cleanup?", a: "Yes. Light frond and boot removal is included; full palm trims are an add-on with a per-tree price." },
      { q: "How much mulch will my yard need?", a: "We measure your beds during the estimate. Most Tampa front yards need 3–6 cubic yards for a fresh 2–3 inch layer." },
    ],
    cta: "Get a Free Cleanup Quote in Tampa",
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICE_DETAILS);
