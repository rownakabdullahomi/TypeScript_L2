import { Product } from "./product.model";

export class DigitalProduct extends Product {
//   downloadSize: number;
  constructor(
    id: number,
    name: string,
    price: number,
    quantity: number,
    public downloadSize: number
  ) {
    super(id, name, price, quantity);
    // this.downloadSize = downloadSize;
  }

   getDownloadInfo(): string{
        return `${this.name} is downloading.. Size ${this.downloadSize} MB`
    }
}
