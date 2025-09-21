import { ReactElement } from 'react';
import Link from 'next/link';

export default function Header(): ReactElement {
  return (
    <header className='bg-white shadow'>
      <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold leading-tight text-gray-900'>
          <Link href='/'>Buying a TV Guide</Link>
        </h1>
      </div>
    </header>
  );
}