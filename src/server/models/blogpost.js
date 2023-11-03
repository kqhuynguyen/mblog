import mongoose from 'mongoose'

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