import { Application } from 'express';
import product from './api/product';

function routes(app: Application):void {
  app.use('/api/products', product);
}

export default routes;
