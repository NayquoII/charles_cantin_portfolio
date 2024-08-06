"use client"

import Image from "next/image";
import bg_car from "../../public/bg_car.jpg"
import cc_logo from "../../public/charles_cantin_logo.png"
import Link from "next/link";
import { useRouter } from "next/navigation";
import Carousel from "./components/Carousel";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative h-screen w-screen overflow-hidden text-text_color">
      <header>
        <Image src={cc_logo} alt="Logo of Charles Cantin" className="absolute h-44 w-44 top-0 -mt-4"></Image>
      </header>

      <nav className="absolute top-16 right-16 z-10">
        <ul className="flex space-x-16">
        <Link href="/">Accueil</Link>
          <Link href="/galerie">Galerie</Link>
          <Link href="/tep">Tarifs et prestations</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </nav>

      <main>
        <Carousel />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-4xl">Charles Cantin - Photographe</h1>
        <button onClick={() => {router.push('/galerie')}} className="bg-white text-text_color h-16 w-72 absolute bottom-72 rounded-md bg-opacity-25 left-1/2 transform -translate-x-1/2 flex items-center justify-center text-lg transition-bg-opacity duration-300 hover:bg-opacity-50">
          DECOUVRIR
        </button>
      </main>
    </div>
  )
}
