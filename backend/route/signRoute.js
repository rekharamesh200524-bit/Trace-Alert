import express from 'express'
import { signController } from '../controller/signController.js'

const signRoute=express.Router()

signRoute.post('/signup',signController)

export default signRoute
// http://localhost:3000/api/signup