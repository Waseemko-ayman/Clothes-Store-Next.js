import { FormValues } from '@/interfaces';
import { PATHS } from './paths';
import {
  FaClock,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMap,
  FaPhone,
  FaTelegram,
  FaTwitter,
} from 'react-icons/fa6';

export const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Shop', link: PATHS.SHOP.ROOT },
  { name: 'Blog', link: PATHS.BLOG },
  { name: 'About', link: PATHS.ABOUT },
  { name: 'Contact', link: PATHS.CONTACT },
  { name: 'Login', link: PATHS.AUTH.LOGIN },
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

export const NEVER_READ = [
  {
    id: 1,
    src: 'b1.jpg',
    imgTitle: 'The Cotton - Jersy Zip - Up hoodie',
    title: 'The Cotton - Jersy Zip - Up hoodie',
    description:
      'Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr walf chartreuse hexagan irony. godard_',
    beforeContent: '13/01',
  },
  {
    id: 2,
    src: 'b2.jpg',
    imgTitle: 'How to Style a Quiff',
    title: 'How to Style a Quiff',
    description:
      'Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr walf chartreuse hexagan irony. godard_',
    beforeContent: '13/04',
  },
  {
    id: 3,
    src: 'b3.jpg',
    imgTitle: 'Must - Have Skater girl Items',
    title: 'Must - Have Skater girl Items',
    description:
      'Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr walf chartreuse hexagan irony. godard_',
    beforeContent: '12/01',
  },
  {
    id: 4,
    src: 'b4.jpg',
    imgTitle: 'Runway - Inspired Trends',
    title: 'Runway - Inspired Trends',
    description:
      'Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr walf chartreuse hexagan irony. godard_',
    beforeContent: '16/01',
  },
  {
    id: 5,
    src: 'b6.jpg',
    imgTitle: 'AW20 Mensweare Trends',
    title: 'AW20 Mensweare Trends',
    description:
      'Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr walf chartreuse hexagan irony. godard_',
    beforeContent: '10/03',
  },
];

export const CONTACT_DATA = [
  {
    id: 1,
    icon: FaMap,
    community: 'Occupied Palestine, Gaza',
  },
  {
    id: 2,
    icon: FaEnvelope,
    community: 'wasimabdelhadi78@gmail.com',
  },
  {
    id: 3,
    icon: FaPhone,
    community: '+972592164680',
  },
  {
    id: 4,
    icon: FaClock,
    community: 'Monday to Saturday: 9:00am to 16:00pm',
  },
];

export const PERSON_INFO = [
  {
    id: 1,
    name: 'John Doe',
    src: 'personal-1',
    information: [
      {
        id: 1,
        infoText: 'Senior Marking Manager',
      },
      {
        id: 2,
        infoText: 'Phone: +000 123 00 77',
      },
      {
        id: 3,
        infoText: 'Email: contact@example.com',
      },
    ],
  },
  {
    id: 2,
    name: 'William Smith',
    src: 'personal-2',
    information: [
      {
        id: 1,
        infoText: 'Senior Marking Manager',
      },
      {
        id: 2,
        infoText: 'Phone: +000 123 00 77',
      },
      {
        id: 3,
        infoText: 'Email: contact@example.com',
      },
    ],
  },
  {
    id: 3,
    name: 'Emma Stone',
    src: 'personal-3',
    information: [
      {
        id: 1,
        infoText: 'Senior Marking Manager',
      },
      {
        id: 2,
        infoText: 'Phone: +000 123 00 77',
      },
      {
        id: 3,
        infoText: 'Email: contact@example.com',
      },
    ],
  },
];

export const INPUT_TYPE: {
  id: number;
  type: 'text' | 'email' | 'textarea';
  name: keyof FormValues;
  placeholder: string;
}[] = [
  {
    id: 1,
    type: 'text',
    name: 'username',
    placeholder: 'Your Name',
  },
  {
    id: 2,
    type: 'email',
    name: 'email',
    placeholder: 'E-mail',
  },
  {
    id: 3,
    type: 'text',
    name: 'subject',
    placeholder: 'Subject',
  },
  {
    id: 4,
    type: 'textarea',
    name: 'message',
    placeholder: 'Your Message',
  },
];

export const loginInputs = [
  {
    id: 1,
    label: 'Email Address',
    type: 'email',
    name: 'email',
    placeholder: 'you@example.com',
  },
  {
    id: 2,
    label: 'Password',
    type: 'password',
    name: 'password',
    placeholder: 'Enter your password',
  },
];

export const signupInputs = [
  {
    id: 1,
    label: 'Username',
    type: 'text',
    name: 'name',
    placeholder: 'Your Name',
  },
  {
    id: 2,
    label: 'Email Address',
    type: 'email',
    name: 'email',
    placeholder: 'you@example.com',
  },
  {
    id: 3,
    label: 'Password',
    type: 'password',
    name: 'password',
    placeholder: 'Enter your password',
  },
  {
    id: 4,
    type: 'password',
    label: 'Password Confirmation',
    name: 'password_confirmation',
    placeholder: 'repassword',
  },
];
