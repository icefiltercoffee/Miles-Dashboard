# Miles Dashboard

A premium, single-page dashboard that tells you which of Joseph's 8 Singapore credit cards
earns the most miles on any purchase — cap-aware and quirk-aware, with a Singapore Airlines
batik design language.

**Pure static site. No build step, no backend, no database.** Open `index.html` in a browser,
or serve the folder on Cloudflare Pages.

## Structure

```
index.html      structure
style.css       SIA batik design system (navy + gold, glass, Fraunces / Inter)
script.js       everything in one classic script: baked card data + classify + rank + app
assets/         hero-batik.jpg · batik-motif.svg · logo.svg
```

`script.js` is a single non-module file, so it runs straight from `file://` with no server.
It contains the card data, the free-text → category classifier, the cap-aware ranking engine,
and the UI logic.

## How it works

1. Type a purchase ("dinner at a restaurant", "flight on Singapore Airlines S$800").
2. Keyword matching maps it to spend categories; a merchant-quirks table corrects known
   oddities (Grab rides code as transport, OTAs excluded from Citi's bonus, Amaze routing, …).
3. The ranker queries the baked card + bonus-category data, ranks by effective miles
   (bonus rate up to each monthly cap, base rate beyond), and returns the top 3 with reasons
   and cap warnings.

The **Wallet** section tracks monthly-cap usage per card — "spent this month" inputs persist
in `localStorage` and feed live cap warnings into the ranker. The **Redemptions** section
values each card's points at a conservative 2.0¢/mile and flags expiry.

## Editing card data

All figures live in the `cards`, `bonusRows`, `quirks`, and `redemptionNotes` arrays at the top
of `script.js`. Edit them there. Provenance is preserved on every card: `source_url`,
`secondary_source_url`, `last_verified_date`, and an `unverified` flag (surfaced in the footer)
for any figure where The MileLion and the issuer disagreed.

Snapshot: **19 Jul 2026**. Ask Claude to refresh from The MileLion when caps or categories change.

## Deploy (Cloudflare Pages)

No build. In Cloudflare Pages, connect the repo and set:
- Build command: *(none)*
- Output directory: `/` (the repo root)

Every push redeploys the static files.

## Confirmed with Joseph (19 Jul 2026)

- **Citi Rewards = Mastercard** (pairs with Amaze; unaffected by the 15 Oct 2026 Visa discontinuation).
- **UOB Lady's = classic**, enrolled category = **Dining** (1 category, S$1,000/mo cap, rotatable quarterly).
- Baked assumptions: KrisFlyer UOB's S$1,000/yr SIA-spend condition met; HSBC Revolution on the
  standard 4 mpd tier (not the S$50k EGA 8 mpd tier).
