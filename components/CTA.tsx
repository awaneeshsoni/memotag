'use client';

import React from 'react';
import GetWaitlist from './Waitlist'; 

const CTA = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-blue-100 to-white text-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Be the First to Know
        </h2>
        <p className="text-lg leading-relaxed mb-8">
          Join our waitlist to receive exclusive updates, early access, and special offers when MemoTag launches.
        </p>
        <div className="max-w-md mx-auto">
          <GetWaitlist />
        </div>
      </div>
    </section>
  );
};

export default CTA;