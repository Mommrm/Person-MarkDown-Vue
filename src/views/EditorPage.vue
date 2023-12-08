<template>
    <div class="editorpage-container">
        <div class="container-menu-bar">
            <div class="bar-item">
                标题
            </div>
            <div class="bar-item">
                斜体
            </div>
            <div class="bar-item">
                粗体
            </div>
            <div class="bar-item">
                引用
            </div>
        </div>
        <div class="container-main">
            <div class="input-area">
                <div class="textarea-container">
                    <textarea class="input-textarea" v-model="inputContent" placeholder="支持简单的markdown语法"
                        @input="inputText()" @keydown.enter="checkEnter"></textarea>
                </div>
            </div>
            <div class="show-area">
                <div class="body-preview">
                    {{ inputContent }}
                </div>
            </div>
        </div>
        <div class="info-area">
            <div class="container-info-bar">
                <div class="bar-item">
                    字符数: {{ textNum }}
                </div>
                <div class="bar-item">
                    行数: {{ enterNum }}
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
            textNum: 0,
            enterNum: 1,
        }
    },
    methods: {
        inputText() {
            this.textNum = this.inputContent.length;
        },
        checkEnter(event) {
            if (event.key === "Enter") {
                console.log(this.enterNum);
                this.enterNum++;
            }
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
    border-top: 1px solid rgb(212, 212, 212);
    border-bottom: 1px solid rgb(212, 212, 212);
    margin-bottom: 3px;
}

.container-info-bar {
    display: flex;
    border-top: 1px solid rgb(212, 212, 212);
    border-bottom: 1px solid rgb(212, 212, 212);
    margin-bottom: 3px;
}

.bar-item {
    padding: 2px 8px;
    cursor: pointer;
}

.bar-item:hover {
    background-color: rgb(231, 231, 231);
}

.container-main {
    display: flex;
    justify-content: center;
    width: 100%;
}

.input-area {
    width: 50%;
    background-color: #eee;
}

.show-area {
    width: 50%;
    display: flex;
    border-left: 1px solid rgb(212, 212, 212);
}

.body-preview {
    width: 100%;
    height: 84vh;
    overflow-x: hidden;
    overflow-y: auto;
    word-wrap: break-word;
    word-break: break-all;
}

::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background: grey;
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
    min-height: 84vh;
    max-height: 90vh;
    border: none;
    outline: none;
    background-color: #eee;
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