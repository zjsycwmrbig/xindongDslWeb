<template>
    <div class="input">
        <input type="text" placeholder="请在这里输入询问! ´༥` （吧唧吧唧嘴）" v-model="messageStore.input" @keydown.enter="messageStore.send()"/>
    </div>
</template>

<script>
import { useMessageStore } from '../stores/pinia'

export default {
    setup() {
        let messageStore = useMessageStore()
        return {
            messageStore
        }
    },
}
</script>

<style scoped>
.input {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 10%;
}
input{
    height: 5vh;
    width: 100%;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #eee;
}
</style>