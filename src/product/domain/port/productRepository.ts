import Product from "../entity/product";

export default interface ProductRepository {
  countByname(name: string): number;
  save(product: Product): string;
}
