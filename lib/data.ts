export interface Medicine {
  id: string
  name: string
  company: string
  disease: string
  price: number
  expiryDate: string
  description: string
  image: string
  details: {
    ingredients: string[]
    sideEffects: string[]
    dosage: string
    storage: string
  }
}

export const medicines: Medicine[] = [
  {
    id: "1",
    name: "Paracetamol 500mg",
    company: "HealthCare Pharma",
    disease: "Fever & Pain",
    price: 40.0,
    expiryDate: "2025-12-31",
    description: "Effective for reducing fever and relieving mild to moderate pain.",
    image: "/paracetamol-medicine-box.jpg",
    details: {
      ingredients: ["Paracetamol 500mg"],
      sideEffects: ["Nausea", "Allergic reactions", "Liver damage (in high doses)"],
      dosage: "1 tablet every 4-6 hours, not exceeding 4g per day.",
      storage: "Store in a cool, dry place below 25°C.",
    },
  },
  {
    id: "2",
    name: "Amoxicillin 500mg",
    company: "BioGen Labs",
    disease: "Bacterial Infections",
    price: 100.0,
    expiryDate: "2024-10-15",
    description: "Antibiotic used to treat a wide variety of bacterial infections.",
    image: "/amoxicillin-capsules.png",
    details: {
      ingredients: ["Amoxicillin Trihydrate"],
      sideEffects: ["Diarrhea", "Rash", "Nausea"],
      dosage: "One capsule every 8 hours as prescribed by physician.",
      storage: "Keep container tightly closed.",
    },
  },
  {
    id: "3",
    name: "Cetirizine 10mg",
    company: "AllergyRelief Co.",
    disease: "Allergies",
    price: 35.0,
    expiryDate: "2026-05-20",
    description: "Relieves allergy symptoms such as watery eyes, runny nose, and sneezing.",
    image: "/cetirizine-tablets.png",
    details: {
      ingredients: ["Cetirizine Hydrochloride"],
      sideEffects: ["Drowsiness", "Dry mouth", "Fatigue"],
      dosage: "One tablet once daily.",
      storage: "Store at room temperature.",
    },
  },
  {
    id: "4",
    name: "Ibuprofen 400mg",
    company: "PainFree Inc.",
    disease: "Inflammation & Pain",
    price: 50.0,
    expiryDate: "2025-08-10",
    description: "Nonsteroidal anti-inflammatory drug (NSAID) for pain relief.",
    image: "/ibuprofen-tablets.png",
    details: {
      ingredients: ["Ibuprofen"],
      sideEffects: ["Stomach pain", "Heartburn", "Dizziness"],
      dosage: "1 tablet every 6-8 hours with food.",
      storage: "Store away from moisture and heat.",
    },
  },
  {
    id: "5",
    name: "Dolo-650",
    company: "Micro Labs",
    disease: "Fever",
    price: 30.0,
    expiryDate: "2025-11-30",
    description: "Trusted medicine for high fever and body pain.",
    image: "/dolo-650-medicine.jpg",
    details: {
      ingredients: ["Paracetamol 650mg"],
      sideEffects: ["Nausea", "Gastric irritation"],
      dosage: "As directed by the physician.",
      storage: "Store in a cool, dry place.",
    },
  },
  {
    id: "6",
    name: "Azithromycin 500mg",
    company: "ZithroCare",
    disease: "Respiratory Infections",
    price: 120.0,
    expiryDate: "2024-12-01",
    description: "Antibiotic for respiratory, skin, and ear infections.",
    image: "/azithromycin-tablets.jpg",
    details: {
      ingredients: ["Azithromycin Dihydrate"],
      sideEffects: ["Diarrhea", "Abdominal pain", "Vomiting"],
      dosage: "Once daily for 3-5 days as prescribed.",
      storage: "Store below 30°C.",
    },
  },
  {
    id: "7",
    name: "Benadryl Syrup",
    company: "Johnson & Johnson",
    disease: "Cough & Cold",
    price: 110.0,
    expiryDate: "2025-03-15",
    description: "Relief from cough, cold, and throat irritation.",
    image: "/cough-syrup-bottle.jpg",
    details: {
      ingredients: ["Diphenhydramine", "Ammonium Chloride"],
      sideEffects: ["Drowsiness", "Dizziness"],
      dosage: "10ml every 4-6 hours.",
      storage: "Do not freeze.",
    },
  },
  {
    id: "8",
    name: "ORS Powder",
    company: "Rehydrate Life",
    disease: "Dehydration",
    price: 20.0,
    expiryDate: "2026-01-01",
    description: "Oral Rehydration Salts to restore body fluids and electrolytes.",
    image: "/ors-powder-packet.jpg",
    details: {
      ingredients: ["Sodium Chloride", "Potassium Chloride", "Dextrose"],
      sideEffects: ["None if taken as directed"],
      dosage: "Dissolve one packet in 1 liter of water.",
      storage: "Store in a dry place.",
    },
  },
  {
    id: "9",
    name: "Digene Gel",
    company: "Abbott",
    disease: "Acidity & Gas",
    price: 130.0,
    expiryDate: "2025-06-20",
    description: "Antacid for quick relief from acidity, gas, and bloating.",
    image: "/digene-bottle.jpg",
    details: {
      ingredients: ["Magnesium Hydroxide", "Simethicone"],
      sideEffects: ["Constipation (rare)"],
      dosage: "2 teaspoons after meals.",
      storage: "Keep bottle tightly closed.",
    },
  },
]

export const healthTips = [
  {
    title: "Stay Hydrated",
    description: "Drink at least 8 glasses of water daily to maintain body function.",
    icon: "Droplets",
  },
  {
    title: "Balanced Diet",
    description: "Eat a mix of fruits, vegetables, and proteins for optimal health.",
    icon: "Apple",
  },
  {
    title: "Regular Exercise",
    description: "Aim for 30 minutes of moderate activity at least 5 days a week.",
    icon: "Activity",
  },
  {
    title: "Quality Sleep",
    description: "Get 7-9 hours of sleep to help your body recover and recharge.",
    icon: "Moon",
  },
]

export const emergencyContacts = [
  { label: "Ambulance", number: "102" },
  { label: "General Emergency", number: "112" },
  { label: "Police", number: "100" },
  { label: "Fire", number: "101" },
]
