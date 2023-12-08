<template>
    <div>
        <div class="aboutme">
            <div class="am-body">
                <div class="am-aboutme">
                    <div class="am-aboutme-main">
                        <span class="main-text">
                            <h1>Hello World</h1>
                            <p>When you only have one life, that's what makes it special.</p>
                            <p>Perfection is not just about control. It's also about letting go.</p>
                        </span>
                        <span class="main-avatar">
                            <img class="avatar" src="@/resources/images/avatar.jpg" alt="avatar">
                        </span>
                    </div>
                    <div class="am-aboutme-other">
                        <span class="other-button">
                            <b-button variant="outline-primary">进入主页</b-button>
                        </span>
                        <span class="other-button">
                            <b-button variant="success">异世界</b-button>
                        </span>
                    </div>
                </div>
            </div>
            <div class="am-more">
                <div class="am-more-body">
                    <div class="more-big-button">
                        <div class="big-button">
                            <h1 class="big-button-h1">Web前端</h1>
                            <p class="big-button-p">设计页面是一份艺术活!</p>
                        </div>
                        <div class="big-button">
                            <h1 class="big-button-h1">Web后端</h1>
                            <p class="big-button-p">处理数据是一份技术活!</p>
                        </div>
                        <div class="big-button">
                            <h1 class="big-button-h1">原理技术</h1>
                            <p class="big-button-p">在前人肩膀上继续前进!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import Slideshow from '@/components/Slideshow.vue';

export default {
    components: {
        Slideshow,
    },

    data() {
        return {
            avatarUrl: "../resources/images/avatar.jpg",
        }
    },
}

</script>


<style>
.aboutme {
    width: 100%;
}

/* aboutMe上半部 */
.am-aboutme-main {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* 头像div */
.main-avatar {
    margin-left: 5vh;
    width: 50%;
    display: flex;
    justify-content: left;
    align-items: left;
}

/* 头像 */
.avatar {
    width: 30%;
    /* 设置图像宽度为父容器的50% */
    max-width: 10rem;
    /* 设置图像最大宽度为200px */
    height: 100%;
    /* 自动计算图像高度以保持纵横比 */
    border-radius: 50%;
    /* 将图像边框半径设置为50%以创建圆形 */
    object-fit: cover;
    /* 确保图像在容器中完全填充 */
}

/* 文字 */
.main-text {
    user-select: none;
    font-weight: bolder;
    width: 70%;
    display: block;
    text-align: right;

}

/* 其他按钮 */
.am-aboutme-other {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* 其他按钮div */
.other-button {
    margin: 3vh;
}

/* 大按钮div */
.more-big-button {
    color: black;
    margin-top: 5rem;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 768px) {
    .more-big-button {
        width: 100vw;
    }
}

/* 大按钮 */
.big-button {
    border: 2px solid grey;
    margin: 5rem;
    padding: 2rem;
    border-radius: 15%;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

.big-button:hover {
    border: 2px solid rgb(201, 201, 201);
}

.big-button:active {
    color: grey;
    border: 2px solid rgb(0, 0, 0);
    box-shadow: 0px 0px 0px rgba(255, 255, 255, 0.3);
}

.big-button-h1 {
    color: black;
}

.big-button-p {
    color: gray;
}
</style>