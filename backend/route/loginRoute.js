import  express from 'express'
import { loginController } from '../controller/loginController.js'

const loginRoute=express.Router()
loginRoute.post('/login',loginController)
export default loginRoute