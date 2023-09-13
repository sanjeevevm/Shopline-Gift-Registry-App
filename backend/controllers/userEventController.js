import asyncHandler from 'express-async-handler'
import UserEvent from '../models/usereventModel.js';
import RegistrantEvent from '../models/registereventModel.js';
// const User = require('../models/usereventModel.js');
const getUserEvents=asyncHandler(async(req,res)=>{
    const pageSize=80
    const page=Number(req.query.pageNumber) || 1
    const keyword=req.query.keyword ? {
        name:{
            $regex:req.query.keyword,
            $options:'i'
        }
    }:{}
    console.log("111111111111111"+req.query.keyword)
    const count=await UserEvent.countDocuments({eventid:req.query.eventid})
    const userevents=await UserEvent.find({eventid:req.query.eventid}).limit(pageSize).skip(pageSize*(page-1))
    res.json({userevents,page,pages:Math.ceil(count/pageSize)})
})
const getUserEventById=asyncHandler(async(req,res)=>{
    console.log(req.params);
    const userevent = await UserEvent.findById(req.params.id)
    if(userevent){
        res.json(userevent);
    }
    else{
        res.status(404)
        throw new Error('Product not found')
    }
})
const deleteEvent=asyncHandler(async(req,res)=>{
    const userevent = await UserEvent.findById(req.params.id)
    if(userevent){
         await userevent.remove()
         res.json({message:'Product removed'})
    }
    else{
        res.status(404)
        throw new Error('Product not found')
    }
    
})




const usereventcreate=asyncHandler(async(req,res)=>{
    console.log("1111111111111111111111111111111");
    console.log(req.body);
    //return false;

    console.log(req.user);
    const{eventid, regproducturl, regproductname, regproductimage, regproductprice}=req.body
    const userevent=new UserEvent({
            eventid:eventid,
            regproducturl:regproducturl,
            regproductname:regproductname,
            regproductimage:regproductimage,
            regproductprice:regproductprice,
            user:req.user._id.toString(),
   })
   console.log("2222222222222222222");
   console.log(req.user);
   //return false;
   const usereventcreate=await userevent.save()
   res.status(201).json(usereventcreate)
})
const updateuserEvent = asyncHandler(async(req,res)=> {
     const{regproductid,reguserid,regproductcreateddate,regproductupdateddate,quantity }=req.body
    // console.log("Sam Here Auth333=>");
    // console.log(req.body);
    // console.log("Sam Here2222=>");
    // console.log(req.params.id);
    // console.log("Sam Here Auth End");
    //return false;
    // const{quantity,productid}=req.body
    const userevent=await UserEvent.findById(req.params.id)
    if(userevent){
        userevent.regproductid=regproductid
        userevent.reguserid=reguserid
        userevent.regproductid=regproductid
        userevent.quantity = req.body.quantity
        userevent.productid = req.body.proid
        const updateEvent = await userevent.save()
        res.json(updateEvent)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
 })
//  const createReview=asyncHandler(async(req,res)=>{
//     const{rating,comment}=req.body
//     const product=await Product.findById(req.params.id)
//     if(product){
//         const reviewed=product.reviews.find(x=>x.user.toString()===req.user._id.toString())
//         if(reviewed){
//             res.status(400)
//             throw new Error('Product already reviewed')
//         }
//         const review={
//             name:req.user.name,
//             rating:Number(rating),
//             comment,
//             user:req.user._id
//         }
//         product.reviews.push(review)
//         product.numReviews=product.reviews.length
//         product.rating=product.reviews.reduce((acc,item)=>item.rating+acc,0)/product.reviews.length
//         await product.save()
//         res.status(201).json({message:'Review added'})
//     }else{
//         res.status(404)
//         throw new Error('Product not found')
//     }
//  })
//  const getTopProducts=asyncHandler(async(req,res)=>{
//    const products=await Product.find({}).sort({rating:-1}).limit(3)
//    res.json(products)
//  })
export {getUserEvents,getUserEventById,deleteEvent,usereventcreate,updateuserEvent}