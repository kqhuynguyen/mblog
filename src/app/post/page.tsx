

const posts = [{
  "title": "COVID-19 ends.",
  "body": "It's okay now.",
}, {
  "title": "A reporter was bitten by a bee.",
  "body": "Not a good day for him.",
}]


export default function Post() {
  return <div>
    {
      posts.map((post, i) => {
        return (<div><h1>{post.title}</h1><span>{post.body}</span></div>)
      })
    }
  </div>
}