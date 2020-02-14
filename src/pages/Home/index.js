import { Link } from "gatsby"

import Header from "components/Header"

function Home() {
  return (
    <div className="home-container">
      <Header />
      <main className="container">
        <h1>Bem vindo a jsm</h1>
        <Link to="/usuarios">Usuarios</Link>
      </main>
    </div>
  )
}
export default Home
