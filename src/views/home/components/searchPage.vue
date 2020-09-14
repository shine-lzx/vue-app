<template>
  <div class="search-container">
    <Search
      shape="round"
      background="#FF5511"
      v-model="value"
      show-action
      label="商品"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </Search>

    <div class="history-container">
      <div class="history-search-title">搜索历史</div>
      <div class="history-list">
        <div
          v-for="item in searchHistory"
          :key="item.value"
          @click="handleClickHistory(item.label)"
          class="history-list-cell"
        >
          {{ item.label }}
        </div>
      </div>
    </div>

    <div class="search-find-container">
      <div class="search-find-title">
        <div>搜索发现</div>
        <div>隐藏历史</div>
      </div>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Search } from 'vant'
export default {
  name: 'SearchBar',
  components: {
    Search,
  },
  //TODO 历史数据需要split，不能超过特定数量
  data() {
    return {
      value: '',
      searchHistory: [
        {
          label: '琴酒',
          value: 1,
        },
        {
          label: '伏特加',
          value: 2,
        },
        {
          label: '朗姆酒',
          value: 3,
        },
        {
          label: '雪莉酒',
          value: 4,
        },
        {
          label: '白兰地',
          value: 5,
        },
        {
          label: '血腥玛丽',
          value: 6,
        },
      ],

      searchFind: [],
    }
  },
  mounted() {},
  methods: {
    onSearch() {
      console.log('搜索内容', this.value)
    },
    handleClickHistory(value) {
      this.value = value
    },
  },
}
</script>

<style lang="scss" scoped>
.search-container {
  height: 100vh;
  width: 100%;
  font-size: 16px;
}
.history-container {
  padding: 10px;
  .history-search-title {
    font-size: 16px;
  }
  .history-list {
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    .history-list-cell {
      background: #f5f5f5;
      padding: 5px;
      margin: 0 20px 15px 0;
      border-radius: 10px;
    }
  }
}

.search-find-container {
  padding: 10px;
  .search-find-title {
    font-size: 16px;
  }
}
</style>
