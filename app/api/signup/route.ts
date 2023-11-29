import Connection from "@/utils/connection";
import user from "@/models/user";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import z from "zod"

const inputSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
})
export async function POST(req:Request){
    await Connection();
    const {username, email, password} = await req.json()
    const input = inputSchema.safeParse({username, email, password})
    const document = await user.findOne({email})
    if(!input.success && document){
        return NextResponse.json({message: "wrong credential"},{status: 403})
    }
    else{
        const User = new user({
            email,
            username,
            password
        })
        User.save();
         const token = jwt.sign({email},"I love my parent",{expiresIn: "1h"});

        return NextResponse.json({token},{status: 203})
    }
}
