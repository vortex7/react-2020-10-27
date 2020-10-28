const express = require("express")
const cors = require("cors")
const app = express()

// Read config into env
const config = require("../config.json")
process.env = Object.assign(process.env, config)

const port = process.env.port

app.use(cors())

app.use(express.static("public", { extensions: [ "js" ] }))

app.listen(port, () => console.log(`app listening on port ${port}!`))