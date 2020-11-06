import axios from './axios.js';
import { Message } from 'element-ui';

const generateSignData = (data = {}) => {
    return data;
};

function urlStrToObj(url) {
    var obj = new Object();
    if (url.indexOf('?') != -1) {
        //判断？后面是否有字符
        var strTemp = url.split('?'); //以？符号分离
        obj.url = strTemp[0];
        var strs = strTemp[1].split('&'); //以&符号分离
        for (var i = 0; i < strs.length; i++) {
            //decodeURI：将字符解码
            //decodeURIComponent：加密
            obj[strs[i].split('=')[0]] = decodeURI(strs[i].split('=')[1]);
        }
        obj.flag = true;
    } else obj.flag = false;
    return obj;
}

// get单个接口方法
export function get(url, data = {},loading=true) {
    var urlObj = urlStrToObj(url);
    if (urlObj.flag) {
        url = urlObj.url;
        delete urlObj.url;
        delete urlObj.flag;
        data = Object.assign(data, urlObj);
    }
    generateSignData(data);
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: url,
            params: data,
            loading: loading,
        }).then(
            res => {
                if (
                    res.status == 200 ||
                    res.status == 201 ||
                    res.status == 202 ||
                    res.status == 204
                )
                    resolve(res.data);
            },
            err => {
                Message.error(err);
                reject(err);
            }
        );
    });
}

// post方法
export function post(url, data = {},loading=true) {
    generateSignData(data);
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: url,
            data: data,
            loading: loading,
        }).then(
            res => {
                if (url === '/account/login') {
                    // 登录返回所有数据
                    if (
                        res.status !== 200 &&
                        res.status !== 201 &&
                        res.status !== 202 &&
                        res.status !== 204
                    ) {
                        Message.error(res.data.msg);
                        resolve(res.data);
                    } else {
                        resolve(res.data);
                    }
                } else {
                    if (
                        res.status !== 200 &&
                        res.status !== 201 &&
                        res.status !== 202 &&
                        res.status !== 204
                    ) {
                        Message.error(res.data.msg);
                        return;
                    }
                    resolve(res.data);
                }
            },
            err => {
                Message.error(err)
            }
        );
    });
}

// put方法
export function put(url, data = {},loading=true) {
    generateSignData(data);
    return new Promise((resolve, reject) => {
        axios({
            method: 'put',
            url: url,
            data: data,
            loading: loading,
        }).then(
            res => {
                if (url === '/account/login') {
                    // 登录返回所有数据
                    if (
                        res.status !== 200 &&
                        res.status !== 201 &&
                        res.status !== 202 &&
                        res.status !== 204
                    ) {
                        Message.error(res.data.msg);
                        resolve(res.data);
                    } else {
                        resolve(res.data);
                    }
                } else {
                    if (
                        res.status !== 200 &&
                        res.status !== 201 &&
                        res.status !== 202 &&
                        res.status !== 204
                    ) {
                        Message.error(res.data.msg);
                        return;
                    }
                    resolve(res.data);
                }
            },
            err => {
                err = JSON.parse(err)
                Message.error(err.data.message);
                reject(err)
            }
        );
    });
}

// delete请求
export function del(url, data = {},loading=true) {
    var urlObj = urlStrToObj(url);
    if (urlObj.flag) {
        url = urlObj.url;
        delete urlObj.url;
        delete urlObj.flag;
        data = Object.assign(data, urlObj);
    }
    generateSignData(data);
    return new Promise((resolve, reject) => {
        axios({
            method: 'delete',
            url: url,
            params: data,
            loading: loading,
        }).then(
            res => {
                if (
                    res.status == 200 ||
                    res.status == 201 ||
                    res.status == 202 ||
                    res.status == 204
                )
                    resolve(res.data);
            },
            err => {
                Message.error(err);
            }
        );
    });
}
