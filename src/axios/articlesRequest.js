const axios = require('axios');

const api = axios.create({
    baseURL: 'http://localhost:8077',
})
// 获取文章
export const getArticles = (uid) => {
    return api.get(`/articles/${uid}`);
};