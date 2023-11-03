import BlogPostModel from "../../src/server/models/blogpost"

export function initBlogCollection() {
    const blogpost = new BlogPostModel({
      title: "Blog post 1",
      _id: "65451a4b0e1bd1cfac438b90",
      author: "Mr. Nothing",
      body: "Nothing 1",
    })
    return blogpost.save()
  }

  
export function deleteBlogCollection() {
    return BlogPostModel.deleteMany({}).exec()
  }
