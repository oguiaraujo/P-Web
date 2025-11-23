import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Appbar/>
      <h2>Esta é a página principal</h2>
      <Link href="/novarota">Rota1</Link> <br/><br/>
      <a href="/novarota">Rota 1, jeito antigo</a>
      <Paragrafo/>
    </div>
  )
}

export function Appbar() {
  return (
    <header>
      <h1>Cabeçalho</h1>
    </header>
  )
}

export function Paragrafo() {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero aliquid assumenda dolore pariatur voluptatem nam magnam. Nostrum iste sit aliquam tempora eligendi eveniet neque, optio officiis aut omnis quis in.</p>
    </div>
  )
}