import React from "react";
import Sticker from "./Sticker";
import styles from "../styles/StickerList.module.css";

interface StickerListProps {
  onClick: () => void;
}

export default function StickerList({ onClick }: StickerListProps) {
  return (
    <div className="w-full" onClick={onClick}>
      <div className="flex justify-center mb-4">
        <h1 className={styles.title}>Selecciona un sobre</h1>
      </div>
      <div className="flex flex-wrap justify-evenly">
        <Sticker />
        <Sticker />
        <Sticker />
        <Sticker />
      </div>
    </div>
  );
}
