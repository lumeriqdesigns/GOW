# Glorious One World (GOW) — Lighting & Electrical E-Commerce

Premium multi-page e-commerce storefront for **Glorious One World** — lighting (pendants, chandeliers, wall sconces, LED strips) and electrical materials (breakers, switches, cables, DBs).

**Designed for instant Vercel deploy** and easy non-technical product updates.

---

## Live Features

- Fully responsive, mobile-first dark theme (navy + gold) that makes lighting products pop
- Sticky header with category dropdown, search, live cart badge
- Floating WhatsApp button (`+234 816 491 2257`)
- Product catalog with category filters + sort
- Product Detail Pages with specs, stock status, **Add to Cart** + **Buy via WhatsApp**
- Slide-over cart (localStorage) → one-tap WhatsApp order with full line items
- Full checkout form that generates a complete WhatsApp order message
- Contact form → pre-filled WhatsApp message
- Trust indicators, featured products, category highlights

---

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Homepage — hero, categories, featured, trust, CTA |
| `shop.html` | Full catalog + filters (`?cat=pendant\|chandelier\|wall\|strip\|electrical`) |
| `product.html` | PDP (`?id=pend-001` etc.) |
| `checkout.html` | Customer details + order summary → WhatsApp |
| `about.html` | Brand story |
| `contact.html` | WhatsApp / email + message form |
| `js/products.js` | **All product data** (edit here to add/update products) |
| `js/cart.js` | Cart logic + WhatsApp message builder |

---

## Deploy to Vercel (2 minutes)

1. Push this folder to a GitHub repo **or** drag-and-drop the folder at [vercel.com/new](https://vercel.com/new).
2. Framework Preset: **Other** (static).
3. Deploy. Done.

Every time you edit `js/products.js` (or any HTML), redeploy and changes go live.

---

## How to Add / Edit Products (Admin Workflow)

There is no separate login panel in this static version. Product management is done by editing one file:

### Step-by-step for non-technical staff

1. Open `js/products.js` in any text editor (VS Code, Notepad++, even GitHub web editor).
2. Copy an existing product object and paste it at the end of the `PRODUCTS` array.
3. Change the fields:

```js
{
  id: "pend-005",                    // unique string, no spaces
  name: "New Pendant Name",
  category: "pendant",               // pendant | chandelier | wall | strip | electrical
  categoryLabel: "Pendant & Dropping Lights",
  price: 55000,                      // regular price in Naira (number, no ₦)
  discountPrice: 48000,              // or null if no discount
  stock: 10,                         // 0 = Out of Stock
  badge: "New",                      // or null
  shortDesc: "One-line summary.",
  description: "Longer product description for the detail page.",
  specs: {
    "Material": "Glass + Metal",
    "Voltage": "220-240V",
    // add any key-value pairs
  },
  images: ["filename.jpg"],          // placeholders for now
  featured: true                     // true = shows on homepage
}
```

4. Save the file.
5. Redeploy on Vercel (or commit + push if using Git).

**Stock control:** Set `stock: 0` to show “Out of Stock” and disable Add to Cart.

**Low-stock warning:** Currently visual only via the stock number on the PDP. For automatic email/WhatsApp alerts you would upgrade to a CMS (see below).

---

## Recommended Tech Stack (Current + Future)

### Current (this repo) — Best for speed & simplicity
- **Static HTML + Tailwind CDN + Vanilla JS**
- Cart in `localStorage`
- Orders fulfilled via **WhatsApp** (perfect for Nigerian market)
- Deploy: **Vercel** (zero config)
- Product updates: edit `js/products.js` → redeploy

**Why this works long-term for GOW right now:**
- Zero server cost
- Instant load times
- WhatsApp is how most Nigerian customers already prefer to order
- Non-technical team can update products after 5 minutes of training

### When you need a real Admin Dashboard
Upgrade path (still Vercel-friendly):

| Need | Recommended |
|------|-------------|
| Visual product editor, stock alerts, order log | **Next.js 15 + Sanity CMS** (free tier) or **Payload CMS 3** |
| Full payments (Paystack / Flutterwave) | Add Paystack checkout to Next.js |
| Multi-user staff logins | Sanity / Payload roles |
| Inventory auto low-stock WhatsApp | Serverless function + WhatsApp Business API |

**Shopify** is also excellent if you prefer zero code and built-in admin, but you lose the fully custom dark aesthetic and Vercel control.

---

## Design System

- **Background:** `#0B0F1A` (deep navy)
- **Cards / surfaces:** `#141B2D` / `#1A2338`
- **Accent:** `#D4AF37` (gold)
- **Text:** `#F5F0E8` (warm white) + muted `#94A3B8`
- **Fonts:** Outfit (display) + Inter (body)
- **WhatsApp green:** `#25D366`

---

## Contact (displayed on site)

- WhatsApp / Call: **+234 816 491 2257**
- Email: **gloriousoneworldgow@gmail.com**

---

## Admin Panel (Free Visual Uploading)

See **[ADMIN-SETUP.md](ADMIN-SETUP.md)** for full instructions on setting up Sanity CMS (free visual admin for products + photo uploads).

---

## Next Steps After Deploy

1. Real product photos from Unsplash (free license) are already in `images/` and wired up across homepage, shop, PDP, cart and search.
2. Add your bank account details into the WhatsApp confirmation replies you send customers.
3. (Optional) Connect a custom domain in Vercel.
4. When ready for a full CMS admin panel, tell me and I will migrate this exact design into Next.js + Sanity with a password-protected studio.

---

© 2026 Glorious One World. All rights reserved.
