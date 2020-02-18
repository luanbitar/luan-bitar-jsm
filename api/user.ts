import { NowRequest, NowResponse } from "@now/node"

import { ObjectId } from "mongodb"

import cors from "./_utils/cors"
import getDatabaseReference from "./_utils/db"

export default async (req: NowRequest, res: NowResponse) => {
  cors(req, res)

  const db = await getDatabaseReference()
  const collection = await db.collection("users")

  const body: GetUSer = req.body || {}
  const { userID } = body

  if (!userID)
    return res.status(400).send({ error: "Insufficient parameter: UserID" })

  const query = {
    _id: new ObjectId(userID),
  }

  const user = await collection.find(query).toArray()

  res.status(200).send({ user, query })
}
