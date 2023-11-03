
export function initializeBlogDatabase() {
    blogpost = new BlogPostModel({
      _id: 0,
      title: "Blog post 1",
      author: "Mr. Nothing",
      body: "Nothing 1",
    })
    return blogpost.save()
  }
