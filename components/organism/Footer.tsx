import Image from 'next/image';
import React from 'react';
import Container from '../atoms/Container';
import Layer from '../atoms/Layer';
import FooterLinks from '../molecules/FooterLinks';
import Link from 'next/link';
import { APP_STORE } from '@/mock';

const Footer = () => {
  const StyledHeading = 'text-[17px] font-bold mb-3.5';
  return (
    <Layer>
      <footer>
        <Container otherClassName="flex items-center justify-between flex-wrap gap-5">
          <div className="info">
            <Image
              src="/assets/landing/logo.png"
              alt="logo"
              className="mb-8"
              width={140}
              height={40}
            />
            <h4 className={StyledHeading}>Contact</h4>
            <div className="mb-6">
              <p className="mb-0.5">
                <span className="text-[#088178] font-bold">Address:</span>{' '}
                Occupied Palestine, Gaza, Sudani
              </p>
              <p className="mb-0.5">
                <span className="text-[#088178] font-bold">Phone:</span> +01
                22222 356
              </p>
              <p className="mb-0.5">
                <span className="text-[#088178] font-bold">Hours:</span>{' '}
                10:00-18:00, Man-Sat
              </p>
            </div>
            <FooterLinks
              secTitle="Follow Us"
              listClassName="flex items-center gap-2.5"
              listName="followUs"
            />
          </div>
          <div className="box">
            <FooterLinks
              secTitle="About"
              listName="About"
              otherClassName="w-[150px] "
            />
          </div>
          <div className="box">
            <FooterLinks
              secTitle="My Account"
              listName="myAccount"
              otherClassName="w-[150px] "
            />
          </div>
          <div>
            <h4 className={StyledHeading}>Install App</h4>
            <p className="text-[#465b52] text-base mt-[15px] mb-5">
              From App Store or Google Play
            </p>
            <div className="flex items-center justify-start flex-wrap gap-1.5">
              {APP_STORE.map(({ id, imgSrc, imgAlt, url }) => (
                <Link
                  key={id}
                  href={url}
                  className="border border-[#088178] rounded-[6px] px-1 hover:shadow-[10px_10px_34px_#08817917] transition duration-300"
                >
                  <Image src={imgSrc} alt={imgAlt} width={170} height={48} />
                </Link>
              ))}
            </div>
            <p className="text-[#465b52] text-base mt-[15px] mb-5">
              Secured Payment Gateays
            </p>
            <Link href="#">
              <Image
                src="/assets/pay/pay.png"
                alt="pay"
                width={224}
                height={32}
              />
            </Link>
          </div>
        </Container>
      </footer>
    </Layer>
  );
};

export default Footer;
