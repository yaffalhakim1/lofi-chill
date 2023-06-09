import { Inter } from "next/font/google";
import MusicPlayer from "@/components/Music";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-center ${inter.className}`}
    >
      <Header />
      <p className="text-4xl font-bold">Relax and Chill</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 py-4">
        <MusicPlayer
          shadowClass="shadow-xl shadow-yellow-500/50"
          imageSrc="/images/cafe.jpg"
          musicSrc="/musics/lofi1.mp3"
        />
        <MusicPlayer
          shadowClass="shadow-xl shadow-green-500/50"
          imageSrc="/images/rainn.jpg"
          musicSrc="/musics/rain.mp3"
        />
        <MusicPlayer
          shadowClass="shadow-xl shadow-zinc-500/50"
          imageSrc="/images/night.jpg"
          musicSrc="/musics/night.mp3"
        />
        <MusicPlayer
          shadowClass="shadow-xl shadow-zinc-500/50"
          imageSrc="/images/night.jpg"
          musicSrc="/musics/night.mp3"
        />
        <MusicPlayer
          shadowClass="shadow-xl shadow-zinc-500/50"
          imageSrc="/images/night.jpg"
          musicSrc="/musics/night.mp3"
        />
        <MusicPlayer
          shadowClass="shadow-xl shadow-zinc-500/50"
          imageSrc="/images/night.jpg"
          musicSrc="/musics/night.mp3"
        />
      </div>
    </main>
  );
}
