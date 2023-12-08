<template>
    <div>
        <div class="article-classify-container">
            <div class="classify-item">
                <div class="item">
                    <b-icon icon="flower1" scale="1"></b-icon>
                    <div>综合</div>
                </div>
            </div>
            <div class="classify-item">
                <div class="item">
                    <b-icon icon="aspect-ratio" scale="1"></b-icon>
                    <div>前端</div>
                </div>
            </div>
            <div class="classify-item">
                <div class="item">
                    <b-icon icon="border-style" scale="1"></b-icon>
                    <div>后端</div>
                </div>
            </div>
            <div class="classify-item">
                <div class="item">
                    <b-icon icon="tools" scale="1"></b-icon>
                    <div>工具</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'

export default ({
    components: {
        BIcon,
        BIconArrowUp,
        BIconArrowDown
    },

    data() {
        return {

        }
    },

    methods: {

    }
})

</script>

<style scoped>
.article-classify-container {
    display: block;
    width: 20vh;
    padding: 5vh 0;
    border: 1px solid rgb(247, 247, 247);
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}

.classify-item {
    width: 100%;
    margin-bottom: 5rem 0;
}

.classify-item:hover {
    color: rgb(68, 68, 252);
    background-color: rgb(252, 252, 252);
}

.item {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    font-size: larger;
}
</style>