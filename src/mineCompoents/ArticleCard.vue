<template>
    <div>
        <div class="article-card-container" v-for="article in articles" :key="article.articleId"
            @click="toArticle(article.articleId)">
            <div class="article-topic">
                <h3>{{ article.topic }}</h3>
            </div>
            <div class="article-info">
                <div class="article-author">
                    <div class="font-info">{{ article.author }}</div>
                </div>
                <div class="article-date">
                    <div class="font-info">{{ article.date }}</div>
                </div>
            </div>
            <div class="article-abstract">
                <p class="font-p">{{ article.abstract }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default ({
    data() {
        return {
            articles: [
                {
                    articleId: 1, // 文章id
                    topic: '标题1', // 文章标题
                    author: '作者1', // 作者
                    date: '2022-04-01',
                    abstract: "摘要1"
                },
                {
                    articleId: 2, // 文章id
                    topic: '标题2', // 文章标题
                    author: '作者2', // 作者
                    date: '2022-04-02',
                    abstract: "摘要2"
                },
                {
                    articleId: 3, // 文章id
                    topic: '标题3', // 文章标题
                    author: '作者3', // 作者
                    date: '2022-04-02',
                    abstract: "摘要3"
                },
            ]
        }
    },
    created() {
        //创建页面就获取文章列表
    },
    methods: {
        toArticle(articleId) {
            this.$router.push({
                path: '/articles/' + articleId,
            })
        }
    }

})

</script>

<style scoped>
.article-card-container {
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    cursor: pointer;
    border: 1px solid rgb(226, 226, 226);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}

.article-card-container:hover {
    background-color: rgb(247, 247, 247);
}

.article-info {
    display: flex;
    justify-content: space-between;
}

.font-info {
    color: black;
    margin-right: 1rem;
}

.font-p {
    color: grey;
}


@media all and (max-width: 300px) {
    .article-info {
        display: block;
    }
}
</style>