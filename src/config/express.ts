import cors from 'cors';
import express, {Application} from 'express';

function configExpress(app: Application) {
  app.use(cors());
  app.use(express.json());
}

export default configExpress;
