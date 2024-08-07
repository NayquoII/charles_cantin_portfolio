import React from "react";
import Image, { StaticImageData } from "next/image";
import { text } from "stream/consumers";

type Props = {
    src: StaticImageData;
    alt: string;
    text_card: string;
};

export default function Img_Card({ src, alt, text_card }: Props) {
    return (
        <div className="relative h-2/3 w-80 bg-slate-300 bg-opacity-40 rounded-lg p-5 shadow-2xl flex flex-col justify-between">
            <div className="relative h-1/2 w-full shadow-2xl">
                <Image
                    className="rounded-lg opacity-80"
                    src={src}
                    alt={alt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </div>
            <div className="flex-grow flex items-center">
                <p className="text-text_color text-center mx-4">{text_card}</p>
            </div>
            <button className="h-12 w-36 bg-btn_color rounded-lg shadow-md hover:bg-hover_btn_color transition-colors duration-300 mx-auto mb-5">
                Voir les tarifs
            </button>
        </div>
    );
}
