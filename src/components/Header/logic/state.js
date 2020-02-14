import { useState, useRef } from "react"

function state() {
  const [isInputOpen, setIsInputOpen] = useState(false)
  const inputRef = useRef(null)

  return {
    inputRef,
    isInputOpen,
    setIsInputOpen,
  }
}

export default state
