'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import findShowCatchApi from '../../../api/catches/show';

export default async function CatchShow() {

  const detail = await findShowCatchApi();
  console.log('client catch detail', detail)

  return (
    <div>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='max-w-xl mx-auto py-8 md:py-14'>
          catches show
        </div>
      </div>
    </div>
  )
}
