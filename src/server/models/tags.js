import mongoose from 'mongoose'

mongoose.set("strictQuery", false)
mongoose.connect("mongodb://root:abc123@mongo:27017/myblgs")

const TagSchema = new Schema({
    tag_name: {
        type: String,
        minLength: 1,
        maxLength: 32,
    }
});

const TagModel = mongoose.model("Tag", TagSchema);
export default TagModel;