import express from 'express';
import { PersonalHandler } from './handlers/personal';
import { ClientHandler } from './handlers/client';

const cors = require('cors');
const PORT = process.env.PORT || 8080;
const app: express.Application = express();

async function main() {
  app.use(cors());

  // Personal handlers
  app.get('/', PersonalHandler.home);

  // Client handlers
  app.get('/clients/:clientId/:pageUri', ClientHandler.targetPage);
  
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

} main();
