export const site = {
  name: "VogueGlows",
  domain: "vogueglows.com",
  market: "English / United States",
  description: "An independent journal about women's clothing, bags, shoes, beauty, and travel style.",
  affiliate: { network: "Independent partner links", defaultUrl: null as string | null },
  affiliateNotice: "Some links on VogueGlows are affiliate links. If you make a qualifying purchase, I may earn a commission at no extra cost to you."
};

export const categories = [
  { slug: "clothing", name: "Women's Clothing", trail: "Clothing", heroTitle: "Clothes that make getting dressed easier to repeat.", archiveTitle: "Clothing worth a closer look.", description: "Tailoring, knitwear, and everyday layers chosen with fit and fabric in mind.", image: "/images/vg-category-style.webp", tags: ["Tailoring", "Everyday layers", "Activewear"] },
  { slug: "bags-accessories", name: "Bags", trail: "Bags", heroTitle: "A good bag begins with what it needs to carry.", archiveTitle: "The bags edit.", description: "Shoulder bags and totes considered by size, closure, strap, and material.", image: "/images/vg-editorial-shoulder-bag.png", tags: ["Shoulder bags", "Totes", "Leather"] },
  { slug: "womens-shoes", name: "Women's Shoes", trail: "Women's Shoes", heroTitle: "Shoes that make a whole day feel less complicated.", archiveTitle: "The women's shoes edit.", description: "Shoes with notes on fit, material, and the return policy worth reading.", image: "/images/vg-category-shoes.webp", tags: ["Flats", "Slingbacks", "Everyday"] },
  { slug: "audio", name: "Audio", trail: "Audio", heroTitle: "Headphones chosen for the way they fit into a day.", archiveTitle: "The personal audio edit.", description: "Open-ear and everyday listening options considered by fit, awareness, battery life, and return terms.", image: "/images/vg-category-audio.webp", tags: ["Open ear", "Everyday listening", "Travel"] },
  { slug: "beauty-skincare", name: "Beauty & Skincare", trail: "Beauty & Skincare", heroTitle: "A beauty routine with room to breathe.", archiveTitle: "The beauty and skincare edit.", description: "Daily skincare and makeup tools with ingredients, use, and upkeep made clear.", image: "/images/vg-editorial-daily-lotion.png", tags: ["Skincare", "Makeup tools", "Daily routine"] },
  { slug: "travel-style", name: "Travel Style", trail: "Travel Style", heroTitle: "Bags and small pieces that make leaving easier.", archiveTitle: "The travel style edit.", description: "Weekenders and organizers considered for packing, carrying, and returning home.", image: "/images/vg-editorial-weekender.png", tags: ["Weekenders", "Organizers", "Packing"] },
  { slug: "small-accessories", name: "Accessories", trail: "Accessories", heroTitle: "The small pieces used every day.", archiveTitle: "The accessories edit.", description: "Card cases and finishing pieces where material, scale, and usefulness matter.", image: "/images/vg-editorial-card-case.png", tags: ["Card cases", "Jewelry", "Small leather goods"] }
];

type Product = {
  slug: string; category: string; name: string; storyTitle: string; summary: string; image: string; imageAlt: string; imageMode?: "product"; forWho: string;
  pros: string[]; cons: string[]; alternatives: string[]; sourceUrl: string | null;
  sourceName: string | null; affiliateUrl: string | null;
};

