// Miles Dashboard — single-file static app. No modules, no build step:
// open index.html directly, or serve the folder on Cloudflare Pages.
// Card data is baked in below (edit the arrays to update figures).
(function () {
"use strict";

/* ===== DATA (researched from The MileLion + issuer pages) ===== */
// AUTO-GENERATED from schema/seed.sql by test/gen-data.js — do not edit by hand.
// Regenerate:  node test/gen-data.js
const generatedAt = "2026-07-19T14:08:11.481Z";
const cards = [
  {
    "id": 1,
    "slug": "citi-rewards",
    "name": "Citi Rewards Card",
    "issuer": "Citibank",
    "network": "Mastercard",
    "annual_fee": 196.2,
    "annual_fee_waiver_condition": "First year waived (principal + 2 supplementary)",
    "min_income_requirement": 30000,
    "image_url": "assets/Citirewards.jpg",
    "primary_reward_currency": "ThankYou Points",
    "base_earn_rate": 0.4,
    "base_earn_rate_fcy": null,
    "is_reference_only": 0,
    "notes": "Mastercard confirmed by Joseph 19 Jul 2026 (pairs with Amaze; unaffected by the 15 Oct 2026 Visa discontinuation). Milelion fee S$196.20 vs Citi page S$194.40 (page still shows 8% GST — Milelion figure used). Fee flagged unverified for the S$1.80 discrepancy.",
    "unverified": 1,
    "source_url": "https://milelion.com/2026/02/27/review-citi-rewards-credit-card/",
    "secondary_source_url": "https://www.citibank.com.sg/credit-cards/rewards/citi-rewards-card/",
    "last_verified_date": "2026-07-19"
  },
  {
    "id": 2,
    "slug": "hsbc-revolution",
    "name": "HSBC Revolution Card",
    "issuer": "HSBC",
    "network": "Visa",
    "annual_fee": 0,
    "annual_fee_waiver_condition": "No annual fee",
    "min_income_requirement": 65000,
    "image_url": "assets/HSBC%20Revolution.jpg",
    "primary_reward_currency": "HSBC Points",
    "base_earn_rate": 0.3333,
    "base_earn_rate_fcy": null,
    "is_reference_only": 0,
    "notes": "Income req is tiered since 1 Oct 2025: S$30k if Total Relationship Balance >= S$50k with HSBC, else S$65k. Travel + contactless bonuses made permanent from 1 Apr 2026. MPD SHOWN IS KRISFLYER-TRUE: HSBC charges a KrisFlyer-only premium of 30,000 points = 10,000 miles (3:1) since 16 Jan 2025, so the widely-quoted 4 mpd (which assumes the 2.5:1 rate that still applies to HSBC's other partners) is 3.33 mpd to KrisFlyer. All HSBC rates here are multiplied by 2.5/3.",
    "unverified": 0,
    "source_url": "https://milelion.com/2026/04/08/review-hsbc-revolution-card/",
    "secondary_source_url": "https://www.hsbc.com.sg/credit-cards/products/revolution/",
    "last_verified_date": "2026-07-19"
  },
  {
    "id": 3,
    "slug": "dbs-altitude",
    "name": "DBS Altitude Card",
    "issuer": "DBS",
    "network": "Visa",
    "annual_fee": 196.2,
    "annual_fee_waiver_condition": "First year waived. S$25,000/yr spend waiver DISCONTINUED from 1 Aug 2026 (still honoured through 31 Jul 2026). Paying the fee earns 10,000 bonus miles.",
    "min_income_requirement": 30000,
    "image_url": "assets/DBS%20Altitude.jpg",
    "primary_reward_currency": "DBS Points",
    "base_earn_rate": 1.3,
    "base_earn_rate_fcy": 2.2,
    "is_reference_only": 0,
    "notes": "General spending card, no live bonus categories since Aug 2023. Altitude DBS Points never expire.",
    "unverified": 0,
    "source_url": "https://milelion.com/2026/05/24/review-dbs-altitude-card/",
    "secondary_source_url": "https://www.dbs.com.sg/personal/cards/credit-cards/dbs-altitude-cards",
    "last_verified_date": "2026-07-19"
  },
  {
    "id": 4,
    "slug": "dbs-womans-world",
    "name": "DBS Woman's World Card",
    "issuer": "DBS",
    "network": "Mastercard",
    "annual_fee": 196.2,
    "annual_fee_waiver_condition": "First year waived. S$25,000/yr spend waiver also being scrapped from 1 Aug 2026 (per Milelion, same change as Altitude).",
    "min_income_requirement": 80000,
    "image_url": "assets/DBS%20Woman%27s%20World.jpg",
    "primary_reward_currency": "DBS Points",
    "base_earn_rate": 0.4,
    "base_earn_rate_fcy": 1.2,
    "is_reference_only": 0,
    "notes": "Official income req S$80k but Milelion notes approvals happen well below it (MAS floor is S$30k). 4 mpd cap history: S$2,000 -> S$1,500 (Mar 2024) -> S$1,000 (Aug 2025).",
    "unverified": 0,
    "source_url": "https://milelion.com/2025/08/09/review-dbs-womans-world-card/",
    "secondary_source_url": "https://www.dbs.com.sg/personal/cards/credit-cards/dbs-woman-mastercard-card",
    "last_verified_date": "2026-07-19"
  },
  {
    "id": 5,
    "slug": "uob-preferred-visa",
    "name": "UOB Preferred Visa (ex-Preferred Platinum Visa)",
    "issuer": "UOB",
    "network": "Visa",
    "annual_fee": 196.2,
    "annual_fee_waiver_condition": "First year waived; renewal auto-deducts 6,500 UNI$ unless a waiver is requested",
    "min_income_requirement": 30000,
    "image_url": "assets/UOB%20PPV.jpg",
    "primary_reward_currency": "UNI$",
    "base_earn_rate": 0.4,
    "base_earn_rate_fcy": null,
    "is_reference_only": 0,
    "notes": "Renamed from Preferred Platinum Visa on 10 Mar 2026 (adds travel insurance, Visa Signature badge). A UOB application PDF still shows \"Annual Fee S$80\" — stale document; Milelion S$196.20 used. Single S$1,110 cap split into two S$600 sub-caps from 1 Oct 2025.",
    "unverified": 1,
    "source_url": "https://milelion.com/2026/03/29/review-uob-preferred-platinum-visa-card/",
    "secondary_source_url": "https://www.uob.com.sg/personal/cards/rewards/preferred-visa-card.page",
    "last_verified_date": "2026-07-19"
  },
  {
    "id": 6,
    "slug": "krisflyer-uob",
    "name": "KrisFlyer UOB Credit Card",
    "issuer": "UOB",
    "network": "Visa",
    "annual_fee": 196.2,
    "annual_fee_waiver_condition": "First year waived; first supplementary card free for life",
    "min_income_requirement": 30000,
    "image_url": "assets/Krisflyer%20UOB.jpg",
    "primary_reward_currency": "KrisFlyer Miles",
    "base_earn_rate": 1.2,
    "base_earn_rate_fcy": null,
    "is_reference_only": 0,
    "notes": "Earns KrisFlyer miles directly (no conversion step or fee). Accelerated Miles cut from 3 -> 2.4 mpd and SIA-group min spend raised S$800 -> S$1,000/yr in Jun 2025. Joseph's SIA min-spend condition treated as MET (interview 16 Jul 2026).",
    "unverified": 0,
    "source_url": "https://milelion.com/2026/04/12/review-krisflyer-uob-credit-card/",
    "secondary_source_url": "https://www.uob.com.sg/personal/cards/travel/krisflyer-card.page",
    "last_verified_date": "2026-07-19"
  },
  {
    "id": 7,
    "slug": "uob-ladys",
    "name": "UOB Lady's Card",
    "issuer": "UOB",
    "network": "Mastercard",
    "annual_fee": 196.2,
    "annual_fee_waiver_condition": "First year waived; first supplementary free; renewal auto-deducts UNI$ unless waiver requested",
    "min_income_requirement": 30000,
    "image_url": "assets/UOB%20Lady%27s.jpg",
    "primary_reward_currency": "UNI$",
    "base_earn_rate": 0.4,
    "base_earn_rate_fcy": null,
    "is_reference_only": 0,
    "notes": "Classic Lady's confirmed by Joseph 19 Jul 2026: ONE selectable category, 4 mpd, S$1,000/mo cap, rotatable each calendar quarter (uob.com.sg/ladys-enrol). Enrolled category = DINING. A UOB page shows S$120k income — that is the Solitaire Metal tier; classic is S$30k per Milelion.",
    "unverified": 0,
    "source_url": "https://milelion.com/2025/08/12/review-uob-ladys-card-ladys-solitaire/",
    "secondary_source_url": "https://www.uob.com.sg/personal/cards/rewards/ladys-card/index.page",
    "last_verified_date": "2026-07-19"
  },
  {
    "id": 8,
    "slug": "amaze",
    "name": "Instarem Amaze Card",
    "issuer": "Instarem",
    "network": "Mastercard",
    "annual_fee": 0,
    "annual_fee_waiver_condition": "No annual fee",
    "min_income_requirement": null,
    "image_url": "assets/Instarem%20Amaze.jpg",
    "primary_reward_currency": "InstaPoints",
    "base_earn_rate": 0,
    "base_earn_rate_fcy": null,
    "is_reference_only": 1,
    "reward_class": "routing",
    "notes": "Routing card, not ranked: re-presents FCY / offline spend as an SGD online transaction to the paired Mastercard (pairs with Mastercard only — relevant to the Citi network question). ~2% FX spread over Mastercard rate; 1% fee on SGD spend since Feb 2025. Wallet-funded spend earns InstaPoints (~0.17 mpd) — negligible.",
    "unverified": 0,
    "source_url": "https://milelion.com/2026/07/07/whats-the-best-card-to-use-with-amaze/",
    "secondary_source_url": "https://milelion.com/2025/06/18/instarem-amaze-card-review/",
    "last_verified_date": "2026-07-19"
  },
  {
    "id": 9,
    "slug": "amex-krisflyer",
    "name": "AMEX KrisFlyer Credit Card",
    "issuer": "American Express",
    "network": "Amex",
    "annual_fee": 179.85,
    "annual_fee_waiver_condition": "First year free; no spend-based waiver thereafter",
    "min_income_requirement": 30000,
    "image_url": null,
    "primary_reward_currency": "KrisFlyer Miles",
    "base_earn_rate": 1.1,
    "base_earn_rate_fcy": 1.1,
    "is_reference_only": 0,
    "notes": "ASPIRATIONAL - not owned. Co-brand: miles credit straight to KrisFlyer, no conversion step or fee. Milelion's verdict is that day-to-day earn is weak; the draw is AMEX Offers and a fee-free first year. Amex acceptance in SG is narrower than Visa/Mastercard.",
    "unverified": 0,
    "source_url": "https://milelion.com/2025/11/18/review-amex-krisflyer-credit-card/",
    "secondary_source_url": null,
    "last_verified_date": "2026-07-22"
  },
  {
    "id": 10,
    "slug": "amex-platinum-charge",
    "name": "AMEX Platinum Charge",
    "issuer": "American Express",
    "network": "Amex",
    "annual_fee": 1744,
    "annual_fee_waiver_condition": "No waiver - payable every year including the first",
    "min_income_requirement": 200000,
    "image_url": null,
    "primary_reward_currency": "Membership Rewards",
    "base_earn_rate": 0.63,
    "base_earn_rate_fcy": 0.63,
    "is_reference_only": 0,
    "notes": "ASPIRATIONAL - not owned. A benefits card, not an earn card: 0.63 mpd local is the weakest earner here, and the S$1,744 fee buys lounge/hotel-status perks rather than miles. Income last published at S$200k. MR points never expire while the account is open.",
    "unverified": 0,
    "source_url": "https://milelion.com/2026/03/07/review-american-express-platinum-charge/",
    "secondary_source_url": null,
    "last_verified_date": "2026-07-22"
  },
  {
    "id": 11,
    "slug": "maybank-xl-rewards",
    "name": "Maybank XL Rewards Card",
    "issuer": "Maybank",
    "network": "Visa",
    "annual_fee": 87.2,
    "annual_fee_waiver_condition": "Waived first 2 years, then S$6,000 annual spend",
    "min_income_requirement": 30000,
    "image_url": null,
    "primary_reward_currency": "TREATS Points",
    "base_earn_rate": 0.4,
    "base_earn_rate_fcy": 0.4,
    "is_reference_only": 0,
    "notes": "ASPIRATIONAL - not owned. Age-restricted to 21-39. The 4 mpd band is unusually broad (dining, shopping, travel, entertainment AND all foreign currency) but only unlocks at S$500 of eligible spend in the month. Sign-ups 1 Jul-30 Sep 2026 get an upsized S$1,500 cap for 4 months.",
    "unverified": 0,
    "source_url": "https://milelion.com/2026/07/05/review-maybank-xl-rewards-card/",
    "secondary_source_url": "https://mainlymiles.com/2026/07/17/maybank-xl-rewards-card-boosts-4-mpd-cap-1500-a-month/",
    "last_verified_date": "2026-07-22"
  },
  {
    "id": 12,
    "slug": "sc-smart",
    "name": "Standard Chartered Smart Card",
    "issuer": "Standard Chartered",
    "network": "Visa",
    "annual_fee": 91,
    "annual_fee_waiver_condition": "Waived the first year",
    "min_income_requirement": 30000,
    "image_url": "assets/sc-smart.jpg",
    "primary_reward_currency": "360\u00b0 Rewards (cashback)",
    "base_earn_rate": 0,
    "base_earn_rate_fcy": null,
    "is_reference_only": 1,
    "reward_class": "cashback",
    "notes": "CASHBACK, NOT MILES. Earns 360\u00b0 Rewards points that redeem as cashback, never KrisFlyer miles, so it is excluded from the miles ranker. Tiered: <S$800/mo = 4% on bonus categories; >=S$800 = 8%; >=S$1,500 = 10%. Bonus categories are narrow (fast food, SimplyGo transport, EV charging, streaming) but uncapped. MileLion quotes these as 5.6-9.28 'mpd equivalent', which is a cashback-to-miles conversion via paid rails, not actual miles.",
    "unverified": 0,
    "source_url": "https://milelion.com/2026/02/06/review-standard-chartered-smart-card/",
    "secondary_source_url": "https://www.sc.com/sg/credit-cards/smart-credit-card/",
    "last_verified_date": "2026-07-24"
  },
  {
    "id": 13,
    "slug": "sc-journey",
    "name": "Standard Chartered Journey Card",
    "issuer": "Standard Chartered",
    "network": "Visa",
    "annual_fee": 196.2,
    "annual_fee_waiver_condition": "Choose first-year waiver, OR pay the fee for 10,000 bonus miles. Waivers from year 2 are rarely granted.",
    "min_income_requirement": 30000,
    "image_url": "assets/SC%20Journey.jpg",
    "primary_reward_currency": "SC Rewards Points",
    "base_earn_rate": 1.2,
    "base_earn_rate_fcy": 2,
    "is_reference_only": 0,
    "notes": "General-spend card: 1.2 mpd local, 2 mpd FCY, plus a rare 3 mpd bonus band on ONLINE SGD groceries / food delivery / transport (S$1,000 per statement month). FCY fee is 3.5% vs the 3.25% industry standard, which eats into the 2 mpd FCY rate. Two Priority Pass lounge visits per membership year. Points never expire while the account is active. Only two transfer partners (KrisFlyer, Asia Miles) and 10,000-mile minimum transfer blocks. Welcome offer as of Jun 2026: 30,000 miles (10,000 for paying the fee + 20,000 for S$800 spend in 60 days).",
    "unverified": 0,
    "source_url": "https://milelion.com/2025/09/15/review-standard-chartered-journey-card/",
    "secondary_source_url": "https://www.sc.com/sg/credit-cards/journey-credit-card/",
    "last_verified_date": "2026-07-25"
  }
];
const bonusRows = [
  {
    "id": 1,
    "card_id": 1,
    "category_name": "online",
    "channel": "online",
    "mcc_codes": null,
    "earn_rate": 4,
    "monthly_cap_amount": 1000,
    "monthly_cap_miles": 3600,
    "cap_group": "citi-10x",
    "requires_selection": 0,
    "is_selected": 1,
    "condition": null,
    "exclusions": "Travel MCCs (airlines, hotels, car rental, cruises, travel agencies) and in-app mobile-wallet payments excluded",
    "notes": "Blacklist approach — nearly all other online spend qualifies, SGD and FCY. Cap is per STATEMENT month, shared with the offline shopping row.",
    "unverified": 0
  },
  {
    "id": 2,
    "card_id": 1,
    "category_name": "shopping_offline",
    "channel": "in_store",
    "mcc_codes": "[\"5311\",\"5611\",\"5621\",\"5631\",\"5651\",\"5661\",\"5691\",\"5699\",\"5948\"]",
    "earn_rate": 4,
    "monthly_cap_amount": 1000,
    "monthly_cap_miles": 3600,
    "cap_group": "citi-10x",
    "requires_selection": 0,
    "is_selected": 1,
    "condition": null,
    "exclusions": null,
    "notes": "Department stores and shops selling bags/shoes/clothes. Representative MCCs.",
    "unverified": 0
  },
  {
    "id": 3,
    "card_id": 2,
    "category_name": "online_contactless_bonus",
    "channel": "any",
    "mcc_codes": null,
    "earn_rate": 3.3333,
    "monthly_cap_amount": 1000,
    "monthly_cap_miles": 3000,
    "cap_group": "hsbc-revo",
    "requires_selection": 0,
    "is_selected": 1,
    "condition": null,
    "exclusions": "Exclusions per 16 Jul 2026 scrape: fast food, OTA travel agencies, SimplyGo transit, non-standard car rental",
    "notes": "Online OR contactless/app spend in bonus categories (dining, shopping, groceries, transport, travel, entertainment). Same rate locally and overseas. Travel + contactless permanent from 1 Apr 2026. Shown KrisFlyer-true at 3.33 mpd — headline 4 mpd applies to HSBC's non-KrisFlyer partners.",
    "unverified": 0
  },
  {
    "id": 4,
    "card_id": 2,
    "category_name": "online_contactless_bonus_ega_tier",
    "channel": "any",
    "mcc_codes": null,
    "earn_rate": 6.6667,
    "monthly_cap_amount": 1200,
    "monthly_cap_miles": 7600,
    "cap_group": "hsbc-revo",
    "requires_selection": 0,
    "is_selected": 0,
    "condition": "Maintain S$50,000 average balance in HSBC Everyday Global Account",
    "exclusions": "Same exclusions as standard tier",
    "notes": "NOT ACTIVE for Joseph (baked assumption: standard tier). Listed for completeness. KrisFlyer-true: headline 8 mpd is 6.67 mpd to KrisFlyer.",
    "unverified": 0
  },
  {
    "id": 5,
    "card_id": 4,
    "category_name": "online",
    "channel": "online",
    "mcc_codes": null,
    "earn_rate": 4,
    "monthly_cap_amount": 1000,
    "monthly_cap_miles": 3600,
    "cap_group": "wwmc-online",
    "requires_selection": 0,
    "is_selected": 1,
    "condition": null,
    "exclusions": "Insurance, utilities, charitable donations, other blacklisted MCCs",
    "notes": "Blacklist approach — includes Grab/Gojek, hotels, most online spend, SGD and FCY. Excess earns 0.4 mpd.",
    "unverified": 0
  },
  {
    "id": 6,
    "card_id": 5,
    "category_name": "mobile_contactless",
    "channel": "contactless",
    "mcc_codes": null,
    "earn_rate": 4,
    "monthly_cap_amount": 600,
    "monthly_cap_miles": 2160,
    "cap_group": "ppv-contactless",
    "requires_selection": 0,
    "is_selected": 1,
    "condition": null,
    "exclusions": "Education, government, insurance, utilities, donations earn zero points",
    "notes": "Apple/Google/Samsung Pay taps. Own sub-cap since 1 Oct 2025.",
    "unverified": 0
  },
  {
    "id": 7,
    "card_id": 5,
    "category_name": "online_selected_mcc",
    "channel": "online",
    "mcc_codes": "[\"5411\",\"5811\",\"5812\",\"5813\",\"5814\",\"5311\",\"5399\",\"5732\",\"7832\",\"7922\"]",
    "earn_rate": 4,
    "monthly_cap_amount": 600,
    "monthly_cap_miles": 2160,
    "cap_group": "ppv-online",
    "requires_selection": 0,
    "is_selected": 1,
    "condition": null,
    "exclusions": "Travel, hotels and transport are NOT on the online list; education/government/insurance/utilities/donations earn zero",
    "notes": "Supermarkets, dining, food delivery, department/retail stores (Amazon, Lazada, Shopee), entertainment/ticketing. Representative MCCs.",
    "unverified": 0
  },
  {
    "id": 8,
    "card_id": 6,
    "category_name": "sia_group",
    "channel": "any",
    "mcc_codes": "[\"3010\",\"4511\"]",
    "earn_rate": 3,
    "monthly_cap_amount": null,
    "monthly_cap_miles": null,
    "cap_group": null,
    "requires_selection": 0,
    "is_selected": 1,
    "condition": null,
    "exclusions": null,
    "notes": "Singapore Airlines, Scoot, KrisShop, Kris+, Pelago. Uncapped, credited straight to KrisFlyer.",
    "unverified": 0
  },
  {
    "id": 9,
    "card_id": 6,
    "category_name": "accelerated_miles",
    "channel": "any",
    "mcc_codes": null,
    "earn_rate": 2.4,
    "monthly_cap_amount": null,
    "monthly_cap_miles": null,
    "cap_group": null,
    "requires_selection": 0,
    "is_selected": 1,
    "condition": "S$1,000 SIA Group spend per card membership year (Joseph: MET)",
    "exclusions": "SimplyGo/MRT/bus excluded (LTA batch settlement); direct hotel bookings outside named OTAs earn base only",
    "notes": "Dining, food delivery, online shopping, online travel (named OTAs: Agoda, Booking.com, Expedia, Hotels.com, Kaligo, Traveloka, Trip.com, Airbnb), transport. Uncapped.",
    "unverified": 0
  },
  {
    "id": 10,
    "card_id": 7,
    "category_name": "beauty_wellness",
    "channel": "any",
    "mcc_codes": "[\"5912\",\"5977\",\"7230\",\"7231\",\"7297\",\"7298\"]",
    "earn_rate": 4,
    "monthly_cap_amount": 1000,
    "monthly_cap_miles": 3600,
    "cap_group": "ladys-selected",
    "requires_selection": 1,
    "is_selected": 0,
    "condition": null,
    "exclusions": null,
    "notes": "Representative MCCs. Not enrolled.",
    "unverified": 0
  },
  {
    "id": 11,
    "card_id": 7,
    "category_name": "fashion",
    "channel": "any",
    "mcc_codes": "[\"5311\",\"5611\",\"5621\",\"5631\",\"5651\",\"5661\",\"5691\",\"5699\",\"5948\"]",
    "earn_rate": 4,
    "monthly_cap_amount": 1000,
    "monthly_cap_miles": 3600,
    "cap_group": "ladys-selected",
    "requires_selection": 1,
    "is_selected": 0,
    "condition": null,
    "exclusions": null,
    "notes": "Representative MCCs. Not enrolled — overlaps Citi Rewards 4 mpd MCCs anyway.",
    "unverified": 0
  },
  {
    "id": 12,
    "card_id": 7,
    "category_name": "dining",
    "channel": "any",
    "mcc_codes": "[\"5811\",\"5812\",\"5813\"]",
    "earn_rate": 4,
    "monthly_cap_amount": 1000,
    "monthly_cap_miles": 3600,
    "cap_group": "ladys-selected",
    "requires_selection": 1,
    "is_selected": 1,
    "condition": null,
    "exclusions": null,
    "notes": "Representative MCCs. ENROLLED category (Joseph 19 Jul 2026). In-person dining that misses HSBC's contactless bonus lands here.",
    "unverified": 0
  },
  {
    "id": 13,
    "card_id": 7,
    "category_name": "entertainment",
    "channel": "any",
    "mcc_codes": "[\"7832\",\"7922\",\"7929\",\"7933\",\"7996\",\"7998\",\"7999\"]",
    "earn_rate": 4,
    "monthly_cap_amount": 1000,
    "monthly_cap_miles": 3600,
    "cap_group": "ladys-selected",
    "requires_selection": 1,
    "is_selected": 0,
    "condition": null,
    "exclusions": null,
    "notes": null,
    "unverified": 0
  },
  {
    "id": 14,
    "card_id": 7,
    "category_name": "family",
    "channel": "any",
    "mcc_codes": "[\"5411\",\"5641\",\"8211\",\"8220\",\"8351\"]",
    "earn_rate": 4,
    "monthly_cap_amount": 1000,
    "monthly_cap_miles": 3600,
    "cap_group": "ladys-selected",
    "requires_selection": 1,
    "is_selected": 0,
    "condition": null,
    "exclusions": null,
    "notes": "Includes supermarkets, children's wear, schools, childcare. Representative MCCs.",
    "unverified": 0
  },
  {
    "id": 15,
    "card_id": 7,
    "category_name": "transport",
    "channel": "any",
    "mcc_codes": "[\"4121\",\"5541\",\"5542\"]",
    "earn_rate": 4,
    "monthly_cap_amount": 1000,
    "monthly_cap_miles": 3600,
    "cap_group": "ladys-selected",
    "requires_selection": 1,
    "is_selected": 0,
    "condition": null,
    "exclusions": "SimplyGo/MRT/bus excluded",
    "notes": "Taxis/ride-hailing and petrol. Representative MCCs.",
    "unverified": 0
  },
  {
    "id": 16,
    "card_id": 7,
    "category_name": "travel",
    "channel": "any",
    "mcc_codes": "[\"3000-3350\",\"3501-3999\",\"4511\",\"4722\",\"7011\"]",
    "earn_rate": 4,
    "monthly_cap_amount": 1000,
    "monthly_cap_miles": 3600,
    "cap_group": "ladys-selected",
    "requires_selection": 1,
    "is_selected": 0,
    "condition": null,
    "exclusions": null,
    "notes": "Air tickets, hotels, travel agencies. Representative MCC ranges.",
    "unverified": 0
  },
  {
    "id": 17, "card_id": 9, "category_name": "sia_group", "channel": "any", "mcc_codes": null,
    "earn_rate": 2, "monthly_cap_amount": null, "monthly_cap_miles": null, "cap_group": null,
    "requires_selection": 0, "is_selected": 1, "condition": null, "exclusions": null,
    "notes": "Singapore Airlines, Scoot, KrisShop, Pelago. Uncapped, credited straight to KrisFlyer.",
    "unverified": 0
  },
  {
    "id": 18, "card_id": 9, "category_name": "grab", "channel": "any", "mcc_codes": null,
    "earn_rate": 2, "monthly_cap_amount": 200, "monthly_cap_miles": 180, "cap_group": "amex-kf-grab",
    "requires_selection": 0, "is_selected": 1, "condition": null, "exclusions": null,
    "notes": "Grab rides and GrabFood, first S$200 of spend each month.", "unverified": 0
  },
  {
    "id": 19, "card_id": 10, "category_name": "sia_group", "channel": "any", "mcc_codes": null,
    "earn_rate": 1.56, "monthly_cap_amount": null, "monthly_cap_miles": null, "cap_group": null,
    "requires_selection": 0, "is_selected": 1, "condition": null, "exclusions": null,
    "notes": "5 MR points per S$1.60 on SIA and Scoot tickets, including award ticket taxes. Uncapped.",
    "unverified": 0
  },
  {
    "id": 20, "card_id": 10, "category_name": "foreign_currency_promo", "channel": "any", "mcc_codes": null,
    "earn_rate": 2.2, "monthly_cap_amount": null, "monthly_cap_miles": null, "cap_group": null,
    "requires_selection": 0, "is_selected": 1,
    "condition": "Registration required; S$15,000 total spend cap, promo ends 22 Feb 2027",
    "exclusions": null,
    "notes": "Limited-time FCY boost. Beyond the S$15,000 cap or after the promo, FCY reverts to 0.63 mpd.",
    "unverified": 0
  },
  {
    "id": 21, "card_id": 11, "category_name": "dine_shop_travel_play", "channel": "any", "mcc_codes": null,
    "earn_rate": 4, "monthly_cap_amount": 1000, "monthly_cap_miles": 3600, "cap_group": "maybank-xl",
    "requires_selection": 0, "is_selected": 1,
    "condition": "Minimum S$500 eligible spend that calendar month",
    "exclusions": "Betting, brokerage, charitable donations, government services, insurance, prepaid top-ups, utilities. Education and hospitals earn base rate only in SGD.",
    "notes": "Dining, shopping, travel, entertainment AND all foreign-currency spend share one 4 mpd band.",
    "unverified": 0
  },
  {
    "id": 22,
    "card_id": 13,
    "category_name": "online_groceries_delivery_transport",
    "channel": "online",
    "mcc_codes": "[\"5411\",\"5462\",\"5499\",\"5921\",\"5811\",\"5812\",\"5814\",\"4111\",\"4121\",\"4789\",\"4411\"]",
    "earn_rate": 3,
    "monthly_cap_amount": 1000,
    "monthly_cap_miles": 3000,
    "cap_group": "sc-journey-3mpd",
    "requires_selection": 0,
    "is_selected": 1,
    "condition": "Transaction must be made ONLINE and in SGD. Cap enforced on posting date, not transaction date.",
    "exclusions": "SimplyGo bus/MRT (fails the online test); any FCY transaction; offline/in-store spend",
    "notes": "Groceries, bakeries, misc food stores, liquor, food delivery, ride-hailing and cruise MCCs. S$1,000 per statement month, then drops to the 1.2 mpd base. 4 mpd alternatives exist for these same categories, so treat this as a convenience band, not a headline rate.",
    "unverified": 0
  }
];
const quirks = [
  {
    "id": 1,
    "merchant_name": "Grab (rides)",
    "match_keywords": "[\"grab ride\",\"grabcar\",\"grab car\"]",
    "actual_mcc_category": "transport_online",
    "notes": "App-mediated ride-hailing is card-not-present — processes like e-commerce, so \"online spend\" bonuses treat it as online. MCC 4121.",
    "verified_by": "system",
    "verified_date": "2026-07-19",
    "upvotes": 0
  },
  {
    "id": 2,
    "merchant_name": "GrabFood",
    "match_keywords": "[\"grabfood\",\"grab food\"]",
    "actual_mcc_category": "food_delivery_online",
    "notes": "Joseph's prior note says Grab sometimes codes GrabFood under transport, not F&B; Milelion generally reports food delivery MCC 5814. VERIFY against a real statement before trusting for cap math.",
    "verified_by": "system",
    "verified_date": "2026-07-19",
    "upvotes": 0
  },
  {
    "id": 3,
    "merchant_name": "SimplyGo / MRT / bus",
    "match_keywords": "[\"simplygo\",\"mrt\",\"bus fare\"]",
    "actual_mcc_category": "public_transport_excluded",
    "notes": "LTA batch-settles transit fares — excluded from bonus earn industry-wide. Base rate at best.",
    "verified_by": "system",
    "verified_date": "2026-07-19",
    "upvotes": 0
  },
  {
    "id": 4,
    "merchant_name": "Cold Storage",
    "match_keywords": "[\"cold storage\"]",
    "actual_mcc_category": "groceries",
    "notes": "Supermarket MCC 5411 — online orders qualify for UOB Preferred Visa online sub-cap and Lady's Family category.",
    "verified_by": "system",
    "verified_date": "2026-07-19",
    "upvotes": 0
  },
  {
    "id": 5,
    "merchant_name": "Kris+",
    "match_keywords": "[\"kris+\",\"krisplus\",\"kris plus\"]",
    "actual_mcc_category": "sia_group",
    "notes": "Counts as SIA Group spend on KrisFlyer UOB (3 mpd) and toward the S$1,000/yr condition.",
    "verified_by": "system",
    "verified_date": "2026-07-19",
    "upvotes": 0
  },
  {
    "id": 6,
    "merchant_name": "Agoda / Booking.com / Expedia / Airbnb",
    "match_keywords": "[\" agoda\",\"booking.com\",\"expedia\",\"airbnb\",\"hotels.com\",\"traveloka\",\"trip.com\",\"kaligo\"]",
    "actual_mcc_category": "ota_travel_agency",
    "notes": "OTA MCC 4722: excluded from Citi Rewards bonus (travel blacklist) and from HSBC Revolution bonus; DOES qualify for KrisFlyer UOB Accelerated Miles (named-OTA list) and DBS WWMC online.",
    "verified_by": "system",
    "verified_date": "2026-07-19",
    "upvotes": 0
  },
  {
    "id": 7,
    "merchant_name": "Amaze-routed spend",
    "match_keywords": "[\"amaze \",\"instarem\"]",
    "actual_mcc_category": "online_sgd",
    "notes": "Any FCY or offline Mastercard spend routed via Amaze re-presents as SGD ONLINE — unlocks online bonuses (classically paired with Citi Rewards Mastercard). Budget ~2% FX spread, 1% fee on SGD.",
    "verified_by": "system",
    "verified_date": "2026-07-19",
    "upvotes": 0
  },
  {
    "id": 8,
    "merchant_name": "Netflix / Spotify / digital subscriptions",
    "match_keywords": "[\"netflix\",\"spotify\",\"disney+\",\"youtube premium\"]",
    "actual_mcc_category": "entertainment_online",
    "notes": "Card-not-present recurring — qualifies as online entertainment on HSBC Revolution / PPV online / Citi online.",
    "verified_by": "system",
    "verified_date": "2026-07-19",
    "upvotes": 0
  }
];
const redemptionNotes = [
  {
    "id": 1,
    "card_id": 1,
    "reward_currency": "ThankYou Points",
    "typical_cpm_value": 2,
    "conversion_ratio": "2.5 TY points = 1 mile (10X = 4 mpd)",
    "conversion_fee": "S$27.25 per transfer (incl. GST)",
    "points_expiry": "60 months from card approval, rolling",
    "best_use_case": "Transfers to KrisFlyer at 2.5:1. Points pool across your Citi cards, so small balances add up.",
    "notes": "Conversion fee S$27.25 incl. GST. Kris+ is a fee-free instant route but takes roughly a 15% haircut vs the bank portal. Verified 21 Jul 2026.",
    "unverified": 0
  },
  {
    "id": 2,
    "card_id": 2,
    "reward_currency": "HSBC Points",
    "typical_cpm_value": 2,
    "conversion_ratio": "30,000 points = 10,000 miles (3:1) for KrisFlyer",
    "conversion_fee": "None (fee-free, instant)",
    "points_expiry": "Check current T&Cs",
    "best_use_case": "20 partners, instant and fee-free. Other partners are still 25,000:10,000 — KrisFlyer alone pays the 3:1 premium",
    "notes": "KrisFlyer ratio devalued 20% on 16 Jan 2025 (25,000:10,000 -> 30,000:10,000); other partners unchanged. Fee waiver continues until further notice. Verified 21 Jul 2026.",
    "unverified": 0
  },
  {
    "id": 3,
    "card_id": 3,
    "reward_currency": "DBS Points",
    "typical_cpm_value": 2,
    "conversion_ratio": "5,000 DBS Points = 10,000 miles",
    "conversion_fee": "S$27.25 per transfer (incl. GST)",
    "points_expiry": "Never (Altitude only)",
    "best_use_case": "KrisFlyer, Asia Miles or Avios — and Altitude points never expire, so there is no rush.",
    "notes": "Min transfer block 10,000 miles (5,000 DBS Points). Ratio and S$27.25 fee confirmed. Verified 21 Jul 2026.",
    "unverified": 0
  },
  {
    "id": 4,
    "card_id": 4,
    "reward_currency": "DBS Points",
    "typical_cpm_value": 2,
    "conversion_ratio": "5,000 DBS Points = 10,000 miles",
    "conversion_fee": "S$27.25 per transfer (incl. GST)",
    "points_expiry": "1 year",
    "best_use_case": "KrisFlyer at 1 point = 2 miles. Sweep within the year — these points lapse.",
    "notes": "1-year expiry demands disciplined annual sweeps — pool with Altitude where possible. Ratio and fee confirmed. Verified 21 Jul 2026.",
    "unverified": 0
  },
  {
    "id": 5,
    "card_id": 5,
    "reward_currency": "UNI$",
    "typical_cpm_value": 2,
    "conversion_ratio": "5,000 UNI$ = 10,000 miles",
    "conversion_fee": "S$27 per transfer (raised from S$25 on 15 Dec 2025)",
    "points_expiry": "2 years",
    "best_use_case": "KrisFlyer at 1 UNI$ = 2 miles. UNI$ pool across your UOB cards; they lapse after 2 years.",
    "notes": "UNI$ pool across UOB cards. The KrisFlyer Auto-Conversion Programme (monthly auto-convert, 2,500 UNI$ blocks, S$50/yr) shut down 20 May 2026 — manual conversion only now. Verified 21 Jul 2026.",
    "unverified": 0
  },
  {
    "id": 6,
    "card_id": 6,
    "reward_currency": "KrisFlyer Miles",
    "typical_cpm_value": 2,
    "conversion_ratio": "Direct crediting — no conversion",
    "conversion_fee": "None",
    "points_expiry": "3 years (KrisFlyer standard)",
    "best_use_case": "SIA Saver awards. Miles arrive in KrisFlyer already — no transfer, no fee, no minimum block.",
    "notes": "No transfer step at all — miles land in KrisFlyer monthly.",
    "unverified": 0
  },
  {
    "id": 7,
    "card_id": 7,
    "reward_currency": "UNI$",
    "typical_cpm_value": 2,
    "conversion_ratio": "5,000 UNI$ = 10,000 miles",
    "conversion_fee": "S$27 per transfer (raised from S$25 on 15 Dec 2025)",
    "points_expiry": "2 years",
    "best_use_case": "KrisFlyer at 1 UNI$ = 2 miles. Shares the UNI$ pool with your other UOB cards.",
    "notes": "Same UNI$ pool and S$27 fee as the Preferred Visa; auto-conversion ended 20 May 2026. Verified 21 Jul 2026.",
    "unverified": 0
  },
  {
    "id": 8,
    "card_id": 8,
    "reward_currency": "InstaPoints",
    "typical_cpm_value": 0.5,
    "conversion_ratio": "1,200 InstaPoints = 400 KrisFlyer miles (fixed blocks)",
    "conversion_fee": null,
    "points_expiry": "Check app",
    "best_use_case": "None — hold for routing, not earning",
    "notes": "~0.17 mpd on wallet-funded spend only; treat earn as zero.",
    "unverified": 0
  },
  {
    "id": 9, "card_id": 9, "reward_currency": "KrisFlyer Miles", "typical_cpm_value": 2,
    "conversion_ratio": "Direct crediting - no conversion",
    "conversion_fee": "None",
    "points_expiry": "3 years (KrisFlyer standard)",
    "best_use_case": "SIA redemptions with no transfer step",
    "notes": "Co-brand card: miles credit monthly straight to KrisFlyer. Verified 22 Jul 2026.",
    "unverified": 0
  },
  {
    "id": 10, "card_id": 10, "reward_currency": "Membership Rewards", "typical_cpm_value": 2,
    "conversion_ratio": "500 MR = 250 miles (2:1)",
    "conversion_fee": "None",
    "points_expiry": "Never, while the account stays open",
    "best_use_case": "Flexible MR transfers across many partners",
    "notes": "No expiry and no transfer fee are the real strengths; the earn rate is not. Verified 22 Jul 2026.",
    "unverified": 0
  },
  {
    "id": 11, "card_id": 11, "reward_currency": "TREATS Points", "typical_cpm_value": 2,
    "conversion_ratio": "25,000 TREATS = 10,000 miles (2.5:1)",
    "conversion_fee": "S$27.25 per transfer",
    "points_expiry": "12-15 months from the quarter earned",
    "best_use_case": "KrisFlyer, but sweep often - the expiry is short",
    "notes": "Short expiry is the main risk: TREATS lapse 12-15 months after the quarter earned. Verified 22 Jul 2026.",
    "unverified": 0
  },
  {
    "id": 12, "card_id": 12, "reward_currency": "360\u00b0 Rewards (cashback)", "typical_cpm_value": 0,
    "conversion_ratio": "Not applicable — cashback, not miles",
    "conversion_fee": "None",
    "points_expiry": "360\u00b0 Rewards points: 3 years",
    "best_use_case": "Statement cashback on fast food, transport, EV charging and streaming. Does not convert to KrisFlyer.",
    "notes": "Redeems as a cash rebate, not airline miles. Verified 24 Jul 2026.",
    "unverified": 0
  },
  {
    "id": 13, "card_id": 13, "reward_currency": "SC Rewards Points", "typical_cpm_value": 2,
    "conversion_ratio": "25,000 SC Rewards Points = 10,000 miles (Tier 1 rate; Journey qualifies)",
    "conversion_fee": "S$27.25 per transfer, regardless of size",
    "points_expiry": "Never, while the card account stays active",
    "best_use_case": "KrisFlyer transfers at the Tier 1 ratio. Points pool across your SC cards.",
    "notes": "Only two partners since Mar 2024: KrisFlyer and Cathay Asia Miles (nine were dropped). Minimum transfer is a 10,000-mile block, so small balances are stranded. KrisFlyer conversions land in 1-3 working days. Verified 25 Jul 2026.",
    "unverified": 0
  }
];

/* ===== CLASSIFY: free-text -> spend tags ===== */
// Free-text query → spend tags. Pure module (no I/O) so it runs in the Worker and in node tests.
// Keyword matching first (fast, free); the Worker falls back to an AI classification
// prompt only when nothing here fires (see index.js).

const OVERSEAS_PLACES = [
  "hong kong", "hongkong", "japan", "tokyo", "osaka", "kyoto", "okinawa", "sapporo",
  "thailand", "bangkok", "phuket", "chiang mai", "pattaya",
  "bali", "indonesia", "jakarta", "bandung",
  "malaysia", "kuala lumpur", "penang", "langkawi", "johor", " kl ",
  "korea", "seoul", "busan", "taiwan", "taipei", "kaohsiung",
  "china", "shanghai", "beijing", "shenzhen", "guangzhou", "chengdu",
  "vietnam", "hanoi", "ho chi minh", "da nang",
  "philippines", "manila", "cebu", "india", "mumbai", "delhi", "bengaluru",
  "london", "united kingdom", " uk ", "manchester", "edinburgh",
  "paris", "france", "italy", "rome", "milan", "venice",  // "nice" omitted — too ambiguous ("a nice dinner")
  "spain", "barcelona", "madrid", "germany", "berlin", "munich",
  "switzerland", "zurich", "geneva",
  "australia", "sydney", "melbourne", "perth", "brisbane",
  "new zealand", "auckland", "queenstown",
  "usa", "united states", "new york", "los angeles", "san francisco", "las vegas", "hawaii",
  "canada", "toronto", "vancouver", "dubai", "uae", "abu dhabi", "doha", "qatar",
  "maldives", "sri lanka", "colombo", "europe", "abroad", "overseas",
];
const CURRENCY_CODES = ["usd", "jpy", "gbp", "eur", "aud", "hkd", "thb", "myr", "krw", "cny", "vnd", "php", "inr", "aed", "nzd", "chf", "cad"];
const HOTEL_BRANDS = [
  "ascott", "somerset", "citadines", "marriott", "westin", "sheraton", "st regis", "ritz",
  "hilton", "conrad", "hyatt", "shangri-la", "shangri la", "four seasons", "mandarin oriental",
  "raffles", "fairmont", "sofitel", "novotel", "ibis", "swissotel", "pullman", "mercure",
  "accor", "intercontinental", "crowne plaza", "holiday inn", "regent", "capella",
  "banyan tree", "w hotel", "oasia", "parkroyal", "pan pacific", "millennium hotel",
  "amara", "village hotel", "mett", "yotel", "voco", "wyndham", "resort", "serviced apartment",
];

function has(t, words) {
  return words.some((w) => t.includes(w));
}

function extractAmount(text) {
  const m =
    (text || "").match(/(?:s\$|sgd\s?|\$)\s?([0-9][0-9,]*(?:\.[0-9]+)?)/i) ||
    (text || "").match(/([0-9][0-9,]*(?:\.[0-9]+)?)\s?(?:dollars|bucks|sgd)/i);
  return m ? parseFloat(m[1].replace(/,/g, "")) : null;
}

function tagify(text) {
  const t = " " + (text || "").toLowerCase() + " ";
  const tags = { quirkNotes: [] };

  tags.online = has(t, ["online", " shop", "app ", "in-app", "website", "tiktok", "shopee", "lazada", "amazon", "taobao", "zalora", "carousell", "ebay", "aliexpress", "qoo10", "e-commerce", "web "]);
  tags.contactless = has(t, ["tap", "contactless", "paywave", "apple pay", "google pay", "samsung pay", "nfc"]);
  tags.inPersonExplicit = has(t, ["walk-in", "walk in", "in person", "in-person", "paid cash", "street hail", "flag down", "flag-down", "chip inserted", "swiped", "no tap"]);
  tags.dining = has(t, ["food", "restaurant", "cafe", "coffee", "dine", "dinner", "lunch", "breakfast", "brunch", "supper", " meal", "hawker", "kopitiam", "canteen", "bar ", "pub ", "bistro", "eatery", "eating", " eat ", "makan", "zi char", "zichar", "dim sum", "buffet", "steamboat", "bakery", "dessert", "ice cream", "sushi", "ramen", "noodle", "pizza", "chicken rice", "laksa", "grabfood", "foodpanda", "deliveroo", "food delivery"]);
  tags.foodDelivery = has(t, ["grabfood", "foodpanda", "deliveroo", "food delivery"]);
  tags.groceries = has(t, ["grocery", "groceries", "supermarket", "wet market", "minimart", "mini mart", "provision shop", "7-eleven", "7 eleven", "ntuc", "fairprice", "cold storage", "sheng siong", "giant "]);
  tags.travel = has(t, ["flight", "hotel", "airbnb", " agoda", "booking.com", "expedia", "trip.com", "hotels.com", "kaligo", "traveloka", " airline", "air ticket", "stay at", "staying at", "accommodation", ...HOTEL_BRANDS]);
  tags.ota = has(t, [" agoda", "booking.com", "expedia", "airbnb", "hotels.com", "kaligo", "traveloka", "trip.com"]);
  tags.sia = has(t, ["singapore airlines", " sia ", "sia flight", "sia ticket", "scoot ", "krisshop", "kris+", "kris plus", "pelago"]);
  // App-hailed rides are card-not-present (process like e-commerce); a bare "taxi" could be a
  // physical tap/swipe, so it feeds transportCat but not the online flag.
  tags.appRide = has(t, ["grab ride", "grabcar", "grab car", "gojek", "ryde", "tada", "private hire"]);
  tags.transportCat = tags.appRide || has(t, ["taxi", "comfortdelgro", "comfort ride", "mrt", "bus fare", "bus ride", " bus ", " train ", "train ride", "train fare", "ez-link", "ezlink", "private hire"]);
  tags.publicTransport = has(t, ["simplygo", "mrt", "bus fare", "bus ride", " bus ", " train ", "train ride", "train fare", "ez-link", "ezlink"]);
  tags.petrol = has(t, ["petrol", "fuel", "gas station", " esso", "shell ", "caltex", "spc ", "sinopec"]);
  tags.fashion = has(t, ["clothes", "clothing", "apparel", "shoes", "sneaker", "fashion", " dress", "jacket", "bag ", "handbag", "department store", "uniqlo", "zara"]);
  tags.beauty = has(t, ["facial", "skincare", "skin care", "cosmetic", "makeup", "beauty", "serum", "moisturi", "sunscreen", "spa ", "salon", "hair cut", "haircut", "manicure"]);
  tags.entertainment = has(t, ["movie", "cinema", "concert", "netflix", "spotify", "disney+", "ticketing", "sistic", "ticketmaster"]);
  tags.digitalSub = has(t, ["netflix", "spotify", "disney+", "youtube premium", "apple music", "amazon prime"]);
  tags.family = has(t, ["school", " tuition", "childcare", "kids", "baby", "diaper"]);
  tags.fastfood = has(t, ["mcdonald", "kfc", "starbucks", "burger king", "subway "]);
  tags.carRental = has(t, ["car rental", "rent a car"]);

  // Non-earning categories. These are not "no bonus" — the banks award nothing at
  // all, not even the base rate, so they must be modelled separately from a miss.
  tags.insurance = has(t, ["insurance", "premium payment", "life policy", "endowment", "prudential", "aia ", "ntuc income", "great eastern", "singlife", "manulife", "aviva", "fwd "]);
  tags.utilities = has(t, ["utilit", "electricity", "sp group", "sp services", "town council", "water bill", "power bill", "conservancy", "s&cc"]);
  tags.government = has(t, ["iras", "income tax", "government", "gov.sg", "cpf ", "hdb ", "season parking", "summons", "court fee"]);
  tags.education  = has(t, ["school fee", " tuition", "enrichment", "university", "polytechnic", "childcare", "kindergarten", "preschool"]);
  tags.medical    = has(t, ["hospital", "clinic", "doctor", "dentist", "medical", "specialist visit", "gp visit"]);
  tags.charity    = has(t, ["donation", "charity", "donate", "giving.sg"]);

  tags.foreign =
    has(t, OVERSEAS_PLACES) || has(t, CURRENCY_CODES) ||
    t.includes("foreign") || t.includes("overseas") || t.includes("abroad");

  // Travel bookings, app rides, food delivery and digital subs are card-not-present by nature.
  if ((tags.travel || tags.appRide || tags.foodDelivery || tags.digitalSub) && !tags.inPersonExplicit) tags.online = true;
  // In-store dining and supermarket payments are overwhelmingly contactless taps today.
  if ((tags.dining || tags.groceries) && !tags.inPersonExplicit) tags.contactless = true;

  // "shopping" = retail-MCC purchase, not merely an online payment channel.
  tags.shopping = (tags.online && !tags.travel && !tags.transportCat) || tags.fashion || tags.beauty;
  tags.walletOnline = tags.online && tags.contactless && has(t, ["in-app wallet", "in app wallet"]);
  tags.transport = tags.transportCat;
  return tags;
}

// Merchant-specific overrides from the mcc_quirks table are applied AFTER keyword tagging,
// so a quirk can correct where a merchant really lands (step 3 of the /recommend flow).
function applyQuirks(tags, quirks, text) {
  const t = " " + (text || "").toLowerCase() + " ";
  for (const q of quirks) {
    let keywords = [];
    try { keywords = JSON.parse(q.match_keywords || "[]"); } catch { /* bad row, skip */ }
    if (!keywords.some((k) => t.includes(k.toLowerCase()))) continue;
    switch (q.actual_mcc_category) {
      case "transport_online":       tags.transportCat = tags.transport = true; tags.online = true; break;
      case "food_delivery_online":   tags.foodDelivery = tags.dining = true; tags.online = true; break;
      case "public_transport_excluded": tags.publicTransport = true; break;
      case "groceries":              tags.groceries = true; break;
      case "sia_group":              tags.sia = true; break;
      case "ota_travel_agency":      tags.ota = true; tags.travel = true; tags.online = true; break;
      case "entertainment_online":   tags.entertainment = true; tags.online = true; break;
      case "online_sgd":             tags.online = true; tags.amazeRouted = true; break;
    }
    tags.quirkNotes.push(`${q.merchant_name}: ${q.notes || q.actual_mcc_category}`);
  }
  return tags;
}

function hasAnySignal(tags) {
  return ["online", "contactless", "dining", "groceries", "travel", "sia", "transportCat", "petrol", "fashion", "beauty", "entertainment", "family", "foreign",
          "insurance", "utilities", "government", "education", "medical", "charity"].some((k) => tags[k]);
}

function readableTags(tags) {
  const labels = {
    online: "online/app", contactless: "contactless", dining: "dining", groceries: "groceries",
    travel: "travel/hotel", ota: "OTA booking", sia: "SIA Group", transportCat: "transport",
    publicTransport: "SimplyGo/transit", petrol: "petrol", fashion: "fashion",
    beauty: "beauty/wellness", entertainment: "entertainment", family: "family",
    fastfood: "fast food", foreign: "foreign currency/overseas",
    insurance: "insurance", utilities: "utilities", government: "government/tax",
    education: "education", medical: "medical", charity: "donation",
  };
  const out = Object.keys(labels).filter((k) => tags[k]).map((k) => labels[k]);
  return out.length ? out.join(" · ") : "general in-store spend";
}

/* ===== RANK: tags + data -> cap-aware top 3 ===== */
// Ranking engine: tags + DB rows → top cards by effective miles.
// Rates/caps/categories live in D1 (bonus_categories); this module only encodes the
// *applicability logic* that can't be expressed as data — keyed by "<card slug>:<category_name>".
// Rows with is_selected = 0 (unenrolled Lady's categories, HSBC's inactive EGA tier) are skipped.

const APPLICABILITY = {
  "citi-rewards:online": (t) =>
    (t.online && !t.travel && !t.ota && !t.walletOnline) ||
    // Amaze pairing: FCY/offline spend re-presented as SGD online to the Mastercard.
    (t.foreign && !t.online && !t.travel),
  "citi-rewards:shopping_offline": (t) => !t.online && (t.fashion || t.groceriesDept === true),
  "hsbc-revolution:online_contactless_bonus": (t) =>
    (t.online || t.contactless) &&
    !(t.fastfood || t.ota || t.publicTransport || t.carRental) &&
    (t.dining || t.shopping || t.groceries || t.transportCat || t.entertainment || t.online || (t.travel && !t.ota)),
  "uob-preferred-visa:mobile_contactless": (t) => t.contactless && !t.online,
  "uob-preferred-visa:online_selected_mcc": (t) =>
    t.online && !t.travel && !t.transportCat &&
    (t.shopping || t.groceries || t.dining || t.foodDelivery || t.entertainment),
  "krisflyer-uob:sia_group": (t) => t.sia,
  "krisflyer-uob:accelerated_miles": (t) =>
    !t.publicTransport && !t.sia &&
    (t.dining || t.foodDelivery || t.ota || (t.online && t.shopping) || (t.transportCat && !t.petrol)),
  // DBS Woman's World is a pure online card. This rule was missing entirely, so the
  // selected 4 mpd row could never fire and the card silently sat at its 0.4 base.
  "dbs-womans-world:online": (t) => t.online,
  // The EGA tier is is_selected:0 today, but without a rule it would stay dead even
  // if switched on. Same test as the standard tier.
  "hsbc-revolution:online_contactless_bonus_ega_tier": (t) =>
    (t.online || t.contactless) &&
    !(t.fastfood || t.ota || t.publicTransport || t.carRental) &&
    (t.dining || t.shopping || t.groceries || t.transportCat || t.entertainment || t.online || (t.travel && !t.ota)),

  "uob-ladys:beauty_wellness": (t) => t.beauty,
  "uob-ladys:fashion": (t) => t.fashion,
  "uob-ladys:dining": (t) => t.dining && !t.foodDelivery,
  "uob-ladys:entertainment": (t) => t.entertainment,
  "uob-ladys:family": (t) => t.family || t.groceries,
  "uob-ladys:transport": (t) => (t.transportCat && !t.publicTransport) || t.petrol,
  "uob-ladys:travel": (t) => t.travel,

  // --- aspirational cards (not owned) ---
  "amex-krisflyer:sia_group": (t) => t.sia,
  "amex-krisflyer:grab": (t) => t.appRide || t.foodDelivery,
  "amex-platinum-charge:sia_group": (t) => t.sia,
  "amex-platinum-charge:foreign_currency_promo": (t) => t.foreign,
  // Maybank's band is deliberately broad: the four lifestyle categories OR any FCY spend.
  "sc-journey:online_groceries_delivery_transport": (t) =>
    t.online && !t.foreign &&
    (t.groceries || t.foodDelivery || t.appRide || (t.transportCat && !t.publicTransport && !t.petrol)),
  "maybank-xl-rewards:dine_shop_travel_play": (t) =>
    t.foreign || t.dining || t.foodDelivery || t.shopping || t.travel || t.entertainment || t.fashion || t.beauty,
};

// mpd is stored at full precision (KrisFlyer-true rates are thirds); round for display only.
// Lives in the pure section because whyFor()/rank() use it — keep the core node-testable.
const mpd2 = (n) => String(Math.round(Number(n) * 100) / 100);

function whyFor(card, row, tags) {
  const bits = [];
  if (row) {
    const label = row.category_name.replace(/_/g, " ");
    bits.push(row.notes ? `${label} — ${firstSentence(row.notes)}` : `${label} bonus applies`);
    if (card.slug === "citi-rewards" && tags.foreign && !tags.travel && !tags.online) {
      bits.push("via the Amaze pairing (FCY spend re-presented as SGD online; budget ~2% FX spread)");
    }
    if (row.condition) bits.push(`condition: ${row.condition}`);
  } else if (tags.foreign && card.base_earn_rate_fcy) {
    bits.push(`foreign-currency general rate ${mpd2(card.base_earn_rate_fcy)} mpd${card.slug === "dbs-altitude" ? ", uncapped" : ""}`);
  } else {
    bits.push(`base rate only (${mpd2(card.base_earn_rate)} mpd) — no bonus category matched`);
  }
  return bits.join("; ");
}

function firstSentence(s) {
  const i = s.indexOf(". ");
  return i === -1 ? s : s.slice(0, i + 1);
}

/**
 * @param {Object} db  { cards, bonusRows, spendRows } straight from D1
 * @param {Object} tags  from classify.tagify + applyQuirks
 * @param {number} amount  SGD
 * @param {string} month  'YYYY-MM' for cap lookups
 */
/* ===== NON-EARNING CATEGORIES =====
   Spend that earns NOTHING — not the base rate. Distinct from "no bonus matched".
   insurance + utilities: excluded by every issuer in this wallet (Citi 2018, DBS 2019,
   HSBC 2020, UOB 2022 — MileLion 2026 utilities/insurance guides, verified 21 Jul 2026).
   The per-card extras come from each issuer's own published exclusion list, which is
   already quoted in the matching bonusRows.exclusions text.
   NOTE: this is why a "best card for insurance" answer is no card — the honest
   options are fee-based rails (CardUp, Citi PayAll), which this tool does not model. */
const ZERO_EARN = {
  "citi-rewards":      ["insurance", "utilities"],
  "hsbc-revolution":   ["insurance", "utilities"],
  "dbs-altitude":      ["insurance", "utilities"],
  "dbs-womans-world":  ["insurance", "utilities", "charity"],
  "uob-preferred-visa": ["insurance", "utilities", "education", "government", "charity"],
  "krisflyer-uob":     ["insurance", "utilities", "medical"],
  "uob-ladys":         ["insurance", "utilities", "education", "government", "charity"],
  // AMEX excludes bill payments, utilities, insurance and education/non-profit spend
  "amex-krisflyer":    ["insurance", "utilities", "education"],
  "amex-platinum-charge": ["insurance", "utilities", "education", "government"],
  // Maybank: education and hospitals DO earn (base rate), so they are not listed here
  "maybank-xl-rewards": ["insurance", "utilities", "government", "charity"],
};
const ZERO_EARN_LABEL = {
  insurance: "insurance premiums", utilities: "utility bills", education: "education fees",
  government: "government & tax payments", medical: "medical services", charity: "charitable donations",
};
// First non-earning category that applies to this card, or null.
const ZERO_EARN_DEFAULT = ["insurance", "utilities"];
function zeroEarnFor(card, tags) {
  // Unknown slug (card renamed, or newly added) falls back to the industry-wide pair
  // rather than an empty list — a missing entry must not mean "earns full miles".
  const list = ZERO_EARN[card.slug] || ZERO_EARN_DEFAULT;
  return list.find((k) => tags[k]) || null;
}

function rank(db, tags, amount, month, limit = 3) {
  const spentIn = (cardId, capGroup) => {
    const r = db.spendRows.find((s) => s.card_id === cardId && s.cap_group === capGroup && s.month === month);
    return r ? r.amount_spent : 0;
  };

  const results = [];
  for (const card of db.cards) {
    if (card.is_reference_only) continue;
    const base = tags.foreign && card.base_earn_rate_fcy != null ? card.base_earn_rate_fcy : card.base_earn_rate;

    // Non-earning category: the card awards nothing, so skip the bonus/base maths.
    const zero = zeroEarnFor(card, tags);
    if (zero) {
      results.push({
        card: card.name, slug: card.slug, card_id: card.id, network: card.network,
        issuer: card.issuer, unverified: !!card.unverified,
        mpd: 0, is_bonus: false, miles: 0, sgd_value: 0, zero_earn: zero,
        why: `${ZERO_EARN_LABEL[zero]} earn no miles on this card — not even the base rate`,
        cap_warning: null, exclusions: null, cap_amount: null, cap_group: null, category: null,
      });
      continue;
    }

    // Best applicable bonus row for this card
    let best = null;
    for (const row of db.bonusRows.filter((r) => r.card_id === card.id && r.is_selected)) {
      const fn = APPLICABILITY[`${card.slug}:${row.category_name}`];
      if (!fn || !fn(tags)) continue;
      if (!best || row.earn_rate > best.earn_rate) best = row;
    }

    let miles, mpd, capWarning = null, capExhausted = false;
    if (best && best.earn_rate > base) {
      mpd = best.earn_rate;
      if (best.monthly_cap_amount != null) {
        const remaining = Math.max(0, best.monthly_cap_amount - spentIn(card.id, best.cap_group));
        const bonusPortion = Math.min(amount, remaining);
        miles = bonusPortion * best.earn_rate + Math.max(0, amount - remaining) * base;
        const cat = best.category_name.replace(/_/g, " ");
        if (remaining <= 0) {
          capExhausted = true;
          capWarning = `This month's S$${best.monthly_cap_amount} ${cat} cap is already used up — this purchase earns the base ${mpd2(base)} mpd until it resets.`;
        } else if (amount >= remaining) {
          capWarning = `This purchase uses up the last S$${remaining.toFixed(0)} of this month's ${cat} cap — S$${(amount - remaining).toFixed(0)} of it earns only ${mpd2(base)} mpd.`;
        } else if (remaining - amount <= 0.2 * best.monthly_cap_amount) {
          capWarning = `S$${(remaining - amount).toFixed(0)} left before you hit this month's ${cat} cap (S$${best.monthly_cap_amount}).`;
        }
        // The headline rate must be what THIS purchase earns, not the sticker rate.
        // A maxed cap used to display "4 mpd" while actually paying 0.4 — the exact
        // mistake the cap tracking exists to prevent.
        if (amount > 0) mpd = miles / amount;
      } else {
        miles = amount * mpd; // uncapped (KrisFlyer UOB)
      }
    } else {
      mpd = base;
      miles = amount * base;
    }

    const winRow = best && best.earn_rate > base ? best : null;
    results.push({
      card: card.name,
      slug: card.slug,
      card_id: card.id,
      network: card.network,
      issuer: card.issuer,
      unverified: !!card.unverified,
      mpd: Math.round(mpd * 100) / 100,
      is_bonus: !!winRow && !capExhausted,
      miles: Math.round(miles * 10) / 10,
      sgd_value: Math.round(miles * 0.02 * 100) / 100, // 2.0¢/mile, matching redemption_notes
      why: capExhausted
        ? `${best.category_name.replace(/_/g, " ")} cap is used up this month — earning the base ${mpd2(base)} mpd`
        : whyFor(card, winRow, tags),
      cap_warning: capWarning,
      exclusions: winRow ? winRow.exclusions : null,
      cap_amount: winRow ? winRow.monthly_cap_amount : null,
      cap_group: winRow ? (winRow.cap_group || winRow.category_name) : null,
      category: winRow ? winRow.category_name : null,
      condition: winRow ? winRow.condition : null,
      requires_selection: winRow ? !!winRow.requires_selection : false,
    });
  }

  results.sort((a, b) => b.miles - a.miles || b.mpd - a.mpd);
  return results.slice(0, limit);
}
/* Integrity guard. A selected bonus row with no APPLICABILITY rule fails silently:
   the card drops to its base rate and quietly loses the user miles. That is exactly
   how the DBS Woman's World 4 mpd row sat dead. Warn loudly in the console instead. */
(function auditApplicability() {
  const bySlug = Object.fromEntries(cards.map((c) => [c.id, c.slug]));
  const orphans = bonusRows
    .filter((r) => r.is_selected && !APPLICABILITY[`${bySlug[r.card_id]}:${r.category_name}`])
    .map((r) => `${bySlug[r.card_id]}:${r.category_name}`);
  if (orphans.length) console.warn("[miles] bonus rows with no applicability rule — these can never fire:", orphans);
})();

/* ===== APP ===== */
// Miles Dashboard — client-side app. Fully static: the recommendation engine runs in
// the browser against the baked data above (generated upstream from schema/seed.sql).
// State (wallet, monthly spend, quirk queue) lives in localStorage — no backend required.
// The data layer is intentionally shaped so a future Worker/D1 sync can drop in later.

const MONTH = new Date().toISOString().slice(0, 7);
const SPEND_KEY = `miles-spend:${MONTH}`;
const WALLET_KEY = "miles-wallet";          // array of owned card ids (localStorage-first auth)
const WALLET_SET_KEY = "miles-wallet-set";  // "1" once the user has been through onboarding
const MODE_KEY = "miles-mode";              // "wallet" | "all"
const QUIRK_KEY = "miles-quirk-queue";      // local moderation queue (nothing publishes automatically)

const bySlug = Object.fromEntries(cards.map((c) => [c.slug, c]));
const byId = Object.fromEntries(cards.map((c) => [c.id, c]));
const rankableCards = cards.filter((c) => !c.is_reference_only);

const ISSUER_COLOR = {
  Citibank: "#2f6fb0", HSBC: "#c8433a", DBS: "#c8433a",
  UOB: "#2a4b9b", Instarem: "#2f9d8f",
};
const prettyCat = (s) => s.replace(/_/g, " ").replace(/\bmcc\b/i, "MCC").replace(/\bega\b/i, "EGA").replace(/\bsia\b/i, "SIA");
const fmt = (n) => n.toLocaleString("en-SG", { maximumFractionDigits: n % 1 ? 1 : 0 });
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ---------------------------------------------------------------- spend state */
function loadSpend() { try { return JSON.parse(localStorage.getItem(SPEND_KEY)) || {}; } catch { return {}; } }
function saveSpend(m) { localStorage.setItem(SPEND_KEY, JSON.stringify(m)); }
let spend = loadSpend();

function spendRows() {
  return Object.entries(spend).map(([key, amount_spent]) => {
    const [card_id, cap_group] = key.split("|");
    return { card_id: Number(card_id), cap_group, month: MONTH, amount_spent };
  });
}

/* ---------------------------------------------------------------- wallet + mode state */
function loadWallet() {
  try {
    const raw = JSON.parse(localStorage.getItem(WALLET_KEY));
    if (Array.isArray(raw)) return raw.filter((id) => byId[id]);
  } catch { /* fall through */ }
  return [];
}
function saveWallet(ids) {
  localStorage.setItem(WALLET_KEY, JSON.stringify(ids));
  localStorage.setItem(WALLET_SET_KEY, "1");
  walletIds = ids.slice();
}
let walletIds = loadWallet();
const walletWasSet = () => localStorage.getItem(WALLET_SET_KEY) === "1";
const ownsCard = (card) => walletIds.includes(card.id);

let mode = localStorage.getItem(MODE_KEY) || (walletIds.length ? "wallet" : "all");
if (mode === "wallet" && !walletIds.length) mode = "all";
function setMode(m) { mode = m; localStorage.setItem(MODE_KEY, m); }

// Cards the ranker/health check consider right now.
function activeCards() {
  if (mode === "wallet" && walletIds.length) return cards.filter((c) => walletIds.includes(c.id));
  return cards;
}

/* selected bonus rows for a card, grouped by cap bucket */
function selectedBonuses(card) {
  return bonusRows.filter((r) => r.card_id === card.id && r.is_selected);
}
function capGroups(card) {
  const groups = {};
  for (const r of selectedBonuses(card)) {
    if (r.monthly_cap_amount == null) continue;
    const g = r.cap_group || r.category_name;
    if (!groups[g]) groups[g] = { cap: r.monthly_cap_amount, rate: r.earn_rate, cats: [] };
    groups[g].cats.push(prettyCat(r.category_name));
    groups[g].rate = Math.max(groups[g].rate, r.earn_rate);
  }
  return groups;
}

/* ---------------------------------------------------------------- recommend */
const els = {
  form: document.getElementById("console"),
  query: document.getElementById("query"),
  amount: document.getElementById("amount"),
  detected: document.getElementById("detected"),
  results: document.getElementById("results"),
  chips: document.getElementById("chips"),
  modeToggle: document.getElementById("modeToggle"),
};

const WARN_ICON = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';

let lastResults = [];   // for FLIP animation between re-ranks

function resultCardHtml(r, i) {
  const card = bySlug[r.slug] || {};
  const issuer = ISSUER_COLOR[card.issuer] || "var(--gold)";
  const whyHtml = esc(r.why).replace(/(condition: [^;]+)/i, '<span class="rc-cond">$1</span>');
  const warn = r.cap_warning ? `<div class="rc-warn">${WARN_ICON}<span>${esc(r.cap_warning)}</span></div>` : "";

  // Monthly cap mini-bar (only when the winning bonus is capped)
  let capHtml = "";
  if (r.is_bonus && r.cap_amount != null) {
    const spent = spend[`${r.card_id}|${r.cap_group}`] || 0;
    const pct = Math.min(100, (spent / r.cap_amount) * 100);
    const remaining = Math.max(0, r.cap_amount - spent);
    const cls = pct >= 100 ? "full" : pct >= 80 ? "warn" : "";
    capHtml = `
      <div class="rc-cap">
        <div class="rc-cap-row"><span>Monthly cap · S$${fmt(remaining)} left</span><span>S$${fmt(spent)} / ${fmt(r.cap_amount)}</span></div>
        <div class="cap-track"><div class="cap-fill ${cls}" style="width:${pct}%"></div></div>
      </div>`;
  } else if (r.is_bonus) {
    capHtml = `<div class="rc-cap rc-cap-uncapped">✦ Uncapped bonus</div>`;
  }

  // Collapsible exclusions
  const exclHtml = r.exclusions ? `
    <details class="rc-excl">
      <summary><span>Exclusions &amp; fine print</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </summary>
      <p>${esc(r.exclusions)}</p>
    </details>` : "";

  return `
    <article class="result-card rank-${i + 1}${r.zero_earn ? " is-zero" : ""}" data-slug="${r.slug}" style="--issuer:${issuer}">
      <div class="rank-medal">${r.zero_earn ? "—" : i + 1}</div>
      <div class="result-body">
        <div class="rc-head">
          <h3 class="rc-name">${esc(r.card)}</h3>
          <div class="rc-figure">
            <div class="rc-rate"><b>${r.mpd}</b><small>mpd</small></div>
            <div class="rc-miles" title="Miles valued at 2 cents each — a conservative benchmark for comparing cards, not a cash-out rate">${fmt(r.miles)} <span>miles</span> · ≈ S$${r.sgd_value.toFixed(2)}</div>
          </div>
        </div>
        <p class="rc-why">${whyHtml}</p>
        ${conditionChip(null, { condition: r.condition, requires_selection: r.requires_selection, category_name: r.category })}
        ${capHtml}
        ${warn}
        ${exclHtml}
        <div class="rc-foot">
          <span class="rc-badge">${esc(card.issuer || "")}</span>
          <span class="rc-badge rc-badge-net">${esc(r.network || "")}</span>
          ${r.unverified ? '<span class="rc-badge rc-badge-warn">⚑ figures unverified</span>' : ""}
        </div>
      </div>
    </article>`;
}

function renderResults(top, tags) {
  const detTags = readableTags(tags);
  const quirkTxt = tags.quirkNotes.length ? ` · <b>quirk applied:</b> ${esc(tags.quirkNotes.map((n) => n.split(":")[0]).join(", "))}` : "";
  const modeTxt = mode === "wallet" && walletIds.length ? ` · <b>your wallet</b>` : "";
  // Two states used to look identical: "understood, and it has no bonus category" and
  // "understood nothing". The second silently ranked on base rates and read as a real
  // recommendation, so a miss like "food" looked like a considered answer. Say which it is.
  els.detected.innerHTML = hasAnySignal(tags)
    ? `<b>detected:</b> ${esc(detTags)}${modeTxt}${quirkTxt}`
    : `<b class="det-miss">not recognised</b> — no bonus category matched, so these are base rates. Try naming the category or merchant, e.g. <i>dinner</i>, <i>Shopee</i>, <i>Agoda</i>.${modeTxt}`;

  if (!top.length) {
    els.results.innerHTML = emptyStateHtml();
    lastResults = [];
    return;
  }

  // Every card earns nothing: there is no "best card", and saying otherwise would be
  // a wrong answer dressed as a recommendation. Name the category and the real options.
  const allZero = top.every((r) => r.zero_earn);
  const zeroBanner = allZero
    ? `<div class="zero-banner"><b>No card earns miles on ${esc(ZERO_EARN_LABEL[top[0].zero_earn])}.</b>
         Every issuer here excludes it — you earn nothing, not a reduced rate. The only way to
         earn is a fee-based rail such as CardUp or Citi PayAll, where the fee usually exceeds
         the miles' value. Paying by GIRO is normally the better call.</div>`
    : "";

  // FLIP: capture old positions keyed by slug before we replace the DOM.
  const firstRects = {};
  els.results.querySelectorAll(".result-card").forEach((el) => {
    firstRects[el.dataset.slug] = el.getBoundingClientRect();
  });

  els.results.innerHTML = zeroBanner + top.map(resultCardHtml).join("");
  lastResults = top.map((r) => r.slug);

  // FLIP: animate each card from its previous slot to the new one.
  if (!prefersReduced()) {
    els.results.querySelectorAll(".result-card").forEach((el) => {
      const prev = firstRects[el.dataset.slug];
      if (!prev) return; // new card — the CSS rise animation handles entry
      const now = el.getBoundingClientRect();
      const dy = prev.top - now.top;
      if (Math.abs(dy) < 2) return;
      el.style.animation = "none";
      el.animate(
        [{ transform: `translateY(${dy}px)` }, { transform: "translateY(0)" }],
        { duration: 460, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
      );
    });
  }
}

function emptyStateHtml() {
  if (mode === "wallet" && !walletIds.length) {
    return `<div class="empty-state">
      <div class="empty-ico">${WALLET_GLYPH}</div>
      <p class="empty-title">Your wallet is empty</p>
      <p class="empty-sub">Add the cards you own and we'll rank only those.</p>
      <button type="button" class="rank-btn" data-open-onboard>Choose my cards<span class="btn-glow"></span></button>
    </div>`;
  }
  return `<div class="empty-state">
    <div class="empty-ico">${SEARCH_GLYPH}</div>
    <p class="empty-title">Nothing to rank yet</p>
    <p class="empty-sub">Describe a purchase above, or tap an example, to see the best card.</p>
  </div>`;
}

let skeletonTimer = null;
function showSkeletons() {
  const rows = [1, 2, 3].map((i) => `
    <article class="result-card skeleton" style="animation-delay:${(i - 1) * 60}ms">
      <div class="rank-medal sk-block"></div>
      <div class="result-body">
        <div class="sk-line sk-line-lg"></div>
        <div class="sk-line sk-line-sm"></div>
        <div class="sk-line"></div>
      </div>
    </article>`).join("");
  els.results.innerHTML = rows;
}

function run(opts = {}) {
  const query = els.query.value.trim();
  if (!query) {
    els.results.innerHTML = emptyStateHtml();
    els.detected.innerHTML = "";
    lastResults = [];
    return;
  }
  const textAmt = extractAmount(query);
  if (textAmt) els.amount.value = textAmt;
  const amount = parseFloat(els.amount.value) || textAmt || 100;

  let tags = tagify(query);
  tags = applyQuirks(tags, quirks, query);
  const compute = () => {
    const top = rank({ cards: activeCards(), bonusRows, spendRows: spendRows() }, tags, amount, MONTH);
    renderResults(top, tags);
  };

  // Skeleton on the first search / on an explicit submit — deliberate, brief, never flashing.
  // Live re-ranks (typing amount, editing caps) update in place with no skeleton.
  if (opts.skeleton && !prefersReduced()) {
    clearTimeout(skeletonTimer);
    showSkeletons();
    skeletonTimer = setTimeout(compute, 260);
  } else {
    compute();
  }
}

els.form.addEventListener("submit", (e) => { e.preventDefault(); run({ skeleton: true }); });
els.query.addEventListener("input", debounce(() => { if (els.query.value.trim()) run(); }, 220));
els.amount.addEventListener("input", debounce(() => { if (els.query.value.trim()) run(); }, 160));

function debounce(fn, ms) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; }

const EXAMPLES = [
  "dinner at a restaurant",
  "grocery run at Cold Storage",
  "flight on Singapore Airlines S$800",
  "hotel in Bangkok on Agoda",
  "Shopee order S$120",
  "taxi in Tokyo",
];
els.chips.innerHTML = EXAMPLES.map((e) => `<button type="button" class="chip">${esc(e)}</button>`).join("");
els.chips.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => { els.query.value = chip.textContent; els.amount.value = ""; run({ skeleton: true }); els.query.focus(); });
});

