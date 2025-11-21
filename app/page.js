export default function Home() {
  return (
    <main>
      <Appbar/>
      <h2>Esta é a página principal</h2>
      <Body/>
    </main>
  )
}

export function Appbar() {
  return (
    <header>
      <h1>Cabeçalho</h1>
    </header>
  )
}

export function Body() {
  return (
    <body>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero aliquid assumenda dolore pariatur voluptatem nam magnam. Nostrum iste sit aliquam tempora eligendi eveniet neque, optio officiis aut omnis quis in.</p>
      </div>
    </body>
  )
}