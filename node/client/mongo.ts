import { MongoClient } from 'mongodb'

// 生产环境切记将密码和用户 替换成从环境变量中获取，切记不要在代码中写死泄露密码
// const username = process.env.MONGO_USERNAME
// const password = process.env.MONGO_PASSWORD
// const uri = `mongodb://${username}:${password}@test-mongodb.ns-1k9qk3v6.svc:27017`
const uri = "mongodb://root:tf44dbrn@dbconn.sealosgzg.site:45222/?directConnection=true"



// 创建 MongoDB 客户端实例
export const client = new MongoClient(uri)
