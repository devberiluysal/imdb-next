'use client'

import { useEffect } from "react"

export default function Error({error, reset}) {
    useEffect(() => {
        console.log(error)

    }, [error])
  return (
    <div className="text-center mt-10">
        <h1>Oopss.. Something went wrong!</h1>
        <button className="hover:text-amber-600 py-2 px-4 mt-4 border rounded-lg hover:border-amber-600" onClick={reset}>Try Again</button>
    </div>
  )
}
