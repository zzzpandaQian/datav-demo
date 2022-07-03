import * as echarts from 'echarts';
export const option1 = {
  backgroundColor: "transparent",
  legend: {
    data: ["4月", "5月", "6月"],
    right: "5%",
    align: "left",
    top: "2%",
    textStyle: {
      color: "#fff",
    },
    itemWidth: 10,
    itemHeight: 10,
    itemGap: 35,
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: [
        "上海中心",
        "陆家嘴",
        "莘庄街",
        "莘庄街",
        "莘庄街",
      ],
      axisLine: {
        show: true,
        lineStyle: {
          color: "#eee",
          width: 1,
          type: "solid",
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#000",
        },
        padding: [2,7],

        // 前四个参数标识右，下，左，上要是渐变朝哪个方向就设为1即可
        // 这里统一向右渐变
        backgroundColor: new echarts.graphic.LinearGradient(1,0,0,0, [
          {
            offset: 0,
            color: "rgba(255,255,255,0)"
          },
          {
            offset: 0.4,
            color: "#00F5FF"
          },
          {
            offset: 0.5,
            color: "#00F5FF"
          },
          {
            offset: 0.6,
            color: "#00F5FF"
          },
          {
            offset: 1,
            color:"rgba(255,255,255,0)"
          }
        ])
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      min: 0,
      max: 200,
      interval: 50,
      boundaryGap: true,
      splitLine: {
        show:false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#eee",
          width: 1,
          type: "solid",
        },
      },
    },
  ],
  series: [
    {
      name: "4月",
      type: "bar",
      data: [96, 120, 240, 266, 210],
      barWidth: 14, //柱子宽度
      barGap: 0, //柱子之间间距
      itemStyle: {
        normal: {
          color: "rgba(255,255,255,.25)",
          opacity: 1,
        },
      },
    },
    {
      name: "5月",
      type: "bar",
      data: [130, 150, 220, 245, 136],
      barWidth: 14,
      barGap: 0,
      itemStyle: {
        normal: {
          color: "rgba(255,255,255,.5)",
          opacity: 1,
        },
      },
    },
    {
      name: "6月",
      type: "bar",
      data: [350, 270, 460, 511, 346,],
      barWidth: 14,
      barGap: 0,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#00F5FF",
            },
            {
              offset: 1,
              color: "rgba(0,245,255,0)",
            },
          ]),
          opacity: 1,
        },
      },
    },
  ],
};


