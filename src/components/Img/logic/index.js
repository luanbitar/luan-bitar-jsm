import state from "./state"
import pipe from "utils/pipe"
import effects from "./effects"
import propsMapper from "./propsMapper"

export default pipe(state, effects, propsMapper)
