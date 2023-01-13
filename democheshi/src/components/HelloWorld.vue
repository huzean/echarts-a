<template>
  <div class="hello">
  <span>新增一行</span></span>
    <div v-for="(item, index) in items" :key="index">
      <div @mouseover="hover(item)">
        <div v-if="item.select == '第二行'"> 
          <span v-for="(item, index) in list" :key="index">
            {{ item.name }}
          </span>
        </div>
        <div>{{ item.select }}</div>
      </div>
    </div>
    <div
      class="myChart"
      id="myChart"
      :style="{ width: '600px', height: '600px' }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      list: [{ name: "胡" }, { name: "胡" }, { name: "胡" }],
      items: [
        { select: "第一行", icon: 1 },
        { select: "第二行", icon: 2 },
        { select: "第三行", icon: 3 },
        { select: "第四行", icon: 4 },
      ],
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    hover: function (item) {
      console.log("悬停了", item);
    },
    //
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: "在Vue中使用echarts" },
        legend: {
          data: ["销量"],
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
          axisLabel: { interval: 0, rotate: 30 },

          axisLabel: {
            // interval:字体间距
            fontSize: 18, //字体大小
            color: function (value, index) {
              console.log("1234567", value);
              console.log("1234567", index);
              if (index % 2 == 0) {
                return (index = "red");
              } else {
                return (index = "blue");
              }

              // return (index="red")
              // return value == "羊毛衫" ? "green" : "red";
              // if (value == "袜子") {
              //   return (value = "green");
              // }
              // if (value == "裤子") {
              //   return (value = "green");
              // }
              // return (value = "red");
            },
          },
        },
        yAxis: {
          axisLabel: {
            fontSize: 18, //字体大小
            color: "#2E90D1", //字体颜色
          },
        },
        series: [
          {
            name: "销量",
            type: "line",
            smooth: true, //折点是圆弧状的
            // showSymbol: true,
            // symbol: "circe" ,//折点设定为实心点
            symbolSize: 10, //设定实心点的大小
            hoverAnimation: false,
            data: [5, 20, 100, 10, 10, 20],
            label: {
                normal: {
                    show: true,
                    //position: 'bottom', // 文字位置
                    // 显示的文字
                    formatter: '{c}',
                    
                    textStyle: {
                        color: '#000' // 文字颜色
                    }
                },
              data: [
                // {
                //   type: "max",
                //   name: "最小值",
                //   itemStyle: {
                //     color: "#2E90D1",
                //   },
                // },
                // {
                //   value: 5,
                //   xAxis: "衬衫",
                //   yAxis: "5",
                // },

                // 　　　　{    type:'min',name:'最小值',symbol:'arrow'}
              ],
            },
            // markLine: {
            //   data: [
            //     // {
            //     //   type: "average",
            //     //   name: "平均值",
            //     //   itemStyle: {
            //     //     color: "#2E90D1",
            //     //   },
            //     // },
            //   ],
            // },
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
.myChart {
  border: solid red 1px;
}
</style>
