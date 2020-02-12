import { MongoClient, Db } from "mongodb"

let cachedDb: Db | null = null

export default async function getDatabaseReference() {
  if (cachedDb) return cachedDb

  const MONGOURL = process.env.MONGO_DATABASE_URL || ""
  console.log({ MONGOURL })
  const connection = await MongoClient.connect(MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const db = await connection.db(process.env.MONGO_DATABASE_NAME)

  cachedDb = db
  return db
}
