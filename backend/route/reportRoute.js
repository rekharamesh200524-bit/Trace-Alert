import express from 'express'
import ReportMulter from '../Middleware/ReportMulter.js'
import { reportController } from '../controller/reportController.js'

const reportRoute=express.Router()
reportRoute.post('/reportMissing',ReportMulter.single("photo"),reportController)

export default reportRoute