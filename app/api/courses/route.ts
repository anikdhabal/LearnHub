import Connection from "@/utils/connection";
import course from "@/models/course";
import { NextResponse } from "next/server";
export async function GET(){
    await Connection();
    const value = await course.find({});
    return NextResponse.json({value});
}