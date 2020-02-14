import pipe from "utils/pipe"
import state from "./state"
import handlers from "./handlers"

export default pipe(state, handlers)
