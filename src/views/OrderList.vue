<template>
  <div class="orderList">
    <strong>Orders</strong>
    <div v-if="orderList">
      <div v-for="order in orderList" :key="order">
        <order-card :order="order" :orderList="orderList" />
      </div>
    </div>
    <div v-else>There are no orders in the queue</div>
  </div>
</template>

<script>
import OrderCard from '@/components/OrderCard.vue';

export default {
  name: 'orderList',
  components: {
    OrderCard,
  },
  data() {
    return {
      orderList: {},
      refreshInterval: 0,
    };
  },
  computed: {
    loadOrderList() {
      return JSON.parse(localStorage.getItem('orderList'));
    },
  },
  mounted() {
    this.cleanOrderList();
    console.log(this.refreshInterval);
    if (this.refreshInterval <= 0) {
      this.refreshInterval = 10000;
    } else {
      this.refreshInterval *= 1000;
    }
    console.log(this.refreshInterval);
    setInterval(this.cleanOrderList(), 1000);
  },
  methods: {
    cleanOrderList() {
      const timeNow = new Date().getTime();
      let loadList = this.loadOrderList;
      if (loadList) {
        loadList.forEach((item) => {
          // eslint-disable-next-line operator-linebreak
          this.refreshInterval =
            item.prepTime - Math.round(Math.abs(timeNow - item.timeStamp) / 1000);
        });
        loadList = loadList.filter(
          // eslint-disable-next-line comma-dangle
          (item) => Math.round(Math.abs(timeNow - item.timeStamp) / 1000) < item.prepTime
        );
      } else {
        loadList = {};
      }
      console.log(loadList);
      localStorage.setItem('orderList', JSON.stringify(loadList));
      this.orderList = this.loadOrderList;
    },
  },
};
</script>

<style>
.orderList {
  margin: 0;
  position: absolute;
  top: 180px;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
</style>
