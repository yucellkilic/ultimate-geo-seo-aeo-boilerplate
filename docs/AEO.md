# AEO Optimization Guide

## Answer Engine Optimization

Optimize content for ChatGPT, Claude, Gemini and other AI search engines.

## Structured Data

### FAQ Schema
```typescript
import { generateFAQSchema } from '@/lib/aeo-schema';

const schema = generateFAQSchema([
  { question: 'What?', answer: 'It is...' },
]);
```

### Article Schema
```typescript
import { generateArticleSchema } from '@/lib/aeo-schema';

const schema = generateArticleSchema({
  title: 'Article Title',
  description: 'Description',
});
```

### Product Schema
```typescript
import { generateProductSchema } from '@/lib/aeo-schema';

const schema = generateProductSchema({
  name: 'Product Name',
  price: 99.99,
  currency: 'USD',
});
```
