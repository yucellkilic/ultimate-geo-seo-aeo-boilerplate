export const ecommerceRoutes = {
  shop: '/shop',
  products: '/shop/products',
  cart: '/shop/cart',
  checkout: '/shop/checkout',
  orders: '/shop/orders',
  account: '/shop/account',
};

export const blogRoutes = {
  blog: '/blog',
  post: (slug: string) => `/blog/${slug}`,
  category: (category: string) => `/blog/category/${category}`,
  search: '/blog/search',
};

export const saasRoutes = {
  dashboard: '/dashboard',
  pricing: '/pricing',
  billing: '/billing',
  settings: '/settings',
};

export const corporateRoutes = {
  home: '/',
  about: '/about',
  team: '/team',
  contact: '/contact',
};
