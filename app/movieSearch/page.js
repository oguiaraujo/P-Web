import Form from "next/form"

export default async function MovieForm(){
    return (
      <div>
        <Form action="/movies">
          <label htmlFor="idTitleSearchKey">Título</label>
          <input id="idTitleSearchKey" name="titleSearchKey"/>
          <button type="submit">Pesquisar</button>
        </Form>
        <br/>
        <Form action="/movies">
          <label htmlFor="type">Tipo</label>
          <input id="type" name="type"/>
          <button type="submit">Pesquisar</button>
        </Form>
        <br/>
      </div>
    )
}