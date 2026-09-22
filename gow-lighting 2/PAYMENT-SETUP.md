# GOW — Paystack Payment Setup (Nigeria)

Accept **card, bank transfer, and USSD** payments on checkout.  
No online payment is charged until you add your Paystack keys.

---

## 1. Create a free Paystack account

1. Go to https://dashboard.paystack.com/signup  
2. Sign up with business email (e.g. gloriousoneworldgow@gmail.com)  
3. Complete basic business profile  
4. Open **Settings → API Keys & Webhooks**

You will see:
- **Public key** — starts with `pk_test_...` (test) or `pk_live_...` (live)  
- **Secret key** — keep private (not needed in this static site for basic checkout)

---

## 2. Connect keys to the website

Open `js/config.js` and set:

```js
const PAYSTACK_CONFIG = {
  enabled: true,
  publicKey: 'pk_test_YOUR_KEY_HERE',  // paste your public key
  currency: 'NGN',
  businessEmail: 'gloriousoneworldgow@gmail.com'
};
```

Save the file and **redeploy** to Vercel.

---

## 3. Test before going live

1. Use a **test** public key (`pk_test_...`)  
2. On checkout, choose **Pay online**  
3. Use Paystack test cards, for example:
   - Success: `4084084084084081`  
   - Expiry: any future date  
   - CVV: `408`  
4. After “payment”, WhatsApp should open with **Payment reference** and **Paid (Paystack)**

---

## 4. Go live

1. In Paystack Dashboard, complete **Go Live** requirements (business docs).  
2. Copy your **live** public key (`pk_live_...`).  
3. Put it in `js/config.js` and set `enabled: true`.  
4. Redeploy the site.

---

## 5. How money and orders work

| Step | What happens |
|------|----------------|
| Customer pays | Paystack charges card/transfer; money goes to your Paystack balance |
| WhatsApp message | You receive order + delivery details + **payment reference** |
| You verify | Dashboard → Transactions → match the reference |
| You deliver | Fulfil the order to the delivery address |

Paystack settles to your Nigerian bank account on their payout schedule.

---

## 6. Other payment options still available

On checkout the customer can also choose:
- **Bank Transfer (manual)** — no Paystack; order via WhatsApp only  
- **Cash on Delivery** — Lagos only  
- **Discuss on WhatsApp**

---

## Fees (approximate)

Paystack charges a small fee per successful transaction (see their pricing page).  
You do not pay a monthly fee to use this integration on a static site.

---

## Security notes

- Only the **public** key goes in `js/config.js` (safe in the browser).  
- Never put the **secret** key in HTML or public files.  
- For automatic order confirmation without WhatsApp, you would later add a small server or serverless webhook — optional upgrade.
