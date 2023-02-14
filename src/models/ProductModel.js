export default class ProductModel {
  constructor(data) {
    this.photo = data.photo ? data.photo : 'placeholder';
    this.name = data.name ? data.name : 'missing';
    this.category = data.category ? data.category : 'missing';
    this.price = data.price ? data.price : 'missing';
    this.active = data.active ? data.active : 'missing';
    this.quantity = data.quantity ? data.quantity : 'missing';
  }

  get label() {
    return `${this.name} - ${this.category}`;
  }
}
