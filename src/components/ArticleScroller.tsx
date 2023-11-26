'use client'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useRef, useEffect } from 'react';
import { client } from '../../tina/__generated__/client'
import ArticleHead from './ArticleHead';

export default function ArticleScroller({
    initialPosts
  }) {
    const [posts, setPosts] = useState(initialPosts);
    
    async function newLimit() {
      const postsResponse = await client.queries.postConnection({
        first: 3,
        after: posts.slice(-1)[0]?.cursor
      })
      const newPosts = postsResponse.data.postConnection.edges?.map((post) => {
        return post;
      }) ?? []
      setPosts([...posts, ...newPosts])
    }

  


    return (<div>
          {
            posts.map((post, index) => {
              return <ArticleHead 
                    key={index} 
                    post={post} 
                    newLimit={newLimit}
                    isLast={index === posts.length - 1}
                    />
            })
          }
          </div>
    )
  }