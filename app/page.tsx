import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Traction from '@/components/Traction';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Navbar /> 
      <Hero />
      <Traction />
      <Problem />
      <Solution />
      <CTA />
      <Footer />
    </main>
  );
}