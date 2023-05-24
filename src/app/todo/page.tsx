import MainComponent from "@/components/Main.Content";
import '@/styles/style.scss';
import Image from 'next/image';

export default function Todo() {
  return (
    <section className="bg-emerald-400 h-screen">
      <Image
        src="/Tasks.svg"
        width={100}
        height={100}
        className=""
        alt="logo"
      />
      <MainComponent />
    </section>
  );
}

