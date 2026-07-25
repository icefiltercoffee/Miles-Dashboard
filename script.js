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
    "image_url": null,
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
    "image_url": null,
    "primary_reward_currency": "HSBC Points",
    "base_earn_rate": 0.4,
    "base_earn_rate_fcy": null,
    "is_reference_only": 0,
    "notes": "Income req is tiered since 1 Oct 2025: S$30k if Total Relationship Balance >= S$50k with HSBC, else S$65k. Travel + contactless bonuses made permanent from 1 Apr 2026.",
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
    "image_url": null,
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
    "image_url": null,
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
    "image_url": null,
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
    "image_url": null,
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
    "image_url": null,
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
    "image_url": null,
    "primary_reward_currency": "InstaPoints",
    "base_earn_rate": 0,
    "base_earn_rate_fcy": null,
    "is_reference_only": 1,
    "notes": "Routing card, not ranked: re-presents FCY / offline spend as an SGD online transaction to the paired Mastercard (pairs with Mastercard only — relevant to the Citi network question). ~2% FX spread over Mastercard rate; 1% fee on SGD spend since Feb 2025. Wallet-funded spend earns InstaPoints (~0.17 mpd) — negligible.",
    "unverified": 0,
    "source_url": "https://milelion.com/2026/07/07/whats-the-best-card-to-use-with-amaze/",
    "secondary_source_url": "https://milelion.com/2025/06/18/instarem-amaze-card-review/",
    "last_verified_date": "2026-07-19"
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
    "earn_rate": 4,
    "monthly_cap_amount": 1000,
    "monthly_cap_miles": 3600,
    "cap_group": "hsbc-revo",
    "requires_selection": 0,
    "is_selected": 1,
    "condition": null,
    "exclusions": "Exclusions per 16 Jul 2026 scrape: fast food, OTA travel agencies, SimplyGo transit, non-standard car rental",
    "notes": "Online OR contactless/app spend in bonus categories (dining, shopping, groceries, transport, travel, entertainment). Same rate locally and overseas. Travel + contactless permanent from 1 Apr 2026.",
    "unverified": 0
  },
  {
    "id": 4,
    "card_id": 2,
    "category_name": "online_contactless_bonus_ega_tier",
    "channel": "any",
    "mcc_codes": null,
    "earn_rate": 8,
    "monthly_cap_amount": 1200,
    "monthly_cap_miles": 9120,
    "cap_group": "hsbc-revo",
    "requires_selection": 0,
    "is_selected": 0,
    "condition": "Maintain S$50,000 average balance in HSBC Everyday Global Account",
    "exclusions": "Same exclusions as standard tier",
    "notes": "NOT ACTIVE for Joseph (baked assumption: standard tier). Listed for completeness.",
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
    "match_keywords": "[\"agoda\",\"booking.com\",\"expedia\",\"airbnb\",\"hotels.com\",\"traveloka\",\"trip.com\",\"kaligo\"]",
    "actual_mcc_category": "ota_travel_agency",
    "notes": "OTA MCC 4722: excluded from Citi Rewards bonus (travel blacklist) and from HSBC Revolution bonus; DOES qualify for KrisFlyer UOB Accelerated Miles (named-OTA list) and DBS WWMC online.",
    "verified_by": "system",
    "verified_date": "2026-07-19",
    "upvotes": 0
  },
  {
    "id": 7,
    "merchant_name": "Amaze-routed spend",
    "match_keywords": "[\"amaze\"]",
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
    "conversion_fee": null,
    "points_expiry": "60 months from card approval, rolling",
    "best_use_case": "KrisFlyer transfers; pools with other Citi cards",
    "notes": "Conversion fee not re-verified this pass — check before first transfer.",
    "unverified": 1
  },
  {
    "id": 2,
    "card_id": 2,
    "reward_currency": "HSBC Points",
    "typical_cpm_value": 2,
    "conversion_ratio": "25,000 points = 10,000 miles (2.5:1)",
    "conversion_fee": "None (fee-free, instant)",
    "points_expiry": "Check current T&Cs",
    "best_use_case": "20 transfer partners, instant and fee-free — best-in-class flexibility",
    "notes": "Expiry not re-verified this pass.",
    "unverified": 1
  },
  {
    "id": 3,
    "card_id": 3,
    "reward_currency": "DBS Points",
    "typical_cpm_value": 2,
    "conversion_ratio": "5,000 DBS Points = 10,000 miles",
    "conversion_fee": "S$27.25 per transfer (not re-verified)",
    "points_expiry": "Never (Altitude only)",
    "best_use_case": "KrisFlyer / AsiaMiles / Avios",
    "notes": "Min transfer block 10,000 miles.",
    "unverified": 1
  },
  {
    "id": 4,
    "card_id": 4,
    "reward_currency": "DBS Points",
    "typical_cpm_value": 2,
    "conversion_ratio": "5,000 DBS Points = 10,000 miles",
    "conversion_fee": "S$27.25 per transfer (not re-verified)",
    "points_expiry": "1 year",
    "best_use_case": "KrisFlyer",
    "notes": "1-year expiry demands disciplined annual sweeps — redeem with Altitude pooling if possible.",
    "unverified": 1
  },
  {
    "id": 5,
    "card_id": 5,
    "reward_currency": "UNI$",
    "typical_cpm_value": 2,
    "conversion_ratio": "5,000 UNI$ = 10,000 miles",
    "conversion_fee": "S$25–27 per transfer — sources differ (Milelion PPV review: S$27; Lady's review: S$25). Likely S$25 + GST.",
    "points_expiry": "2 years",
    "best_use_case": "KrisFlyer",
    "notes": "UNI$ pool across UOB cards for conversion.",
    "unverified": 1
  },
  {
    "id": 6,
    "card_id": 6,
    "reward_currency": "KrisFlyer Miles",
    "typical_cpm_value": 2,
    "conversion_ratio": "Direct crediting — no conversion",
    "conversion_fee": "None",
    "points_expiry": "3 years (KrisFlyer standard)",
    "best_use_case": "SIA Saver awards",
    "notes": "No transfer step at all — miles land in KrisFlyer monthly.",
    "unverified": 0
  },
  {
    "id": 7,
    "card_id": 7,
    "reward_currency": "UNI$",
    "typical_cpm_value": 2,
    "conversion_ratio": "5,000 UNI$ = 10,000 miles",
    "conversion_fee": "S$25–27 per transfer (see card 5 note)",
    "points_expiry": "2 years",
    "best_use_case": "KrisFlyer",
    "notes": null,
    "unverified": 1
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

  tags.online = has(t, ["online", "shop", "app", "website", "tiktok", "shopee", "lazada", "amazon", "taobao", "zalora", "carousell", "ebay", "aliexpress", "qoo10", "e-commerce", "web ", "site"]);
  tags.contactless = has(t, ["tap", "contactless", "paywave", "apple pay", "google pay", "samsung pay", "nfc"]);
  tags.inPersonExplicit = has(t, ["walk-in", "walk in", "in person", "in-person", "paid cash", "street hail", "flag down", "flag-down", "chip inserted", "swiped", "no tap"]);
  tags.dining = has(t, ["restaurant", "cafe", "coffee", "dine", "dinner", "lunch", "breakfast", "meal", "hawker", "bar ", "bistro", "grabfood", "foodpanda", "deliveroo", "food delivery"]);
  tags.foodDelivery = has(t, ["grabfood", "foodpanda", "deliveroo", "food delivery"]);
  tags.groceries = has(t, ["grocery", "groceries", "supermarket", "ntuc", "fairprice", "cold storage", "sheng siong", "giant "]);
  tags.travel = has(t, ["flight", "hotel", "airbnb", "agoda", "booking.com", "expedia", "trip.com", "hotels.com", "kaligo", "traveloka", "airline", "air ticket", "stay at", "staying at", "accommodation", ...HOTEL_BRANDS]);
  tags.ota = has(t, ["agoda", "booking.com", "expedia", "airbnb", "hotels.com", "kaligo", "traveloka", "trip.com"]);
  tags.sia = has(t, ["singapore airlines", " sia ", "sia flight", "sia ticket", "scoot", "krisshop", "kris+", "kris plus", "pelago"]);
  // App-hailed rides are card-not-present (process like e-commerce); a bare "taxi" could be a
  // physical tap/swipe, so it feeds transportCat but not the online flag.
  tags.appRide = has(t, ["grab ride", "grabcar", "grab car", "gojek", "ryde"]);
  tags.transportCat = tags.appRide || has(t, ["taxi", "comfortdelgro", "comfort ride", "mrt", "bus fare"]);
  tags.publicTransport = has(t, ["simplygo", "mrt", "bus fare"]);
  tags.petrol = has(t, ["petrol", "fuel", "gas station", "esso", "shell", "caltex", "spc ", "sinopec"]);
  tags.fashion = has(t, ["clothes", "clothing", "apparel", "shoes", "sneaker", "fashion", "dress", "jacket", "bag ", "handbag", "department store", "uniqlo", "zara"]);
  tags.beauty = has(t, ["facial", "skincare", "skin care", "cosmetic", "makeup", "beauty", "serum", "moisturi", "sunscreen", "spa ", "salon", "hair cut", "haircut", "manicure"]);
  tags.entertainment = has(t, ["movie", "cinema", "concert", "netflix", "spotify", "disney+", "ticketing", "sistic", "ticketmaster"]);
  tags.digitalSub = has(t, ["netflix", "spotify", "disney+", "youtube premium", "apple music", "amazon prime"]);
  tags.family = has(t, ["school", "tuition", "childcare", "kids", "baby", "diaper"]);
  tags.fastfood = has(t, ["mcdonald", "kfc", "starbucks", "burger king", "subway "]);
  tags.carRental = has(t, ["car rental", "rent a car"]);

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
  return ["online", "contactless", "dining", "groceries", "travel", "sia", "transportCat", "petrol", "fashion", "beauty", "entertainment", "family", "foreign"].some((k) => tags[k]);
}

