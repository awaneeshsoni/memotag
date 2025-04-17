"use client";

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { motion, Variants } from "framer-motion";

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Waitlist: React.FC = () => {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSuccessMessage, setWaitlistSuccessMessage] = useState<string | null>(null);
  const [waitlistErrorMessage, setWaitlistErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setWaitlistSuccessMessage(null);
    setWaitlistErrorMessage(null);
    try {
      const { data, error } = await supabase
        .from('waitlist_emails')
        .insert([{ email: waitlistEmail }]);

      if (error) {
        console.error('Error submitting waitlist email:', error);
        setWaitlistErrorMessage(`Failed to join waitlist: ${error.message}`);
      } else {
        console.log('Waitlist email submitted successfully:', data);
        setWaitlistSuccessMessage('Successfully joined the waitlist!');
        setWaitlistEmail('');
      }
    } catch (err: any) {
      console.error('Unexpected error:', err);
      setWaitlistErrorMessage(`An unexpected error occurred: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full">
      <motion.form
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full max-w-xl mr-auto ml-0 flex flex-col sm:flex-row items-start justify-start gap-4 sm:gap-2 px-0"
          onSubmit={handleWaitlistSubmit}
        >
          <div className="relative w-full">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={waitlistEmail}
              onChange={(e) => setWaitlistEmail(e.target.value)}
              className="w-full px-4 py-3 pr-32 rounded-full text-sm sm:text-base border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute top-1/2 -translate-y-1/2 right-1.5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm sm:text-base transition"
            >
              {loading ? 'Joining...' : 'Join Waitlist'}
            </button>
          </div>
  
          {(waitlistSuccessMessage || waitlistErrorMessage) && (
            <p
              className={`text-sm mt-3 text-left ${
                waitlistSuccessMessage ? 'text-grey' : 'text-red-600'
              }`}
            >
              {waitlistSuccessMessage || waitlistErrorMessage}
            </p>
          )}
        </motion.form>
    </section>
  );
};

export default Waitlist;