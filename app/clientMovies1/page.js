"use client"

import Form from "next/form"
import {useState, useCallback} from "react"
import React from "react"

export default function Home(){
  const [resultMovies, setResultMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const handleAction = useCallback(async (formData) => {
    setLoading(true)
  
    const titleSearchKey = formData.get("titleSearchKey")
    const httpRes = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}`)
    const jsonRes = await httpRes.json()
  
    setResultMovies(jsonRes.Search || [])
    setLoading(false)
  }, [])


    return (
        <div>
            <MovieForm
                handleAction={handleAction}
                loading={loading}
            />
            <MovieTable movies={ resultMovies }/>
        </div>
    )
}

export function MovieForm({handleAction, loading}){
    const [localKey, setLocalKey] = useState("")
    
    return (
        <Form action={(formData) => {formData.set("titleSearchKey", localKey), handleAction(formData)}}  className="flex gap-4 items-center p-4 bg-gray-100 shadow">

            <label htmlFor="idTitleSearchKey">Título</label>            
            <input
                id="idTitleSearchKey"
                value={localKey}
                onChange={(e) => setLocalKey(e.target.value)}
            />
            <button type="submit" disabled={loading} className="px-4 py-1 bg-blue-600 text-white disabled:bg-gray-400">
                Pesquisar
            </button>

        </Form>
    )
}

export const MemoMovieForm = React.memo(MovieForm)

export function MovieTable({movies}){
    return (
        <div className="mt-6">
            <div className="flex flex-col gap-4 bg-white p-4">
                    {movies.map( (m) => (
                        <div key={m.imdbID}>
                            <span className="font-bold">{m.Title}</span> --- {m.Year}
                        </div>))}               
            </div>
        </div>
    )

}