function readableTags(tags) {
  const labels = {
    online: "online/app", contactless: "contactless", dining: "dining", groceries: "groceries",
    travel: "travel/hotel", ota: "OTA booking", sia: "SIA Group", transportCat: "transport",
    publicTransport: "SimplyGo/transit", petrol: "petrol", fashion: "fashion",
    beauty: "beauty/wellness", entertainment: "entertainment", family: "family",
    fastfood: "fast food", foreign: "foreign currency/overseas",
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
  "uob-ladys:beauty_wellness": (t) => t.beauty,
  "uob-ladys:fashion": (t) => t.fashion,
  "uob-ladys:dining": (t) => t.dining && !t.foodDelivery,
  "uob-ladys:entertainment": (t) => t.entertainment,
  "uob-ladys:family": (t) => t.family || t.groceries,
  "uob-ladys:transport": (t) => (t.transportCat && !t.publicTransport) || t.petrol,
  "uob-ladys:travel": (t) => t.travel,
};

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
    bits.push(`foreign-currency general rate ${card.base_earn_rate_fcy} mpd${card.slug === "dbs-altitude" ? ", uncapped" : ""}`);
  } else {
    bits.push(`base rate only (${card.base_earn_rate} mpd) — no bonus category matched`);
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
function rank(db, tags, amount, month) {
  const spentIn = (cardId, capGroup) => {
    const r = db.spendRows.find((s) => s.card_id === cardId && s.cap_group === capGroup && s.month === month);
    return r ? r.amount_spent : 0;
  };

  const results = [];
  for (const card of db.cards) {
    if (card.is_reference_only) continue;
    const base = tags.foreign && card.base_earn_rate_fcy != null ? card.base_earn_rate_fcy : card.base_earn_rate;

    // Best applicable bonus row for this card
    let best = null;
    for (const row of db.bonusRows.filter((r) => r.card_id === card.id && r.is_selected)) {
      const fn = APPLICABILITY[`${card.slug}:${row.category_name}`];
      if (!fn || !fn(tags)) continue;
      if (!best || row.earn_rate > best.earn_rate) best = row;
    }

    let miles, mpd, capWarning = null;
    if (best && best.earn_rate > base) {
      mpd = best.earn_rate;
      if (best.monthly_cap_amount != null) {
        const remaining = Math.max(0, best.monthly_cap_amount - spentIn(card.id, best.cap_group));
        const bonusPortion = Math.min(amount, remaining);
        miles = bonusPortion * best.earn_rate + Math.max(0, amount - remaining) * base;
        if (amount >= remaining) {
          capWarning = `This purchase uses up the last S$${remaining.toFixed(0)} of this month's ${best.category_name.replace(/_/g, " ")} cap — S$${(amount - remaining).toFixed(0)} of it earns only ${base} mpd.`;
        } else if (remaining - amount <= 0.2 * best.monthly_cap_amount) {
          capWarning = `S$${(remaining - amount).toFixed(0)} left before you hit this month's ${best.category_name.replace(/_/g, " ")} cap (S$${best.monthly_cap_amount}).`;
        }
      } else {
        miles = amount * mpd; // uncapped (KrisFlyer UOB)
      }
    } else {
      mpd = base;
      miles = amount * base;
    }

    results.push({
      card: card.name,
      slug: card.slug,
      mpd,
      miles: Math.round(miles * 10) / 10,
      sgd_value: Math.round(miles * 0.02 * 100) / 100, // 2.0¢/mile, matching redemption_notes
      why: whyFor(card, best && best.earn_rate > base ? best : null, tags),
      cap_warning: capWarning,
    });
  }

  results.sort((a, b) => b.miles - a.miles || b.mpd - a.mpd);
  return results.slice(0, 3);
}

/* ===== APP ===== */
// Miles Dashboard — client-side app. Fully static: the recommendation engine runs in
// the browser against the baked data.js (generated from schema/seed.sql). No backend.

const MONTH = new Date().toISOString().slice(0, 7);
const SPEND_KEY = `miles-spend:${MONTH}`;
const bySlug = Object.fromEntries(cards.map((c) => [c.slug, c]));
const byId = Object.fromEntries(cards.map((c) => [c.id, c]));

const ISSUER_COLOR = {
  Citibank: "#2f6fb0", HSBC: "#c8433a", DBS: "#c8433a",
  UOB: "#2a4b9b", Instarem: "#2f9d8f",
};
const prettyCat = (s) => s.replace(/_/g, " ").replace(/\bmcc\b/i, "MCC").replace(/\bega\b/i, "EGA").replace(/\bsia\b/i, "SIA");
const fmt = (n) => n.toLocaleString("en-SG", { maximumFractionDigits: n % 1 ? 1 : 0 });

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
};

