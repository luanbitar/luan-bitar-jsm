import "./Img.scss"
import ImgLogic from "./logic"

function Img({
  pictureRef,
  isLoading,
  className = "",
  large,
  thumbnail,
  alt = "",
}) {
  const pictureClass = `${className} picture ${isLoading ? "-blured" : ""}`
  return (
    <picture ref={pictureRef} className={pictureClass}>
      <source
        srcSet={thumbnail}
        data-srcset={large}
        media="(min-width: 400px)"
      />

      <img className="img-element" src={large} alt={alt} />
    </picture>
  )
}

export default ImgLogic(Img)
