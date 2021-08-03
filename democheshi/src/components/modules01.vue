<template>
  <div class="monitor-cart-list" >
    <div
      class="monitor-cart-list-name"
      v-for="(item, index) in list"
      :key="index"
    >
    <div :style="{color: item.color }">   {{ item.name }}</div>
   
    </div>
    <div class="monitor-cart-list-number" :style="{ background: color }">
      <div class="monitor-cart-list-number-left">1111</div>
      <div class="monitor-cart-list-number-right">11</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: String,
    list: Array,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.monitor-cart-list {
  width: 320px;
  height: auto;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #f141af;
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 20px;
}
.monitor-cart-list-name {
  width: 320px;
  height: 50px;
  /* border-bottom: 1px solid #E8EAEC; */
  padding: 0 15px;
  box-sizing: border-box;
  line-height: 50px;
  color: #5c5c5c;
}
.monitor-cart-list-number {
  width: 320px;
  height: 60px;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  color: #515a6e;
  font-size: 30px;
  line-height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f141af;
}
.monitor-cart-list-number-left {
  width: 80px;
  height: 50px;
  /* background: burlywood; */
  border-radius: 5px;
  text-align: center;
  line-height: 50px;
}
/* .monitor-cart-list-number-left-icon{
    width: 30px;
    height: 30px;
    fill: currentColor;
    color: #ffffff;
    font-weight: bold;
} */
.monitor-cart-list-number-right {
  width: 60%;
  height: 50px;
  line-height: 50px;
  font-size: 30px;
  text-align: right;
  color: #ffffff;
}
</style>