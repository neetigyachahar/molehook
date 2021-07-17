let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let WebhookSchema = new Schema({
    targerUrl: string
}, {
    timestamps: true
});

module.exports = mongoose.model("Webhook", WebhookSchema);