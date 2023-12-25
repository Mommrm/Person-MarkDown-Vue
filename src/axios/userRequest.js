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
export const postRegister = (user_name, user_password, user_email) => {
    return api.post('/user/register', {
        user_name: user_name,
        user_password: user_password,
        user_email: user_email,
    })
};
// 退出登录
export const postLoginOut = () => {
    return api.post('/user/loginout', {
        Token,
    })
}

