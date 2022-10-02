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
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [stickers, setStickers] = useState<any[]>([]);
  const album = useAppSelector(selectAlbum);

  const openRandomStickerPack = async () => {
    console.log("Opening random sticker pack");

    setLoading(true);
    setModalVisible(true);

    const _stickers = await OpenStickerPack();

    setLoading(false);

    console.log(_stickers);

    setStickers(_stickers);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const RenderModalContent = () => {
    if (loading) {
      return (
        <div>
          <Image src="/loading.gif" alt="Loading" width={200} height={200} />
          <p className="text-center text-white">Cargando...</p>
        </div>
      );
    } else {
      return (
        <div className="flex flex-row justify-center items-center">
          {stickers.map((_sticker) => RenderSticker(_sticker))}
        </div>
      );
    }
  };

  const saveSticker = (sticker: any) => {
    dispatch(addSticker(sticker));
  };

  const RenderSticker = (sticker: any) => {
    const name = sticker.name ? sticker.name : sticker.title;
    const isOwned = getIfStickerIsInAlbum(sticker);

    return (
      <StickerContent
        onClick={() => {
          saveSticker(sticker);
        }}
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

  return (
    <Layout
      title="Obten Stickers"
      description="Puedes obtener 5 stickers de 4 laminas al azar cada 1 minuto"
    >
      <Modal
        visible={modalVisible}
        title="Estos son tus stickers"
        content="Content"
        closeModal={closeModal}
        openModal={openModal}
      >
        <div className="flex flex-col items-center justify-center">
          {RenderModalContent()}
        </div>
      </Modal>
      <StickerList onClick={openRandomStickerPack} />
    </Layout>
  );
}
