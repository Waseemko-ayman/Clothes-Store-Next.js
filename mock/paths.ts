export const PATHS = {
  HOME: '/',
  SHOP: {
    ROOT: '/shop',
    ITEM: (id: number) => `/shop/${id}`,
  },
  BLOG: '/blog',
  ABOUT: '/about',
  CONTACT: '/contact',
  CART: '/cart',
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
};
