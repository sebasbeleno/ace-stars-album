import { getIdFromUrl } from "../core";

export async function getFilms() {
  const res = await fetch("https://swapi.dev/api/films");
  const data = await res.json();
  return data;
}

export async function getFilm(id: string) {
  const res = await fetch(`https://swapi.dev/api/films/${id}`);
  const data = await res.json();
  return data;
}

export async function getRandomFilm() {
  const films = await getFilms();
  const randomFilm =
    films.results[Math.floor(Math.random() * films.results.length)];

  randomFilm.type = "film";
  randomFilm.id = 'film-' + getIdFromUrl(randomFilm.url);

  return randomFilm;
}
