import Connection from "@/utils/connection";
import user from "@/models/user";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import z from "zod"

const inputSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export async function POST(req: Request){
    await Connection()
    const {email, password} = await req.json()
    const input = inputSchema.safeParse({email, password})
    const USER = await user.findOne({email, password})
    if(input.success && USER){
        const token = jwt.sign({email},"I love my parent",{expiresIn: "1h"})
        return NextResponse.json({token},{status: 201})
    }
    else{
        return NextResponse.json({message: "user not found"},{status: 401})
    }
}