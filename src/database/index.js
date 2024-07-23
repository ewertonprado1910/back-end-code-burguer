import { Sequelize } from "sequelize";
import ConfigDatabase from "../config/database"
import mongoose from "mongoose";

import User from "../app/models/User";
import Product from "../app/models/Products"
import Category from "../app/models/Caregory";

const models = [User, Product, Category]

class Database {
    constructor() {
        this.init()
        this.mongo()
    }

    init() {
        this.connection = new Sequelize("postgresql://postgres:ibHsXczKstXQDkNZnIDJIUxcaPoNrkdO@viaduct.proxy.rlwy.net:19794/railway")
        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models))

    }

    mongo() {
        this.mongoConnection = mongoose.connect
            ("mongodb://mongo:EKPYjPTZXKYopLCHBmoPXzIdgQaIBaeA@roundhouse.proxy.rlwy.net:38736")

    }

}

export default new Database()
