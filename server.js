import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import customersRoutes from './src/routes/customersRoutes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use('/api/customers',customersRoutes)

app.listen(PORT,()=>{
    console.log(`Aplicação rodando na porta ${3000}`)
})