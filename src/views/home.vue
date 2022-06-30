<template>
  <div class="home">
    <div class="header-blk relative w-100 d-flex p-t-5 p-b-5">
      <div class="fs-6 font-bold absolute right-25 d-flex row-center">
        <img src="@/assets/images/icons/clock.png" class="clock-img m-r-2" alt="">
        {{nowTime}}</div>
      <img src="@/assets/images/theme.png" class="theme-img" alt="theme.png">
    </div>
    <div class="contain">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data(){
    return  {
      nowDate: new Date().toLocaleString(),
      timer: null,
    }
  },
  mounted(){
    if(window.requestAnimationFrame){
      this.runClock()
    }else{
      this.timer = setInterval(()=>{
        this.nowDate = new Date().toLocaleString()
      }, 1000)
    }
  },
  beforeDestroy(){
    try{
      clearInterval(this.timer)
      cancelAnimationFrame(this.timer)
    }
    finally{
      this.timer = null
    }

  },
  methods: {
    runClock(){
      this.nowDate = new Date().toLocaleString()
      this.timer = requestAnimationFrame(this.runClock,1000)
    },
  },
  computed:{
    nowTime(){
      if(new Date().getHours() >= 12){
        return this.nowDate.replace(' ', ' PM ').replace(/\//g, ' ')
      }else{
        return this.nowDate.replace(' ', ' AM ').replace(/\//g, ' ')
      }
    }
  }
}
</script>
<style lang="scss">
.home{
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  height: 100vh;
  width: 100vw;
}
.header-blk{
  flex-direction: row-reverse;
  justify-content: center;
  position: relative;
  align-items: center;
  &::after{
    content: "";
    height: 100%;
    width: 1px;
  }
  .theme-img{
    height: 2.3rem;
  }
  .right-25{
    right: 25px;
  }
  .clock-img{
    height: 30px;
    width: 30px;
  }
}
.contain{
  height: 100%;
  width: 100vw;
  background: url('@/assets/images/contain-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
