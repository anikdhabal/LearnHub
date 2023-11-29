import Connection from "@/utils/connection";
import user from "@/models/user";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextResponse } from "next/server";
export async function POST(req: Request){
    await Connection()
    const {token} = await req.json()
    const data = jwt.verify(token,"I love my parent") as JwtPayload
    const document = await user.findOne({email: data.email})
    if(document){
         return NextResponse.json({courses: document.courses},{status: 201})
    }
    else{
        return NextResponse.json({message: "Something went wrong"},{status: 403})
    }
}