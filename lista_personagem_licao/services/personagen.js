export async function buscarFilme() {
  try {
    const res = await fetch('https://ghibliapi.vercel.app/films');

    const dados = await res.json();

    const todosFilmes = dados.map((filme) => {
      const novoFilme = { ...filme };

      delete novoFilme.description;

      return novoFilme;
    });

    return todosFilmes;
  } catch (erro) {
    console.error(erro);
    return [];
  }
}