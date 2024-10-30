import { FunctionContext } from 'simple-web23'
import { tee } from '../tests/testImport'

export default async function (ctx: FunctionContext) {
    // const { tee } = await import('src/testImport.js')

    await tee()
    console.log('hello world')
    return {
        data: 'hello world',
    }
}
