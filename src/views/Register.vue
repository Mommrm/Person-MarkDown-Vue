<template>
    <div class="body">
        <div class="register-container">
            <div class="register-text">
                <div class="topic-text">
                    注册
                </div>
            </div>
            <div class="register-input">
                <div class="user-input-container">
                    <input class="user-input" type="text" placeholder="用户名" v-model="user.username">
                </div>
                <div class="user-input-container">
                    <input class="user-input" type="password" placeholder="密码" v-model="user.password">
                </div>
                <div class="user-input-container">
                    <input class="user-input" type="text" placeholder="邮箱" v-model="user.email">
                </div>
                <div class="register-other">
                    <router-link to="/landpage">已有账号?去登录</router-link>
                    <button class="register-button" @click="register">注册</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default ({
    data() {
        return {
            user: {
                username: "",
                password: "",
                email: "",
            }
        }
    },

    methods: {
        register() {
            console.log(this.user.username);
            console.log(this.user.password);
            if (this.user.username == "" || this.user.password == "") {
                alert("账号或密码不能为空");
                return; // 返回
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

.register-container {
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



.register-input {
    display: block;
}

.user-input-container {
    padding: 5px;
}

.user-input {
    padding: 5px;
    width: 100%;
}

.register-other {
    display: flex;
    justify-content: space-between;
}

.register-button {
    padding: 5px;
    background-color: rgb(238, 238, 238);
    border: 1px solid grey;
    border-radius: 15px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}

.register-button:hover {
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

.register-button:active {
    box-shadow: none;
}

@media all and (max-width: 800px) {
    .register-container {
        width: 90%;
        display: block;
        padding: 2vh;
        border: 1px solid grey;
        border-radius: 15px;
    }
}
</style>