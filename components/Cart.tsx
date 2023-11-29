'use client'
import { FaArrowLeftLong, FaStar } from "react-icons/fa6";
import store from '@/store/store';
import suggest_course from "@/public/web_dev.png"
import Image from "next/image";
import { FaStarHalfAlt } from "react-icons/fa";
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
export default function Cart(){
const [cartItem, setCartItem] = useState<Icourse>([])
    const {setCartVisible } = store();

    async function purchase(){
      try{
      const promise = await axios.post('http://localhost:3000/api/purchase',{
        token: localStorage.getItem('token')
      })
    }catch(error){
      console.log(error)

    }
  }
    useEffect(()=>{
      async function CartItem(){
      try{
       const promise = await axios.post('http://localhost:3000/api/Cart',{
        token: localStorage.getItem('token')
       })
       setCartItem(promise.data.courses)
      }catch(error){
        console.log(error)
      }
    }
    CartItem()
    },[])
    return (
      <div className="bg-slate-200 h-screen w-1/4 fixed top-0 right-0 z-50">
        <div className="bg-slate-500 h-8 flex items-center pl-2 cursor-pointer" onClick={() => setCartVisible(false)}>
          <FaArrowLeftLong />
        </div>
        <div className="grid grid-cols-1 divide-y divide-black">
          {cartItem.length > 0 ? (
            cartItem.map((item: courseType) => (
              <div className="flex items-start py-5" key={item.title}>
                <div className="p-2 w-1/2">
                  <Image src={suggest_course} alt={item.title} />
                </div>
    
                <div>
                  <p className="text-sm font-bold">{item.title}</p>
                  <p className="text-sm text-slate-700">By {item.author}</p>
                  <p>₹{item.price}</p>
                </div>
              </div>
            ))
          ) : (
            <div> </div>
          )}
          <div className="bottom-0 fixed p-4 flex items-center gap-2 border-t border-black w-full">
            { cartItem.length > 0 && (<div className="bg-blue-700 py-2 px-4 text-white cursor-pointer" onClick={()=>{
              setCartItem([])
              purchase()}}>Purchase</div>)}
          </div>
        </div>
      </div>
    );
    
  
}