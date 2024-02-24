
import Hero from "./components/Hero";
import Favorites from "./components/Favorites";
import Format_work from "./components/Format_Work";
import Price from "./components/Price";
import "./styles/index.sass"

export const metadata = {
  title: 'Главная - Сергей Ионин',
  description: 'Сергей Ионин - Православный психолог',
}

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <Favorites />
      <Format_work />
      <Price />
    </main>
  );
}
