<template>
    <div>
        <div>
            <b-nav pills>
                <b-nav-item :active="activeItem === 1" @click="selcetItem(1)">推荐</b-nav-item>
                <b-nav-item :active="activeItem === 2" @click="selcetItem(2)">最新</b-nav-item>
            </b-nav>
        </div>
    </div>
</template>

<script>
export default ({

    data() {
        return {
            activeItem: 1,
        }
    },
    methods: {
        //选择推荐还是最新的排序页面
        selcetItem(index) {
            this.activeItem = index;
        }
    },
    mounted() {

    }
})

</script>

<style scoped></style>