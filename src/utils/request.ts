import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'

// 有需要进度条在引入,在拦截前后进行控制

// 创建实例
const $http = axios.create({
    baseURL: '/',
    timeout: 1000 * 60, // 超时暂定1分钟
    headers: {
        get: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        post: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    }
})

// 请求拦截器
$http.interceptors.request.use(config => {
    // 有请求前的一些处理,比如数据转化,设置loading等,根据需求去添加
    const token = localStorage.getItem('Access-Token')
    if (token) config.headers['Access-Token'] = token // 有token,http请求的header统一都加上token
    return config
})

// 响应拦截器:要是想使用更灵活,可以status与code一起判断
$http.interceptors.response.use(res => {
    // if(res.data.error_code !== 0) ElMessage.error(res.data.msg)
    // 有需要清楚提示每种状态【401 | 401 | 500 | 501 | 502 | 503 | 504 | 505】再通过status进行判断
    return res.data
}, error => {
    // 可以在此处进行异常状态请求失败的处理【error.response.status】
    ElMessage.error(error)
    return Promise.reject(error.response)
})

interface Http {
	get<T>(url: string, params: unknown): Promise<T>

	post<T>(url: string, data: unknown, config?: any): Promise<T>

}
// 针对get和post请求有额外的处理需求,在此处配置后,在进行方法暴露
const http: Http = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            $http
                .get(url, {
                    params
                })
                .then((res: any) => resolve(res))
                .catch((err) => reject(err))
        })
    },
    post(url, data) {
        return new Promise((resolve, reject) => {
            $http
                .post(url, JSON.stringify(data))
                .then((res: any) => resolve(res))
                .catch((err) => reject(err))
        })
    }
}

export default http
