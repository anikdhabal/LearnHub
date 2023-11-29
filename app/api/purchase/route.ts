import Connection from "@/utils/connection";
import user from "@/models/user";
import jwt, { JwtPayload } from 'jsonwebtoken'
import { NextResponse } from "next/server";

export async function POST(req:Request){
    await Connection()
    const {token} = await req.json()
    const data = jwt.verify(token,"I love my parent") as JwtPayload
    const document = await user.findOne({email: data.email})

    if(document){
        const cartItem = document.cart
        document.cart = []
        document.courses = document.courses.concat(cartItem)
        document.save()
        return NextResponse.json({message: "Puchased Successfully"},{status: 201})
   }
   else{
       return NextResponse.json({message: "Unable to Purchase"},{status: 403})
   }
}