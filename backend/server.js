import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import signRoute from './route/signRoute.js'
import connect from './config/db.js'
import loginRoute from './route/loginRoute.js'
import reportRoute from './route/reportRoute.js'
import missRoute from './route/missRoute.js'
import alertRoute from './route/alertRoute.js'


dotenv.config()
connect()
const app=express()
app.use(cors())
app.use(express.json())
app.use('/api',signRoute)
app.use('/api',loginRoute)
app.use('/api',reportRoute)
app.use('/api',missRoute)
app.use('/api',alertRoute)
const port =process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server successfully running on http://localhost:${port}`);
    
})