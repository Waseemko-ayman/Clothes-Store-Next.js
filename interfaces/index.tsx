/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ButtonIconPosition,
  ButtonTypes,
  ButtonVarinats,
  InputTypes,
} from '@/utils/types';
import { Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface APIRequest {
  isLoading: boolean;
  error: any;
  refresh: () => void;
}

export interface FormValues {
  username: string;
  email: string;
  password: string;
  subject: string;
  message: string;
}

export interface ProductCardProps {
  id: number;
  slug: string;
  src: string;
  gallery: string[];
  imgText: string;
  tradeMark: string;
  productTitle: string;
  price: number;
  quantity: number;
  size: string[];
  description: string;
  section: string;
}

export interface CartContextType {
  cartItems: ProductCardProps[];
  addToCart: (item: ProductCardProps) => void;
  updateQuantity: (idOrSlug: number | string, quantity: number) => void;
  removeFromCart: (idOrSlug: number | string) => void;
  clearCart: () => void;
}

export interface ButtonProps {
  children?: React.ReactNode;
  otherClassName?: string;
  variant?: ButtonVarinats;
  borderRadius?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonTypes;
  Icon?: React.ElementType;
  iconPosition?: ButtonIconPosition;
  iconClassName?: string;
  disabled?: boolean;
  // bgColor?: string;
  // hoverBgColor?: string;
  target?: string;
}

export interface CartProps {
  updateQuantity: (id: number | string, quantity: number) => void;
  handleDelete: (id: number | string, itemTitle: string) => void;
}

export interface CartTableProps extends CartProps {
  tabeleData: { tableHeaders: string[]; tabelContent: ProductCardProps[] };
}

export interface CartCardseProps extends CartProps {
  cartItems: ProductCardProps[];
}

export type TableRow = {
  id: number;
  title: string;
  price?: number;
  shipping?: number | string;
};

export interface AnimatedWrapperProps {
  children: ReactNode;
  custom?: number;
  variants?: Variants;
  direction?: 'x' | 'y';
  distance?: number;
  duration?: number;
}

export interface QuantityControllerProps {
  otherClassName?: string;
  item: {
    id: number | string;
    slug?: string;
    quantity?: number;
  };
  updateQuantity: (key: number | string, quantity: number) => void;
}

export interface AuthHeaderProps {
  title?: string;
  description?: string;
}

export interface AuthRedirectProps {
  text: string;
  linkText: string;
  href: string;
}

export interface FieldType {
  id: number | string;
  name: string;
  type: InputTypes | string;
  label: string;
  placeholder: string;
}

export interface StatusPasswordProps {
  title: string;
  description: string;
  icon: 'check' | 'lock';
  iconBgColor?: string;
  iconColor?: string;
  linkText?: string;
  linkHref?: string;
  infoText?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export interface AuthTemplateProps {
  error: string;
  handleFormSubmit?: (e: React.FormEvent) => Promise<void>;
  headerTitle?: string;
  headerDescription?: string;
  formChildren?: React.ReactNode;
  children?: React.ReactNode;
  loadingText: string;
  submitBtnText: string;
  loading: boolean;
  fieldsTypes?: FieldType[];
  pageName?: string;
  otherClassName?: string;
}

export interface NavItemProps {
  name: string | ReactNode;
  linkPath?: string;
  otherClassNameIcon?: string;
  showArrow?: boolean;
  onClick?: () => void;
  icon?: React.ElementType | string | any;
  otherClassName?: string;
  isMobile?: boolean;
}

export interface NavItem {
  name: string;
  link: string;
}

export interface NavItemLinkProps {
  item: NavItem;
  linksStyleing: string;
}

export interface AccountSectionHeaderProps {
  title: string;
  description: string;
  action?: React.ReactNode;
  handleBack?: () => void;
}
export interface InputProps extends React.HTMLAttributes<HTMLElement> {
  type: InputTypes | string;
  placeholder: string;
  variant?: 'primary' | 'secondary';
  otherClassName?: string;
  inputName: any;
  Icon?: React.ElementType;
  iconClassName?: string;
  onIconClick?: () => void;
  register?: UseFormRegister<FormValues>;
  value?: string | number;
  label?: string;
  labelClassName?: string;
  isRequired?: boolean;
  onChange?: (e: React.ChangeEvent<any>) => void;
}

export interface AccountOrderCardProps {
  id: string;
  date: string;
  status: string;
  total: string;
  items: number;
}

export interface AccountAddrCardProps {
  id: number;
  type: string;
  address: string;
  city: string;
  default: boolean;
}

export interface SettingsStateProps {
  key: string;
  title: string;
  description: string;
}

export interface AccountSettingsCardProps extends SettingsStateProps {
  id: number;
  icon: React.ElementType;
}
