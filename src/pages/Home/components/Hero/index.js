import "./Hero.scss"
import JSMLogo from "assets/jsm-logo.svg"
import HeroIllustration from "assets/il-team-spirit.svg"

function Hero() {
  return (
    <section className="hero-container">
      <div className="content-section">
        <JSMLogo className="jsm-logo" />
        <h1 className="title">Bem-vindo!</h1>
      </div>
      <div className="hero-illustration">
        <HeroIllustration />
      </div>
    </section>
  )
}
export default Hero
