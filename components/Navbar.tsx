"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png"
import { MdOutlineShoppingCart } from "react-icons/md";
import store from "@/store/store";
export default function NavBar() {
  const { setCartVisible, isActive, setIsActive } = store();
  return (
    <div className="flex justify-between items-center shadow-md py-4">
      <div>
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="w-14 ml-5"
          />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-6 mr-10">
        <Link href="mycourses">
          <p>My Courses</p>
        </Link>
        <Link href="Allcourses"><p>All Courses</p></Link>
        <div
          className="cursor-pointer"
          onClick={() => {
            setCartVisible(true);
          }}
        >
          <MdOutlineShoppingCart size={25} />
        </div>
        {isActive || localStorage.getItem('token')? (
          <div onClick={()=>{
            localStorage.removeItem('token')
            setIsActive(false)
        }} className="border-2 border-black px-4 py-1.5 cursor-pointer">Logout</div>
        ) : (
          <div className="flex  justify-center items-center gap-3">
            <Link href="/login">
              <div className="border-2 border-black px-4 py-1.5">Login</div>
            </Link>
            <Link href="/signup">
              <div className="px-4 py-2 text-white bg-black">SignUp</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
