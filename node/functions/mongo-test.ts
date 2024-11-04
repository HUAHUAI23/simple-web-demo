import { FunctionContext } from 'simple-web23'
import { client } from '../client/mongo'

export default async function (ctx: FunctionContext) {
    const database = client.db('test')
    const collection = database.collection('test')

    // 创建测试数据
    console.log('--- 创建测试数据 ---')
    const insertResult = await collection.insertMany([
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' }
    ])
    console.log('插入数据结果:', insertResult)

    // 查询所有数据
    console.log('\n--- 查询所有数据 ---')
    const allDocs = await collection.find({}).toArray()
    console.log('所有数据:', allDocs)

    // 查询单个数据
    console.log('\n--- 查询单个数据 ---')
    const oneDoc = await collection.findOne({ name: '张三' })
    console.log('查询张三的数据:', oneDoc)

    // 更新数据
    console.log('\n--- 更新数据 ---')
    const updateResult = await collection.updateOne(
        { name: '张三' },
        { $set: { age: 26, city: '深圳' } }
    )
    console.log('更新结果:', updateResult)

    // 查看更新后的数据
    const updatedDoc = await collection.findOne({ name: '张三' })
    console.log('更新后的张三数据:', updatedDoc)

    // 删除数据
    console.log('\n--- 删除数据 ---')
    const deleteResult = await collection.deleteOne({ name: '李四' })
    console.log('删除结果:', deleteResult)

    // 最终查询所有数据
    console.log('\n--- 最终数据 ---')
    const finalDocs = await collection.find({}).toArray()
    console.log('最终所有数据:', finalDocs)

    return { message: '测试完成' }
}