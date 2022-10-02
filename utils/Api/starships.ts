import { getIdFromUrl } from "../core";

export async function getStarships() {
  const res = await fetch("https://swapi.dev/api/starships");
  const data = await res.json();
  return data;
}

export async function getStarship(id: string) {
  const res = await fetch(`https://swapi.dev/api/starships/${id}`);
  const data = await res.json();
  return data;
}

export async function getRandomStarship() {
  const starships = await getStarships();
  const randomStarship =
    starships.results[Math.floor(Math.random() * starships.results.length)];

  randomStarship.type = "starship";
  randomStarship.id = 'starship-' + getIdFromUrl(randomStarship.url);

  return randomStarship;
}
