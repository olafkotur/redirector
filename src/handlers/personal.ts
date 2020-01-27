import express from 'express';
import { config } from '../config';

export const PersonalHandler = {

  home: (_req: express.Request, res: express.Response) => {
    res.redirect(config.personal.home);
  }

};