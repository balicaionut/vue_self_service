<template>
  <body>
    <main>
      <section class="items">
        <h4>Pick your items</h4>
        <div
          class="product"
          v-for="product in products"
          :key="product"
          @click="product.active = !product.active"
          @keypress="product.active = !product.active"
          :class="{ selected: product.active }"
        >
          <div class="photo">
            <img :src="require('../assets/' + product.photo)" :alt="product.name" />
          </div>
          <div class="description">
            <span class="name">{{ product.name }}</span>
            <span class="price">{{ product.price }}</span>
            <div v-if="product.active" class="quantity-area">
              <button @click.stop="product.quantity--" :disabled="product.quantity <= 1">
                -
              </button>
              <span class="quantity">{{ product.quantity }}</span>
              <button @click.stop="product.quantity++">+</button>
            </div>
          </div>
        </div>
      </section>

      <section class="summary">
        <strong>Order Details</strong>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product">
              <template v-if="product.active">
                <td>{{ product.quantity + ' x ' + product.name }}</td>
                <td>{{ (product.quantity * product.price).toFixed(2) }}</td>
              </template>
            </tr>
            <tr>
              <th>Total</th>
              <th>{{ calculateTotal().toFixed(2) }}</th>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </body>
</template>

<script>
import productsJson from '../assets/prducts.json';

export default {
  name: 'SelfService',
  components: {},
  data() {
    return {
      products: [],
      total: 0,
    };
  },
  computed: {
    loadProducts() {
      return productsJson;
    },
  },
  mounted() {
    this.products = this.loadProducts;
  },
  methods: {
    calculateTotal() {
      let total = 0;
      this.products.forEach((item) => {
        if (item.active) {
          total += item.price * item.quantity;
        }
      });
      return total;
    },
  },
};
</script>

<style scoped>
@import '../assets/css/style.css';
</style>
