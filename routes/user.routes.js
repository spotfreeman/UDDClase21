import express from 'express'
const router = express.Router()

import { createUser, getAllUsers, updateUser, deleteUserByRut } from '../controllers/user.controller.js'

router.get('/users', getAllUsers)
router.post('/users', createUser)
router.put('/users/:rut', updateUser)
router.delete('/users/:rut', deleteUserByRut)

export default router