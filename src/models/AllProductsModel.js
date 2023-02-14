import { ProductModel } from './ProductModel';

export default class allProductsModel {
    #allProducts = new Map();

    constructor(data) {
      data.rows.forEach((r) => {
        const product = new ProductModel(r);
        this.#allProducts.set(`${product.name}.${product.category}`, product);
      });
    }

    get allProducts() {
      return this.#allProducts;
    }

    get dedouballProducts() {
      return new Map(Array.from(this.#allProducts.values()).map((p) => ([p.name, p])));
    }

    addproduct(data) {
      const product = new ProductModel(data);
      this.#allProducts.set(`${product.name}.${product.category}`, product);
    }

    removeproduct(name, category) {
      this.#allProducts.delete(`${name}.${category}`);
    }
}
