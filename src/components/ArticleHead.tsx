import Image from "next/image";
import lorem from "../utils/lorem_ipsum";
import { TinaMarkdown } from 'tinacms/dist/rich-text'


const MAX_ARTICLE_LENGTH = 200

const Article = (props) => {
  const createdAt = new Date(props.post.node.createdAt).toLocaleString("en-US")
  return (
    <div className="flex-initial flex  bg-gray-50 tablet:px-0 tablet:py-0 tablet:my-0 tablet:mx-0 px-2 ">
      <div className="flex flex-col tablet:flex-row tablet:divide-x-2">

        <div className="flex flex-col text-center tablet:my-10 tablet:mx-4">
          <Image
            src={props.post.node.author.avatar}
            alt="avatar"
            width="128"
            height="128"
            className="scale-50 self-center"
          />
          <div className="tablet:text-xl text-center">{props.post.node.author.first_name} {props.post.node.author.last_name}</div>
          <div className="text-gray-400 font-extralight text-center text-sm ">
            {createdAt}
          </div>
        </div>
        <div className="flex-1">
          <div className="text-amber-700 text-center mb-5 tablet:mx-8 tablet:px-8  tablet:my-10 pt-2 justify-center align-middle tablet:text-left text-2xl tablet:text-5xl">
            {props.post.node.title}
          </div>
          <div className="text-justify tablet:mx-8 tablet:px-8 my-5  text-gray-500">
            <TinaMarkdown content={props.post.node.body}/>
          </div>
          <div className="tablet:mx-8 tablet:px-8 justify-center text-left text-gray-400">
            Read more
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
