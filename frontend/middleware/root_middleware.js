import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ColorMiddleware from './color_middleware';
import BrandMiddleware from './brand_middleware';
import ProductMiddleware from './product_middleware';
import ItemMiddleware from './item_middleware';

export default applyMiddleware(
  SessionMiddleware,
  ColorMiddleware,
  BrandMiddleware,
  ProductMiddleware,
  ItemMiddleware
);
