import { defineStore } from 'pinia'

export const useMessageStore = defineStore('message', {
    state: () => ({
        input : '', // 输入框的值
        messages: [], // 类型
        MESSAGE_RESPONSE_TYPE : 1000,
        MESSAGE_REQUEST_TYPE : 1001,
    }),
    actions: {
        addResponseMessage(message) {
            this.messages.push({
                type: this.MESSAGE_RESPONSE_TYPE,
                message: message
            })
        },
        addRequestMessage(message) {
            this.messages.push({
                type: this.MESSAGE_REQUEST_TYPE,
                message: message
            })
        },
        clearMessage() {
            this.messages = []
        },
        async send(){
            if(this.input === ''){
                return
            }
            this.addRequestMessage(this.input)
            // 发送请求
            this.addResponseMessage('这是一个回复')
            // await axios.get('./api/message', {
            //     params: {
            //         message: this.input
            //     }
            // }).then(response => {
            //     this.addResponseMessage(response.data.message)
            // }).catch(error => {
            //     this.addResponseMessage('请求失败')
            // })
            this.input = ''
        }
    }
})


