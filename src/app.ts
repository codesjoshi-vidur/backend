import express from "express";
import { 
  unhandledError, 
  invalidRoute 
} from "./middlewere/index.ts";
import { testRouter } from "./router/index.ts";
import cors from 'cors';

export const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(cors({
    origin : 'http://localhost:5173',
    methods : ["GET"],
    credentials : true
  }))

  app.use("/staging-api", testRouter);

  app.use(invalidRoute); 
  app.use(unhandledError);

  return app;
};
