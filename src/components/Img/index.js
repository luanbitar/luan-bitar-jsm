import "./Img.scss"
import ImgLogic from "./logic"

function Img({ pictureRef, pictureClass, previewSrc, src, alt = "" }) {
  return (
    <picture ref={pictureRef} className={pictureClass}>
      <source srcSet={previewSrc} data-srcset={src} media="(min-width: 10px)" />

      <img className="img-element" src={src} alt={alt} />
    </picture>
  )
}

export default ImgLogic(Img)