const WARN_ICON = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';

function renderResults(top, tags) {
  const detTags = readableTags(tags);
  const quirkTxt = tags.quirkNotes.length ? ` · <b>quirk applied:</b> ${tags.quirkNotes.map((n) => n.split(":")[0]).join(", ")}` : "";
  els.detected.innerHTML = `<b>detected:</b> ${detTags}${quirkTxt}`;

  els.results.innerHTML = top.map((r, i) => {
    const card = bySlug[r.slug] || {};
    const whyHtml = r.why.replace(/(condition: [^;]+)/i, '<span class="rc-cond">$1</span>');
    const warn = r.cap_warning ? `<div class="rc-warn">${WARN_ICON}<span>${r.cap_warning}</span></div>` : "";
    return `
      <article class="result-card rank-${i + 1}">
        <div class="rank-medal">${i + 1}</div>
        <div class="result-main">
          <div class="rc-issuer">${card.issuer || ""}</div>
          <h3 class="rc-name">${r.card}</h3>
          <p class="rc-why">${whyHtml}</p>
          ${warn}
        </div>
        <div class="result-figure">
          <div class="rc-miles">${fmt(r.miles)}<small>miles</small></div>
          <div class="rc-rate"><b>${r.mpd}</b> mpd</div>
          <div class="rc-value">≈ S$${r.sgd_value.toFixed(2)}</div>
        </div>
      </article>`;
  }).join("");
}

