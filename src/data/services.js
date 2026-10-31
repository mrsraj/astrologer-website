export const services = [
  {
    slug: "kundli-analysis",
    icon: "chart",
    title: "Kundli Analysis",
    titleHindi: "कुंडली विश्लेषण",
    short: "Detailed reading of your birth chart for clarity about strengths, patterns and important life periods.",
    shortHindi: "जन्म कुंडली का विस्तृत अध्ययन, जीवन के अवसरों और चुनौतियों को समझने के लिए।",
    description: "A thoughtful Vedic birth-chart consultation covering planetary placements, houses, dashas and practical themes relevant to your questions.",
    includes: ["Birth chart overview", "Planetary strengths and patterns", "Dasha and transit guidance", "Practical next steps"],
  },
  {
    slug: "marriage-matching",
    icon: "rings",
    title: "Marriage Matching",
    titleHindi: "विवाह मिलान",
    short: "Compatibility guidance using traditional guna matching together with a balanced reading of both charts.",
    shortHindi: "गुण मिलान और दोनों कुंडलियों के संतुलित अध्ययन से वैवाहिक अनुकूलता का मार्गदर्शन।",
    description: "A careful comparison of both birth charts that goes beyond a single score to discuss temperament, communication and long-term compatibility.",
    includes: ["Ashtakoota matching", "Manglik consideration", "Relationship dynamics", "Suggested discussion points"],
  },
  {
    slug: "career-guidance",
    icon: "growth",
    title: "Career Guidance",
    titleHindi: "करियर मार्गदर्शन",
    short: "Astrological perspective for education, career changes, business decisions and professional timing.",
    shortHindi: "शिक्षा, नौकरी, व्यवसाय और करियर परिवर्तन के लिए ज्योतिषीय दिशा।",
    description: "Explore professional strengths, supportive periods and areas that may need patience when planning your next career or business move.",
    includes: ["Career strengths", "Suitable work themes", "Timing overview", "Decision guidance"],
  },
  {
    slug: "vastu-consultation",
    icon: "home",
    title: "Vastu Consultation",
    titleHindi: "वास्तु परामर्श",
    short: "Practical Vastu observations for homes, workspaces and important rooms without unnecessary disruption.",
    shortHindi: "घर और कार्यस्थल में संतुलन के लिए सरल और व्यावहारिक वास्तु सुझाव।",
    description: "A room-by-room review focused on orientation, placement and practical changes that can improve the sense of balance in a space.",
    includes: ["Direction assessment", "Room placement review", "Practical corrections", "Priority action list"],
  },
  {
    slug: "muhurat-selection",
    icon: "calendar",
    title: "Muhurat Selection",
    titleHindi: "मुहूर्त चयन",
    short: "Choose a supportive date and time for weddings, new ventures, house entry and major beginnings.",
    shortHindi: "विवाह, गृह प्रवेश, नया व्यवसाय और शुभ कार्यों के लिए उपयुक्त समय।",
    description: "A personalized selection of auspicious windows based on the event, location and relevant birth details.",
    includes: ["Event-specific assessment", "Suitable date windows", "Time and location check", "Simple preparation notes"],
  },
  {
    slug: "gemstone-guidance",
    icon: "gem",
    title: "Gemstone Guidance",
    titleHindi: "रत्न मार्गदर्शन",
    short: "Chart-based guidance before considering a gemstone, including suitability and traditional wearing practices.",
    shortHindi: "कुंडली के आधार पर रत्न की उपयुक्तता और धारण विधि का मार्गदर्शन।",
    description: "A conservative chart-led consultation to determine whether a gemstone is appropriate and what factors to consider before wearing it.",
    includes: ["Suitability review", "Gemstone options", "Traditional wearing guidance", "Care considerations"],
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}

