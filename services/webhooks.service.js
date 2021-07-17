const MongooseAdapter = require("moleculer-db-adapter-mongoose");
const Webhook = require("../models/webhook");

module.exports = {
    name: "webhooks",
    adapter: new MongooseAdapter(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }),
    model: Webhook,

    settings: {

    },

    actions: {


    },

    methods: {

    }
};