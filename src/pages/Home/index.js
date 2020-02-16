import "./Home.scss"
import Hero from "./components/Hero"
import SelectUserType from "./components/SelectUserType"

function Home() {
  return (
    <div className="home-container">
      <main className="container">
        <Hero />

        <SelectUserType />
      </main>
    </div>
  )
}
export default Home
