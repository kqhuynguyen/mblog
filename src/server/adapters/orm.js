import { mongoose as db } from 'mongoose'
db.set("strictQuery", false)
db.connect("mongodb://root:abc123@mongo:27017/")

export default db