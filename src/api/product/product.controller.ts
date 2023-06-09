import { Request, Response, NextFunction } from 'express';
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from './product.services';

export async function handleGetAllProducts(req: Request, res: Response) {
  try {
    const products = await getAllProducts();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleGetProductById(req: Request, res: Response) {
  const { id } = req.params;
  const product = await getProductById(id);
  if (!product) {
    return res.status(404).json({ message: 'Product was not Found' });
  }
  return res.status(200).json(product);
}

export async function handleCreateProduct(req: Request, res: Response) {
  const data = req.body;
  try {
    const newProduct = await createProduct(data);
    return res.status(200).json(newProduct);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleUpdateProduct(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;
  try {
    const product = await updateProduct(id, data);
    if (!product) {
      return res.status(404).json({ message: 'Product was not Found to Update' });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleDeleteProduct(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await deleteProduct(id);
    return res.status(200).json({ message: 'Product was Deleted' });
  } catch (error) {
    return res.status(500).json(error);
  }
}
