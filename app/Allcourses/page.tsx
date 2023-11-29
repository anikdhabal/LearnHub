'use client'
import axios from "axios";
import Image from "next/image";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import {useEffect, useState} from "react"
import { MdAddShoppingCart } from "react-icons/md";

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
export default function TrendingCourses(){
    const [trendingCourses,setTrendingCourses] = useState<Icourse>([])

 useEffect(()=>{
    async function fetchCourse(){
    const promise = await axios.get('http://localhost:3000/api/courses');
    const Data = promise.data.value ;
    setTrendingCourses(Data)
    }
    fetchCourse()
},[])

async function AddtoCart(course:courseType) {
    try{
  const promise = await axios.post('http://localhost:3000/api/addToCart',{
    token: localStorage.getItem('token'),
    course
  })
}catch(error){
    console.log(error)
}  
}


return (
    <div className="flex flex-wrap justify-around gap-1">
      {trendingCourses.length > 0 ? (
        trendingCourses.map((item: courseType) => (
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
                <div onClick={()=>AddtoCart(item)} className="cursor-pointer"><MdAddShoppingCart size={20} className="ml-14"/></div>
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
  );

}