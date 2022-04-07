import express from "express";
import { router } from "../Routes/Router";

export class ExpressServer{
  public server: express.Application;

  constructor(){
    this.server = express();
    this.server.use(express.json());
    this.server.use(router);
  }

}