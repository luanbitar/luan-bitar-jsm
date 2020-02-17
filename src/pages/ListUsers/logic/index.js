import state from "./state"
import pipe from "utils/pipe"
import effects from "./effects"
import handlers from "./handlers"

export default pipe(state, handlers, effects)
