import { httpGet } from '../utils/http.js'
import baseUrl from './base.js'
const api = {
    // getList: `${baseUrl}/api/v1/apilist`
    getList() {
        return httpGet(baseUrl.ownUrl + baseUrl.purl)
    }
}
export default api