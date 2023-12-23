<template>
    <div>
        <div class="div-navbar">
            <div>
                <b-navbar type="dark" variant="dark">
                    <b-navbar-nav>
                        <b-nav-item href="#/home">主页</b-nav-item>

                        <!-- Navbar dropdowns -->
                        <b-nav-item-dropdown text="更多" right>
                            <b-dropdown-item><router-link to="/community">社区</router-link></b-dropdown-item>
                            <b-dropdown-item><router-link to="/search">搜索</router-link></b-dropdown-item>
                            <b-dropdown-item><router-link to="/aboutme">关于</router-link></b-dropdown-item>
                            <b-dropdown-item><router-link to="/other">其他</router-link></b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown text="用户" right>
                            <b-dropdown-item v-if='landstate === "登陆"'><router-link to="/landpage">{{ landstate
                            }}</router-link></b-dropdown-item>
                            <b-dropdown-item v-if='landstate === "我的空间"'><router-link to="/minespace">{{ landstate
                            }}</router-link></b-dropdown-item>
                            <b-dropdown-item v-if='landstate === "我的空间"'>退出</b-dropdown-item>
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
            landstate: "登陆",
            active: true,
            index: 1, //当前标题选择
        }
    },
    methods: {

    }
}

</script>

<style scoped>
.div-navbar {
    margin: 0;
    padding: 0;
}
</style>