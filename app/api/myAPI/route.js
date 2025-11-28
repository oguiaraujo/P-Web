export async function GET(request) {

  const filmes = [
    { id: 1, titulo: "Homem de ferro", ano: 2014 },
    { id: 2, titulo: "Homem de aço", ano: 2016 },
    { id: 3, titulo: "Homem de titanio", ano: 2017 },
  ];

  return Response.json(filmes);
}
