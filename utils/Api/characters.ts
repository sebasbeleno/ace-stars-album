import { getIdFromUrl } from "../core";

export async function getCharacters() {
  const res = await fetch("https://swapi.dev/api/people");
  const data = await res.json();
  return data;
}

export async function getCharacter(id: string) {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  const data = await res.json();
  return data;
}

export async function getRandomCharacter() {
  const characters = await getCharacters();
  const randomCharacter =
    characters.results[Math.floor(Math.random() * characters.results.length)];

  randomCharacter.type = "character";
  randomCharacter.id = 'character-' + getIdFromUrl(randomCharacter.url);
  return randomCharacter;
}
