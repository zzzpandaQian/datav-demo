import * as echarts from 'echarts';

export const categoryOption = {
  legend: {
    data: ["莘庄街道1号柜"],
    icon: "none",
    bottom: "0",
    // 默认selectedMode是开启的，可以切换图列是否显示
    selectedMode: false,
    backgroundColor: new echarts.graphic.LinearGradient(1,0,0,0,[
      {
        offset: 0,
        color: "rgba(255,255,255,0)"
      },
      {
        offset: 0.4,
        color: "#00F5FF"
      },
      {
        offset: 0.6,
        color: "#00F5FF"
      },
      {
        offset: 1,
        color: "rgba(255,255,255,0)"
      }
    ]),
    padding: [5,12],
    left: "center",
    align: "center",
    textStyle: {
      color: "#000",
      fontSize: 16,
    },
  },
  radar: [
    {
      radius: "50%",
      triggerEvent: false,
      z: 2,
      name: {
        textStyle: {
          color: "#fff",
          fontSize: 12,
        },
      },
      indicator: [
        {
          name: "党政专题",
          min: 0,
        },
        {
          name: "经济管理",
          min: 0,
        },
        {
          name: "心理励志",
          min: 0,
        },
        {
          name: "时尚生活",
          min: 0,
        },
        {
          name: "其他",
          min: 0,
        },
        {
          name: "信息科技",
          min: 0,
        },
        {
          name: "家庭少儿",
          min: 0,
        },
        {
          name: "畅销文学",
          min: 0,
        },
      ],
      center: ["50%", "50%"], // 位置
      shape: "circle", //形状
      splitArea: {
        areaStyle: {
          color: "transparent", //圆环颜色
          shadowColor: "aqua", // 圆颜色
          shadowBlur: 10,
        },
      },

    },
  ],
  series: [
    {
      type: "radar",
      select: {
        disabled: true
      },
      itemStyle: { // 折线样式设置
        normal: {   // 普通状态下
          lineStyle: {
            color: "#fff",
            width: 1,
          }
        },
        emphasis: { // 高亮，hover的时候样式
          lineStyle: {
            width: 0
          },
          opacity: 0
        }
      },
      data: [
        {
          value: [0.72, 8.76, 12.11, 6.09, 33, 6],
          name: "莘庄街道1号柜",
          // itemStyle: { //单个拐点样式设置
          //   borderWidth: 0,
          //   color: "transparent"
          // },
          lineStyle: {
            color: "#fff",
            width: 1,
          },
          areaStyle: {
              color: "#00F5FF",
              opacity:1,
              shadowColor: "#fff",
              shadowBlur: 25,
              z: 1,
          },
        },
        {
          value: [0.72, 8.76, 12.11, 6.09, 33, 6],
        },
      ]
    },
  ],
  // 去除标记点
  symbol: "none"
};
