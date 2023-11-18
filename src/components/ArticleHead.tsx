import Image from 'next/image'
import lorem from '../utils/lorem_ipsum'



const Article = () => {
    return (<div className="flex-initial  bg-gray-50 p-4 my-10 mx-4 ">
        <div className="flex flex-row divide-x-2">
            <div className="w-40 h-40 flex-none flex-col">
                <Image  src="/me.jpg" alt="me" width="128" height="128" />
                <div className="mt-6 mr-8 text-xl text-right">User 1</div>
                <div className="text-gray-400 mr-8 font-extralight text-right text-sm">2022-01-01 09:04</div>
                
            </div>
            <div className="flex-1">
                <div className="text-amber-700 mx-8 px-8 mb-20 pt-2 justify-center align-middle text-left text-5xl">
                    Article Title
                </div>
                <div className="mx-8 px-8 my-5 text-left text-gray-500">{lorem.generateParagraphs(5)}</div>
                <div className="mx-8 px-8 justify-center text-left text-gray-400">Read more</div>
            </div>
        </div>
    </div>)
}

export default Article