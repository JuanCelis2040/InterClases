import { Router } from 'express';
import { validator, validatorParams } from "../libs/auth-validator";
const router = Router();

import { signup, signin, profile } from '../controllers/auth'
import { TokenValidation } from '../libs/verifyToken'

router.post('/signup', signup);
router.post('/signin',signin, validator,validatorParams);
router.get('/profile', TokenValidation, profile)

export default router;
