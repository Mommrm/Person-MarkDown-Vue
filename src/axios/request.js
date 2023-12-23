const axios = require('axios');

const api = axios.create({
    baseUrl: 'http://localhost:8088/',
})

export * from '../axios/request.js'
// 登录
postLogin = (username, password) => {
    return api.post('/login', {
        username,
        password,
    });
};
// 退出登录
postLoginOut = () => {
    return api.post('/loginout', {
        Token,
    })
}