function run() {
  const query = els.query.value.trim();
  if (!query) { els.results.innerHTML = ""; els.detected.innerHTML = ""; return; }
  const textAmt = extractAmount(query);
  if (textAmt) els.amount.value = textAmt;
  const amount = parseFloat(els.amount.value) || textAmt || 100;

  let tags = tagify(query);
  tags = applyQuirks(tags, quirks, query);
  const top = rank({ cards, bonusRows, spendRows: spendRows() }, tags, amount, MONTH);
  renderResults(top, tags);
}

els.form.addEventListener("submit", (e) => { e.preventDefault(); run(); });

const EXAMPLES = [
  "dinner at a restaurant",
  "grocery run at Cold Storage",
  "flight on Singapore Airlines S$800",
  "hotel in Bangkok on Agoda",
  "Shopee order S$120",
  "taxi in Tokyo",
];
els.chips.innerHTML = EXAMPLES.map((e) => `<button type="button" class="chip">${e}</button>`).join("");
els.chips.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => { els.query.value = chip.textContent; els.amount.value = ""; run(); els.query.focus(); });
});

/* ---------------------------------------------------------------- wallet */
function activeBonusText(card) {
  if (card.is_reference_only) return "Routing card — re-presents spend as SGD online. Not ranked.";
  const bonuses = selectedBonuses(card).filter((r) => r.earn_rate > card.base_earn_rate);
  if (!bonuses.length) return `Flat <b>${card.base_earn_rate} mpd</b> — no live bonus categories.`;
  const uniq = [...new Map(bonuses.map((b) => [`${b.earn_rate}|${b.category_name}`, b])).values()]
    .sort((a, b) => b.earn_rate - a.earn_rate);
  const shown = uniq.slice(0, 2).map((b) => `<b>${b.earn_rate} mpd</b> ${prettyCat(b.category_name)}`);
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
      <div class="cap-row"><span class="cap-label">${label} · ${info.rate} mpd</span>
        <span class="cap-val">S$${fmt(spent)} / ${fmt(info.cap)}</span></div>
      <div class="cap-track"><div class="cap-fill ${cls}" style="width:${pct}%"></div></div>
      <div class="cap-edit"><label>spent this month</label>
        <input type="number" min="0" step="10" value="${spent || ""}" placeholder="0" data-cap="${key}" data-cap-max="${info.cap}"></div>
    </div>`;
}

function walletCardHtml(card, i) {
  const issuer = ISSUER_COLOR[card.issuer] || "var(--gold)";
  const fcy = card.base_earn_rate_fcy != null
    ? `<div class="wc-stat"><div class="k">Overseas</div><div class="v">${card.base_earn_rate_fcy}<small> mpd</small></div></div>` : "";
  const groups = capGroups(card);
  let capsHtml = "";
  if (card.is_reference_only) capsHtml = "";
  else if (Object.keys(groups).length) capsHtml = Object.entries(groups).map(([g, info]) => capBarHtml(card, g, info)).join("");
  else if (selectedBonuses(card).some((r) => r.monthly_cap_amount == null && r.earn_rate > card.base_earn_rate))
    capsHtml = `<div class="wc-uncapped">✦ Bonus earning is uncapped</div>`;

  const flag = card.unverified ? `<span class="wc-flag">⚑ some figures unverified — see notes</span>` : "";
  const netClass = card.is_reference_only ? "wc-net wc-ref-tag" : "wc-net";

  return `
    <article class="wallet-card" style="--issuer:${issuer}">
      <div class="wc-top">
        <div><div class="wc-name">${card.name}</div><div class="wc-issuer">${card.issuer}</div></div>
        <span class="${netClass}">${card.is_reference_only ? "routing" : card.network}</span>
      </div>
      <div class="wc-stats">
        <div class="wc-stat"><div class="k">${card.base_earn_rate_fcy != null ? "Local" : "Base"}</div><div class="v">${card.base_earn_rate}<small> mpd</small></div></div>
        ${fcy}
      </div>
      <div class="wc-bonus">${activeBonusText(card)}</div>
      ${capsHtml}
      ${flag}
    </article>`;
}

const walletGrid = document.getElementById("walletGrid");
function renderWallet() {
  walletGrid.innerHTML = cards.map(walletCardHtml).join("");
  [...walletGrid.children].forEach((el, i) => el.style.setProperty("--i", i));
  walletGrid.querySelectorAll("input[data-cap]").forEach((input) => {
    input.addEventListener("input", () => {
      const key = input.dataset.cap;
      const val = Math.max(0, parseFloat(input.value) || 0);
      if (val) spend[key] = val; else delete spend[key];
      saveSpend(spend);
      // update just this bar + re-rank if results are on screen
      const wrap = input.closest(".cap");
      const max = parseFloat(input.dataset.capMax);
      const pct = Math.min(100, (val / max) * 100);
      const fill = wrap.querySelector(".cap-fill");
      fill.style.width = pct + "%";
      fill.className = "cap-fill " + (pct >= 100 ? "full" : pct >= 80 ? "warn" : "");
      wrap.querySelector(".cap-val").textContent = `S$${fmt(val)} / ${fmt(max)}`;
      if (els.query.value.trim()) run();
    });
  });
}

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
        <div><div class="rd-name">${card.name || r.reward_currency}</div><div class="rd-cur">${r.reward_currency}</div></div>
        <div class="rd-cpm">${r.typical_cpm_value.toFixed(1)}¢<small> /mile</small></div>
      </div>
      <div class="rd-meta">
        <div><span class="k">Convert</span><span class="v">${r.conversion_ratio || "—"}</span></div>
        <div><span class="k">Transfer fee</span><span class="v">${r.conversion_fee || "—"}</span></div>
        <div><span class="k">Points expire</span><span class="v ${expiryClass(r.points_expiry)}">${r.points_expiry || "—"}</span></div>
        <div><span class="k">Best use</span><span class="v">${r.best_use_case || "—"}</span></div>
      </div>
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
  ? `<b style="color:var(--danger)">⚑ ${unverified.length} cards carry unverified figures:</b> ${unverified.map((c) => c.name.replace(/ \(.*/, "")).join(", ")}. Every card records its source URL and verification date.`
  : "All figures verified against two sources.";

document.getElementById("footerFine").textContent =
  `Snapshot ${niceDate(verifiedDate)} · data baked ${niceDate(generatedAt.slice(0, 10))} · static site, figures don't self-update — ask Claude to refresh from The MileLion when caps or categories change.`;

renderWallet();

/* ---------------------------------------------------------------- reveal */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal, .card-grid, .redeem-grid").forEach((el) => io.observe(el));

})();
