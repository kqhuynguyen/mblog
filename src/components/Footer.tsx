import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Footer() {
    return <footer className="bg-gray-50 pt-32 pb-4 flex flex-col">
      <div className="flex flex-row place-content-center justify-between px-24 mb-4">
        <div className="flex flex-col  px-4">
          <div className="flex text-gray-8 text-sm mb-2 font-semibold">Pages</div>
          <div className="flex flex-col text-ml">
            <a href="/" className="flex my-1">Home</a>
            <a href="/blog" className="flex my-1">Blog</a>
            <a href="/login" className="flex my-1">Log in</a> 
            <a href="/about" className="flex my-1">About</a>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex text-gray-8 text-sm mb-2 font-semibold">Support</div>
          <div className="flex flex-col text-ml">
            <a href="#" className="flex my-1">Terms and Conditions</a>
            <a href="#" className="flex my-1">Privacy Policy</a>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex text-gray-8 text-sm mb-2 font-semibold">Related sites</div>
          <div className="flex flex-col text-ml">
            <a href="#" className="flex my-1">CodingHorror</a>
            <a href="#" className="flex my-1">Google</a>
            <a href="#" className="flex my-1">Stackoverflow</a> 
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex text-gray-8 text-sm mb-2 font-semibold">Resources</div>
          <div className="flex flex-col text-ml">
            <a href="#" className="flex my-1">NodeJS</a>
            <a href="#" className="flex my-1">NextJS</a>
            <a href="#" className="flex my-1">Tailwind CSS</a> 
          </div>
        </div>
      </div>
      <div className="flex flex-row px-24 justify-between">
          <div className="flex flex-row">
            <Image  src="/apple_logo.svg" alt="apple_store" width="128" height="128" className="px-2"/>
            <Image  src="/google_play.svg" alt="google_play" width="128" height="128" className="px-2"/>
          </div>
          <div>
            Coding Insights. All rights reserved.
          </div>
          <div className="space-x-4">
            <FontAwesomeIcon icon={icon({name: 'twitter', family: 'classic', style: 'brands'})} /> 
            <FontAwesomeIcon icon={icon({name: 'facebook', family: 'classic', style: 'brands'})} /> 
            <FontAwesomeIcon icon={icon({name: 'instagram', family: 'classic', style: 'brands'})} /> 
            <FontAwesomeIcon icon={icon({name: 'google', family: 'classic', style: 'brands'})} /> 
          </div>
      </div>
    </footer>
  }

