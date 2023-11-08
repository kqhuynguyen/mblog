import Image from 'next/image'



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
                <div className="mx-8 px-8 my-5 text-left text-gray-500">Commodo mollit consequat laboris do ad. Velit et laborum ea sit sunt nulla est. Aute laboris laboris occaecat cillum sit in tempor qui ut ullamco. Ad magna nostrud reprehenderit culpa id consequat laboris magna commodo cupidatat ut duis elit consectetur. Consequat ipsum incididunt quis sit consequat. Et commodo aute ullamco anim amet in ad nulla velit minim. Veniam duis consectetur commodo Lorem laborum mollit amet irure aliqua commodo.

Veniam labore excepteur elit ex dolore in. Cillum magna sit ipsum nulla officia dolor incididunt laborum eiusmod aute pariatur veniam do. Enim pariatur sit voluptate ut qui tempor nisi duis pariatur aute excepteur exercitation magna laboris. Elit reprehenderit nulla Lorem dolore exercitation in elit sit nisi occaecat pariatur exercitation incididunt. Elit tempor excepteur ipsum nostrud nostrud sint consequat pariatur. Qui dolor elit ad eiusmod anim irure cupidatat cupidatat proident in.

Qui Lorem dolore velit deserunt cillum eu labore cupidatat commodo. Sint aliqua esse laboris nulla. Et esse eiusmod est ipsum aute culpa quis consequat quis irure ullamco cillum. Reprehenderit minim amet id duis. Incididunt tempor sunt Lorem aliquip voluptate id. Culpa irure exercitation mollit non in adipisicing duis veniam. Exercitation exercitation occaecat sit magna anim do ea ut do.

Pariatur laboris cillum voluptate commodo labore. Dolor enim velit eiusmod sunt irure mollit veniam adipisicing. Do eu do nulla tempor eiusmod. Aliqua dolor irure in adipisicing. Irure dolore amet deserunt voluptate Lorem minim amet. Non mollit aliquip aliqua reprehenderit reprehenderit fugiat qui eiusmod eiusmod officia anim amet id. Labore quis nulla tempor Lorem est sint ut dolor est ad.

Mollit labore do eiusmod veniam voluptate esse esse anim qui voluptate. Nisi est tempor incididunt laboris cupidatat. Eiusmod officia ex commodo ex elit et nisi. Irure excepteur anim amet ex Lorem duis. Tempor laborum et aliquip duis commodo esse enim sint do laboris consequat voluptate laborum.</div>
                <div className="mx-8 px-8 justify-center text-left text-gray-400">Read more</div>
            </div>
        </div>
    </div>)
}

export default Article