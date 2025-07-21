import React from 'react';

export default function CareersSlice() {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-card bg-accent flex flex-col md:flex-row items-center justify-between p-10 gap-8">
      {/* Placeholder hero image */}
      <div className="flex-1 min-w-[220px] flex items-center justify-center">
        <img
          src="/images/careers-hero.jpg"
          alt="Field team with QR dashboard overlay"
          className="w-full max-w-xs md:max-w-md rounded-xl shadow-lg object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <h2 className="font-heading text-2xl md:text-3xl text-primary font-bold mb-4">130+ minds, one mission: good-will at scale.</h2>
        <p className="text-gray-900 mb-6">Join a team that’s passionate about making real-world impact through innovative, on-ground campaigns and technology.</p>
        <a href="#" className="inline-block px-8 py-3 rounded-full bg-primary text-accent font-bold shadow hover:bg-secondary transition-colors">Join Our Talent Network</a>
      </div>
    </div>
  );
} 