import {
  getCharacter,
  getRandomCharacter,
  getRandomFilm,
  getRandomStarship,
  getStarship,
} from "./Api";

export function getIdFromUrl(url: string) {
  return url.split("/")[5];
}

export function OpenStickerPack() {
  // get a random number between 1 and 2
  const random = Math.floor(Math.random() * 2) + 1;

  // if the random number is 1, open the first sticker pack
  if (random === 1) {
    return StickerPackOption1();
  } else {
    // else open the second sticker pack
    return StickerPackOption2();
  }
}

// get 1 film, 3 characters and 1 starship from the API
async function StickerPackOption1() {
  const film = await getRandomFilm();
  const character1 = await getRandomCharacter();
  const character2 = await getRandomCharacter();
  const character3 = await getRandomCharacter();

  const characters = [character1, character2, character3];
  const starship = await getRandomStarship();

  return [film, ...characters, starship];
}

async function StickerPackOption2() {
  const character1 = await getRandomCharacter();
  const character2 = await getRandomCharacter();
  const character3 = await getRandomCharacter();

  const characters = [character1, character2, character3];
  const starship1 = await getRandomStarship();
  const starship2 = await getRandomStarship();

  const starships = [starship1, starship2];
  return [...characters, ...starships];
}
