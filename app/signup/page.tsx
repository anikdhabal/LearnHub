'use client'
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import store from "@/store/store";
type Inputs = {
  username: string,
  email: string,
  password: string,
};

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-slate-700 w-1/3 p-6 mx-auto mt-10 rounded-md flex flex-col">
    {children}
  </div>
);

export default function SignUp() {
  const {setIsActive} = store()
  const [data,setData] = useState<Inputs>()
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => setData(data);
  const router = useRouter();
  useEffect(() => {
    async function passData() {
      try{
        if(data){
        const promise = await axios.post('http://localhost:3000/api/signup', {
          username: data.username,
          email: data.email,
          password: data.password
        });
        const Data = promise.data.token;
       localStorage.setItem('token',Data);
       setIsActive(true);

       router.push('/');
      }

      }catch(error){
        console.log(error);
      }
    }
    passData();
  }, [data]);
  

  return (
    <div className="bg-slate-300 w-screen h-screen flex items-center justify-center">
      <Card>
        <div className="text-slate-200 mx-auto font-bold text-2xl mb-3">Sign up and start learning</div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-4">
          <label className="text-slate-200 font-medium font-sans">Username</label>
          <input  {...register("username", { required: true })} className="border p-2 mb-4 rounded" />
          {errors.username && <span className="text-red-500">This field is required</span>}

          <label className="text-slate-200 font-medium font-sans">Email</label>
          <input  type="email" {...register("email", { required: true })} className="border p-2 mb-4 rounded" />
          {errors.email && <span className="text-red-500">This field is required</span>}
           
           <label className="text-slate-200 font-medium font-sans">Password</label>
          <input  type="password"{...register("password", { required: true })} className="border p-2 mb-4 rounded" />
          {errors.password && <span className="text-red-500">This field is required</span>}
          
          <input type="submit" className="bg-blue-500 text-white p-2 cursor-pointer font-sans font-medium rounded" value="Sign up" />
        <div className="mx-auto my-3 text-slate-200">Already have an account?<Link href='login' className="text-blue-500">login</Link></div>
        </form>
      </Card>
    </div>
  );
}
