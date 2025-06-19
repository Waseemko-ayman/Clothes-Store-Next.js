'use client';
import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import { FETURES } from '@/mock';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Featurs = () => {
  return (
    <Layer>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:lg:grid-cols-6 gap-5">
          {FETURES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white max-w-full border border-[#cce7d0] py-6 px-4 shadow-[20px_20px_34px_rgba(0,0,0,0.03)] text-center hover:shadow-[10px_10px_54px_rgba(70,62,221,0.1)] hover:-translate-y-2 transition-all duration-200"
            >
              <Image
                src={item.image}
                alt="features"
                width={500}
                height={500}
                className="mb-3 w-full"
              />
              <span
                className={`block text-[12px] text-[#088178] p-2 rounded-sm font-semibold ${item.bgColor}`}
              >
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </Layer>
  );
};

export default Featurs;
