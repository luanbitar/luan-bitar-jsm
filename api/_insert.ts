import { NowRequest, NowResponse } from "@now/node"
import getDatabaseReference from "./_utils/db"
import { results } from "./_data/fullUsers.json"

export default async (req: NowRequest, res: NowResponse) => {
  const db = await getDatabaseReference()
  const collection = await db.collection("users")

  const users = await collection.insertMany(results)

  res.status(200).send({ users })
}
