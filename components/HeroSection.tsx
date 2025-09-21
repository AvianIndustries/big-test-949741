import { ReactElement } from 'react';

export default function HeroSection(): ReactElement {
  return (
    <section className='bg-gray-800 text-white px-4 py-5 sm:px-6 lg:px-8 lg:py-12'>
      <div className='lg:text-center'>
        <h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>The Ultimate Guide</h2>
        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl'>To Buying Your Next TV</p>
        <p className='mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto'>Make the right decision with our comprehensive guide on how to choose the perfect television for your home.</p>
      </div>
    </section>
  );
}