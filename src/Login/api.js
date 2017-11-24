import axios from "axios";

//fail ??? 
let base = '';

export const requestLogin = params => {
	return axios.post(`${base}/login`,params).then(res => res.data);
}
