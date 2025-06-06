import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'

export default function Card( {result}) {
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 
    sm:shadow-md rounded-lg sm:border sm:border-slate-400 
    sm:m-2 transition-shadow duration-200'>
        <Link href={`/movie/${result.id}`}>
            <Image
                src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                width={500}
                height={200}
                className='sm:rounded-t-lg group-hover:opacity-80 transition duration-300 ease-in-out cursor-pointer'
                alt={result.title || result.original_name || result.name || 'Movie image'}
            ></Image>
            <div className='p-2'>
                <p className='line-clamp-2 text-md'>{result.overview}</p>
                <h2 className='text-lg font-bold truncate'>{result.title || result.original_name}</h2>
                <p className='flex items-center'>
                    {result.release_date || result.first_air_date}
                    <BsFillHandThumbsUpFill  className='h-5 mr-1 ml-3'/>
                    {result.vote_count}
                </p>
            </div>
        </Link>
    </div>
  )
}

