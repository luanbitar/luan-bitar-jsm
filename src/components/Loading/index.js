import "./Loading.scss"
import AnimationFade from "components/Animations/Fade"
import LoadingIllustration from "assets/il-loading.svg"

function Loading() {
  return (
    <AnimationFade className="loading-container">
      <LoadingIllustration className="loading-illustration" />
    </AnimationFade>
  )
}
export default Loading
