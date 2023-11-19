import Image from "next/image";
import lorem from "../utils/lorem_ipsum";

const Article = () => {
  return (
    <div className="flex-initial flex  bg-gray-50 tablet:px-4 tablet:py-0 tablet:my-0 tablet:mx-4 px-2 ">
      <div className="flex flex-col tablet:flex-row tablet:divide-x-2">

        <div className="flex flex-col text-center tablet:my-10">
          <Image
            src="/me.jpg"
            alt="me"
            width="128"
            height="128"
            className="scale-50 self-center"
          />
          <div className="tablet:text-xl text-center">User 1</div>
          <div className="text-gray-400 font-extralight text-center text-sm ">
            2022-01-01 09:04
          </div>
        </div>
        <div className="flex-1">
          <div className="text-amber-700 text-center mb-5 tablet:mx-8 tablet:px-8  tablet:my-10 pt-2 justify-center align-middle tablet:text-left text-2xl tablet:text-5xl">
            Article Title
          </div>
          <div className="text-justify tablet:mx-8 tablet:px-8 my-5  text-gray-500">
            {lorem.generateParagraphs(5)}
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
