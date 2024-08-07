import React from "react";
import AppBar from "../components/AppBar";
import Image from "next/image";
import bg_car from "../../../public/bg_car.jpg";
import Img_Card from "../components/Img_Card";
import wedding_ring_pic from "../../../public/wedding_ring_pic.jpg";
import pregnant_woman from "../../../public/pregnant_woman.jpg";
import baby_feet from "../../../public/baby_feet.jpg";

type Props = {};

export default function galerie({}: Props) {
    const text_card_array = [
        "Immortalisez chaque moment précieux de votre journée spéciale avec ma passion pour la photographie de mariage.",
        "Souvenez vous de la magie de votre grossesse avec des photos pleines de tendresse et de douceur.",
        "Gardez un souvenir inoubliable des premiers instants de vie de votre bébé avec des photos uniques et émouvantes.",
    ];

    return (
        <div className="h-screen w-screen overflow-hidden">
            <div className="mb-12">
                <AppBar activePage="galerie" />
            </div>
            <main className="h-screen overflow-hidden mx-24 flex justify-between items-center text-text_color">
                <Image
                    src={bg_car}
                    alt="Picture of a car"
                    className="opacity-50 -z-50"
                    layout="fill"
                    objectFit="cover"
                ></Image>
                <Img_Card
                    src={wedding_ring_pic}
                    alt="Picture of a wedding ring"
                    text_card={text_card_array[0]}
                />
                <Img_Card
                    src={pregnant_woman}
                    alt="Pregnant woman with her husband in front of a sunset"
                    text_card={text_card_array[1]}
                />
                <Img_Card
                    src={baby_feet}
                    alt="Baby feet"
                    text_card={text_card_array[2]}
                />
            </main>
        </div>
    );
}
