<template>
    <div class="editorpage-container">
        <div class="container-menu-bar">
            <div class="menu-item">
                标题
            </div>
            <div class="menu-item">
                斜体
            </div>
            <div class="menu-item">
                粗体
            </div>
            <div class="menu-item">
                引用
            </div>
        </div>
        <div class="container-main">
            <div class="input-area">
                <div class="textarea-container">
                    <textarea class="input-textarea" v-model="inputContent" placeholder="支持简单的markdown语法"></textarea>
                </div>
            </div>
            <div class="show-area">
                <div class="body-preview">
                    {{ inputContent }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default ({
    data() {
        return {
            inputContent: "",
        }
    }
})

</script>


<style scoped>
.editorpage-container {
    display: block;
}

.container-menu-bar {
    display: flex;
    background-color: rgb(255, 255, 255);
    border-top: 1px solid rgb(212, 212, 212);
    border-bottom: 1px solid rgb(212, 212, 212);
    margin-bottom: 3px;
}

.menu-item {
    padding: 2px 8px;
    cursor: pointer;
}

.menu-item:hover {
    background-color: rgb(231, 231, 231);
}

.container-main {
    display: flex;
    justify-content: center;
    width: 100%;
}

.input-area {
    width: 50%;
}

.show-area {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    border-left: 1px solid grey;
}

.textarea-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
}

.input-textarea {
    width: 90%;
    min-height: 80vh;
    max-height: 90vh;
    border: none;
    outline: none;
}

@media all and (max-width: 700px) {
    .show-area {
        display: none;
    }

    .input-area {
        width: 100%;
    }
}
</style>