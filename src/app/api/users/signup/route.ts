import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request:NextRequest) {
    try {
        const reqBody = request.json();
        const {username, email, password} = reqBody;

        // Validation
        console.log(reqBody);

        const user = await User.findOne({email})

    } catch (error:any) {
        return NextResponse.json({error: error.message},{status: 500});
    }
}