'use client'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import suggest_course from "@/public/web_dev.png"
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
interface courseType{
    img: string,
    title: string,
    description: string,
    author: string,
    duration: string,
    rating: number,
    price: number
}
type Icourse = [courseType] | []
export default function myCourses(){
    const [purchasedItem, setPurchasedItem] = useState<Icourse>([])
    useEffect(()=>{
        async function Courses(){
            try{
            const promise = await axios.post('http://localhost:3000/api/mycourses',{
                token: localStorage.getItem('token')
            })
            setPurchasedItem(promise.data.courses)
        }catch(error){
            console.log(error)
        }

    }
    Courses()
    },[])
    return(
<div className="flex flex-wrap justify-around gap-1">
      {purchasedItem.length > 0 ? (
        purchasedItem.map((item: courseType) => (
          <div key={item.title} className="flex flex-col items-start mt-5 w-1/5">
            <div className="p-6 border-2 border-black">
            <Image src={require(`@/public/web_dev.png`)} alt="course_image"/>
            </div>

            <div>
              <p className="text-lg font-bold">{item.title}</p>
              <p className="text-sm font-bold">{item.description}</p>
              <p className="text-sm text-slate-700">{item.author}</p>
              <div className="flex items-center ">
                <p className="mr-2 text-sm text-slate-700 font-semibold">{item.rating}</p>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
                <p className="mr-2 text-sm text-slate-700 font-semibold">₹{item.price}</p>
            </div>
          </div>
        ))
      ) : (
        <div></div>
      )}
      <hr className="w-screen mt-8 h-[2px] bg-black"/>
    </div>
    )
}