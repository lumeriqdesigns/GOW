/**
 * GOW Configuration
 * ----------------
 * To switch from local products.js to live Sanity CMS:
 * 1. Create your free Sanity project (see ADMIN-SETUP.md)
 * 2. Paste your Project ID below
 * 3. Set USE_SANITY = true
 * 4. Redeploy
 */

const SANITY_CONFIG = {
  // ↓↓↓ PASTE YOUR PROJECT ID HERE ↓↓↓
  projectId: 'm1ny55pn',       // Glorious One World
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true
};

// Set to true only after you have filled projectId above
const USE_SANITY = true;

// Helper — builds the Sanity query URL
function getSanityUrl(query) {
  const { projectId, dataset, apiVersion, useCdn } = SANITY_CONFIG;
  if (!projectId) return null;
  const host = useCdn ? 'cdn.sanity.io' : 'api.sanity.io';
  return `https://${projectId}.${host}/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`;
}


/**
 * Paystack payment gateway (Nigeria)
 * ---------------------------------
 * 1. Sign up at https://dashboard.paystack.com/signup (free)
 * 2. Settings → API Keys & Webhooks → copy Public Key
 * 3. Paste publicKey below and set enabled: true
 * 4. Redeploy the site
 * Test mode: use pk_test_... keys. Live: pk_live_...
 */
const PAYSTACK_CONFIG = {
  enabled: false,                    // set true after adding your public key
  publicKey: '',                     // e.g. 'pk_test_xxxxxxxx' or 'pk_live_xxxxxxxx'
  currency: 'NGN',
  // Your business email shown on Paystack receipts (optional)
  businessEmail: 'gloriousoneworldgow@gmail.com'
};

function isPaystackReady() {
  return !!(PAYSTACK_CONFIG.enabled && PAYSTACK_CONFIG.publicKey && PAYSTACK_CONFIG.publicKey.indexOf('pk_') === 0);
}
