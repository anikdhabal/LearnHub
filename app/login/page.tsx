'use client'
import Link from "next/link";
import axios from "axios";
import store from "@/store/store";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
type Inputs = {
  email: string,
  password: string,
};

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-slate-700 w-1/3 p-6 mx-auto mt-16 rounded-md flex flex-col">
    {children}
  </div>
);

export default function Login() {
  const [input, setInput] = useState<Inputs>();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const {setIsActive} = store()
  const onSubmit: SubmitHandler<Inputs> = data => setInput(data);
  const router = useRouter()

  useEffect(()=>{
    async function SetInput(){
      try{
        if(input){
    const promise = await axios.post('http://localhost:3000/api/login',{
      email: input?.email,
      password: input?.password
    })
    const token = promise.data.token
    setIsActive(true)
    localStorage.setItem('token',token)
    router.push('/')
  }
  }catch(error){
    console.log(error)

    }

  }
  SetInput();
  },[input])

  return (
    <div className="bg-slate-300 w-screen h-screen flex items-center justify-center">
      <Card>
        <div className="text-slate-200 mx-auto font-bold text-2xl mb-3">Login to your account</div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-4">
          <label className="text-slate-200 font-medium font-sans">Email</label>
          <input  type="email" {...register("email", { required: true })} className="border p-2 mb-4 rounded" />
          {errors.email && <span className="text-red-500">This field is required</span>}
           
           <label className="text-slate-200 font-medium font-sans">Password</label>
          <input type="password"{...register("password", { required: true })} className="border p-2 mb-4 rounded" />
          {errors.password && <span className="text-red-500">This field is required</span>}
          
          <input type="submit" className="bg-blue-500 text-white p-2 cursor-pointer font-sans font-medium rounded" value="Login" />
        <div className="mx-auto my-3 text-slate-200">Don't have an account?<Link href="signup" className="text-blue-500">signup</Link></div>
        </form>
      </Card>
    </div>
  );
}
