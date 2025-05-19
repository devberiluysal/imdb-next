const API_KEY = process.env.API_KEY
import Image from 'next/image'

export default async function MoviePage({params}) {
    const movieId = params.id
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
    const movie = await res.json()
  return (
    <div className="w-full">
        <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center
        max-w-6xl mx-auto md:space-x-6'>
            <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                width={500}
                height={300}
                className='rounded-lg'
            >
            </Image>
            <div className='p-4'>
                <h2 className='text-2xl font-bold mb-3'>{movie.title || movie.name}</h2>
                <p className='text-lg mb-3'>{movie.overview}</p>
                <p className='text-lg mb-3'><b>Release Date:</b> {movie.release_date || movie.first_air_date}</p>
                <p className='text-lg'><b>Rating:</b> {movie.vote_average}</p>
            </div>
        </div>
    </div>
  )
}
