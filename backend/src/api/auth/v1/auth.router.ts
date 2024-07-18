import express from 'express';
import { generateTestToken, login, logout, register } from './auth.controller';
import verifyTokenId from './auth.middleware';
import { registerValidation } from './auth.validation';
import { verifyAccessToken } from '../../../middlewares/access.token.middleware';

const router = express.Router();
router.use(express.json());

router.post('/test-token', generateTestToken);
router.post('/login', verifyTokenId, login);
router.post('/register', verifyTokenId, registerValidation, register);
router.post('/logout', verifyAccessToken, logout);

export default router;
