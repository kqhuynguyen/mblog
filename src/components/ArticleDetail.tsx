import Image from 'next/image'


const Article = (title, date, body) => {
    return (<div className="flex-initial  bg-gray-50 p-4 my-10 mx-4 ">
        <div className="flex flex-row divide-x-2">
            <div className="w-40 h-40 flex-none flex-col">
                <Image  src="/me.jpg" alt="me" width="128" height="128" />
                <div className="mt-6 mr-8 text-xl text-right">User 1</div>
                <div className="text-gray-400 mr-8 font-extralight text-right text-sm">{date}</div>
                
            </div>
            <div className="flex-1">
                <div className="text-amber-700 mx-8 px-8 mb-20 pt-2 justify-center align-middle text-left text-5xl">
                    {title}
                </div>
                <div className="mx-8 px-8 my-5 text-left text-gray-500">{body}</div>
            </div>
        </div>
    </div>)
}

export default Article