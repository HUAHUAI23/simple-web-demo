import { FunctionContext } from 'simple-web23'

export default async function (ctx: FunctionContext) {
    const { tee } = await import('tests/testImport.js')

    await tee()
    console.log('hello world')
    return {
        data: 'hello world',
    }
}