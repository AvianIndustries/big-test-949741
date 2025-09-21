import { ReactElement } from 'react';
import Link from 'next/link';

export default function GuideSection(): ReactElement {
  return (
    <section className='px-4 py-5 sm:p-6 lg:px-8'>
      <h2 className='text-xl leading-6 font-medium text-gray-900'>Explore our guide</h2>
      <p className='mt-2 max-w-4xl text-lg text-gray-500'>Learn about the different types of TVs, the best brands, and the features you should consider.</p>
      <Link href='/guide'><a className='mt-4 flex justify-center px-1 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Start the Guide</a></Link>
    </section>
  );
}