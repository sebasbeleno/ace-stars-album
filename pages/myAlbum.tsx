import Image from "next/image";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import StickerList from "../components/StickerList";
import { OpenStickerPack } from "../utils";
import { getFilms, getRandomFilm } from "../utils/Api";
import Modal from "../components/Modal";
import { addSticker, selectAlbum } from "../features/album/albumSlice";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import StickerContent from "../components/StickerContent";

export default function getStickers() {
  const album = useAppSelector(selectAlbum);

  const RenderSticker = (sticker: any) => {
    const name = sticker.name ? sticker.name : sticker.title;
    const isOwned = getIfStickerIsInAlbum(sticker);

    return (
      <StickerContent
        type={sticker.type}
        name={name}
        description="ssffs"
        isOwned={isOwned}
      />
    );
  };

  const getIfStickerIsInAlbum = (sticker: any) => {
    return album.obtainedStickers.some(
      (stickerInAlbum) => stickerInAlbum.id === sticker.id
    );
  };

  const EmptyAlbum = () => {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1>Noo tienes hahaha loser</h1>
      </div>
    );
  };

  const RenderAlbum = () => {
    return (
      <div className="flex w-full flex-wrap">
        {album.obtainedStickers.map((sticker) => {
          const name = sticker.name ? sticker.name : sticker.title;
          return (
            <StickerContent
              type={sticker.type}
              name={name}
              description="ssffs"
              isOwned={true}
            />
          );
        })}
      </div>
    );
  };
  return (
    <Layout
      title="Tus Stickers"
      description="Puedes obtener 5 stickers de 4 laminas al azar cada 1 minuto"
    >
      {album.obtainedStickers.length > 0 ? RenderAlbum() : EmptyAlbum()}
    </Layout>
  );
}
