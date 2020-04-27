/**
 * 封装get、post请求
 */
import qs from 'querystring' // 用于将对象字符串化
export function httpGet(url) {
    const result = fetch(url)
    return result
}
export function httpPost(url, params) {
    const result = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: qs.stringify(params)
    })
    return result
}