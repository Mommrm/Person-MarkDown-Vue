<template>
    <div class="body">
        <div class="land-container">
            <div class="land-text">
                <div class="topic-text">
                    登陆
                </div>
            </div>
            <div class="land-input">
                <div class="user-input-container">
                    <input class="user-input" type="text" placeholder="用户名" v-model="user.username">
                </div>
                <div class="user-input-container">
                    <input class="user-input" type="password" placeholder="密码" v-model="user.password">
                </div>
                <div class="land-other">
                    <router-link to="/register">没有账号？去注册</router-link>
                    <button class="land-button" @click="login">登陆</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { postLogin, postLoginOut } from '../axios/request'

export default ({
    data() {
        return {
            user: {
                username: "",
                password: "",
            }
        }
    },

    methods: {
        login() {
            console.log(this.user.username);
            console.log(this.user.password);
            if (this.user.username == "" || this.user.password == "") {
                alert("用户名或密码不能为空");
                return; // 返回
            }
            else {
                postLogin(this.user.username, this.user.password);
            }
        }
    }

})

</script>

<style scoped>
.body {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
}

.land-container {
    width: 30%;
    display: block;
    padding: 2vh;
    border: 1px solid grey;
    border-radius: 15px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}

.topic-text {
    font-size: 2rem;
    user-select: none;
}



.land-input {
    display: block;
}

.user-input-container {
    padding: 5px;
}

.user-input {
    padding: 5px;
    width: 100%;
}

.land-other {
    display: flex;
    justify-content: space-between;
}

.land-button {
    padding: 5px;
    background-color: rgb(238, 238, 238);
    border: 1px solid grey;
    border-radius: 15px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}

.land-button:hover {
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

.land-button:active {
    box-shadow: none;
}

@media all and (max-width: 800px) {
    .land-container {
        width: 90%;
        display: block;
        padding: 2vh;
        border: 1px solid grey;
        border-radius: 15px;
    }
}
</style>