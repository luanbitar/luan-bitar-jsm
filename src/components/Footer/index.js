import { Link } from "gatsby"

import "./Footer.scss"
import WppIcon from "assets/wpp.svg"
import JSMLogo from "assets/jsm-logo.svg"
import FacebookIcon from "assets/facebook.svg"
import LinkedInIcon from "assets/linkedin.svg"

function Footer() {
  return (
    <footer className="footer-container">
      <JSMLogo className="jsm-logo" />
      <h6 className="company-name">Juntos Somos Mais Fidelização S.A.</h6>

      <p className="social-label">Siga-nos em nossas redes sociais:</p>
      <section className="social-container">
        <Link
          className="social-item"
          to="https://www.facebook.com/OficialJuntosSomosMais/"
        >
          <FacebookIcon className="social-logo" />
        </Link>
        <Link
          className="social-item"
          to="https://www.linkedin.com/company/juntos-somos-mais/"
        >
          <LinkedInIcon className="social-logo" />
        </Link>
        <Link className="social-item" to="https://wa.me/5511964185451">
          <WppIcon className="social-logo" />
        </Link>
      </section>
    </footer>
  )
}
export default Footer
