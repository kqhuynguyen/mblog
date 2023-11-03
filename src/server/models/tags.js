import mongoose from 'mongoose'

const TagSchema = new Schema({
    tag_name: {
        type: String,
        minLength: 1,
        maxLength: 32,
    }
});

const TagModel = mongoose.model("Tag", TagSchema);
export default TagModel;