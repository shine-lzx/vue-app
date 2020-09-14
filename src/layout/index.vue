<template>
  <div>
    <AppMain />
    <BottomTab />
  </div>
</template>

<script>
import AppMain from './AppMain'
import BottomTab from './bottomTab'
export default {
  name: 'LayOut',
  components: {
    AppMain,
    BottomTab,
  },
  data() {
    return {}
  },
}
</script>
