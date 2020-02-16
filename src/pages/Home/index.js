import "./Home.scss"
import Hero from "./components/Hero"
import Footer from "components/Footer"
import SelectUserType from "./components/SelectUserType"

function Home() {
  return (
    <div className="home-container">
      <main className="container">
        <Hero />

        <SelectUserType />
      </main>
      <Footer />
    </div>
  )
}
export default Home
