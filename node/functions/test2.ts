import { FunctionContext } from 'simple-web23'
import * as _ from 'lodash'

import * as a from './a/b'

// 数组处理工具函数
function arrayUtils(arr: any[]) {
    return {
        unique: _.uniq(arr),
        chunks: _.chunk(arr, 2),
        sorted: _.sortBy(arr),
    }
}

// 对象处理工具函数
function objectUtils(obj: object) {
    return {
        keys: _.keys(obj),
        values: _.values(obj),
        flattened: _.flattenDeep(_.values(obj)), // Convert to array first using _.values()
    }
}

export default async function (ctx: FunctionContext) {
    a.default(ctx)
    const testArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const testObject = { a: 1, b: [2, 3], c: { d: 4 } }

    return {
        arrayResults: arrayUtils(testArray),
        objectResults: objectUtils(testObject),
    }
}