// Delegate the "choose my cards" button inside the empty state.
els.results.addEventListener("click", (e) => {
  if (e.target.closest("[data-open-onboard]")) openOnboard();
});

/* ---------------------------------------------------------------- mode toggle */
function syncModeToggle() {
  // the wallet count chip was removed from the toggle — nothing to sync here
  els.modeToggle.querySelectorAll(".mode-btn").forEach((b) => {
    const on = b.dataset.mode === mode;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-selected", on ? "true" : "false");
  });
  els.modeToggle.dataset.mode = mode;
}
els.modeToggle.querySelectorAll(".mode-btn").forEach((b) => {
  b.addEventListener("click", () => {
    if (b.dataset.mode === "wallet" && !walletIds.length) { openOnboard(); return; }
    setMode(b.dataset.mode);
    syncModeToggle();
    if (els.query.value.trim()) run();
    renderHealth();
  });
});

/* ---------------------------------------------------------------- wallet grid */
function activeBonusText(card) {
  if (card.is_reference_only) {
    if (card.reward_class === "cashback") return "Cashback card — up to 10% back on select categories. Earns no KrisFlyer miles, so it is not ranked.";
    return "Routing card — re-presents spend as SGD online. Not ranked.";
  }
  const bonuses = selectedBonuses(card).filter((r) => r.earn_rate > card.base_earn_rate);
  if (!bonuses.length) return `Flat <b>${mpd2(card.base_earn_rate)} mpd</b> — no live bonus categories.`;
  const uniq = [...new Map(bonuses.map((b) => [`${b.earn_rate}|${b.category_name}`, b])).values()]
    .sort((a, b) => b.earn_rate - a.earn_rate);
  const shown = uniq.slice(0, 2).map((b) => `<b>${mpd2(b.earn_rate)} mpd</b> ${prettyCat(b.category_name)}`);
  const extra = uniq.length > 2 ? ` · +${uniq.length - 2} more` : "";
  return shown.join(" · ") + extra;
}

