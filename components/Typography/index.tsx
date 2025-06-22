import { motion } from 'framer-motion';

interface TypeProps {
  children: React.ReactNode;
}

export const H1 = ({ children }: TypeProps) => {
  return <motion.h1 className="">{children}</motion.h1>;
};

export const H2 = ({ children }: TypeProps) => {
  return <motion.h2 className="">{children}</motion.h2>;
};

export const H3 = ({ children }: TypeProps) => {
  return <motion.h3 className="">{children}</motion.h3>;
};

export const H4 = ({ children }: TypeProps) => {
  return <motion.h4  className="">{children}</motion.h4>;
};

export const H5 = ({ children }: TypeProps) => {
  return <motion.h5 className="">{children}</motion.h5>;
};

export const H6 = ({ children }: TypeProps) => {
  return <motion.h6 className="">{children}</motion.h6>;
};

export const Body1 = ({ children }: TypeProps) => {
  return <motion.p className="">{children}</motion.p>;
};

export const Body2 = ({ children }: TypeProps) => {
  return <motion.p className="">{children}</motion.p>;
};

export const Div = ({ children }: TypeProps) => {
  return <motion.div className="">{children}</motion.div>;
};

export const Caption = ({ children }: TypeProps) => {
  return <motion.span className="">{children}</motion.span>;
};
