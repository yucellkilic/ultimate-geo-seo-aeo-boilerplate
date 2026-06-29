# Troubleshooting

## Common Issues

### Module not found
```bash
rm -rf .next
rm -rf node_modules package-lock.json
npm install
```

### Database connection errors
```bash
npx prisma db push
```

### Port 3000 in use
```bash
lsof -i :3000
kill -9 <PID>
```

### TypeScript errors
```bash
npm run type-check
```

### Build failures
```bash
rm -rf .next
npm run build
```
