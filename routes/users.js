import express from 'express';
import { createUser, deleteUser, getUsers, getUserId, patchUser } from '../controllers/users.js';

const router = express.Router();

router.delete('/:id', deleteUser);

router.get('/', getUsers);

router.get('/:id', getUserId);

router.patch('/:id', patchUser);

router.post('/', createUser);

export default router;