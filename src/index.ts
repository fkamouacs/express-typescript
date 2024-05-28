import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
export const app = express();

const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req: Request, res: Response) => res.send('Express on Vercel'));

app.listen(3001, () => console.log(`Server running on port ${3001}`));
