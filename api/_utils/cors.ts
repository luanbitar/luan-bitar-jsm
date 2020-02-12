import { NowRequest, NowResponse } from "@now/node"

export default (req: NowRequest, res: NowResponse): void => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  )
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  )
  if (req.method === "OPTIONS") {
    res.status(200).json({ options: true })
  }
}
