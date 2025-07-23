import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useOnScreen from '../../utils/useOnScreen';

export default function ExpertiseSection({ item, imageLeft = false }) {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      ref={ref}
      id={item.id}
      style={{ backgroundColor: item.bgColor }}
      className={`py-20 group transition-all duration-1000 ease-out ${
        isMounted && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row items-center gap-12 ${imageLeft ? 'md:flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-serif text-primary mb-4">{item.title}</h2>
            <p className="text-lg text-gray-700 font-serif mb-6">{item.description}</p>
            <Link href={item.link} className="font-semibold text-primary hover:underline font-serif">
                Learn More
            </Link>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <Image
              src={item.image}
              alt={`A decorative image representing GIVORO's expertise in ${item.title}.`}
              width={1440}
              height={810}
              className="rounded-lg shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 