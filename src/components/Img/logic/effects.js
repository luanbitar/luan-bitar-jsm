import { useEffect } from "react"

function effects({ pictureRef, setIsLoading, ...props }) {
  useEffect(() => {
    function lazyload(entries) {
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return

        const sourcesElements = pictureRef.current.querySelectorAll("source")
        const imageElement = pictureRef.current.querySelector("img")

        sourcesElements.forEach(sourceElement => {
          const largeSrcSet = sourceElement.dataset.srcset

          sourceElement.setAttribute("srcset", largeSrcSet)
          imageElement.onload = () => setIsLoading(false)
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
