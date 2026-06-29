# Deployment Guide

## Vercel Deployment

1. Connect GitHub repository
2. Add environment variables
3. Deploy on push to main

## Docker Deployment

```bash
docker build -t ultimate-boilerplate:latest .
docker run -p 3000:3000 ultimate-boilerplate:latest
```

## Database Migration

```bash
npx prisma migrate deploy
```
