import { Schema, model, Document } from 'mongoose';

export interface ProductDocument extends Document{
  name: String;
  isActive: Boolean;
  isUsed: Boolean;
}

const productSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  isActive: {
    type: Boolean,
    require: true,
  },
  isUsed: {
    type: Boolean,
    require: true,
  },
});

const Product = model<ProductDocument>('Product', productSchema);

export default Product;
