# Module Development Guide

## Creating a New Module

### 1. Directory Structure

```
src/modules/mymodule/
├── components/
├── hooks/
├── types/
└── config.ts
```

### 2. Enable Module

Edit `src/config/modules.config.ts`

### Best Practices

1. Use TypeScript
2. Export types from types/index.ts
3. Keep components focused
4. Add error handling
5. Include loading states
