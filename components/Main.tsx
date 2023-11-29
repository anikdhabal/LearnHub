'use client'
import Image from "next/image"
import hero from "@/public/hero-section.png"
import suggest_course from "@/public/web_dev.png"
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import store from '@/store/store';
import Cart from "./Cart";
export default function Main(){
    const {isCartVisible} = store();
    return(
        <>
        <div className="ml-12 mt-10 relative">
            <Image src={hero} alt="hero_section image"/>
            <div className="border w-fit p-4 absolute top-14 left-10 bg-white">
                <p className="text-3xl font-bold font-serif">Subscribe to the Best <br/>LearnHub</p>
                <p>With Personal Plan, you get access to 100 of our <br/> top-rated courses in tech, business, and more.</p>
                <p>Learn More</p>
            </div>
            <p className="text-4xl font-bold font-serif mt-8">What to learn next</p>
            <p className="text-2xl font-serif mt-3 font-bold">Our top pick for you</p>
            <div className="flex border w-[95%] items-center mt-5">
                <div className="p-6">
                  <Image src={suggest_course} alt="suggested_course" className="max-w-md border"/>
                </div>

                <div>
                   <p className="text-xl font-bold">Learn Complete Front-End Web<br/> Development Course(2023)</p>
                   <p>Learn Complete Front-End Web Development with HTML5, CSS3,<br/> BootStrap5, JavaScript, ECMAScript 6, Angular & React JS</p>
                   <p className="text-sm text-slate-700">By Anik Dhabal</p>
                   <p className="text-sm text-slate-700">40 total hours . 567 lectures</p>
                   <div className="flex items-center ">
                   <p className="mr-2 text-sm text-slate-700">4.4</p>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStarHalfAlt/>
                   </div>
                </div>
            </div>
            <div className="text-2xl font-bold font-serif mt-8">
                Trending Courses
            </div>
        </div>
        {isCartVisible && <Cart/>}
        </>
    )
}