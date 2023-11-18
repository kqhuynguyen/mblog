import ArticleDetail from "../../../components/ArticleDetail";
import lorem from '../../../utils/lorem_ipsum';
import ArticleContainer
 from "../../../components/ArticleContainer";
export default function   BlogPost({params}: { params: { slug: string } }) {
  return (<ArticleContainer>
    {ArticleDetail(params.slug, "2023-11-03 08:01:20", lorem.generateParagraphs(50))}
    </ArticleContainer>
  )
}