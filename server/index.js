import "./loadEnv.js"

import express from 'express'
import movies from './routes/movies.js'

const app = express()

app.use("/movies", movies)

const listener = app.listen(process.env.PORT, () => {
    console.log(`Server listening on http://localhost:${listener.address().port}`)
})
