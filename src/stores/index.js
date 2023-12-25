import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', {
    state: () => {
        return {
            user: {
                userId: "",
                userName: "",
                userEmail: "",
            }
        }
    },
    getters: {

    },

    actions: {
        //设置用户变量
        setUser(user) {
            this.$patch({ user })
        }
    }
})
