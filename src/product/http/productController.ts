import { Request, Response, Router } from "express";
import { isLeft } from "../../shared/util/either";
import RegisterProductService from "../application/registerProductService";
import ProductRepository from "../domain/port/productRepository";

export default class ProductController {
  constructor(readonly productRepository: ProductRepository) {}

  buildRouter(): Router {
    const router = Router();
    router.post("/", this.registerProductHandler.bind(this));
    router.get("/", this.registerProductHandler.bind(this));
    return router;
  }

  registerProductHandler(req: Request, res: Response): void {
    const registerProductService = new RegisterProductService(
      this.productRepository
    );
    const { name, price } = req.body;
    const result = registerProductService.execute({
      name,
      price,
    });

    if (isLeft(result)) {
      //format the response error as you wish
      res.status(400).json(result.value.message);
    } else {
      //TODO maybe a constant with url prefix "employees"
      res.setHeader("Location", `/employees/${result.value}`);
      res.sendStatus(201);
    }
  }
}