function capBarHtml(card, group, info) {
  const key = `${card.id}|${group}`;
  const spent = spend[key] || 0;
  const pct = Math.min(100, (spent / info.cap) * 100);
  const cls = pct >= 100 ? "full" : pct >= 80 ? "warn" : "";
  const label = info.cats.join(" + ");
  return `
    <div class="cap" data-key="${key}">
      <div class="cap-row"><span class="cap-label">${esc(label)} · ${mpd2(info.rate)} mpd</span>
        <span class="cap-val">S$${fmt(spent)} / ${fmt(info.cap)}</span></div>
      <div class="cap-track"><div class="cap-fill ${cls}" style="width:${pct}%"></div></div>
      <div class="cap-edit"><label>spent this month</label>
        <input type="number" min="0" step="10" value="${spent || ""}" placeholder="0" data-cap="${key}" data-cap-max="${info.cap}" aria-label="Spent this month in ${esc(label)}"></div>
    </div>`;
}

/* One line per card: what you reach for it for. The conversion ratios and transfer
   fees still live in redemptionNotes for reference, they are just not the headline —
   what you need at a glance is which card to pull out, not a fee table. */
const BEST_FOR = {
  "citi-rewards":         "Your online-shopping workhorse. Pair with Amaze to catch overseas spend too.",
  "hsbc-revolution":      "Broadest 4 mpd net of any card here — but KrisFlyer transfers cost a 3:1 premium, so 3.33 mpd in practice.",
  "dbs-altitude":         "The catch-all. Best flat rate for anything with no bonus category, and the points never expire.",
  "dbs-womans-world":     "Pure online play. Nothing else on it earns well.",
  "uob-preferred-visa":   "Best in-person card: tap to pay and earn 4 mpd where others give base.",
  "krisflyer-uob":        "Miles land in KrisFlyer directly — no transfer fee, no minimum block, no expiry clock you control.",
  "uob-ladys":            "One category at 4 mpd, yours to pick each quarter. Currently dining.",
  "amex-krisflyer":       "A cheap way into AMEX Offers with miles that credit straight to KrisFlyer. Weak day-to-day earn.",
  "amex-platinum-charge": "Bought for the lounges and hotel status, not the miles — it is the weakest earner here.",
  "sc-smart": "A cashback card, not a miles card. Strong 8–10% back on fast food, SimplyGo transport, EV charging and streaming once you clear S$800/month — but it earns no KrisFlyer miles.",
  "maybank-xl-rewards":   "The widest 4 mpd band of any card, foreign currency included — if you clear S$500 that month.",
};

