import { Router } from 'express';

const router = Router();

router.get('/', async function (req, res) {
  res.json({ success: true, payload: 'All Clients' });
});

export default router;