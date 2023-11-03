import mongoose from 'mongoose'
mongoose.set("strictQuery", false)
mongoose.connect("mongodb://root:abc123@mongo:27017/")

const Schema = mongoose.Schema;


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

const BlogPostModel = mongoose.model("BlogPost", BlogPostSchema);
export default BlogPostModel;