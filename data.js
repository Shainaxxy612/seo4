const products = [
    // FACE
    {
        id: 1,
        name: "Aura Silk Foundation",
        category: "face",
        price: "$58.00",
        image: "assets/products/face_foundation.png",
        description: "A weightless, breathable foundation that provides medium-to-full buildable coverage with a natural silk finish."
    },
    {
        id: 2,
        name: "Luminous Setting Powder",
        category: "face",
        price: "$42.00",
        image: "assets/products/face_powder.png",
        description: "An ultra-fine, light-reflecting loose powder that sets makeup for 16 hours while providing a soft-focus finish."
    },
    {
        id: 3,
        name: "Radiant Skin Primer",
        category: "face",
        price: "$38.00",
        image: "assets/products/face_primer.png",
        description: "Hydrating primer that blurs pores and imperfections while creating a smooth, glowing canvas for makeup."
    },
    {
        id: 4,
        name: "Perfect Concealer",
        category: "face",
        price: "$32.00",
        image: "assets/products/face_concealer.png",
        description: "High-coverage, crease-proof concealer that instantly brightens the under-eye area and covers blemishes."
    },
    // EYE
    {
        id: 5,
        name: "Earth Tones Palette",
        category: "eye",
        price: "$65.00",
        image: "assets/products/eye_palette.png",
        description: "A curation of 12 essential shades in matte and shimmer finishes, inspired by natural landscapes."
    },
    {
        id: 6,
        name: "Precision Eyeliner",
        category: "eye",
        price: "$28.00",
        image: "assets/products/eye_liner.png",
        description: "Waterproof, smudge-proof liquid eyeliner pen for the perfect wing every time."
    },
    {
        id: 7,
        name: "Infinity Volume Mascara",
        category: "eye",
        price: "$30.00",
        image: "assets/products/eye_mascara.png",
        description: "Dramatic volume and length without clumping. The hourglass brush captures every lash."
    },
    // LIP
    {
        id: 8,
        name: "Velvet Matte Lipstick",
        category: "lip",
        price: "$35.00",
        image: "assets/products/lip_lipstick.png",
        description: "A rich, pigmented red with a soft-touch matte finish that lasts all day without drying."
    },
    {
        id: 9,
        name: "Glass Shine Gloss",
        category: "lip",
        price: "$26.00",
        image: "assets/products/lip_gloss.png",
        description: "Non-sticky, high-shine gloss infused with hyaluronic acid for plump, hydrated lips."
    },
    {
        id: 10,
        name: "Berry Lip Tint",
        category: "lip",
        price: "$24.00",
        image: "assets/products/lip_tint.png",
        description: "A weightless water-based tint that provides a natural flush of color to lips and cheeks."
    },
    // CHEEK
    {
        id: 11,
        name: "Peach Cream Blush",
        category: "cheek",
        price: "$34.00",
        image: "assets/products/cheek_blush.png",
        description: "A melt-into-skin cream blush that delivers a natural, dewy glow."
    },
    {
        id: 12,
        name: "Champagne Glow Highlighter",
        category: "cheek",
        price: "$38.00",
        image: "assets/products/cheek_highlighter.png",
        description: "Fine-milled powder highlighter that captures light for an ethereal radiance."
    },
    {
        id: 13,
        name: "Terracotta Bronzer",
        category: "cheek",
        price: "$40.00",
        image: "assets/products/cheek_bronzer.png",
        description: "Sun-kissed warmth in a silk-matte finish. Perfect for sculpting and bronzing."
    },
    // TOOLS
    {
        id: 14,
        name: "Pure Cleansing Oil",
        category: "tools",
        price: "$45.00",
        image: "assets/products/tools_cleansing_oil.png",
        description: "Gentle oil cleanser that melts away waterproof makeup and impurities without stripping skin."
    },
    {
        id: 15,
        name: "Elite Brush Set",
        category: "tools",
        price: "$85.00",
        image: "assets/products/tools_brushes.png",
        description: "A professional collection of 5 essential brushes for flawless application."
    },
    {
        id: 16,
        name: "Marble Beauty Sponge",
        category: "tools",
        price: "$18.00",
        image: "assets/products/tools_sponge.png",
        description: "The ultimate tool for seamless blending. Use damp for a dewy finish."
    }
];

if (typeof module !== 'undefined') {
    module.exports = products;
}
