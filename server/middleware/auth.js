import { response } from "express";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()


const auth = async(request, response, next) => {
    try {
        const token = request.cookies.accessToken || request.header.authorization.split(" ") [1]/// ["Bearer", "token"]
        
        if(!token){
            return response.status(401).json({
                message: "Provide Token"
            })
        }

        const decode = await jwt.verify(token,process.env.SECRET_KEY_ACCESS_TOKEN)

        if(!decode){
            return response.status(401).json({
                message: "Invalid Token",
                error : true,
                success : false
                
        })
    }

        request.userId = decode.id
        
        next()

    } catch (error) {
        return response.status(401).json({ 
            message: error.message || error,
            error : true,
            success : false
        
        });
    }
}

export default auth