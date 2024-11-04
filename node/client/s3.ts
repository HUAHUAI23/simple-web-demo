import { S3Client, ListObjectsV2Command, PutObjectCommand, _Object } from "@aws-sdk/client-s3"

// 创建 S3 客户端
// 生产环境切记将密码和用户 替换成从环境变量中获取，切记不要在代码中写死泄露密码
// const accessKeyId = process.env.S3_ACCESS_KEY_ID
// const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY

const s3Client = new S3Client({
    region: "cn-north-1", // 例如 "ap-northeast-1"
    endpoint: "https://objectstorageapi.gzg.sealos.run", // 例如 "https://s3.amazonaws.com" 或自定义endpoint
    credentials: {
        accessKeyId: "xxxxxxxxxx",
        secretAccessKey: "xxxxxxxxxx"
    },
    // 如果使用自定义endpoint（比如MinIO），可能需要以下配置
    forcePathStyle: true, // 强制使用路径样式而不是虚拟主机样式
})

// 列出 bucket 中的文件
async function listFiles(bucketName: string) {
    try {
        const command = new ListObjectsV2Command({
            Bucket: bucketName,
        })

        const response = await s3Client.send(command)

        // 打印文件列表
        response.Contents?.forEach((file: _Object) => {
            console.log(`文件名: ${file.Key}, 大小: ${file.Size} bytes`)
        })

        return response.Contents
    } catch (error) {
        console.error("列出文件失败:", error)
        throw error
    }
}

// 上传文件到 S3
async function uploadFile(bucketName: string, key: string, fileContent: Buffer) {
    try {
        const command = new PutObjectCommand({
            Bucket: bucketName,
            Key: key,
            Body: fileContent,
        })

        const response = await s3Client.send(command)
        console.log("文件上传成功:", response)
        return response
    } catch (error) {
        console.error("文件上传失败:", error)
        throw error
    }
}

export { listFiles, uploadFile }