export const products: Product[] = [
  { slug: "everlane-oversized-blazer", category: "clothing", name: "Everlane The Oversized Blazer in Buttersmooth", storyTitle: "The relaxed blazer I would compare before autumn", summary: "Relaxed tailoring is useful only when the shoulders, sleeves, and layers underneath all work together. This one is worth measuring, not guessing.", image: "/images/vg-category-style.png", imageAlt: "Black blazer, ivory knit top, loafer, and gold cuff arranged on a warm neutral surface", forWho: "I put this blazer on the list for its easy, menswear-leaning shape. It makes the most sense for someone who wants room through the body and is prepared to compare the measurements with a jacket already in the wardrobe.", pros: ["Everlane describes an oversized fit and a 31-inch length in size 6", "The shell is listed as 60% TENCEL Lyocell and 40% cotton"], cons: ["The brand notes that the arms are cut closer than the body", "An oversized label does not replace checking shoulder, sleeve, and jacket length"], alternatives: ["Relaxed blazer", "Unstructured jacket", "Cardigan jacket"], sourceUrl: "https://www.everlane.com/products/womens-tencel-oversized-blazer-black", sourceName: "Everlane US product page", affiliateUrl: null },
  { slug: "gym-people-workout-tee", category: "clothing", name: "THE GYM PEOPLE short-sleeve workout tee", storyTitle: "A workout tee for the days that do not need a complicated outfit", summary: "The side slits and relaxed shape caught my eye. The useful questions are still the ordinary ones: length, opacity, fabric feel, and return terms.", image: "/images/vg-product-gym-tee.webp", imageAlt: "Mint-green short-sleeve workout tee arranged flat on a warm ivory surface", imageMode: "product", forWho: "I would shortlist this for walking, yoga, or a gym session when a close-fitting performance top feels like too much. The size chart and finished length matter more than the styled listing photos.", pros: ["The Amazon listing describes a women's short-sleeve workout tee with side slits", "The listing provides size, color, fabric, and return information to check before ordering"], cons: ["A relaxed fit can still sit very differently from one size to the next", "Opacity and hand feel are difficult to judge from a screen"], alternatives: ["Fitted training tee", "Lightweight long-sleeve layer", "Relaxed cotton tee"], sourceUrl: "https://www.amazon.com/dp/B0BRJ7M782", sourceName: "Amazon US product listing", affiliateUrl: "https://pboost.me/G40AQ8J6" },
  { slug: "coach-brooklyn-shoulder-bag-28", category: "bags-accessories", name: "Coach Brooklyn Shoulder Bag 28", storyTitle: "A closer look at the smaller Brooklyn shoulder bag", summary: "Its appeal is the uncomplicated shape: one main compartment, a broad strap, and enough structure to look polished without feeling formal.", image: "/images/vg-editorial-shoulder-bag.png", imageAlt: "Dark leather shoulder bag with a wide strap in a bright stone interior", forWho: "This is the bag I would compare for someone who carries a compact daily kit and would rather have one open compartment than a stack of dividers. The decision comes down to the 11-inch scale and the open magnetic top.", pros: ["Coach lists natural grain leather, a magnetic snap closure, and a 10.5-inch handle drop", "The listed measurements are 11 by 11 by 3.25 inches"], cons: ["A magnetic top is easy to reach into but less enclosed than a zipper", "The capacity should be checked against the actual items carried each day"], alternatives: ["Zip-top shoulder bag", "Structured crossbody", "Large work tote"], sourceUrl: "https://www.coach.com/products/brooklyn-shoulder-bag-28/CU068.html", sourceName: "Coach US product page", affiliateUrl: null },
  { slug: "sam-edelman-bianka-slingback", category: "womens-shoes", name: "Sam Edelman Bianka Slingback Pump", storyTitle: "The low slingback that can finish more than one kind of outfit", summary: "A pointed toe and modest heel give this pair a dressed-up line without turning it into an occasion-only shoe.", image: "/images/vg-category-shoes.png", imageAlt: "Pair of ivory pointed slingback shoes on a pale stone plinth", forWho: "I would compare this one for work, dinners, or events when a full-height pump feels unnecessary. A careful indoor try-on is still the only honest way to judge the pointed toe and slingback strap.", pros: ["Sam Edelman lists a 2.4-inch heel and an adjustable buckle closure", "The brand page provides material, size, shipping, and return information"], cons: ["A pointed toe changes the amount of usable room at the front", "Comfort cannot be established from a product listing"], alternatives: ["Low block heel", "Ballet flat", "Leather loafer"], sourceUrl: "https://www.samedelman.com/product/womens-bianka-slingback-pump-3028153/black-leather-ec0238363", sourceName: "Sam Edelman US product page", affiliateUrl: null },
  { slug: "shokz-openfit-2-plus", category: "audio", name: "Shokz OpenFit 2+ open-ear headphones", storyTitle: "The open-ear headphones I would choose for awareness, not silence", summary: "The appeal is being able to hear music without closing off the room or the street. Fit, sound leakage, and the open design matter more than a long feature list.", image: "/images/vg-product-shokz-openfit2plus-editorial.webp", imageAlt: "Silver-white Shokz OpenFit 2+ earbuds displayed with their open charging case", imageMode: "product", forWho: "I would compare these for walking, desk work, or everyday listening when staying aware of the surroundings is part of the point. They make less sense for someone whose first priority is isolation on a noisy flight or train.", pros: ["Shokz describes an open-ear design intended to keep the wearer aware of the surroundings", "The official page lists up to 48 hours of total listening time and wireless charging for the OpenFit 2+"], cons: ["An open design does not isolate noise like sealed in-ear headphones", "Ear-hook comfort and sound leakage are personal and should be checked within the return window"], alternatives: ["Noise-cancelling earbuds", "Lightweight over-ear headphones", "Neckband open-ear headphones"], sourceUrl: "https://shokz.com/products/openfit2plus", sourceName: "Shokz OpenFit 2+ official product page", affiliateUrl: "https://yeahpromos.com/index/index/openurl?track=38d5602589087b8c&url=" },
  { slug: "beakey-makeup-brushes", category: "beauty-skincare", name: "BEAKEY makeup brushes set", storyTitle: "A starter brush set for a routine that is still taking shape", summary: "Ten brushes and two sponges cover the common face and eye steps without asking a beginner to choose every tool separately.", image: "/images/vg-product-beakey-editorial.webp", imageAlt: "BEAKEY makeup brushes and two pink blending sponges arranged on a warm ivory surface", imageMode: "product", forWho: "I would look at this set for a first makeup bag or a simple replacement kit. Before ordering, I would count how many of the included shapes match the products actually used each week.", pros: ["The Amazon listing includes 10 face and eye brushes plus two blending sponges", "The listing describes synthetic fibers intended for cream, liquid, and powder formulas"], cons: ["Brush density and handle shape are matters of preference", "A large set is poor value when only two or three shapes get used"], alternatives: ["A smaller five-piece set", "Individual complexion brushes", "A sponge-only kit"], sourceUrl: "https://www.amazon.com/dp/B01F36JBDM", sourceName: "Amazon US product listing", affiliateUrl: "https://pboost.me/O3ZF8zC1" },
  { slug: "ulike-air-10-ipl", category: "beauty-skincare", name: "Ulike Air 10 IPL hair-removal device", storyTitle: "Before considering an at-home IPL device, check the compatibility chart", summary: "The Air 10 is a serious purchase, so the skin-tone and hair-color guidance matters more than speed claims or before-and-after pictures.", image: "/images/vg-product-ulike-editorial.webp", imageAlt: "Ulike Air 10 IPL device, protective glasses, razor, and presentation box on a warm stone set", imageMode: "product", forWho: "I included the Air 10 because its official page explains the treatment modes and compatibility limits more clearly than many beauty-device listings. It is only a sensible option for someone whose skin tone and hair color fall within the stated guidance and who will follow the instructions consistently.", pros: ["Ulike lists a skin sensor, four treatment modes, and a continuous AutoGlide mode", "The official guide includes a skin-tone and hair-color compatibility chart"], cons: ["Ulike states that IPL is least effective on blonde, gray, and red hair and is not suitable for very dark skin", "Results and comfort vary, and marketing claims do not replace reading the full safety instructions"], alternatives: ["Professional consultation", "Electric body trimmer", "Waxing or sugaring"], sourceUrl: "https://www.ulike.com/products/ulike-air-10", sourceName: "Ulike Air 10 official product page", affiliateUrl: "https://yeahpromos.com/index/index/openurl?track=f419cd68499ec593&url=" },
  { slug: "beauty-by-earth-self-tanner", category: "beauty-skincare", name: "Beauty by Earth Self Tanner Body Lotion", storyTitle: "A self-tanner where shade choice matters more than the promise of glow", summary: "The useful part of this listing is its shade guidance. Starting lighter and building gradually is more believable than expecting one formula to suit everyone.", image: "/images/vg-product-beauty-by-earth-editorial.webp", imageAlt: "Beauty by Earth Self Tanner Body Lotion on a bright warm cream studio background", imageMode: "product", forWho: "I would compare this for someone who wants a lotion rather than a mousse and is willing to prepare the skin, use an applicator mitt, and choose the shade from undertone and natural skin tone rather than the depth of tan they hope to reach.", pros: ["Beauty by Earth offers Light and Medium formulas with detailed shade guidance", "The official page recommends a mitt, brush, or gloves for more even application"], cons: ["Color develops differently according to skin tone, preparation, and application", "DHA-based self-tanners can develop a characteristic scent as the color activates"], alternatives: ["Gradual tanning lotion", "Self-tanning mousse", "Wash-off body tint"], sourceUrl: "https://www.beautybyearth.com/products/self-tanner", sourceName: "Beauty by Earth official product page", affiliateUrl: "https://yeahpromos.com/index/index/openurlproduct?track=5b74131d03b21553&pid=521555" },
  { slug: "coolife-three-piece-luggage", category: "travel-style", name: "COOLIFE three-piece luggage set", storyTitle: "Three suitcase sizes make sense only if you will use all three", summary: "This set pairs 20-, 24-, and 28-inch hard-shell cases. The real comparison is storage space, airline rules, and whether a full set suits the way you travel.", image: "/images/vg-product-coolife-editorial.webp", imageAlt: "Three yellow COOLIFE hard-shell suitcases arranged on a warm gray studio background", imageMode: "product", forWho: "I put this set at the end of the list because it solves a specific problem: keeping several suitcase sizes in one household. It is less convincing for a solo traveler who usually reaches for the same carry-on every time.", pros: ["The Amazon listing groups 20-, 24-, and 28-inch ABS hard-shell cases", "The listing describes nesting storage, spinner wheels, telescoping handles, and TSA-accepted locks"], cons: ["Airline size and weight limits still need to be checked for every trip", "A three-piece set takes more room and money than buying the one size used most often"], alternatives: ["Single carry-on", "Soft-sided checked case", "Carry-on and weekender pair"], sourceUrl: "https://www.amazon.com/dp/B07T53X2VL", sourceName: "Amazon US product listing", affiliateUrl: "https://pboost.me/f41dkekOc" }
];

