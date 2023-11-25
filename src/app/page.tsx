import ArticleContainer from "../components/ArticleContainer";
import ArticleHead from "../components/ArticleHead";
import { client } from '../../tina/__generated__/client'

async function getTinaPosts() {
  const postsResponse = await client.queries.postConnection({
    first: 5,
  })
  const posts = postsResponse.data.postConnection.edges?.map((post) => {
    console.log('post', post)
    return post;
  })
  if (posts === undefined) {
    return []
  }
  return posts;
}


export default async function Page() {
  const posts = await getTinaPosts()
  return <ArticleContainer>
    {
      posts.map(post => {
        return <ArticleHead post={post} />
      })
    }
  </ArticleContainer>
  }