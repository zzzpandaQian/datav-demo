<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import '@/assets/css/global.scss';
html,body,*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body{
  height: 100vh;
  width: 100vw;
}
#app{
  width: 100vw;
  height: 100vh;
  background: #000;
  background: url('@/assets/images/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: #fff;
}
</style>
