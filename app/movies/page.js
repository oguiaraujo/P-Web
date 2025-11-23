export default async function Home({searchParams}){
  const {titleSearchKey = 'tarzan', type = ''} = await searchParams
  const res = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}&type=${type}`)
  const data = await res.json()

  return (
      <div>
          <div>
          {data.Search.map( (m) => <div key={m.imdbID}>
            <img src={m.Poster}/><br/>
            {m.Title} --- {m.Year}<br/>
            {m.Type}
            </div>  )}               
          </div>
      </div>
  )
}