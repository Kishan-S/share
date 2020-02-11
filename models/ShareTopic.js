const mongoose = require("mongoose");

const Schema = mongoose.Schema; //so we do not need to keep writing mongoose.schema

const TopicSchema = new Schema({
  topic: {
    type: Array,
    required: true
  }
});

const TopicModel = mongoose.model("user", UserSchema);
module.exports = TopicModel;
