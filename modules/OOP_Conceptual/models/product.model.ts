export class Product {
  id: number;
  name: string;
  price: number;
  quantity: number;

  constructor(id: number, name: string, price: number, quantity: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getDetails(): string {
    return `Product: ${this.name} - $${this.price} stock: ${this.quantity}`;
  }

  getStockValue(): number {
    return this.price * this.quantity;
  }
}
