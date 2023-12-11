<template>
  <div class="body">
    <div class="container">
      
      <div class="head">
        <h1>pxd的DSL客服</h1>
      </div>
      <div class="main">
        <ShowPart />
        <InputPart />
      </div>
      <div class="foot">
        <p>Powered by Vue 3 + Vite + Tailwind CSS</p>
        <p>copyright@ihan 2023</p>
      </div>

    </div>
  </div>
</template>

<script>
import InputPart from './components/InputPart.vue'
import ShowPart from './components/ShowPart.vue'

export default {
  components: {
    InputPart,ShowPart
  },
  setup() {
    return {
      title: 'Vue 3 + Vite + Tailwind CSS',
    }
  },
}

</script>


<style scoped>

.body {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: bisque;
}

.container {
  margin: 0 auto;
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.foot{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10%;
}

.head {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10%;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 90%;
  width: 100%;
}

</style>
