import { ReactElement } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import GuideSection from '../components/GuideSection';
import Footer from '../components/Footer';

export default function HomePage(): ReactElement {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <Header />
      <HeroSection />
      <GuideSection />
      <Footer />
    </div>
  );
}