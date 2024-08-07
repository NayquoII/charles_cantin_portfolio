"use client"

import { useRouter } from "next/navigation";
import Carousel from "./components/Carousel";
import AppBar from "./components/AppBar";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative h-screen w-screen overflow-hidden text-text_color">
      <AppBar activePage="home" />
      <main>
        <Carousel />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-4xl">Charles Cantin - Photographe</h1>
        <button onClick={() => {router.push('/galerie')}} className="bg-white text-text_color h-16 w-72 absolute bottom-72 rounded-md bg-opacity-25 left-1/2 transform -translate-x-1/2 flex items-center justify-center text-lg transition-bg-opacity duration-700 hover:bg-opacity-60">
          DECOUVRIR
        </button>
      </main>
    </div>
  )
}
