import { Sequelize} from "sequelize";
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
        this.connection = new Sequelize(
            "postgresql://postgres:gksekyufOmGpqzFXNCvXyrKpTfVbuEJc@viaduct.proxy.rlwy.net:37056/railway")
        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models))

    }

    mongo() {
        this.mongoConnection = mongoose.connect
            ("mongodb://mongo:aDsDjlmZGWaqhMWdqTlHkIXPXDewqymL@roundhouse.proxy.rlwy.net:29121")
               

    }

}

export default new Database()
