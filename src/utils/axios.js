//axios
import axios from "axios"
import ps from "ps"

//拦截器  请求的时候拦截
axios.interceptors.request.use(config => {
	return config
},error => {
	return Promise.reject(error)
})
//相应的时候拦截
axios.interceptors.response.use(response => {
	return response
},error => {
	return Promise.resolve(error.response)
})

//返回的状态处理
function checkStatus(response){
	//200 -304 - 400
	if(response && (response.status === 200 || response.status === 304 || response.status === 400 )){
		return response;
	}
	//异常情况
	return{
		status:-404,
		msg:'网络异常'
	}
}
function checkCode(res){
	if( res.status === -404 ){
		alert(res.msg)
	}
	if(res.data && (!res.data.success)){
		alert(res.data.error_msg)
	}
	return res
}

export default{
	post(url,data){
		return axios({
			method:"post",
			baseURL:"http://cnodejs.org/api/v1",
			url,
			data:qs.stringify(data),
			timeout:10000,
			headers:{
				"X-Requested-With":"XMLHttpRequest",
				"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"
			}
		}).then(
			(response) => {
			return checkStatus(response)
		}).then((res) => {
			return checkCode(res)
		})
	},
	get(url,params){
		return axios({
			method:"get",
			baseURL:"https://cnodejs.org/api/v1",
			url,
			params,//传的参数
			timeout:10000,
			headers:{
				'X-Requested-With': 'XMLHttpRequest'
			}
		}).then(
			(response) => {
				return checkStatus(response)
			}
		).then(
			(res) => {
				return checkCode(res)
			}
		)
	}
}
