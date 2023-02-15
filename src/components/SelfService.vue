<template>
    <body>
        <main>
            <section class="items">
        <h4>Pick your items</h4>
        <div class="product selected">
            <div class="photo">
                <img src="../assets/img/big-mac.png" alt="big-mac">
            </div>
            <div class="description">
                <span class="name">Big Mac</span>
                <span class="price">$ 5.99</span>
                <div class="quantity-area">
                    <button>-</button>
                    <span class="quantity">1</span>
                    <button>+</button>
                </div>
            </div>
        </div>
        <div class="product">
            <div class="photo">
                <img src="../assets/img/mc-chicken.png" alt="mc-chicken">
            </div>
            <div class="description">
                <span class="name">Mc Chicken</span>
                <span class="price">$ 4.99</span>
                <div class="quantity-area">
                    <button>-</button>
                    <span class="quantity">1</span>
                    <button>+</button>
                </div>
            </div>
        </div>
        <div class="product">
            <div class="photo">
                <img src="../assets/img/double-cb.png" alt="double-cb">
            </div>
            <div class="description">
                <span class="name">Double Cheese Burger</span>
                <span class="price">$ 2.99</span>
                <div class="quantity-area">
                    <button>-</button>
                    <span class="quantity">1</span>
                    <button>+</button>
                </div>
            </div>
        </div>
        <div class="product">
            <div class="photo">
                <img src="../assets/img/fries.png" alt="fries">
            </div>
            <div class="description">
                <span class="name">Fries</span>
                <span class="price">$ 2.99</span>
                <div class="quantity-area">
                    <button>-</button>
                    <span class="quantity">1</span>
                    <button>+</button>
                </div>
            </div>
        </div>
        <div class="product">
            <div class="photo">
                <img src="../assets/img/nuggets.png" alt="nuggets">
            </div>
            <div class="description">
                <span class="name">Mc Nuggets</span>
                <span class="price">$ 3.49</span>
                <div class="quantity-area">
                    <button>-</button>
                    <span class="quantity">1</span>
                    <button>+</button>
                </div>
            </div>
        </div>
        <div class="product">
            <div class="photo">
                <img src="../assets/img/salad.png" alt="salad">
            </div>
            <div class="description">
                <span class="name">Salad</span>
                <span class="price">$ 2.79</span>
                <div class="quantity-area">
                    <button>-</button>
                    <span class="quantity">1</span>
                    <button>+</button>
                </div>
            </div>
        </div>
        <div class="product">
            <div class="photo">
                <img src="../assets/img/cola.png" alt="cola">
            </div>
            <div class="description">
                <span class="name">Coke</span>
                <span class="price">$ 1.99</span>
                <div class="quantity-area">
                    <button>-</button>
                    <span class="quantity">1</span>
                    <button>+</button>
                </div>
            </div>
        </div>
        <div class="product">
            <div class="photo">
                <img src="../assets/img/lipton.png" alt="lipton">
            </div>
            <div class="description">
                <span class="name">Ice Tea</span>
                <span class="price">$ 1.99</span>
                <div class="quantity-area">
                    <button>-</button>
                    <span class="quantity">1</span>
                    <button>+</button>
                </div>
            </div>
        </div>
        <div class="product">
            <div class="photo">
                <img src="../assets/img/water.png" alt="water">
            </div>
            <div class="description">
                <span class="name">Water</span>
                <span class="price">$ 1.49</span>
                <div class="quantity-area">
                    <button>-</button>
                    <span class="quantity">1</span>
                    <button>+</button>
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
                <tr>
                    <td>1x Big Mac</td>
                    <td>5.99</td>
                </tr>

                <tr>
                    <th>Total</th>
                    <th>5.99</th>
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
  components: {

  },
  data() {
    return {
      products: [],
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
};
</script>

<style scoped>
@import '../assets/css/style.css';
</style>
