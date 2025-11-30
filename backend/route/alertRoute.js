import express from 'express'
import {alertController} from '../controller/alertController.js'

const alertRoute=express.Router()
alertRoute.post('/alert',alertController)

export default alertRoute