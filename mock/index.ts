import { PATHS } from './paths';
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from 'react-icons/fa6';

export const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Shop', link: PATHS.SHOP.ROOT },
  { name: 'Blog', link: PATHS.BLOG },
  { name: 'About', link: PATHS.ABOUT },
  { name: 'Contact', link: PATHS.CONTACT },
  { name: 'Cart', link: PATHS.CART },
];

export const FETURES = [
  {
    id: 1,
    title: 'Free Shipping',
    image: '/assets/features/Free shipping-bro.svg',
    bgColor: 'bg-[#92e3a99d]',
  },
  {
    id: 2,
    title: 'Online Order',
    image: '/assets/features/Order ahead-amico.svg',
    bgColor: 'bg-[#c786d396]',
  },
  {
    id: 3,
    title: 'Save Money',
    image: '/assets/features/E-Wallet-bro.svg',
    bgColor: 'bg-[#92e2e3]',
  },
  {
    id: 4,
    title: 'Promotions',
    image: '/assets/features/Shop giveaway-rafiki.svg',
    bgColor: 'bg-[#407cff91]',
  },
  {
    id: 5,
    title: 'Happy Sell',
    image: '/assets/features/Self confidence-bro.svg',
    bgColor: 'bg-[#bdc1c3]',
  },
  {
    id: 6,
    title: 'F24/7 Support',
    image: '/assets/features/Service 24_7-bro.svg',
    bgColor: 'bg-[#edc5c5]',
  },
];

export const CLOTHES = [
  {
    id: 1,
    src: '/assets/products/prod1.jpg',
    imgText: 'T-Shirts',
    tradeMark: 'adidas',
    productTitle: 'Cartoon Astronaut T-Shirts',
    price: 78,
    section: 'featured',
  },
  {
    id: 2,
    src: '/assets/products/prod2.jpg',
    imgText: 'T-Shirts',
    tradeMark: 'adidas',
    productTitle: 'Cartoon Astronaut T-Shirts',
    price: 65,
    section: 'featured',
  },
  {
    id: 3,
    src: '/assets/products/prod3.jpg',
    imgText: 'T-Shirts',
    tradeMark: 'adidas',
    productTitle: 'Cartoon Astronaut T-Shirts',
    price: 88,
    section: 'featured',
  },
  {
    id: 4,
    src: '/assets/products/prod4.jpg',
    imgText: 'T-Shirts',
    tradeMark: 'adidas',
    productTitle: 'Cartoon Astronaut T-Shirts',
    price: 57,
    section: 'featured',
  },
  {
    id: 5,
    src: '/assets/products/prod5.jpg',
    imgText: 'T-Shirts',
    tradeMark: 'adidas',
    productTitle: 'Cartoon Astronaut T-Shirts',
    price: 94,
    section: 'featured',
  },
  {
    id: 6,
    src: '/assets/products/prod6.jpg',
    imgText: 'T-Shirts',
    tradeMark: 'adidas',
    productTitle: 'Cartoon Astronaut T-Shirts',
    price: 94,
    section: 'featured',
  },
  {
    id: 7,
    src: '/assets/products/prod7.jpg',
    imgText: 'T-Shirts',
    tradeMark: 'adidas',
    productTitle: 'Cartoon Astronaut T-Shirts',
    price: 94,
    section: 'featured',
  },
  {
    id: 8,
    src: '/assets/products/prod8.jpg',
    imgText: 'T-Shirts',
    tradeMark: 'adidas',
    productTitle: 'Cartoon Astronaut T-Shirts',
    price: 94,
    section: 'featured',
  },
  {
    id: 9,
    src: '/assets/products/prod9.jpg',
    imgText: 'T-Shirts',
    tradeMark: 'adidas',
    productTitle: 'Cartoon Astronaut T-Shirts',
    price: 94,
    section: 'newArrivals',
  },
  {
    id: 10,
    src: '/assets/products/prod10.jpg',
    imgText: 'T-Shirts',
    tradeMark: 'adidas',
    productTitle: 'Cartoon Astronaut T-Shirts',
    price: 94,
    section: 'newArrivals',
  },
  {
    id: 11,
    src: '/assets/products/prod11.jpg',
    imgText: 'T-Shirts',
    tradeMark: 'adidas',
    productTitle: 'Cartoon Astronaut T-Shirts',
    price: 94,
    section: 'newArrivals',
  },
  {
    id: 12,
    src: '/assets/products/prod12.jpg',
    imgText: 'T-Shirts',
    tradeMark: 'adidas',
    productTitle: 'Cartoon Astronaut T-Shirts',
    price: 94,
    section: 'newArrivals',
  },
  {
    id: 13,
    src: '/assets/products/prod13.jpg',
    imgText: 'T-Shirts',
    tradeMark: 'adidas',
    productTitle: 'Cartoon Astronaut T-Shirts',
    price: 94,
    section: 'newArrivals',
  },
  {
    id: 14,
    src: '/assets/products/prod14.jpg',
    imgText: 'T-Shirts',
    tradeMark: 'adidas',
    productTitle: 'Cartoon Astronaut T-Shirts',
    price: 94,
    section: 'newArrivals',
  },
  {
    id: 15,
    src: '/assets/products/prod15.jpg',
    imgText: 'T-Shirts',
    tradeMark: 'adidas',
    productTitle: 'Cartoon Astronaut T-Shirts',
    price: 94,
    section: 'newArrivals',
  },
  {
    id: 16,
    src: '/assets/products/prod16.jpg',
    imgText: 'T-Shirts',
    tradeMark: 'adidas',
    productTitle: 'Cartoon Astronaut T-Shirts',
    price: 94,
    section: 'newArrivals',
  },
];

