# Savanna Motors — Import · Finance · Drive

A modern, full-stack car dealership platform for importing vehicles from Japan, UK, and Dubai to East Africa. Built with Next.js 15, React 19, Tailwind CSS, and Supabase.

![Savanna Motors](https://img.shields.io/badge/Next.js-15.5.27-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-green?logo=supabase)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)

---

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/ismahdeismail-beep/SAVANNA-MOTORS.git
cd SAVANNA-MOTORS
npm install

# Copy env template and fill in your keys
cp .env.example .env.local

# Run locally
npm run dev   # → http://localhost:3000
```

---

## 🌐 Live Demo

- **Production**: [https://savanna-motors.vercel.app](https://savanna-motors.vercel.app) (after Vercel deploy)
- **Local**: `http://localhost:3000` (after `npm run dev`)

---

## 🏗️ Architecture

```
app/
├── layout.tsx                 # Root layout with fonts, header, footer
├── page.tsx                   # Homepage (hero, search, trust, featured cars)
├── globals.css                # Tailwind + custom animations + design system
├── inventory/page.tsx         # Filterable car listings (also serves the legacy /buy URL)
├── vehicle/[id]/page.tsx      # Vehicle detail + gallery + finance calc
├── import/page.tsx            # Import funnel + landed-cost calculator
├── financing/page.tsx         # Loan calculator + partner banks
├── track/page.tsx             # Order progress + documents + payments
├── sell/page.tsx              # Sell / trade-in / consignment
├── guides/page.tsx            # Articles + free tools
├── about/page.tsx             # Why us, stats, branches, contact
├── account/page.tsx           # User dashboard (imports, finance, saved)
├── admin/page.tsx             # CMS: KPIs, orders, add vehicle, update status
├── contact/page.tsx           # Contact form (client) + layout.tsx for metadata
├── api/
│   ├── lead/route.ts          # Contact form → Supabase "leads" table
│   ├── mpesa/route.ts         # M-Pesa Daraja STK Push (placeholder)
│   └── pesapal/route.ts       # Pesapal payment (placeholder)

components/
├── site-header.tsx            # Sticky header + mobile menu
├── site-footer.tsx            # Footer with links
├── container.tsx              # Centered max-width container
├── vehicle-card.tsx           # Car card with image, specs, price, finance
├── search-bar.tsx             # Make/body/city filters
├── finance-calculator.tsx     # Interactive loan calculator
└── container.tsx              # Layout wrapper

lib/
├── data.ts                    # Mock vehicles, makes, bodies, cities, banks, guides
├── utils.ts                   # cn(), kes(), kesShort(), monthlyPayment()
└── supabase.ts                # createServerClient() for Server Components

public/cars/                   # 17 real car photos (Wikimedia Commons)
```

---

## 🎨 Design System

**Colors** (Tailwind config)
- **Savanna Green** — Primary brand (`savanna-800` `#1B4332`, `savanna-50` `#F1F7F3`)
- **Acacia Gold** — Accent/CTA (`gold-400` `#E9A23B`, `gold-900` `#6B3217`)
- **Sand** — Neutrals (`sand-100` `#F7F3EC`, `sand-300` `#E3D9C6`)
- **Ink** — Dark text `#14201B`
- **Muted** — Secondary text `#6B7A72`

**Fonts** (via `next/font/google`)
- **Inter** — Body/UI (`--font-inter`)
- **Manrope** — Display/headlines (`--font-manrope`)

**Utilities** (in `globals.css`)
- `.btn`, `.btn-gold`, `.btn-green`, `.btn-out`, `.btn-sm`, `.btn-md`, `.btn-lg`
- `.card`, `.field`, `.label`, `.badge`, `.link`
- `.car-ph` — placeholder with gradient + 🚗 emoji
- Animations: `.animate-fade-in-up`, `.animate-fade-in`, `.animate-slide-in-from-left`
- Page transitions: `html[data-page="visiting"]`, `html[data-page="cached"]`

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | Grid columns, text sizing |
| `md` | 768px | Hero 1-col → 2-col, nav items |
| `lg` | 1024px | 3-col grids, sidebar layouts |
| `xl` | 1280px | Max container width |

---

## 🧭 Routes Overview

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, search, trust badges, featured cars, import steps, financing teaser |
| `/inventory` | Full listings with make/body/city/condition filters (the old `/buy` URL 301s here) |
| `/vehicle/[id]` | Detail page — gallery, specs, landed cost, finance, WhatsApp/deposit CTAs |
| `/import` | 6-step import funnel, source markets, landed-cost calculator |
| `/financing` | Loan calculator, partner banks (KCB, Equity, NCBA, etc.), pre-qualify |
| `/track` | Order timeline, live map placeholder, documents, payment status |
| `/sell` | Outright / trade-in / consignment + valuation form |
| `/guides` | Articles by category, free tools (landed cost, loan, eligibility) |
| `/about` | Why us, stats, 3 branches (Nairobi, Mombasa, Eldoret), contact |
| `/account` | User dashboard — active import, finance apps, saved cars |
| `/admin` | CMS — KPIs, recent orders, add vehicle, update status |
| `/contact` | Contact form → `/api/lead` → Supabase `leads` table |

---

## ⚙️ Environment Variables

Copy `.env.example` → `.env.local` and fill in:

```bash
# Supabase (required)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6...

# M-Pesa Daraja (optional — for STK Push)
MPESA_CONSUMER_KEY=your_consumer_key
MPESA_CONSUMER_SECRET=your_consumer_secret
MPESA_SHORT_CODE=your_shortcode
MPESA_PAYBILL_NUMBER=your_paybill
MPESA_CALLBACK_URL=https://your-domain.com/api/mpesa/callback

# Pesapal (optional — for card/M-Pesa payments)
PESAPAL_MERCHANT=your_merchant_id
PESAPAL_CONSUMER_KEY=your_key
PESAPAL_CONSUMER_SECRET=your_secret
PESAPAL_IPN_URL=https://your-domain.com/api/pesapal/ipn
```

---

## 🗄️ Supabase Setup

1. Create project at [supabase.com](https://supabase.com)
2. Run SQL in **SQL Editor**:

```sql
-- Leads table (contact form)
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- KPIs (admin dashboard)
CREATE TABLE kpis (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  label TEXT NOT NULL,
  value TEXT NOT NULL,
  subtitle TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Import orders (admin dashboard)
CREATE TABLE import_orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_number TEXT UNIQUE NOT NULL,
  vehicle TEXT NOT NULL,
  customer TEXT NOT NULL,
  status TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Vehicles (optional — for CMS)
CREATE TABLE vehicles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  trim TEXT,
  year INT NOT NULL,
  price BIGINT,
  mileage INT,
  fuel TEXT,
  transmission TEXT,
  body TEXT,
  drive TEXT,
  seats INT,
  colour TEXT,
  city TEXT,
  condition TEXT,
  featured BOOLEAN DEFAULT false,
  hot BOOLEAN DEFAULT false,
  grade TEXT,
  chassis TEXT,
  features TEXT[],
  landed JSONB,
  image TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

3. Enable **Row Level Security** as needed.
4. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to Vercel.

---

## 💳 Payment Integrations

### M-Pesa Daraja STK Push
- **Endpoint**: `POST /api/mpesa`
- **Payload**: `{ phone, amount, accountNumber, transactionDesc }`
- **Requires**: `MPESA_CONSUMER_KEY`, `MPESA_CONSUMER_SECRET`, `MPESA_SHORT_CODE`, `MPESA_PAYBILL_NUMBER`, `MPESA_CALLBACK_URL`
- **Docs**: [Safaricom Developer Portal](https://developer.safaricom.co.ke/)

### Pesapal
- **Endpoint**: `POST /api/pesapal`
- **Payload**: `{ price, description, email, phone }`
- **Requires**: `PESAPAL_MERCHANT`, `PESAPAL_CONSUMER_KEY`, `PESAPAL_CONSUMER_SECRET`, `PESAPAL_IPN_URL`
- **Docs**: [Pesapal Developer](https://developer.pesapal.com/)

> Both routes currently return placeholder responses. Add your credentials to enable live payments.

---

## 🛠️ Development

```bash
npm run dev       # Start dev server (port 3000)
npm run build     # Production build
npm run start     # Run production build
npm run lint      # ESLint check
```

---

## 🚀 Deployment (Vercel)

1. **Import** repo on Vercel: `ismahdeismail-beep/SAVANNA-MOTORS`
2. **Add Environment Variables** (Settings → Environment Variables):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - (Optional) M-Pesa / Pesapal keys
3. **Deploy** — auto-detects Next.js, builds, and gives you `https://savanna-motors.vercel.app`
4. **Custom Domain** (optional): Add `savannamotors.co.ke` in Vercel Domains

---

## 📦 Project Status

| Feature | Status |
|---------|--------|
| 13 Routes | ✅ All 200 OK (`/buy` → 301 → `/inventory`) |
| Mobile Responsive | ✅ |
| Animations | ✅ (page fade, hover lift, fade-in) |
| Real Car Images | ✅ 17 Wikimedia photos |
| Contact Form | ✅ → Supabase `leads` |
| Admin CMS | ✅ (KPIs, orders, add vehicle) |
| M-Pesa / Pesapal | ⚠️ Placeholder (needs credentials) |
| Supabase Integration | ✅ Client helper ready |
| Vercel Ready | ✅ |

---

## 📄 License

MIT — Feel free to use for your own dealership platform.

---

## 🤝 Contributing

PRs welcome! Please:
1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Submit a PR

---

## 📞 Support

- **WhatsApp**: [+254 700 000 000](https://wa.me/254700000000)
- **Email**: [sales@savannamotors.co.ke](mailto:sales@savannamotors.co.ke)
- **Phone**: +254 700 000 000

---

*Built with ❤️ for East Africa's car import market.*