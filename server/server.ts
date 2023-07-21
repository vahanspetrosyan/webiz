import express, { type Request, type Response, type Application, type NextFunction } from 'express';
import cors from 'cors';
import routes from './routes';
import { sequelize } from './models';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', routes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({
    message: 'Page Not Found',
    status: 404
  });
});

void (async () => {
  try {
    await sequelize.sync();
    console.log('Sync done');
  } catch (e) {
    console.error(e);
  }
})();

// set port, listen for requests
const PORT = process.env.PORT ?? 3003;
app.listen(PORT, (): void => {
  console.log(`Server Running here 👉 https://localhost:${PORT}`);
});
