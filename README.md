# YOUTH Commerce — Premium Streetwear Store + Admin Panel

A complete e-commerce website customized for the **YOUTH** streetwear brand.

## What is included
- Premium storefront for streetwear products
- Admin panel at `/admin`
- Product/category/order management
- Homepage editor
- Revenue and profit dashboard
- BDT currency setup
- YOUTH brand colors and copy

## Admin Access
Default local/admin token:

```bash
YOUTH2026ADMIN
```

Change it before going live by setting `ADMIN_TOKEN` in `.env` or Vercel Environment Variables.

## Run locally
```bash
npm install
npm start
```

Open:
- Store: http://localhost:3001
- Admin: http://localhost:3001/admin

## Deploy to Vercel
1. Push this folder to GitHub
2. Import into Vercel
3. Add Environment Variable: `ADMIN_TOKEN=YOUTH2026ADMIN`
4. Deploy

## SaaS product direction
This project is ready to become a sellable e-commerce system. The next version should add multi-tenant stores, subscription billing, custom domains, payment gateways, and per-client admin login.
