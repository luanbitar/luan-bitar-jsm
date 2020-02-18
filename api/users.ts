import { NowRequest, NowResponse } from "@now/node"

import cors from "./_utils/cors"
import labels from "./_data/labels"
import getDatabaseReference from "./_utils/db"

export default async (req: NowRequest, res: NowResponse) => {
  cors(req, res)

  const db = await getDatabaseReference()
  const collection = await db.collection("users")

  const body: GetUSers = req.body || {}
  const { search, pageNumber = 1, pageSize = 10, label = "special" } = body

  const query = {
    $and: [
      {
        ...(search && {
          $or: [
            {
              "name.first": { $regex: search, $options: "i" },
            },
            {
              "name.last": { $regex: search, $options: "i" },
            },
          ],
        }),
      },
      {
        ...(labels && labels[label]),
      },
    ],
  }
  const currentPage: number = pageNumber >= 1 ? pageNumber - 1 : 0
  const skip: number = pageSize * currentPage
  const sortByNameAsc = { "name.first": 1 }

  const users = await collection
    .find(query)
    .skip(skip)
    .limit(pageSize)
    .sort(sortByNameAsc)
    .toArray()

  const totalCount = await collection.find(query).count()

  res.status(200).send({ users, totalCount, query, pageSize, pageNumber })
}
