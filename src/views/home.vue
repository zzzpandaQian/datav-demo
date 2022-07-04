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
import {option1} from '@/data/top5';
import {categoryOption} from '@/data/category';

export default {
  name: 'home',
  data(){
    return  {
      nowDate: new Date().toLocaleString(),
      timer: null,
      current: 0,
      categoryInterval: null
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
      clearInterval(this.categoryInterval)
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
      this.getCategoryData()
    },
    runClock(){
      this.nowDate = new Date().toLocaleString()
      this.timer = requestAnimationFrame(this.runClock,1000)
    },
    getCategoryData(){
      const categoryChart = echarts.init(document.getElementById('category-chart'));
      new Promise(resolve=>{
        console.log('load category data')
        resolve()
      }).then(r=>{
        const data = [
          {
            name: "莘庄街道1号柜",
            value: [0.72, 8.76, 12.11, 6.09, 33, 6,2,10],
          },
          {
            name: "莘庄街道2号柜",
            value: [20.72, 18.76, 22.11, 26.09, 13, 16,20,3],
          },
          {
            name: "莘庄街道3号柜",
            value: [10.72, 3.76, 17.11, 16.09, 23, 16,1,20],
          },
          {
            name: "莘庄街道4号柜",
            value: [10.72, 3.76, 1.11, 16.09, 2, 16,6,1],
          },
                    {
            name: "莘庄街道5号柜",
            value: [20.72, 32.76, 1.11, 6.09, 3, 6,4,6],
          },
        ]
        categoryOption.legend.data = [data[this.current].name]
        categoryOption.series[0].data[0].name = data[this.current].name
        categoryOption.series[0].data[0].value = data[this.current].value
        categoryOption.series[0].data[0].groupId = 'category'
        categoryChart.setOption(categoryOption)
        this.categoryInterval = setInterval(()=>{
          if(this.current == 4){
            this.current = 0
          }else{
            this.current += 1
          }
          categoryOption.legend.data = [data[this.current].name]
          categoryOption.series[0].data[0].name = data[this.current].name
          categoryOption.series[0].data[0].value = data[this.current].value
          categoryOption.series[0].data[0].groupId = 'category'

          categoryChart.setOption(categoryOption)

        },3000)
      })

    }
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
