# Setup Secrets for GitHub Actions

## Vercel Deployment

1. Go to Settings → Secrets and variables → Actions
2. Add these secrets:

```
VERCEL_TOKEN: Your Vercel token
VERCEL_ORG_ID: Your Vercel org ID
VERCEL_PROJECT_ID: Your Vercel project ID
```

## Get Vercel Token

1. Go to https://vercel.com/account/tokens
2. Create new token
3. Copy and paste to GitHub secrets

## Database

Set DATABASE_URL in Vercel project environment variables:
```
DATABASE_URL=postgresql://user:password@host/db
```
