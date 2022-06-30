import Product from '../entity/product';
import { Either, Left, Right } from "../../../shared/util/either";
import ProductRepository from '../port/ProductRepository';

export default class RegisterProductUseCase {
    constructor(readonly productRepository: ProductRepository) {}


    execute(product: Product): Either<Error, string> {
        // const nameAlreadyUsed = this.checkEmailAlreadyUsed(product.name.valueOf());
        // if (nameAlreadyUsed) return Left(Error("Name already used"));
        const id = this.productRepository.save(product);
        return Right(id);
    }

    private checkEmailAlreadyUsed(name: string): boolean {
        return this.productRepository.countByname(name) > 0;
    }
}