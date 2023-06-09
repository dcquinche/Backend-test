import Product, {ProductDocument} from './product.model';
import {DocumentDefinition} from 'mongoose';

export function getAllProducts() {
  return Product.find({});
}

export function getProductById(id: string) {
  return Product.findById(id);
}

export function createProduct(product: DocumentDefinition<ProductDocument>) {
  return Product.create(product);
}

export function updateProduct(id: string, product: DocumentDefinition<ProductDocument>) {
  return Product.findByIdAndUpdate(id, product, {new: true});
}

export function deleteProduct(id: string) {
  return Product.findByIdAndDelete(id);
}
