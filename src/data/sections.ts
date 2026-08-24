export type Section = {
  slug: string;
  label: string;
  title: string;
  introduction: string;
  topics: { title: string; description: string }[];
  keywords: string[];
};

export const sections: Section[] = [
  { slug: "fashion", label: "Fashion", title: "The pieces that make a look feel like your own.", introduction: "Wardrobe guidance for women who value ease, individuality, and a beautifully considered finish.", topics: [{ title: "The Modern Capsule", description: "High-rotation essentials, viewed through proportion, fabric, and the way a piece earns repeat wear." }, { title: "Seasonal Notes", description: "The colors, silhouettes, and accessories worth considering before the moment passes." }, { title: "The Finishing Touch", description: "Bags, shoes, and small details that give everyday dressing its final polish." }], keywords: ["women's fashion essentials", "capsule wardrobe ideas", "fashion editor picks"] },
  { slug: "home-living", label: "Home Living", title: "A home that holds the light, and your life, beautifully.", introduction: "Quietly luxurious ideas for rooms, rituals, and useful objects that make everyday living feel more intentional.", topics: [{ title: "The Soft Space", description: "Materials, color, and texture for creating rooms that invite you to stay awhile." }, { title: "Tables and Rituals", description: "Small pleasures for hosting, morning coffee, and a more beautiful ordinary." }, { title: "Useful Objects", description: "Design-led finds that do their job well and deserve a place in view." }], keywords: ["elevated home decor ideas", "beautiful home essentials", "modern lifestyle inspiration"] },
  { slug: "beauty", label: "Beauty", title: "A more luminous approach to beauty.", introduction: "Skincare, makeup, and wellness selections that support a simple, confident routine rather than complicating it.", topics: [{ title: "The Glow Routine", description: "Hydration, protection, and well-chosen treatment steps for healthy-looking skin." }, { title: "Soft Focus", description: "Makeup essentials selected for real-life wear, flattering texture, and a fresh finish." }, { title: "Wellbeing, Considered", description: "Small rituals and tools that bring more ease to your everyday." }], keywords: ["best beauty products for glowing skin", "women's skincare routine", "beauty editor recommendations"] },
  { slug: "the-edit", label: "The Edit", title: "The good things, saved in one considered place.", introduction: "A timely, commercially minded shortlist of fashion, beauty, home, and gifting discoveries selected by the VogueGlows point of view.", topics: [{ title: "Editor’s Finds", description: "The current things we would recommend to a friend without overexplaining." }, { title: "Worth the Cart", description: "Practical shopping guides that help compare materials, value, and everyday usefulness." }, { title: "Gifts with Feeling", description: "Beautiful, useful ideas for the people and moments worth celebrating." }], keywords: ["fashion editor picks", "best gifts for women", "lifestyle product recommendations"] }
];

export const getSection = (slug: string) => sections.find((section) => section.slug === slug);
