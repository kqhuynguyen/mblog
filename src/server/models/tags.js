
import db from "../adapters/orm";

const TagSchema = new db.Schema({
    tag_name: {
        type: String,
        minLength: 1,
        maxLength: 32,
    }
});

const TagModel = db.model("Tag", TagSchema);
export default TagModel;