import MainComponent from "@/components/Main.Content";
import '@/styles/style.scss';

export default function Todo() {
  return (
      <section className="main_content">
        <h1 className='text-center title'>TODO - MISSAO CERTIFICAÇÃO</h1>
        <MainComponent/>
      </section>
  );
}

