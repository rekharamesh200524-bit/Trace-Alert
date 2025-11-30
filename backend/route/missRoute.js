import express from 'express'
import { missController } from '../controller/missController.js'

const missRoute=express.Router()

missRoute.get('/miss',missController)

export default missRoute