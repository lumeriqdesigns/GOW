# GOW — Free Visual Admin Setup (Sanity CMS)

This gives you a real admin panel where you (or staff) can:
- Add / edit / delete products
- Upload product photos by drag-and-drop
- Change prices, stock, badges
- Mark products as featured

**Cost: Free** (Sanity free tier is generous for this store size)

---

## Step 1 — Create your free Sanity account & project (5 minutes)

1. Go to → https://www.sanity.io/get-started
2. Sign up with Google / GitHub / email (free).
3. Click **Create new project**.
4. Project name: `Glorious One World` (or any name).
5. Choose **Clean project** (or “E-commerce” if offered).
6. Dataset: keep `production`.
7. Finish creation.

You will land in the **Sanity Manage** dashboard.

---

## Step 2 — Get your Project ID

1. In Sanity Manage, open your project.
2. Go to **Project settings** → **API**.
3. Copy the **Project ID** (looks like `abc12xyz`).
4. Keep the dataset name as `production`.

---

## Step 3 — Install Sanity Studio locally (one-time)

Open a terminal and run:

```bash
npm create sanity@latest -- --project YOUR_PROJECT_ID --dataset production --template clean
```

Or the interactive way:

```bash
npm create sanity@latest
```

Follow the prompts:
- Create new project → select the one you just made
- Dataset: production
- Output path: `gow-studio` (or any folder name)
- TypeScript: No (simpler)
- Package manager: npm

Then:

```bash
cd gow-studio
npm install
```

---

## Step 4 — Add the Product schema

1. Open the folder `gow-studio/schemaTypes/` (or `schemas/`).
2. Create a new file called `product.js`.
3. Copy the entire content from the file  
   `gow-lighting/sanity-schema/product.js` (already in your site folder)  
   and paste it into `product.js`.
4. Open `schemaTypes/index.js` (or `schemas/index.js`) and make sure it looks like this:

```js
import product from './product'

export const schemaTypes = [product]
```

5. Start the Studio:

```bash
npm run dev
```

6. Open http://localhost:3333 in your browser.

You now have a **visual admin** running on your computer.

---

## Step 5 — Deploy the Studio online (so staff can use it anywhere)

```bash
npm run deploy
```

Sanity will give you a free URL like:

```
https://your-project-name.sanity.studio
```

Bookmark this URL. This is your permanent admin panel.

Anyone you invite (Project → Members) can log in and manage products.

---

## Step 6 — Connect your website to Sanity

Once you have your **Project ID**, tell me (or do it yourself):

Open `js/config.js` (I will create it) and put:

```js
const SANITY_CONFIG = {
  projectId: 'YOUR_PROJECT_ID_HERE',   // e.g. 'abc12xyz'
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true
};
```

Then the website will automatically pull live products from Sanity instead of the local `products.js` file.

---

## How staff will use the admin

1. Go to your Studio URL (`https://....sanity.studio`)
2. Log in
3. Click **Product** → **Create new**
4. Fill name, price, category, stock
5. Drag photos into the Images field
6. Click **Publish**
7. The product appears on your live website within seconds

No code editing. No redeploy needed for product changes.

---

## Image hosting

- All photos you upload in Sanity are stored on Sanity’s global CDN (fast worldwide).
- You no longer need to put images in the `images/` folder of the website.

---

## Next action

Reply with one of these:

1. **“I have created the Sanity project”** + paste your Project ID  
   → I will immediately update the website code so it reads live products from Sanity.

2. **“Build the full Next.js + Sanity version”**  
   → I will create a complete modern Next.js store with the admin already connected.

3. **“Just give me the schema and I’ll do the rest”**  
   → You already have everything in `sanity-schema/product.js` and this guide.

---

**Current status**
- Your existing static site still works exactly as before.
- The schema is ready.
- As soon as you give me the Project ID, the site switches to live admin-controlled products.
