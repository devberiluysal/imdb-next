'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBox() {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const handeSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${search}`);
    }
  return (
    <div>
        <form className='flex justify-between px-5 max-w-6xl mx-auto' onSubmit={handeSubmit}>
            <input type="text" placeholder='Search keywords...' 
            className='p-2 w-full h-14 placeholder-gray-500 outline-none bg-transparent flex-1'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <button className='text-amber-500 p-2 disabled:text-gray-400' disabled={!search}>
                Search
            </button>
        </form>
    </div>
  )
}