/* Qualifying conditions were buried in the data. Each card gets at most ONE chip —
   the thing you must actually do to hold the headline rate. */
const CARD_GLYPH = `<svg class="wc-media-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2.5"/><path d="M2 10h20"/><path d="M6 15h4"/></svg>`;

function conditionChip(card, row) {
  if (!row) return "";
  if (row.condition) {
    const met = /MET\)/i.test(row.condition);
    const short = row.condition.replace(/\s*\(Joseph:[^)]*\)/i, "").trim();
    return `<span class="cond-chip${met ? " is-met" : " is-unmet"}">${met ? "✓" : "⚑"} ${esc(short)}${met ? " — met" : ""}</span>`;
  }
  if (row.requires_selection) {
    return `<span class="cond-chip is-met">✓ Enrolled category: ${esc(prettyCat(row.category_name))} — rotatable quarterly</span>`;
  }
  return "";
}
// The best rate this card could reach if an unmet condition were satisfied.
function upgradeChip(card) {
  const locked = bonusRows.filter((r) => r.card_id === card.id && !r.is_selected && r.condition);
  if (!locked.length) return "";
  const b = locked.sort((a, z) => z.earn_rate - a.earn_rate)[0];
  return `<span class="cond-chip is-locked">⚑ ${mpd2(b.earn_rate)} mpd if: ${esc(b.condition)}</span>`;
}

