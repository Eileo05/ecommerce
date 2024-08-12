import express from 'express'
import userRoutes from "./routes/users"

const app= express();

// ligaçao com o  servidor 

app.use(express.json())
app.use(cors())

app.use("/", userRoutes)

app.listen(8800)