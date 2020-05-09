export function setTopBack() {
  var topBackDom = document.getElementsByClassName("top_back")[0];
  if (topBackDom != null && topBackDom != undefined) {
    //获取高度
    var topHeight = 25;
    if (plus.navigator.isImmersedStatusbar()) {
      topHeight = plus.navigator.getStatusbarHeight();
    }
    //获取颜色
    var backColor = topBackDom.nextElementSibling.style.backgroundColor;
    topBackDom.nextElementSibling.style.top = topHeight + "px";
    //设置高度颜色
    topBackDom.style.height = topHeight + "px";
    topBackDom.style.background = backColor;
    //设置颜色
    plus.navigator.setStatusBarStyle("dark");
  }
}