function walletCardHtml(card, i) {
  const issuer = ISSUER_COLOR[card.issuer] || "var(--gold)";
  const groups = capGroups(card);
  let capsHtml = "";
  if (!card.is_reference_only) {
    if (Object.keys(groups).length) capsHtml = Object.entries(groups).map(([g, info]) => capBarHtml(card, g, info)).join("");
    else if (selectedBonuses(card).some((r) => r.monthly_cap_amount == null && r.earn_rate > card.base_earn_rate))
      capsHtml = `<div class="wc-uncapped">✦ Bonus earning is uncapped</div>`;
  }
  // The one selected bonus row drives the condition chip; a locked higher tier
  // (e.g. HSBC's EGA 8 mpd) shows as an "if" chip so the upgrade path is visible.
  // Prefer a row that actually carries a condition — the highest-rate row often has
  // none (KrisFlyer UOB's 3 mpd SIA row), which would hide the 2.4 mpd SIA-spend rule.
  const bonusRowsHere = selectedBonuses(card).filter((r) => r.earn_rate > card.base_earn_rate);
  const activeRow = bonusRowsHere.find((r) => r.condition || r.requires_selection)
    || bonusRowsHere.sort((a, z) => z.earn_rate - a.earn_rate)[0];
  const chips = card.is_reference_only ? "" : conditionChip(card, activeRow) + upgradeChip(card);
  const flag = card.unverified ? `<span class="wc-flag">⚑ some figures unverified</span>` : "";
  const owned = ownsCard(card);

  // Square card-art slot on every wallet card. A designed placeholder sits underneath;
  // the image (when a URL is present) is layered on top and covers it. If the URL is
  // null or 404s, the img simply removes itself and the placeholder shows through —
  // so the grid always looks intentional, never broken.
  const media = `<div class="wc-media">
      <div class="wc-media-ph" aria-hidden="true">${CARD_GLYPH}<span class="wc-media-label">${esc(card.issuer)}</span></div>
      ${card.image_url ? `<img class="wc-media-img" src="${esc(card.image_url)}" alt="${esc(card.name)} card" loading="lazy" decoding="async" onerror="this.remove()">` : ""}
    </div>`;

  return `
    <article class="wallet-card has-media${owned ? " is-owned" : ""}${card.is_reference_only ? " is-ref" : ""}" style="--issuer:${issuer}">
      ${media}
      <div class="wc-top">
        <span class="wc-name">${esc(card.name.replace(/ \(.*/, ""))}</span>
        ${owned ? `<span class="wc-own is-owned">In wallet</span>` : (card.reward_class === "routing" ? "" : `<span class="wc-aspire">Not yet held</span>`)}
      </div>
      ${BEST_FOR[card.slug] ? `<p class="wc-bestfor">${esc(BEST_FOR[card.slug])}</p>` : ""}
      ${chips ? `<div class="wc-chips">${chips}</div>` : ""}
      ${capsHtml}
      ${flag ? `<div class="wc-foot">${flag}</div>` : ""}
    </article>`;
}

