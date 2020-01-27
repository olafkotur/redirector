import express from 'express';
import { config } from '../config';
import { Clients, LegupPages } from '../types/imports';

export const ClientHandler = {
  
  targetPage: (req: express.Request, res: express.Response) => {
    const clientId: string = req.params.clientId;
    const pageUri: string = req.params.pageUri;
    res.redirect(config.clients[clientId as Clients][pageUri as LegupPages]);
  }

};