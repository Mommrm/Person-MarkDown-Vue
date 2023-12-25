const axios = require('axios');

const api = axios.create({
    baseURL: 'http://localhost:8077',
})

// 登录
export const postLogin = (email, password) => {
    return api.post('/user/login', {
        user_email: email,
        user_password: password,
    });
};
// 注册
export const postRegister = (user_name, user_password, user_email) => {
    return api.post('/user/register', {
        user_name: user_name,
        user_password: user_password,
        user_email: user_email,
    })
};
// 根据token查询用户信息 post方法
export const getUserInfoByToken = (token) => {
    return api.post('/user/info', {
        token: token,
    });
};



