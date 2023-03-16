<template>
  <table>
    <thead>
      <tr>
        <th>number</th>
        <th>prep time</th>
        <th>wait time</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ order.number }}</td>
        <td>
          {{ Math.floor(order.prepTime / 60) }} :
          {{ order.prepTime % 60 === 0 ? '00' : order.prepTime % 60 }}
        </td>
        <td>{{ waitTime() }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'orderList',
  props: {
    order: {
      type: Object,
      default() {
        return {};
      },
    },
    orderList: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.orderList);
  },
  methods: {
    waitTime() {
      const list = this.orderList;
      let wait = 0;
      list.forEach((item) => {
        if (item.number <= this.order.number) wait += item.prepTime;
      });
      console.log(this.order, wait);
      return wait;
    },
  },
};
</script>

<style></style>
