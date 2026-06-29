# Geo-SEO Complete Setup

## Step 1: Configure Regions

Edit `src/config/seo.config.ts` and add your regions:

```typescript
export const GEO_REGIONS = {
  TR: { name: 'Turkey', lang: 'tr', hreflang: 'tr-TR' },
  US: { name: 'USA', lang: 'en', hreflang: 'en-US' },
};
```

## Step 2: IP Geolocation API

Choose provider: IPStack, MaxMind, or IP2Location

## Step 3: Hreflang Implementation

Use `generateHreflang()` function from `lib/geo-seo.ts`

## Step 4: Multi-Region Content

Use `generateStaticParams()` with regions

## Step 5: Geo-Redirect Middleware

Detect region and redirect or add headers
