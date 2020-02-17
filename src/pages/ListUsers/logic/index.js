import state from "./state"
import pipe from "utils/pipe"
import effects from "./effects"
import handlers from "./handlers"
import propsMapper from "./propsMapper"

export default pipe(state, handlers, effects, propsMapper)