export const FOOTER_LINKS_DATA = {
  followUs: [
    {
      id: 1,
      url: 'https://github.com/Waseemko-ayman',
      icon: FaGithub,
    },
    {
      id: 2,
      url: 'https://twitter.com/waseemabdalhady',
      icon: FaTwitter,
    },
    {
      id: 3,
      url: 'https://www.linkedin.com/in/waseem-abd-elhadi-1b293624b/',
      icon: FaLinkedin,
    },
    {
      id: 4,
      url: 'https://www.instagram.com/waseem.abdalhady/',
      icon: FaInstagram,
    },
    {
      id: 5,
      url: 'https://t.me/waseem_abdalhady',
      icon: FaTelegram,
    },
    {
      id: 6,
      url: 'mailto:wasimabdelhadi78@gmail.com',
      icon: FaEnvelope,
    },
  ],
  About: [
    {
      id: 1,
      url: '#',
      text: 'About Us',
    },
    {
      id: 2,
      url: '#',
      text: 'Delivery Information',
    },
    {
      id: 3,
      url: '#',
      text: 'Privacy Policy',
    },
    {
      id: 4,
      url: '#',
      text: 'Terms & Conditions',
    },
    {
      id: 5,
      url: '#',
      text: 'Contact Us',
    },
  ],
  myAccount: [
    {
      id: 1,
      url: '#',
      text: 'Sign In',
    },
    {
      id: 2,
      url: '#',
      text: 'View Cart',
    },
    {
      id: 3,
      url: '#',
      text: 'My Wishlist',
    },
    {
      id: 4,
      url: '#',
      text: 'Track My Order',
    },
    {
      id: 5,
      url: '#',
      text: 'Help',
    },
  ],
};

export const APP_STORE = [
  {
    id: 1,
    imgSrc: '/assets/pay/app.jpg',
    imgAlt: 'app store',
    url: '#',
  },
  {
    id: 2,
    imgSrc: '/assets/pay/play.jpg',
    imgAlt: 'google play',
    url: '#',
  },
];

export const CONTACT_INFO = [
  {
    id: 1,
    title: 'Address',
    info: 'Occupied Palestine, Gaza',
  },
  {
    id: 2,
    title: 'Phone',
    info: '+972592164680',
  },
  {
    id: 3,
    title: 'Whats app',
    info: '+972592164680',
  },
];
