export const zodiacSigns = [
  ["aries", "मेष", "Aries", "♈"], ["taurus", "वृषभ", "Taurus", "♉"],
  ["gemini", "मिथुन", "Gemini", "♊"], ["cancer", "कर्क", "Cancer", "♋"],
  ["leo", "सिंह", "Leo", "♌"], ["virgo", "कन्या", "Virgo", "♍"],
  ["libra", "तुला", "Libra", "♎"], ["scorpio", "वृश्चिक", "Scorpio", "♏"],
  ["sagittarius", "धनु", "Sagittarius", "♐"], ["capricorn", "मकर", "Capricorn", "♑"],
  ["aquarius", "कुंभ", "Aquarius", "♒"], ["pisces", "मीन", "Pisces", "♓"],
].map(([slug, hindi, name, symbol]) => ({ slug, hindi, name, symbol }));

export const horoscopeCopy = {
  aries: "Take one clear step instead of rushing toward every possibility. A practical conversation can settle an old doubt.",
  taurus: "Steady effort supports your plans today. Make room for rest before agreeing to another responsibility.",
  gemini: "Your words carry extra weight. Ask the question you have been postponing and listen without planning the reply.",
  cancer: "Home and emotional balance need gentle attention. A small routine can restore a sense of order.",
  leo: "Lead with warmth and let someone else contribute. Shared credit strengthens an important connection.",
  virgo: "Refine the details, then stop. Progress matters more than perfect preparation today.",
  libra: "A balanced choice becomes clearer when you name what you truly value. Avoid deciding only to keep the peace.",
  scorpio: "Quiet observation reveals more than pressure. Protect your energy and focus on the matter you can influence.",
  sagittarius: "A fresh idea deserves a practical plan. Write down the first three steps before sharing it widely.",
  capricorn: "Consistency brings a visible result. Review finances or schedules before taking on a new commitment.",
  aquarius: "An unusual perspective helps a group move forward. Keep the explanation simple and invite honest feedback.",
  pisces: "Trust intuition, then confirm the facts. Creative time can help you understand what logic has not resolved.",
};

export const blogPosts = [
  { slug: "how-to-prepare-for-kundli-reading", title: "How to Prepare for a Kundli Reading", titleHindi: "कुंडली परामर्श की तैयारी कैसे करें", excerpt: "The birth details and questions that help make an astrology consultation more focused.", category: "Vedic Astrology", readTime: "5 min read" },
  { slug: "what-marriage-matching-considers", title: "What Marriage Matching Really Considers", titleHindi: "विवाह मिलान में क्या देखा जाता है", excerpt: "Why thoughtful compatibility guidance looks beyond a single guna score.", category: "Relationships", readTime: "6 min read" },
  { slug: "simple-vastu-principles", title: "Simple Vastu Principles for Everyday Spaces", titleHindi: "दैनिक जीवन के लिए सरल वास्तु सिद्धांत", excerpt: "Practical ways to observe light, movement and balance in your home.", category: "Vastu", readTime: "4 min read" },
];

