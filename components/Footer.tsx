import logo from '@/public/logo.png'
import Image from 'next/image'
import { RiTwitterXFill } from "react-icons/ri"
import { FaDiscord } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"
export default function Footer(){
    return(
        <div className='mt-5 w-full flex justify-between px-10 items-center h-52'>      
        <div>
           <Image src={logo} alt='logo' className='w-20 mb-2'/>
           <p>2023@ LearnHub, Inc.</p>
        </div>
        <div className='flex gap-3'>
            <RiTwitterXFill size={30}/>
            <FaDiscord size={30}/>
            <FaInstagram size={30}/>
        </div>
        </div>
    )
}