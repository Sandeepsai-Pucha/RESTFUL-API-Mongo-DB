const express = require('express')
const dbConnect = require('./config/db/dbConnect')
const app = express()

dbConnect();

const PORT = process.env.PORT || 3000

app.use(express.json())

const routes = require('./routes/routes')
app.use('/api', routes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

