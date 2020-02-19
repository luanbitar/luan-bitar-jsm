import { Helmet } from "react-helmet"

import "./Home.scss"
import Hero from "./components/Hero"
import Footer from "components/Footer"
import SelectUserType from "./components/SelectUserType"

function Home() {
  return (
    <div className="home-container">
      <Helmet>
        <title>Juntos Somos +</title>
      </Helmet>

      <main className="container">
        <Hero />

        <SelectUserType />
      </main>
      <Footer />
    </div>
  )
}
export default Home