// The homepage is an editorial sequence: Amazon-linked pieces lead, while
// adjacent cards still move across clothing, beauty, travel, and accessories.
export const homepageProductSlugs = [
  "gym-people-workout-tee",
  "beakey-makeup-brushes",
  "coolife-three-piece-luggage",
  "coach-brooklyn-shoulder-bag-28",
  "sam-edelman-bianka-slingback",
  "shokz-openfit-2-plus",
  "everlane-oversized-blazer",
  "ulike-air-10-ipl",
  "beauty-by-earth-self-tanner"
];

export const homepageProducts = homepageProductSlugs
  .map((slug) => products.find((product) => product.slug === slug))
  .filter((product): product is Product => Boolean(product));

type ProductSpotlight = { highlights: string[]; cautions: string[] };

export const productSpotlights: Record<string, ProductSpotlight> = {
  "gym-people-workout-tee": {
    highlights: [
      "The listing describes a relaxed, mid-length workout tee with side slits",
      "A crew neck and raglan-style sleeves keep the shape simple",
      "The current listing offers sizes from XS through XXL",
      "The longer uneven hem is intended to work with leggings or shorts"
    ],
    cautions: [
      "Fabric composition and measurements should be rechecked for the selected color and size",
      "Drape, opacity, and hip coverage cannot be established from listing photos alone"
    ]
  },
  "beakey-makeup-brushes": {
    highlights: [
      "The set contains five face brushes, five eye brushes, and two blending sponges",
      "The brand lists shapes for foundation, contour, powder, blush, highlight, and eye makeup",
      "The two sponges can be used dry for powder or damp for liquid and cream formulas",
      "Buying the set avoids choosing every first brush separately"
    ],
    cautions: [
      "A 12-piece kit is not economical if only a few shapes fit the routine",
      "The tools still require regular washing, reshaping, and thorough air-drying"
    ]
  },
  "coolife-three-piece-luggage": {
    highlights: [
      "The listing includes 20-, 24-, and 28-inch hard-shell cases",
      "The cases nest inside one another when they are not in use",
      "The listing specifies 360-degree spinner wheels and a telescoping handle",
      "Interior mesh storage, elastic straps, and a TSA-accepted combination lock are listed"
    ],
    cautions: [
      "The 20-inch case still needs to be checked against the airline's current carry-on limit",
      "ABS keeps the cases relatively light, but shell stiffness and wheel life cannot be judged online"
    ]
  },
  "shokz-openfit-2-plus": {
    highlights: [
      "Open-ear design leaves the ear canal open for situational awareness",
      "Up to 11 hours per charge and 48 hours with the charging case",
      "Qi wireless charging with both physical buttons and touch controls",
      "IP55-rated earbuds for sweat and light rain"
    ],
    cautions: [
      "The open construction does not isolate loud surroundings",
      "The charging case is not waterproof, and a wireless charger is not included"
    ]
  },
  "ulike-air-10-ipl": {
    highlights: [
      "Four treatment modes: Fast, Normal, High, and Super Hair Removal",
      "AutoGlide and a contact sensor support treatment over larger areas",
      "The official compatibility chart covers both skin tone and hair color"
    ],
    cautions: [
      "IPL is least effective on blonde, gray, and red hair",
      "The brand says it is not suitable for very dark skin; read the full safety guidance before use"
    ]
  },
  "beauty-by-earth-self-tanner": {
    highlights: [
      "Light and Medium options are matched to natural skin tone and undertone",
      "The brand recommends starting with one thin coat and building gradually",
      "A mitt, brush, or gloves can help produce a more even application"
    ],
    cautions: [
      "Color depth varies with skin tone, preparation, and application",
      "Bare-hand application can stain palms and joints, and a DHA scent can develop"
    ]
  }
};

