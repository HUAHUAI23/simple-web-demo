import { FunctionContext } from 'simple-web23'
import { listFiles, uploadFile } from '../client/s3'



export default async function (ctx: FunctionContext) {
    const bucketName = '1k9qk3v6-test2'
    const fileName = 'test.txt'
    const fileContent = Buffer.from('Hello World')
    await uploadFile(bucketName, fileName, fileContent)
    await listFiles(bucketName)
    return 'success'
}