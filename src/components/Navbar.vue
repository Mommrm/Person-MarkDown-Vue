<template>
    <div>
        <div class="div-navbar">
            <div>
                <b-navbar type="dark" variant="dark">
                    <b-navbar-nav>
                        <b-nav-item href="#/home">主页</b-nav-item>

                        <!-- Navbar dropdowns -->
                        <b-nav-item-dropdown text="更多" right>
                            <b-dropdown-item @click="toPath(1)">社区</b-dropdown-item>
                            <b-dropdown-item @click="toPath(2)">搜索</b-dropdown-item>
                            <b-dropdown-item @click="toPath(3)">关于</b-dropdown-item>
                            <b-dropdown-item @click="toPath(4)">其他</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown text="用户" right>
                            <b-dropdown-item v-if='landstate === "未登录"' @click="toPath(5)">登录</b-dropdown-item>
                            <b-dropdown-item v-if='landstate === "已登录"' @click="toPath(6)">我的空间</b-dropdown-item>
                            <b-dropdown-item v-if='landstate === "已登录"' @click="toPath(7)">退出</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-navbar>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            landstate: "未登录",
            active: true,
            index: 1, //当前标题选择
        }
    },
    mounted() {
        //监听缓存中指定key的值变化
        window.addEventListener('storage', (e) => {
            if (e.key && e.key == 'token' && e.newValue) {
                console.log(e.newValue);
                if (e.newValue != null) {
                    this.landstate = "已登录";
                }
                else {
                    this.landstate = "未登录";
                }

            }
        })
    },
    methods: {
        toPath(path) {
            if (path === 1) {
                this.$router.push("/community");
            }
            else if (path === 2) {
                this.$router.push("search");
            }
            else if (path === 3) {
                this.$router.push("minespace");
            }
            else if (path === 4) {
                this.$router.push("other");
            }
            else if (path == 5) {
                this.$router.push("/landpage")
            }
            else if (path == 5) {
                this.$router.push("/minespace")
            }
            else if (path == 7) {
                localStorage.removeItem("token");
            }
        }
    }
}

</script>

<style scoped>
.div-navbar {
    margin: 0;
    padding: 0;
}
</style>