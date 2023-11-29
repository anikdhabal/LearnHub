import Connection from "@/utils/connection";
import jwt, { JwtPayload } from "jsonwebtoken";
import user from "@/models/user";
import { NextResponse } from "next/server";
export async function POST(req: Request){
    await Connection()
    const {token, course} = await req.json()
    const data = jwt.verify(token,"I love my parent") as JwtPayload
    const document = await user.findOne({email: data.email})
    if(document){
         document.cart.push(course)
         document.save()
         return NextResponse.json({message:"Added to the cart"},{status: 201})
    }
    else{
        return NextResponse.json({message: "Unable to add"},{status: 403})
    }
} 