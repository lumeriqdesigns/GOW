/**
 * GOW — Product Loader
 * Loads products from Sanity CMS when configured,
 * otherwise falls back to the local PRODUCTS array in products.js
 */

async function loadProductsFromSanity() {
  if (typeof USE_SANITY === 'undefined' || !USE_SANITY || !SANITY_CONFIG.projectId) {
    return null; // use local products.js
  }

  const query = `*[_type == "product"] | order(name asc) {
    "id": _id,
    name,
    "category": category,
    "categoryLabel": select(
      category == "pendant" => "Pendant & Dropping Lights",
      category == "chandelier" => "Luxury Chandeliers",
      category == "wall" => "Wall Brackets & Sconces",
      category == "strip" => "Rope & Strip Lights",
      category == "electrical" => "Electrical Materials",
      "Other"
    ),
    price,
    discountPrice,
    stock,
    badge,
    shortDesc,
    description,
    "images": images[].asset->url,
    "specs": specs[]{ "key": label, "value": value },
    featured
  }`;

  const url = getSanityUrl(query);
  if (!url) return null;

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!data.result) return null;

    // Normalize to match the shape expected by the rest of the site
    return data.result.map(p => ({
      id: p.id,
      name: p.name,
      category: p.category,
      categoryLabel: p.categoryLabel,
      price: p.price,
      discountPrice: p.discountPrice || null,
      stock: p.stock ?? 0,
      badge: p.badge || null,
      shortDesc: p.shortDesc || '',
      description: p.description || '',
      specs: (p.specs || []).reduce((acc, s) => {
        if (s.key) acc[s.key] = s.value;
        return acc;
      }, {}),
      images: (p.images || []).map(url => url), // full CDN URLs from Sanity
      featured: !!p.featured
    }));
  } catch (err) {
    console.error('Sanity fetch failed, falling back to local products', err);
    return null;
  }
}

// Override the global PRODUCTS when Sanity data is available
async function initProducts() {
  const sanityProducts = await loadProductsFromSanity();
  if (sanityProducts && sanityProducts.length > 0) {
    PRODUCTS = sanityProducts;
    window.PRODUCTS = sanityProducts;
    console.log('Loaded ' + sanityProducts.length + ' products from Sanity CMS');
  }
}