const walletGrid = document.getElementById("walletGrid");
document.getElementById("walletShowAll")?.addEventListener("click", () => {
  showAllWalletCards = !showAllWalletCards;
  renderWallet();
});
let showAllWalletCards = false;
function renderWallet() {
  // Show every card, owned first. The wallet doubles as the shortlist for cards to
  // apply for later, so hiding the ones not held would defeat the point.
  const list = [...cards].sort((a, b) => (ownsCard(b) ? 1 : 0) - (ownsCard(a) ? 1 : 0));
  const toggle = document.getElementById("walletShowAll");
  if (toggle) toggle.hidden = true;
  walletGrid.innerHTML = list.map(walletCardHtml).join("");
  [...walletGrid.children].forEach((el, i) => el.style.setProperty("--i", i));
  walletGrid.querySelectorAll("input[data-cap]").forEach((input) => {
    input.addEventListener("input", () => {
      const key = input.dataset.cap;
      const val = Math.max(0, parseFloat(input.value) || 0);
      if (val) spend[key] = val; else delete spend[key];
      saveSpend(spend);
      const wrap = input.closest(".cap");
      const max = parseFloat(input.dataset.capMax);
      const pct = Math.min(100, (val / max) * 100);
      const fill = wrap.querySelector(".cap-fill");
      fill.style.width = pct + "%";
      fill.className = "cap-fill " + (pct >= 100 ? "full" : pct >= 80 ? "warn" : "");
      wrap.querySelector(".cap-val").textContent = `S$${fmt(val)} / ${fmt(max)}`;
      if (els.query.value.trim()) run();
      renderHealth();
    });
  });
  const note = document.getElementById("walletOwnedNote");
  const n = walletIds.length;
  note.textContent = walletWasSet()
    ? (n ? `${n} card${n > 1 ? "s" : ""} in your wallet.` : "No cards selected yet — you're seeing all cards.")
    : "You haven't set up your wallet yet.";
}

