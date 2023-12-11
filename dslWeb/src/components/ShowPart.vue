<template>
  <div class="show" ref="container" @change="scrollToBottom()"> 
    <div v-for="(item,index) in messageStore.messages" :key="index" :class="{showitem:true,response:item.type==messageStore.MESSAGE_RESPONSE_TYPE,request:item.type==messageStore.MESSAGE_REQUEST_TYPE}"> 
        <div :class="{response_ph:item.type==messageStore.MESSAGE_RESPONSE_TYPE,request_ph:item.type==messageStore.MESSAGE_REQUEST_TYPE}"></div>
        {{ item.message  }}
    </div>
  </div>
</template>

<script>
import { useMessageStore } from '../stores/pinia'

export default {
    computed: {
        messageList() {
            return this.messageStore.messages;
        }
    },
    watch:{
        messageList:{
            deep:true,
            handler(){
              this.scrollToBottom();
            }
        }
    },
    methods:{
        scrollToBottom(){
          this.$nextTick(() => {
            this.$refs.container.scrollTop = this.$refs.container.scrollHeight;
          });
        }
    },
    setup() {
        let messageStore = useMessageStore()
        return {
            messageStore
        }
    },
}
</script>

<style scoped>
.show {
    height: 90%;
    width: 100%;
    padding: 10px;
    overflow-y: scroll;
    overflow-x: show;
}

.show::-webkit-scrollbar {
    width: 0px;
    height: 0px;
}

.showitem {
    position: relative;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin: 5px auto;
    padding: 5px;
    font-size: large;
    width: 70%;
}

.response {
    color: #000;
    background-color: #ebebeb;
    text-align: left;
}



.request {
    color: #000;
    background-color: #89d961;
    text-align: right;
}

.request_ph {
    z-index: 1000;
    position: absolute;
    top: 0;
    right: -3.5vh;
    height: 3.5vh;
    width: 3.5vh;
    background: url(../assets/images/response.png) no-repeat;
    /* 让背景图片自适应元素的大小 */
    background-size: cover;
}

.response_ph {
    z-index: 1000;
    position: absolute;
    top: 0;
    left: -3.5vh;
    height: 3.5vh;
    width: 3.5vh;
    background: url(../assets/images/request.png) no-repeat;
    /* 让背景图片自适应元素的大小 */
    background-size: cover;
}

</style>