type ProductGuideSection = { heading: string; paragraphs: string[] };
type ProductGuide = { introduction: string; sections: ProductGuideSection[]; conclusion: string };

export const productGuides: Record<string, ProductGuide> = {
  "gym-people-workout-tee": {
    introduction: "What makes this tee worth a closer look is not a dramatic technical claim. It is the combination of a loose body, side slits, and a longer uneven hem: ordinary details that can make a top easier to wear with leggings, bike shorts, or relaxed trousers. The listing presents it as both activewear and a casual layer, so the useful question is whether that shape fits the way you actually dress.",
    sections: [
      {
        heading: "Start with length, not the styled photo",
        paragraphs: [
          "The current listing describes a mid-length, loose-fitting shirt with coverage through the stomach and hips. That sounds straightforward, but the result depends on torso length, hip measurement, and the rise of the bottoms worn underneath. I would compare the listed measurements with a tee that already falls at the right point rather than choosing from the model image alone.",
          "The side slits are the detail I would inspect next. They can help a longer top move more freely and sit without pulling across the hips, but their height also affects coverage. The front and back hem positions matter just as much as the letter size on the label."
        ]
      },
      {
        heading: "The fabric description needs a second check",
        paragraphs: [
          "The merchant information describes the fabric as lightweight, soft, breathable, and stretchy. Those words are useful as a starting point, not a substitute for the current fibre label. Marketplace listings can change across colors or production runs, so I would confirm the composition and care instructions shown for the exact option in the cart.",
          "Nothing on a screen can settle opacity, cling, or how quickly the cloth dries after a workout. A sensible first try is indoors, with the sports bra and bottoms you expect to wear, while the return window is still open."
        ]
      },
      {
        heading: "Who may get the most use from it",
        paragraphs: [
          "This shape makes the most sense for someone who prefers a relaxed gym top over a fitted performance tee and wants enough length to move between a walk, a light workout, and the rest of the day. The crew neck and short raglan-style sleeves keep it visually simple, while the slits stop the longer body from reading like a straight tunic.",
          "It is less convincing for someone who wants compression, a cropped proportion, verified sweat-wicking performance, or a close fit that stays fixed during high-impact exercise. Those are different jobs and deserve a different top."
        ]
      }
    ],
    conclusion: "My shortlist verdict: the silhouette is the reason to consider this tee. Check the exact garment measurements, fibre label, opacity, and return terms before treating it as either a workout staple or an everyday basic."
  },
  "beakey-makeup-brushes": {
    introduction: "A starter brush set is useful when it removes decisions rather than creating more clutter. BEAKEY's current 10+2 set groups five face brushes, five eye brushes, and two blending sponges in one purchase. That is enough variety to build a basic routine, but the value depends on whether those shapes match the products already on the shelf.",
    sections: [
      {
        heading: "What is actually in the set",
        paragraphs: [
          "The brand lists face brushes for foundation, contour, powder, highlight, bronzer, and blush work, alongside smaller shapes for blending shadow, placing color near the lash line, concealing, and defining brows or liner. Several jobs overlap, which is normal in a general-purpose kit: one brush can often handle more than the name printed in a guide.",
          "The two sponges add a different finish rather than simply repeating the brushes. BEAKEY says they may be used dry with powder and damp with liquid or cream formulas. A beginner does not need to use every tool immediately; the practical approach is to identify the four or five shapes that serve the routine first."
        ]
      },
      {
        heading: "The hidden cost is cleaning and drying",
        paragraphs: [
          "More tools also mean more upkeep. The brand advises rinsing brush bristles with lukewarm water, using a gentle soap or brush cleanser, reshaping them, and laying them flat with the bristles over the edge while they dry. The sponges need cleanser, repeated rinsing, and open-air drying as well.",
          "That routine matters because damp tools packed into a closed makeup bag are not convenient, however complete the set looks in a product photo. Before buying, I would make sure there is a clean place to dry them and enough time to wash the most-used pieces regularly."
        ]
      },
      {
        heading: "A sensible first kit, with limits",
        paragraphs: [
          "The appeal is breadth at the beginning: complexion, cheek, and eye tools arrive together, so there is no need to understand every brush category before starting. Synthetic fibres also make sense for a routine that moves between liquid, cream, and powder products.",
          "The limitation is equally simple. A large set cannot guarantee that every handle, density, or head shape will feel right. Someone who already knows the exact two brushes they replace every year may be better served by buying those individually."
        ]
      }
    ],
    conclusion: "My shortlist verdict: this is most credible as an entry or replacement kit, not as a promise of professional results. Count the shapes you will actually use and include cleaning time in the decision."
  },
  "coolife-three-piece-luggage": {
    introduction: "The strongest argument for this COOLIFE set is not that three cases look coordinated. It is that the 20-, 24-, and 28-inch sizes cover three different packing jobs and then nest together at home. That only becomes good value when a household will genuinely use more than one size.",
    sections: [
      {
        heading: "Three sizes solve three different trips",
        paragraphs: [
          "The listing identifies a 20-inch case, a 24-inch checked case, and a 28-inch checked case. The smallest is presented as suitable for carry-on use, but airline limits vary by carrier, route, and fare. I would compare the current external dimensions with the exact airline allowance before relying on that description.",
          "The larger cases make more sense for longer trips, shared family packing, or households where different travelers need luggage at the same time. For a solo traveler who repeatedly takes the same short trip, one carefully chosen carry-on may be the more useful purchase."
        ]
      },
      {
        heading: "What the construction list tells us",
        paragraphs: [
          "The product information specifies 100 percent ABS hard shells, multidirectional spinner wheels, push-button telescoping handles, and a TSA-accepted combination lock. Inside, the listing describes a mesh zip pocket and elastic organization. These are concrete features to compare, but they do not amount to a durability test.",
          "ABS is commonly chosen to keep a hard-shell case relatively light and affordable. It can still scuff, flex, or show handling marks, and wheel or zipper longevity cannot be predicted from the material name. I would inspect those moving parts closely as soon as the set arrives."
        ]
      },
      {
        heading: "Storage and handling are part of the price",
        paragraphs: [
          "Nesting the smaller cases inside the largest reduces the footprint between trips, which is one of the set's clearest practical advantages. Even nested, however, the 28-inch shell still needs a real home in a closet, storage room, or under a high rail. Measuring that space before ordering is more useful than admiring the color choice.",
          "On arrival, I would roll every case on a hard floor, extend and retract each handle, inspect the shell and zipper track, and set the combination lock according to the current instructions. Those checks do not prove long-term performance, but they can reveal an immediate defect while the retailer's return period is active."
        ]
      }
    ],
    conclusion: "My shortlist verdict: the set is a practical proposition for families or mixed trip lengths, especially when nested storage matters. It is excessive for anyone who will use only one case, and the airline size rules remain the buyer's final check."
  }
};

