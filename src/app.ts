import * as express from 'express';
import ProductRepositoryArray from "./product/adapter/productRepositoryArray";
import ProductController from "./product/http/productController";

const productRepository = new ProductRepositoryArray();
const employeeController = new ProductController(productRepository);

const app = express();
app.use(express.json());
app.use("/product", employeeController.buildRouter());

export default app;
