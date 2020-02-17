import { Transition } from "react-transition-group"
import { useState, useEffect } from "react"

function AnimationFade({ children, ...props }) {
  const [isShowing, setIsShowing] = useState(false)
  useEffect(() => setIsShowing(true), [])

  const duration = 500

  const defaultStyle = {
    transition: `opacity ${duration}ms ease`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  }
  return (
    <Transition in={isShowing} timeout={duration} appear>
      {state => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          {...props}
        >
          {children}
        </div>
      )}
    </Transition>
  )
}
export default AnimationFade
