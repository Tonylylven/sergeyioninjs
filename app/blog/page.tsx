import "./styles/blog.sass"
import Hero from "./components/Hero_blog"
import Youtube from "./components/Youtube"
import Connect from "./components/Connect"

export const metadata = {
    title: 'Блог - Сергей Ионин',
    description: 'Сергей Ионин - Православный психолог',
  }


export default function Home() {
  return (
    <>
    <main className="main">
        <Hero />
        <Youtube />
        <Connect />
    </main>
    </>
  )
}
