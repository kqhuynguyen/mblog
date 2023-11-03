
import db from "../adapters/orm";

const Schema = db.Schema;


const BlogPostSchema = new Schema({
  title: {
    type: String,
    maxLength: 128,
  },
  created_date: Date,
  author: String,
  body: String,
  tags: [String],
});

const BlogPostModel = db.model("BlogPost", BlogPostSchema);
export default BlogPostModel;