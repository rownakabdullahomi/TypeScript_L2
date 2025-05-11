import { DigitalProduct } from "./models/digitalproduct.model";
import { Product } from "./models/product.model";

const sampleProduct = new Product(101, 'Demo Product', 20, 50);

console.log(sampleProduct.getDetails());

const digitalProduct = new DigitalProduct(202, 'Demo Digital Product', 43, 21, 100);

console.log(digitalProduct.getDetails(), digitalProduct.getStockValue(), digitalProduct.getDownloadInfo());