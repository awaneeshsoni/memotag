"use client";
import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';  

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

const Footer: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleContactSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);
        setError(null);

        try {
            const { error } = await supabase.from("contact_form_submissions").insert([formData]);
            if (error) {
                console.error("Supabase error:", error);
                setError("Something went wrong. Please try again.");
            } else {
                setSuccess("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            }
        } catch (err) {
            console.error("Unexpected error:", err);
            setError("An unexpected error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer className="bg-gradient-to-b from-blue-200 to-blue-100 text-black py-12 px-4">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-black">Contact</h3> 
                    <p className="mb-2 text-black"> 
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-black" />
                        <a href="mailto:hello@yourdomain.com" className="hover:text-blue-700 transition-colors">hello@yourdomain.com</a> 
                    </p>
                    <p className="mb-2 text-black"> 
                        <FontAwesomeIcon icon={faPhone} className="mr-2 text-black" /> 
                        +1 (234) 567-890
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:text-blue-500 transition-colors"> 
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" className="hover:text-blue-500 transition-colors"> 
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" className="hover:text-blue-500 transition-colors"> 
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" className="hover:text-blue-500 transition-colors">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>

                <div>
                    <div className="flex gap-3 items-center">
                        <Link href="/" className="flex items-center">
                            <img
                                src="/memotag-logo.svg"
                                alt="Company Logo"
                                width={100}
                                height={100}
                                className=""
                            />
                        </Link>
                    </div>
                    <p className="text-black leading-relaxed mb-4">
                        Empowering caregivers and enhancing dementia patient care with intelligent, personalized support tools.
                    </p>
                    <ul className="list-none">
                        <li><Link href="/" className="hover:text-blue-700 transition-colors">Home</Link></li>
                        <li><Link href="/blog" className="hover:text-blue-700 transition-colors">Blog</Link></li>
                        <li><Link href="/about" className="hover:text-blue-700 transition-colors">About Us</Link></li>
                        <li><Link href="/contactus" className="hover:text-blue-700 transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4 text-black">Send a Message</h3> 
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 rounded bg-blue-50 text-black focus:outline-none focus:ring-2 focus:ring-blue-300" 
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 rounded bg-blue-50 text-black focus:outline-none focus:ring-2 focus:ring-blue-300" 
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows={4}
                            className="w-full px-4 py-2 rounded bg-blue-50 text-black focus:outline-none focus:ring-2 focus:ring-blue-300" 
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-black text-white font-semibold px-6 py-2 rounded hover:bg-blue-300 transition-colors disabled:opacity-50" 
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>
                        {success && <p className="text-green-500 text-sm">{success}</p>} 
                        {error && <p className="text-red-500 text-sm">{error}</p>} 
                    </form>
                </div>
            </div>

          
            <div className="border-t border-blue-200 mt-12 pt-6 text-center text-sm text-black">
                © {new Date().getFullYear()} MemoTag. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;