/* ---------------------------------------------------------------- wallet health check */
// Representative probe query per everyday category. We run the real ranker against the
// user's owned cards and read the best achievable rate — same engine as the recommender,
// so health can never disagree with a live recommendation.
const HEALTH_CATEGORIES = [
  { key: "dining",      label: "Dining",      probe: "dinner at a restaurant" },
  { key: "groceries",   label: "Groceries",   probe: "groceries at Cold Storage" },
  { key: "online",      label: "Online shopping", probe: "Shopee online order" },
  { key: "overseas",    label: "Overseas",    probe: "dinner in Tokyo" },
  { key: "transport",   label: "Transport",   probe: "Grab ride" },
  { key: "contactless", label: "Contactless", probe: "tap to pay at a cafe" },
];

function bestForProbe(probe, pool) {
  let tags = tagify(probe);
  tags = applyQuirks(tags, quirks, probe);
  const top = rank({ cards: pool, bonusRows, spendRows: spendRows() }, tags, 100, MONTH, 1);
  return top[0] || null;
}

function healthVerdict(best) {
  // Thresholds tuned to KrisFlyer mpd. Green: a real bonus >= 3.9 mpd. Amber: any bonus
  // above base (>2 mpd) but modest or tightly capped. Red: base rate only.
  if (!best) return { level: "red", label: "No card", note: "No earning card in this pool." };
  const capNote = best.cap_amount != null ? ` capped at S$${fmt(best.cap_amount)}/mo` : ", uncapped";
  if (best.is_bonus && best.mpd >= 3.9) {
    return { level: "green", label: "Excellent", note: `${best.card.replace(/ \(.*/, "")} · ${best.mpd} mpd${capNote}.` };
  }
  if (best.is_bonus && best.mpd > 2) {
    return { level: "amber", label: "Covered", note: `${best.card.replace(/ \(.*/, "")} · ${best.mpd} mpd${capNote}.` };
  }
  if (best.mpd > 1.9) {
    return { level: "amber", label: "Thin", note: `Best is ${best.card.replace(/ \(.*/, "")} at only ${best.mpd} mpd — no strong bonus.` };
  }
  return { level: "red", label: "Gap", note: `Nothing beats base rate (${best.mpd} mpd) here.` };
}

const HEALTH_DOT = { green: "🟢", amber: "🟡", red: "🔴" };

function renderHealth() {
  const grid = document.getElementById("healthGrid");
  const summary = document.getElementById("healthSummary");
  const usingWallet = mode === "wallet" && walletIds.length;
  const pool = (usingWallet ? cards.filter((c) => walletIds.includes(c.id)) : cards).filter((c) => !c.is_reference_only);

  if (!pool.length) {
    summary.innerHTML = `<div class="health-empty"><p>Add the cards you own to see where your wallet is strong and where the gaps are.</p><button type="button" class="rank-btn" data-open-onboard>Choose my cards<span class="btn-glow"></span></button></div>`;
    grid.innerHTML = "";
    summary.querySelector("[data-open-onboard]").addEventListener("click", openOnboard);
    return;
  }

  const rows = HEALTH_CATEGORIES.map((cat) => {
    const best = bestForProbe(cat.probe, pool);
    return { cat, best, v: healthVerdict(best) };
  });

  const weak = rows.filter((r) => r.v.level !== "green").map((r) => r.cat.label.toLowerCase());
  // "the full market" now includes cards not held (AMEX Platinum needs S$200k income,
  // Maybank XL is age-capped), so say so — otherwise green reads as "you are covered".
  const notHeld = pool.filter((c) => !ownsCard(c)).length;
  const scope = usingWallet ? "your wallet" : `all ${pool.length} cards here`;
  // keep the caveat as its own sentence — folding it into `scope` broke the grammar
  const caveat = (!usingWallet && notHeld) ? ` ${notHeld} of them you don't hold yet.` : "";
  let line;
  const hasRed = rows.some((r) => r.v.level === "red");
  const icon = !weak.length ? "🟢" : hasRed ? "🔴" : "🟡";
  if (!weak.length) line = `Strong across the board — ${scope} covers every everyday category at a bonus rate.${caveat}`;
  else line = `Looking at ${scope}, you may be leaving miles on the table on <b>${esc(joinList(weak))}</b>.${caveat}`;
  summary.innerHTML = `<div class="health-line"><span class="health-line-ico">${icon}</span><p>${line}</p></div>`;

  grid.innerHTML = rows.map(({ cat, v }, i) => `
    <article class="health-card level-${v.level}" style="--i:${i}">
      <div class="hc-top"><span class="hc-dot">${HEALTH_DOT[v.level]}</span><span class="hc-verdict">${v.label}</span></div>
      <h3 class="hc-cat">${esc(cat.label)}</h3>
      <p class="hc-note">${v.note}</p>
    </article>`).join("");
}

function joinList(arr) {
  if (arr.length <= 1) return arr.join("");
  if (arr.length === 2) return arr.join(" and ");
  return arr.slice(0, -1).join(", ") + " and " + arr[arr.length - 1];
}

/* ---------------------------------------------------------------- onboarding / wallet picker */
const SEARCH_GLYPH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>';
const WALLET_GLYPH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2.5"/><path d="M2 10h20"/></svg>';

const onboardOverlay = document.getElementById("onboardOverlay");
const pickGrid = document.getElementById("pickGrid");
let draftWallet = [];

function pickCardHtml(card) {
  const issuer = ISSUER_COLOR[card.issuer] || "var(--gold)";
  const on = draftWallet.includes(card.id);
  const bonus = card.is_reference_only
    ? "Routing card"
    : (() => {
        const b = selectedBonuses(card).filter((r) => r.earn_rate > card.base_earn_rate)
          .sort((a, z) => z.earn_rate - a.earn_rate)[0];
        return b ? `${mpd2(b.earn_rate)} mpd ${prettyCat(b.category_name)}` : `${mpd2(card.base_earn_rate)} mpd flat`;
      })();
  return `
    <button type="button" class="pick-card${on ? " is-picked" : ""}" data-pick="${card.id}" style="--issuer:${issuer}" aria-pressed="${on ? "true" : "false"}">
      <span class="pick-check" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>
      <span class="pick-issuer">${esc(card.issuer)}</span>
      <span class="pick-name">${esc(card.name.replace(/ \(.*/, ""))}</span>
      <span class="pick-bonus">${esc(bonus)}</span>
    </button>`;
}

