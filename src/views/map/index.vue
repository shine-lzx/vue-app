<template>
  <div>
    <div id="container" class="map-container"></div>
    <Button @click="handleStart">开始动画</Button>
    <Button @click="handleSuspend">暂停动画</Button>
    <Button @click="handleContinue">继续动画</Button>
    <!-- <Button @click="handleSpeed">加速</Button> -->
  </div>
</template>

<script>
let lineArr = [
  [116.478935, 39.997761],
  [116.478939, 39.997825],
  [116.478912, 39.998549],
  [116.478912, 39.998549],
  [116.478998, 39.998555],
  [116.478998, 39.998555],
  [116.479282, 39.99856],
  [116.479658, 39.998528],
  [116.480151, 39.998453],
  [116.480784, 39.998302],
  [116.480784, 39.998302],
  [116.481149, 39.998184],
  [116.481573, 39.997997],
  [116.481863, 39.997846],
  [116.482072, 39.997718],
  [116.482362, 39.997718],
  [116.483633, 39.998935],
  [116.48367, 39.998968],
  [116.484648, 39.999861],
]
import { Button } from 'vant'
export default {
  name: 'Map',
  components: {
    Button,
  },
  data() {
    return {
      trackMap: null,
      trackMarker: null,
      speed: 500,
    }
  },

  mounted() {
    this.initMap()
  },

  created() {},

  methods: {
    initMap() {
      this.renderMap()
    },

    handleStart() {
      this.trackMarker.moveAlong(lineArr, this.speed)
    },

    handleSuspend() {
      this.trackMarker.pauseMove()
    },

    handleSpeed() {
      this.speed = this.speed + 500
      this.trackMarker.resumeMove()
    },

    handleContinue() {
      this.trackMarker.resumeMove()
    },

    renderMap() {
      // eslint-disable-next-line no-undef
      this.trackMap = new AMap.Map('container', {
        resizeEnable: true,
        center: [116.397428, 39.90923],
        zoom: 17,
      })

      // eslint-disable-next-line no-undef
      this.trackMarker = new AMap.Marker({
        map: this.trackMap,
        position: [116.478935, 39.997761],
        icon: 'https://webapi.amap.com/images/car.png',
        // eslint-disable-next-line no-undef
        offset: new AMap.Pixel(-26, -13),
        autoRotation: true,
        angle: -90,
      })

      // 绘制轨迹
      // eslint-disable-next-line no-undef
      let passedPolyline = new AMap.Polyline({
        map: this.trackMap,
        path: lineArr,
        showDir: true,
        strokeColor: '#28F', //线颜色
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 6, //线宽
        // strokeStyle: "solid"  //线样式
      })

      this.trackMarker.on('moving', function(e) {
        passedPolyline.setPath(e.passedPath)
      })

      this.trackMap.setFitView()

      // eslint-disable-next-line no-undef
      new AMap.Polyline({
        map: this.trackMap,
        path: lineArr,
        strokeColor: '#007aff', //线颜色
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 6, //线宽
        strokeStyle: 'solid', //线样式
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.map-container {
  width: 100vw;
  height: 80vh;
}
</style>
