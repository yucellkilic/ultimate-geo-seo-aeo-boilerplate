# Database Schema

## Users Table
```prisma
model User {
  id        String     @id @default(cuid())
  email     String     @unique
  name      String?
  role      String     @default("user")
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
}
```

## Posts Table
```prisma
model Post {
  id        String     @id @default(cuid())
  title     String
  slug      String     @unique
  published Boolean    @default(false)
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
}
```

## Products Table
```prisma
model Product {
  id        String     @id @default(cuid())
  name      String
  price     Float
  stock     Int
  published Boolean    @default(false)
  createdAt DateTime   @default(now())
}
```
