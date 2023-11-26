import ArticleContainer from "../components/ArticleContainer";
import ArticleScroller from "../components/ArticleScroller";
import ArticleHead from "../components/ArticleHead";
import { client } from '../../tina/__generated__/client'
import { useEffect, useState } from 'react';

async function getInitialPost() {
  const postsResponse = await client.queries.postConnection({
    first: 3,
  })
  const posts = postsResponse.data.postConnection.edges?.map((post) => {
    return post;
  })
if (posts === undefined) {
    return []
  }
  return posts;
}


export default async function Page() {
  const posts = await getInitialPost()
  return <ArticleContainer>
    <ArticleScroller initialPosts={posts} />
  </ArticleContainer>
  }