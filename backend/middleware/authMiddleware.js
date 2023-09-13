import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// const process.env.JWT_SECRET="TEST"
const protect=asyncHandler(async(req,res,next)=>{
    let token
    console.log("inside auth middelwere-- ")
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        console.log("inside auth middelwere2222 ")
        try {
            token=req.headers.authorization.split(' ')[1]
            console.log("token           "+token)
            const decoded=jwt.verify(token,"TEST")
            console.log("-------------------------------------middelwere11 "+ decoded)
            req.user=await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            res.status(401)
            throw new Error('Not authorized, token failed')
        }
    }
    if(!token){
        console.log("inside auth 333333 ")
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

const isAdmin=(req,res,next)=>{
    if(req.user && req.user.isAdmin){
        next()
    }else{
        res.status(401)
        throw new Error("Not authorized as an admin")
    }
}

export {protect,isAdmin}