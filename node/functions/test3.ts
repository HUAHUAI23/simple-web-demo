import { FunctionCache, FunctionContext, Config } from 'simple-web23'
import * as a from './a/b'


export default async function (ctx: FunctionContext) {
    console.log(Config.WORKSPACE_PATH)
    a.default(ctx)
    console.log('test3')
    // console.log(FunctionCache.getAll())
    return {
        data: 'test3',
    }
}