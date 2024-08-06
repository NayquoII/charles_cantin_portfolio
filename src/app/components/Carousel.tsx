"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import bg_car from "../../../public/bg_car.jpg";
import bg_boat from "../../../public/bg_boat.jpg";
import bg_landscape from "../../../public/bg_landscape.jpg";

const images = [bg_car, bg_boat, bg_landscape];

export default function Carousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % images.length
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-screen h-screen overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-screen h-screen transition-opacity duration-1000 ease-in-out ${
                        index === currentImageIndex ? "opacity-50" : "opacity-0"
                    }`}
                >
                    <Image
                        src={image}
                        alt={`Slide ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        priority={index === currentImageIndex} 
                    />
                </div>
            ))}
            <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 flex flex-row space-x-4 -mb-6">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 w-32 rounded transition-opacity duration-1000 ${
                            index === currentImageIndex
                                ? "bg-text_color opacity-100"
                                : "bg-text_color opacity-25"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
