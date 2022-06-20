<template>
  <div>
    <h4>欢迎光临_vue开发的收银系统_水果店</h4>
    <table>
      <thead>
        <tr>
          <th>苹果10￥/斤,折扣&lt;8折&gt;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>请输入你要购买的斤数 <input type="text" v-model="number" /></td>
        </tr>
        <tr>
          <td><button @click="buy">结账买单~</button></td>
        </tr>
        <tr>
          <td>
            结账单:总价:{{ price }}￥元 折后价:{{ change }}￥元 省了:{{
              save
            }}￥元
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
    <div>
      <div>
        <h3>选择喜欢的</h3>
        <!-- 2 -->
        <span v-for="(item, index) in arr" :key="index">
          <label>
            <input type="checkbox" v-model="like" :value="arr[index]" />
            {{ item }}
          </label>
        </span>
        <ul>
          <li v-for="item in like" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: '0',
      price: '0',
      change: '0',
      save: '0',
      arr: ['科幻', '喜剧', '动漫', '冒险', '科技', '军事', '娱乐', '奇闻'],
      like: []
    }
  },
  methods: {
    buy() {
      this.price = this.number * 10
      this.change = this.price * 0.8
      this.save = this.price - this.change
    }
  }
}
</script>
<style>
* {
  font-size: 24px;
}
table,
tr,
td {
  text-align: center;
  border: 1px solid black;
}
table {
  width: 700px;
}
</style>
