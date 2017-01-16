import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ColorMiddleware from './color_middleware';
import BrandMiddleware from './brand_middleware';

export default applyMiddleware(
  SessionMiddleware,
  ColorMiddleware,
  BrandMiddleware
);
