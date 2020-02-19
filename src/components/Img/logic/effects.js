import { useEffect } from "react"

function effects({ pictureRef, setIsLoading, debugTimeout = 0 }) {
  useEffect(() => {
    function lazyload(entries) {
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return

        const sourcesElements =
          pictureRef.current && pictureRef.current.querySelectorAll("source")
        const imageElement =
          pictureRef.current && pictureRef.current.querySelector("img")

        sourcesElements &&
          sourcesElements.forEach(sourceElement => {
            const largeSrcSet = sourceElement.dataset.srcset

            setTimeout(() => {
              sourceElement.setAttribute("srcset", largeSrcSet)
              imageElement.onload = () => setIsLoading(false)
            }, debugTimeout)
          })

        observer.unobserve(target)
      })
    }

    const observer = new IntersectionObserver(lazyload, {
      threshold: 0,
    })

    observer.observe(pictureRef.current)
  }, [])
}

export default effects
