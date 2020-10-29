const cors = require("cors")
const express = require("express")
const path = require("path")
const app = express()

// Read config into env
const config = require("./config.json")
process.env = Object.assign(process.env, config)

const port = process.env.port

app.use(cors())

app.use(express.static("app/build"))

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/build/index.html"), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(port, () => console.log(`app listening on port ${port}!`))