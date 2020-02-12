import { NowRequest, NowResponse } from "@now/node"

export const notHasPayload = (
  req: NowRequest | void,
  res: NowResponse,
): boolean => {
  const doesntHaveBodyPayload = !req || !req.body
  if (doesntHaveBodyPayload) {
    res.status(406).send({ error: "Need to pass a payload" })
  }
  return doesntHaveBodyPayload
}
