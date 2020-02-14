import "./Img.scss"
import ImgLogic from "./logic"

function Img({
  pictureRef,
  isLoading,
  className = "",
  previewSrc,
  src,
  alt = "",
}) {
  const pictureClass = `${className} picture ${isLoading ? "-blured" : ""}`
  return (
    <picture ref={pictureRef} className={pictureClass}>
      <source srcSet={previewSrc} data-srcset={src} />

      <img className="img-element" src={src} alt={alt} />
    </picture>
  )
}

export default ImgLogic(Img)
