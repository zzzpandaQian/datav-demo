<template>
  <div class="home">
    <div class="header-blk relative w-100 d-flex p-t-5 p-b-5">
      <div class="fs-6 font-bold absolute right-25 d-flex row-center">
        <img src="@/assets/images/icons/clock.png" class="clock-img m-r-2" alt="">
        {{nowTime}}</div>
      <img src="@/assets/images/theme.png" class="theme-img" alt="theme.png">
    </div>
    <div class="contain d-flex-row">
      <div class="main-wrap flex-1">
        <section class="read-date-wrap p-t-2">
          <img src="@/assets/images/read-date.png" class="section-title m-l-5" alt="阅读数据概览">
          <img src="@/assets/images/line.png" class="line-img">
          <div class="d-flex-row read-chart-wrap p-r-10 p-l-6">
            <section class="top5-wrap">
              <div class="chart-title-blk">
                阅读量TOP5
              </div>
              <div class="chart-blk">
                <div id="top5-chart"></div>
              </div>
            </section>
            <section class="category-wrap">
              <div class="chart-title-blk text-align-end">
                品类分布
              </div>
              <div class="chart-blk">
                <div id="category-chart"></div>
              </div>
            </section>
          </div>
        </section>
      </div>
      <div class="main-wrap flex-1">
        <section></section>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import * as echarts from 'echarts';
import {option1} from '@/date/top5';
import {categoryOption} from '@/date/category';

export default {
  name: 'home',
  data(){
    return  {
      nowDate: new Date().toLocaleString(),
      timer: null,
    }
  },
  created(){

  },
  mounted(){
    this.loadData()
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
    loadData(){
      const top5 = echarts.init(document.getElementById('top5-chart'));
      top5.setOption(option1)
      const categoryChart = echarts.init(document.getElementById('category-chart'));
      categoryChart.setOption(categoryOption)
    },
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
  .contain{
    height: 100%;
    width: 100vw;
    background: url('@/assets/images/contain-bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
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

.read-date-wrap{
  .section-title{
    height: 3rem;
  }
  .read-chart-wrap{
    width: 100%;
    .top5-wrap{
      width: 60%;
    }
    .category-wrap{
      width: 40%;
    }
    .chart-blk{
      width: 100%;
    }
    .chart-title-blk{
      font-size: 1rem;
      font-weight: 600;
    }
    #top5-chart{
      // calc((100vw - 5rem)/2 * 6/10 * 3/5)
      height: calc((100vw - 5rem) * 0.18);
    }
    #category-chart{
      height: calc((100vw - 5rem) * 0.18);
    }
  }
}
.line-img{
  width: 100%;
}

</style>
