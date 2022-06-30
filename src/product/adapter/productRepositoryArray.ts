import { generateId } from "../../shared/domain/entity";
import Product from "../domain/entity/product";
import ProductRepository from "../domain/port/productRepository";
import ProductModel from "./productModel";

export default class ProductRepositoryArray implements ProductRepository {
  
  private product: ProductModel[] = [];

  countByname(name: string): number {
    return this.product.filter(
      (product) => product.name === name.toLowerCase()
    ).length;
  }
  save(product: Product): string {
    const { name, price } = product;
    const id = generateId();
    const productModel = new ProductModel(name, price);
    this.product.push(productModel);
    return productModel.name;
  }
}
