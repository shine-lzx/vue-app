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
      panorama:{},
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