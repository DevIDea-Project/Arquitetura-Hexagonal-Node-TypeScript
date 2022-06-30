import Product from "../domain/entity/product";
import ProductRepository from "../domain/port/ProductRepository";
import RegisterProductUseCase from "../domain/usecase/registerProductUseCase";

type RegisterProductRequest = {
    name: string,
    price: number
};

export default class RegisterProductService {
    constructor(readonly productRepository: ProductRepository) {}
  
    execute(request: RegisterProductRequest) {
      const { name, price } = request;
  
      const product = new Product(name, price);
  
      const registerProductUseCase = new RegisterProductUseCase(
        this.productRepository
      );
      return registerProductUseCase.execute(product);
    }
  }

