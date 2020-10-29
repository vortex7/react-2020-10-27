const fs = require("fs")
let MongoClient = require("mongodb").MongoClient
let assert = require("assert")
let ObjectId = require("mongodb").ObjectID
let Model = require("../components/model")

class ModelRoutes {
  static getRoutes(router) {
    //  list
    router.post("/list/:modelName", (request, response) => {
      let modelName = request.params.modelName
      let data = request.body

      let options = {}
      options.modelName = modelName
      options.data = data

      let model = new Model(options)

      model.list((data) => {
        response.json(data)
      })
    })

    //  find
    router.post("/find/:modelName", (request, response) => {
      let modelName = request.params.modelName
      let data = request.body

      let options = {}
      options.modelName = modelName
      options.data = data

      let model = new Model(options)

      model.find((data) => {
        response.json(data)
      })
    })

    //  create
    router.post("/create/:modelName", (request, response) => {
      let modelName = request.params.modelName
      let data = request.body

      let options = {}
      options.modelName = modelName
      options.data = data

      let model = new Model(options)

      model.create((resultData) => {
        response.json(resultData)
      })

    })

    //  update
    router.post("/update/:modelName", (request, response) => {
      let modelName = request.params.modelName
      let data = request.body

      let options = {}
      options.modelName = modelName
      options.data = data

      let model = new Model(options)

      model.update((resultData) => {
        response.json(resultData)
      })
    })

    //  delete
    router.post("/delete/:modelName", (request, response) => {
      let modelName = request.params.modelName
      let data = request.body

      let options = {}
      options.modelName = modelName
      options.data = data

      let model = new Model(options)

      model.delete((resultData) => {
        response.json(resultData)
      })
    })
  }

}

module.exports = ModelRoutes