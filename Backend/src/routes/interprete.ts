import express from 'express';
import { interpreteController } from '../controller/controllerInterprete';
const router = express.Router(); 

router.get('/ping1', interpreteController.ping);
router.post('/interpretar', interpreteController.interpretar);

export default router;