import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ExpertiseSection({ item, imageLeft = false }) {
  return (
    <section style={{ backgroundColor: item.bgColor }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row items-center gap-12 ${imageLeft ? 'md:flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-serif text-primary mb-4">{item.title}</h2>
            <p className="text-lg text-gray-700 font-serif mb-6">{item.description}</p>
            <Link href={item.link} className="font-semibold text-primary hover:underline font-serif">
                View projects
            </Link>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <Image
              src={item.image}
              alt={item.title}
              width={1440}
              height={810}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 