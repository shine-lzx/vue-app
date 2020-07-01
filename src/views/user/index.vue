<template>
  <div id="viewer"></div>
</template>

<script>
import { Viewer } from "photo-sphere-viewer";
export default {
  mounted() {
    /* eslint-disable */
    const viewer = new Viewer({
      container: document.querySelector("#viewer"),
      panorama:
        "http://192.168.200.248/files/houseType/20200628/d36d1d72-c130-4b77-9505-eb6df9159483.jpg",
      // panorama: {
      //   front: "path/to/front.jpg",
      //   back: "path/to/back.jpg",
      //   left: "path/to/left.jpg",
      //   right: "path/to/right.jpg",
      //   top: "path/to/top.jpg",
      //   bottom: "path/to/bottom.jpg"
      // }
      navbar: [
        "autorotate",
        "zoom",
        {
          id: "my-button",
          content: "Custom",
          title: "Hello world",
          className: "custom-button",
          onClick: () => {
            alert("Hello from custom button");
          }
        },
        "caption",
        "fullscreen"
      ]
    });
  }
};
</script>

<style lang='scss' scoped>
#viewer {
  width: 100%;
  height: 200px;
}
</style>