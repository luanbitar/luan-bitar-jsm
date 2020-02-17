import state from "./state"
import pipe from "utils/pipe"
import handlers from "./handlers"
import propsMapper from "./propsMapper"

export default pipe(state, handlers, propsMapper)
