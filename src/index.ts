import express from'express';
import configDataBase from './config/database';
import configExpress from './config/express';
import routes from './routes';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 8080;
const app = express();
configDataBase();
configExpress(app);
routes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
