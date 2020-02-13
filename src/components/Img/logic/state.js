import { useRef, useState } from "react"

function state() {
  const pictureRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)

  return {
    pictureRef,
    isLoading,
    setIsLoading,
  }
}

export default state
