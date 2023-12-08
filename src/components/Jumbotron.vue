<template>
    <div>
        <b-jumbotron>
            <template #header>MoonBlog</template>

            <template #lead>
                个人博客
            </template>

            <hr class="my-3">

            <p>
                江畔何人初见月，江月何年初照人
            </p>
            <div class="jumbotron-buttons">
                <b-button variant="primary"><router-link to="/landpage" style="color: white;">登录</router-link></b-button>
                <b-button variant="success"><router-link to="/community" style="color: white;">社区</router-link></b-button>
            </div>

        </b-jumbotron>
    </div>
</template>



<style scoped>
.jumbotron-buttons {
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    justify-content: space-between;
}
</style>