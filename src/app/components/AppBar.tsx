import React from "react";
import cc_logo from "../../../public/charles_cantin_logo.png";
import Link from "next/link";
import Image from "next/image";

type Props = {
    activePage: string;
};

export default function AppBar({ activePage }: Props) {
    return (
        <div>
            <header>
                <Image
                    src={cc_logo}
                    alt="Logo of Charles Cantin"
                    className="absolute h-44 w-44 top-0 -mt-4 z-10"
                ></Image>
            </header>

            <nav className="absolute top-16 right-16 z-10">
                <ul className="flex space-x-16 text-stone-400">
                    <li>
                        <Link
                            href="/"
                            className={`${
                                activePage === "home" ? "text-text_color" : ""
                            } hover:text-text_color transition-colors duration-300`}
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/galerie"
                            className={`${
                                activePage === "galerie" ? "text-text_color": ""
                            } hover:text-text_color transition-colors duration-300`}
                        >
                            Galerie
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/tep"
                            className={`${
                                activePage === "tep" ? "text-text_color" : ""
                            } hover:text-text_color transition-colors duration-300`}
                        >
                            Tarifs et prestations
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className={`${
                                activePage === "contact" ? "text-text_color": ""
                            } hover:text-text_color transition-colors duration-300`}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
