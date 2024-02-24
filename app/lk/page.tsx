import "./styles/lk.sass"
import Nav from "./components/Nav"
import Personal_info from "./components/Personal_info"
import DateTimePicker from "./components/DateTimePicker"


export const metadata = {
    title: 'Личный кабинет - Сергей Ионин',
    description: 'Сергей Ионин - Православный психолог',
  }


export default function Home() {
  return (
    <main className="main">
      <section className="lk-hero">
        <div className="lk-hero__wrapper container">
          <div className="nav-hero">
              <Nav />
          </div>
          <div className="lk">
            <Personal_info />
            <DateTimePicker />
          </div>
        </div>
      </section>
    </main>
  )
}
