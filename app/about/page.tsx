import "./styles/about.sass"
import Hero from "./components/Hero_about"
import Answer from "./components/Answer"

export const metadata = {
    title: 'О мне - Сергей Ионин',
    description: 'Сергей Ионин - Православный психолог',
  }

export default function Home() {
  return (
    <>
    <main className="main">
      <Hero />
      <Answer />
    </main>
    </>
  )
}