import BlogPostModel from "../../src/server/models/blogpost"

export function initBlogCollection() {
    const blogpost = new BlogPostModel()
    return BlogPostModel.insertMany([{
      title: "Blog post 1",
      _id: "65451a4b0e1bd1cfac438b90",
      author: "Mr. Nothing",
      body: "Nothing 1",
    }, {
      title: "Blog post to be updated",
      _id: "6545fe4e759ebfae8a04c0d8",
      author: "Mr. Someone",
      body: "Chapter 2",
    }])
  }

  
export function deleteBlogCollection() {
    return BlogPostModel.deleteMany({}).exec()
  }
