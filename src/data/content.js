export const business = {
  name: "Blue Touch",
  type: "Adult Family Home",
  tagline: "Compassionate care, trusted support, a home that feels like family.",
  owner: "Titi Tekle",
  ownerTitle: "Owner & Manager",
  phone: "(206) 384-3354",
  phoneHref: "tel:+12063843354",
  fax: "(425) 955-5519",
  email: "Bluetouchsch@gmail.com",
  emailHref: "mailto:Bluetouchsch@gmail.com",
}

export const locations = [
  {
    id: "home-sw",
    shortName: "108th Street Home",
    address: "309 108th St SW",
    cityStateZip: "Everett, WA 98204",
    neighborhood: "Silver Lake",
    phone: "(206) 834-5684",
    phoneHref: "tel:+12068345684",
    blurb:
      "A fully renovated home built for comfortable everyday living: a chef's kitchen with a professional range, a stacked-stone fireplace nook off the dining room, and a covered deck for afternoons outside. Every bathroom is walk-in with grab bars throughout.",
    highlights: [
      "Chef's kitchen with professional range",
      "Walk-in bathrooms with grab bars",
      "Covered deck with outdoor dining",
      "Sunlit shared living & dining rooms",
    ],
    images: {
      porch: "porch",
      dining: "dining",
      kitchen: "kitchen",
      livingRoom: "living-room",
      bedroom: "bedroom",
      deck: "deck",
      bathroom1: "bathroom-1",
      bathroom2: "bathroom-2",
      hallway: "hallway",
    },
  },
  {
    id: "home-se",
    shortName: "27th Drive Home",
    address: "12907 27th Dr SE",
    cityStateZip: "Everett, WA 98208",
    neighborhood: "Silver Lake",
    phone: "(206) 834-5734",
    phoneHref: "tel:+12068345734",
    blurb:
      "Set on a quiet residential street behind a fully fenced, tree-lined backyard, this home pairs a bright, open kitchen with sun-filled living spaces and a private deck, ideal for morning coffee or an afternoon visit with family.",
    highlights: [
      "Expansive, fully fenced backyard",
      "Bright, open kitchen & dining",
      "Walk-in accessible bathrooms",
      "Quiet residential street",
    ],
    images: {
      exterior: "exterior",
      livingRoom: "living-room",
      greatRoom: "great-room",
      breakfastNook: "breakfast-nook",
      kitchen: "kitchen",
      backyard: "backyard",
      deck: "deck",
      bathroom1: "bathroom-1",
      bathroom2: "bathroom-2",
      bedroom: "bedroom",
    },
  },
]

export const amenities = [
  {
    title: "24/7 Care & Supervision",
    body: "A caregiver is present around the clock, every day of the year.",
    icon: "ShieldCheck",
  },
  {
    title: "Personalized Care Plans",
    body: "Each resident's care is built around their own needs and routine.",
    icon: "Sparkle",
  },
  {
    title: "Medication Assistance",
    body: "Daily medication management handled by trained caregivers.",
    icon: "Pill",
  },
  {
    title: "Home-Cooked Meals",
    body: "Nutritious meals prepared fresh, every day, in the home's own kitchen.",
    icon: "ForkKnife",
    hasImage: true,
  },
  {
    title: "Social & Engaging Activities",
    body: "Games, conversation, and company so no day feels empty.",
    icon: "UsersThree",
  },
  {
    title: "Comfortable Private Rooms",
    body: "Private and shared rooms, furnished and ready to feel like home.",
    icon: "Bed",
    hasImage: true,
  },
]

export const values = [
  {
    title: "Compassionate Care",
    body: "Every resident is treated with the warmth and patience we'd want for our own family.",
    icon: "Heart",
  },
  {
    title: "Trusted Support",
    body: "Licensed, attentive caregiving that families can rely on, day and night.",
    icon: "HandHeart",
  },
  {
    title: "Feels Like Family",
    body: "A small, home-like setting, not an institution. Your loved one becomes part of ours.",
    icon: "House",
  },
]

export const tourSteps = [
  {
    title: "Call or request a tour",
    body: `Reach out by phone or email and ${business.owner.split(" ")[0]} or a caregiver will set up a time that works for you.`,
    icon: "Phone",
  },
  {
    title: "Tour the home together",
    body: "Walk through the home, meet the caregivers on shift, and see where your loved one would spend their days.",
    icon: "DoorOpen",
  },
  {
    title: "Talk through care & fit",
    body: "We discuss your loved one's routine and needs, and what a good fit looks like for your family.",
    icon: "ChatsCircle",
  },
  {
    title: "Coordinate move-in",
    body: "Once you're ready, we handle the details together so the transition feels calm, not rushed.",
    icon: "House",
  },
]

export const faqs = [
  {
    question: "What is an Adult Family Home?",
    answer:
      "A licensed, residential alternative to institutional care: a small number of residents live in an actual home, with caregivers present around the clock, rather than in a large facility.",
  },
  {
    question: "Who manages Blue Touch day to day?",
    answer: `Both homes are personally owned and managed by ${business.owner}, who oversees day-to-day care across both locations.`,
  },
  {
    question: "Can I schedule a tour of either home?",
    answer:
      "Yes. Call the home directly or reach out through the contact section below, and we'll set up a time to show you around.",
  },
  {
    question: "Is care really available 24/7?",
    answer:
      "Yes. A caregiver is present in each home around the clock, every day of the year.",
  },
  {
    question: "What's included in care?",
    answer:
      "Personalized care plans, medication assistance, home-cooked meals, and social activities are included for every resident. See Care & Amenities above for the full list.",
  },
  {
    question: "How do I reach you with questions?",
    answer:
      "Call, email, or fax any time. Contact details for both homes and the owner are in the section below.",
  },
]
