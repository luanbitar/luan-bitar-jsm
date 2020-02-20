import { Helmet } from "react-helmet"

import "./NotFound.scss"
import Header from "components/Header"
import Footer from "components/Footer"
import NotFoundIllustration from "assets/il-404.svg"

function NotFound() {
  return (
    <div className="not-found-page">
      <Helmet>
        <title>Juntos Somos +</title>
      </Helmet>
      <Header withSearch />

      <main className="container">
        <NotFoundIllustration className="not-found-illustration" />
      </main>

      <Footer />
    </div>
  )
}

export default NotFound