function renderPickGrid() {
  pickGrid.innerHTML = cards.map(pickCardHtml).join("");
  pickGrid.querySelectorAll(".pick-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.pick);
      const idx = draftWallet.indexOf(id);
      if (idx === -1) draftWallet.push(id); else draftWallet.splice(idx, 1);
      const on = draftWallet.includes(id);
      btn.classList.toggle("is-picked", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      if (on) { btn.classList.remove("pop"); void btn.offsetWidth; btn.classList.add("pop"); }
      updateOnboardCount();
    });
  });
  updateOnboardCount();
}
function updateOnboardCount() {
  const n = draftWallet.length;
  document.getElementById("onboardSaveCount").textContent = n ? ` · ${n}` : "";
}

let lastFocus = null;
function openOnboard() {
  draftWallet = walletIds.slice();
  renderPickGrid();
  lastFocus = document.activeElement;
  onboardOverlay.hidden = false;
  requestAnimationFrame(() => onboardOverlay.classList.add("open"));
  document.body.style.overflow = "hidden";
  document.getElementById("onboardSave").focus();
}
function closeOnboard() {
  onboardOverlay.classList.remove("open");
  document.body.style.overflow = "";
  setTimeout(() => { onboardOverlay.hidden = true; }, 260);
  if (lastFocus) lastFocus.focus();
}
document.getElementById("editWalletBtn").addEventListener("click", openOnboard);
document.getElementById("onboardSave").addEventListener("click", () => {
  saveWallet(draftWallet);
  if (draftWallet.length) setMode("wallet"); else setMode("all");
  closeOnboard();
  syncModeToggle(); renderWallet(); renderHealth();
  if (els.query.value.trim()) run();
});
document.getElementById("onboardSkip").addEventListener("click", () => {
  saveWallet([]); setMode("all"); closeOnboard();
  syncModeToggle(); renderWallet(); renderHealth();
});
onboardOverlay.querySelector("[data-close-onboard]").addEventListener("click", closeOnboard);

/* ---------------------------------------------------------------- report a quirk */
const quirkOverlay = document.getElementById("quirkOverlay");
const quirkForm = document.getElementById("quirkForm");
function openQuirk() {
  lastFocus = document.activeElement;
  quirkOverlay.hidden = false;
  requestAnimationFrame(() => quirkOverlay.classList.add("open"));
  document.body.style.overflow = "hidden";
  document.getElementById("quirkMerchant").focus();
}
function closeQuirk() {
  quirkOverlay.classList.remove("open");
  document.body.style.overflow = "";
  setTimeout(() => { quirkOverlay.hidden = true; }, 260);
  if (lastFocus) lastFocus.focus();
}
document.getElementById("reportQuirkBtn").addEventListener("click", openQuirk);
document.getElementById("quirkClose").addEventListener("click", closeQuirk);
quirkOverlay.querySelector("[data-close-quirk]").addEventListener("click", closeQuirk);
quirkForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const merchant = document.getElementById("quirkMerchant").value.trim();
  const body = document.getElementById("quirkBody").value.trim();
  if (!merchant || !body) return;
  // Queue locally for manual review. A future Worker endpoint can POST this queue upstream;
  // nothing is published automatically today.
  let queue = [];
  try { queue = JSON.parse(localStorage.getItem(QUIRK_KEY)) || []; } catch { queue = []; }
  queue.push({ merchant, body, submitted_at: new Date().toISOString(), status: "pending" });
  localStorage.setItem(QUIRK_KEY, JSON.stringify(queue));
  quirkForm.innerHTML = `<div class="quirk-thanks">
    <div class="quirk-thanks-ico"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
    <p class="quirk-thanks-title">Thanks — that's queued for review.</p>
    <p class="quirk-thanks-sub">Nothing goes live automatically. We verify each report against a real statement before it ships.</p>
    <button type="button" class="rank-btn" id="quirkDone">Done<span class="btn-glow"></span></button>
  </div>`;
  document.getElementById("quirkDone").addEventListener("click", closeQuirk);
});

// Global escape + scrim handling for both overlays.
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (!onboardOverlay.hidden) closeOnboard();
  if (!quirkOverlay.hidden) closeQuirk();
});

/* ---------------------------------------------------------------- redemptions */
function expiryClass(txt) {
  const t = (txt || "").toLowerCase();
  if (t.includes("never")) return "rd-expiry-never";
  if (t.startsWith("1 year") || t.includes("1 year")) return "rd-expiry-short";
  return "";
}
document.getElementById("redeemGrid").innerHTML = redemptionNotes
  .filter((r) => !(byId[r.card_id] || {}).is_reference_only)
  .map((r) => {
    const card = byId[r.card_id] || {};
    return `
    <article class="redeem-card">
      <div class="rd-head">
        <div><div class="rd-name">${esc(card.name || r.reward_currency)}</div><div class="rd-cur">${esc(r.reward_currency)}</div></div>

      </div>
      <p class="rd-bestfor">${esc(r.best_use_case || "—")}</p>
      <div class="rd-expiry ${expiryClass(r.points_expiry)}">Points expire: ${esc(r.points_expiry || "—")}</div>
    </article>`;
  }).join("");

/* ---------------------------------------------------------------- chrome */
function niceDate(iso) {
  const d = new Date(iso + (iso.length === 10 ? "T00:00:00" : ""));
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}
const verifiedDate = cards.map((c) => c.last_verified_date).sort().pop();
document.getElementById("snapshotBadge").textContent = `verified ${niceDate(verifiedDate)}`;

const unverified = cards.filter((c) => c.unverified);
document.getElementById("unverifiedNote").innerHTML = unverified.length
  ? `<b style="color:var(--danger)">⚑ ${unverified.length} cards carry unverified figures:</b> ${esc(unverified.map((c) => c.name.replace(/ \(.*/, "")).join(", "))}. Every card records its source URL and verification date.`
  : "All figures verified against two sources.";

document.getElementById("footerFine").textContent =
  `Snapshot ${niceDate(verifiedDate)} · data baked ${niceDate(generatedAt.slice(0, 10))} · static site, figures don't self-update — ask Claude to refresh from The MileLion when caps or categories change.`;

/* ---------------------------------------------------------------- nav / scrollspy */
function prefersReduced() { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; }

const sectionIds = ["recommend", "wallet", "health", "redemptions"];
const navLinks = [...document.querySelectorAll("[data-navlink]")];
const spy = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const id = e.target.id;
    navLinks.forEach((a) => {
      const on = a.dataset.navlink === id;
      a.classList.toggle("is-active", on);
    });
  });
}, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
sectionIds.forEach((id) => { const el = document.getElementById(id); if (el) spy.observe(el); });

/* ---------------------------------------------------------------- init */
syncModeToggle();
renderWallet();
renderHealth();
run();  // paints the initial empty state

// First-run onboarding: only auto-open if the user has never set a wallet.
if (!walletWasSet()) {
  setTimeout(openOnboard, 650);
}

/* ---------------------------------------------------------------- reveal */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal, .card-grid, .redeem-grid, .health-grid").forEach((el) => io.observe(el));

})();

/* ============================================================================
   Destination + runway  (PR #2)
   Self-contained: reads data/destinations.json, persists the chosen goal and a
   manually-entered miles balance in localStorage, renders the runway.
   Touches no existing function — tagify / applyQuirks / rank are untouched.
   ========================================================================== */
(function () {
  const DEST_KEY = "miles-destination";
  const BAL_KEY  = "miles-balance";

  const el = {
    journey:  document.getElementById("journey"),
    select:   document.getElementById("destSelect"),
    balance:  document.getElementById("milesBalance"),
    to:       document.getElementById("runwayTo"),
    fill:     document.getElementById("runwayFill"),
    plane:    document.getElementById("plane"),
    progress: document.getElementById("runwayProgress"),
    stats:    document.getElementById("journeyStats"),
  };
  if (!el.journey || !el.select) return;

  const nf = (n) => Number(n).toLocaleString("en-SG");
  const escape = (s) => String(s == null ? "" : s)
    .replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  let destinations = [];
  let awardChart = null;
  let current = null;

  const loadBalance = () => {
    const n = Number(localStorage.getItem(BAL_KEY));
    return Number.isFinite(n) && n > 0 ? n : 0;
  };

  /* --------------------------------------------------------------------------
     milesFor — the only place a mileage figure is ever produced.
     Pure: (zone, cabin, tripType, opts) -> { miles, backtrack, nonstopOnly } | null
     Returns null where the chart prints '^' (no published fare — SIA's mileage
     calculator is authoritative there). A round trip is exactly twice one-way,
     per the chart's own general notes.
     ------------------------------------------------------------------------ */
  function milesFor(zone, cabin, tripType, opts) {
    if (!awardChart) return null;
    const o = opts || {};
    const chart = awardChart.charts[(o.awardType || "advantage").toLowerCase()];
    if (!chart) return null;

    const grid = chart.matrix[cabin];
    if (!grid) return null;

    const from = (o.originZone || 1) - 1;
    const to = zone - 1;
    const cell = grid[from] && grid[from][to];
    if (!cell) return null;

    return {
      miles: cell.miles * (tripType === "roundTrip" ? 2 : 1),
      backtrack: !!cell.backtrack,
      nonstopOnly: !!cell.nonstopOnly,
    };
  }
  window.milesFor = milesFor;   // documented in README; handy for spot-checks

  /* requiredMiles is never stored — it is derived from the award chart. */
  const awardFor = (d) =>
    d ? milesFor(d.zone, (d.cabin || "Business").toLowerCase(), d.tripType || "oneWay",
                 { awardType: d.awardType, originZone: d.originZone }) : null;

  function statHtml(label, value, extra) {
    return `<div class="stat${extra ? " " + extra : ""}">
      <dt>${escape(label)}</dt><dd>${escape(value)}</dd></div>`;
  }

  function render() {
    if (!current) return;

    const award = awardFor(current);
    /* '^' in the chart — no published fare for this zone pair */
    if (!award) {
      el.to.textContent = current.airport.split(" / ")[0];
      el.fill.style.width = "0%";
      el.plane.style.left = "0%";
      el.journey.classList.remove("is-ready");
      el.progress.innerHTML = `No published award fare for ${escape(current.city)} — check the SIA mileage calculator.`;
      el.stats.innerHTML = statHtml("Destination", `${current.city}, ${current.country}`, "stat-wide");
      return;
    }

    const required  = award.miles;
    const balance   = loadBalance();
    const remaining = Math.max(0, required - balance);
    const pct       = required > 0 ? Math.min(100, (balance / required) * 100) : 0;
    const ready     = remaining === 0 && required > 0;

    el.to.textContent = current.airport.split(" / ")[0];

    el.fill.style.width = pct + "%";
    el.plane.style.left = pct + "%";
    el.journey.classList.toggle("is-ready", ready);

    el.progress.innerHTML = ready
      ? `<strong>Cleared for takeoff.</strong> You have enough miles for ${escape(current.city)}.`
      : `<strong>${pct.toFixed(1)}%</strong> of the way to ${escape(current.city)}`;

    const notes = [];
    if (award.backtrack)   notes.push("backtracking route — confirm exact mileage");
    if (award.nonstopOnly) notes.push("non-stop flights only");

    el.stats.innerHTML = [
      statHtml("Destination", `${current.city}, ${current.country}`, "stat-wide"),
      statHtml("Required", `${nf(required)} miles`),
      statHtml("You have", `${nf(balance)} miles`),
      statHtml("Remaining", ready ? "None — go book it" : `${nf(remaining)} miles`),
      statHtml("Progress", `${pct.toFixed(1)}%`),
    ].join("") + (notes.length
      ? `<p class="journey-note">${escape(current.cabin)} ${escape(current.awardType)}, one-way · ${escape(notes.join(" · "))}</p>`
      : `<p class="journey-note">${escape(current.cabin)} ${escape(current.awardType)} award, one-way from Singapore</p>`);
  }

  function selectDestination(id, persist) {
    current = destinations.find((d) => d.id === id) || destinations[0];
    if (!current) return;
    el.select.value = current.id;
    if (persist) localStorage.setItem(DEST_KEY, current.id);
    render();
  }

  el.select.addEventListener("change", () => selectDestination(el.select.value, true));

  el.balance.addEventListener("input", () => {
    const n = Math.max(0, Math.floor(Number(el.balance.value) || 0));
    localStorage.setItem(BAL_KEY, String(n));
    render();
  });

  const getJson = (url) =>
    fetch(url).then((r) => (r.ok ? r.json() : Promise.reject(new Error(url + " " + r.status))));

  Promise.all([getJson("data/destinations.json"), getJson("data/award-chart.json")])
    .then(([rows, chart]) => {
      destinations = rows;
      awardChart = chart;
      if (!destinations.length) return;

      el.select.innerHTML = destinations
        .map((d) => {
          const a = awardFor(d);
          const label = a ? `${nf(a.miles)} miles` : "fare on request";
          return `<option value="${escape(d.id)}">${escape(d.city)} · ${escape(d.airport)} — ${label}</option>`;
        })
        .join("");

      const saved = localStorage.getItem(DEST_KEY);
      const balance = loadBalance();
      if (balance > 0) el.balance.value = String(balance);

      el.journey.hidden = false;
      selectDestination(saved && destinations.some((d) => d.id === saved) ? saved : destinations[0].id, false);
    })
    .catch(() => { /* data file unavailable — hero degrades to the ranker console */ });
})();

/* Flyover: retrigger on a random 60–120s cadence (CSS can't randomise timing). */
(function () {
  const plane = document.getElementById("flyover");
  if (!plane || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  plane.addEventListener("animationend", () => plane.classList.remove("is-flying"));
  const schedule = () => setTimeout(() => {
    if (!document.hidden) plane.classList.add("is-flying");
    schedule();
  }, 60000 + Math.random() * 60000);
  setTimeout(() => plane.classList.add("is-flying"), 6000);
  schedule();
})();