export const articles = [
  { slug: "how-to-compare-a-tailored-blazer", category: "Women's Clothing", title: "Before you buy a blazer, start with the clothes underneath it", excerpt: "Shoulders, sleeve length, lining, and the return policy tell you far more than a polished campaign image.", image: "/images/vg-featured-tailored-blazer.webp", sections: ["Begin with the layers you already wear", "Measure a jacket that feels right", "Read the fabric and return details"], content: ["A blazer can look perfect on a product page and still feel wrong over the knitwear or shirts you actually wear. Start with the few outfits it has to serve: perhaps a fine knit, a tee, a button-down, or a dress. That list makes the right shoulder shape, length, and amount of room much easier to picture.", "Pull out a jacket that already fits well and compare the listing's measurements with it. Look at shoulder width, sleeve length, back length, and whether the cut is fitted, straight, or oversized. Styling photos are nice, but they cannot show where a shoulder seam will land on you or whether the sleeves will work with your usual layers.", "Fabric deserves the same attention as the cut. A broad description such as wool blend, suiting, or crepe leaves a lot unsaid, so look for the fibre mix, lining, care instructions, delivery window, and return conditions. Those are the details that decide whether a blazer gets worn or stays on the hanger."] },
  { slug: "the-five-minute-beauty-routine", category: "Beauty & Skincare", title: "A five-minute beauty routine has room for only a few things", excerpt: "The best short routine is not a race. It is a familiar set of steps that does not ask you to think too hard before leaving the house.", image: "/images/vg-featured-beauty-routine.webp", sections: ["Let each step do one job", "Change one thing at a time", "Keep the shelf easy to use"], content: ["A short routine gets easier when every product has a clear job. Cleanse, moisturize, protect, then add something targeted only when it earns a place. Two products that promise the same thing usually make a morning longer without making it better.", "When you try a new formula, leave the rest of the routine alone for a while. You will notice more: how it layers, whether it fits your schedule, and whether you reach for it once the novelty has worn off. It also makes it easier to tell what your skin likes.", "Keep the products you use most where you can reach them without searching. Packaging that opens easily and directions that fit your actual mornings are not glamorous details, but they are often why a routine lasts. A few steps you repeat beat a crowded shelf you avoid."] },
  { slug: "what-to-pack-in-a-travel-essentials-case", category: "Travel Style", title: "What actually belongs in a travel organizer", excerpt: "The point is not to pack more. It is to stop cables, documents, and the tiny things you need first from roaming around a bag.", image: "/images/vg-featured-travel-case-v2.webp", sections: ["Start with the things that go missing", "Pick the right amount of structure", "Reset it when you get home"], content: ["The best travel organizer is rarely the biggest one. Begin with the things that usually disappear to the bottom of a bag: charging cables, a small adapter, a ring or watch, lip balm, spare contact lenses, or a key. The goal is simply to give the handful of essentials you reach for a regular home.", "A soft pouch gives way when a bag is full; a structured zip case keeps small pieces separate and visible. Compare the closure, interior pockets, and the shape against the bag you already travel with. A product photo cannot tell you whether the organizer will fit beside the things you need.", "When you get home, take a minute to reset it. Replace anything used, throw out receipts, and put valuables back where they belong. It makes the next departure calmer and keeps the organizer from becoming a drawer for old tickets and loose cables."] }
];

export const getCategory = (slug: string) => categories.find((item) => item.slug === slug);
export const getProduct = (slug: string) => products.find((item) => item.slug === slug);
export const getProductSpotlight = (slug: string) => productSpotlights[slug];
export const getProductGuide = (slug: string) => productGuides[slug];
export const getArticle = (slug: string) => articles.find((item) => item.slug === slug);
