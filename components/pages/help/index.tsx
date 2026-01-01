'use client';
import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import MainTitle from '@/components/atoms/MainTitle';
import AnimatedWrapper from '@/components/molecules/FramerMotion/AnimatedWrapper';
import InfoListSection from '@/components/molecules/InfoListSection';
import CardWrapper from '@/components/Template/CardWrapper';
import { HelpContent } from '@/mock';
import { HelpCircle } from 'lucide-react';
import React from 'react';

const HelpPage = () => {
  return (
    <Layer otherClassName="bg-muted/30">
      <Container>
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Header */}
          <MainTitle
            title="Help Center"
            description="We’re here to help you have the best shopping experience possible. Below you’ll find answers to the most common questions."
            Icon={HelpCircle}
          />

          {/* Intro */}
          <AnimatedWrapper>
            <CardWrapper>
              <div className="flex flex-col gap-2">
                <div>
                  <p className="leading-relaxed font-semibold">
                    How do I place an order?
                  </p>
                  <p className="leading-relaxed">
                    Browse products, add items to your cart, and complete
                    checkout securely.
                  </p>
                </div>
                <div>
                  <p className="leading-relaxed font-semibold">
                    Can I modify or cancel my order?
                  </p>
                  <p className="leading-relaxed">
                    Orders can be modified or canceled within a short time after
                    placing them. Please contact us as soon as possible.
                  </p>
                </div>
              </div>
            </CardWrapper>
          </AnimatedWrapper>

          {/* Sections */}
          {HelpContent.map((card) => (
            <InfoListSection
              key={card.id}
              Icon={card.Icon}
              title={card.title}
              description={card.description}
              highlight={card.highlight}
              link={card.link}
            />
          ))}
        </div>
      </Container>
    </Layer>
  );
};

export default HelpPage;
