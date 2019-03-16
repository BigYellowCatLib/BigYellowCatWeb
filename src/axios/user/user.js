
import axios from 'axios'
import publicConfig from '../../common/publicConfig'
//api接口地址
let serverUrl = publicConfig.serverUrl;
axios.defaults.baseURL = serverUrl;
const con
export default {

    /**
     * 登录
     */
    login() {
        return axios.get("api/user/Login");
    }

}