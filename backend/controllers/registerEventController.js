import asyncHandler from 'express-async-handler'
import RegistrantEvent from '../models/registereventModel.js';

const getEvents=asyncHandler(async(req,res)=>{
    const pageSize=5
    const page=Number(req.query.pageNumber) || 1

    const keyword=req.query.keyword ? {
        name:{
            $regex:req.query.keyword,
            $options:'i'
        }
    }:{}
    const r_fname = req.query.r_fname
    const r_lname = req.query.r_lname
    console.log("_____")
    console.log({...keyword})
    console.log(r_fname+"+++++++")
    if (r_fname === undefined && r_lname === undefined ){
        const count=await RegistrantEvent.countDocuments({...keyword})
        const registerevents=await RegistrantEvent.find({...keyword}).limit(pageSize).skip(pageSize*(page-1))
        res.json({registerevents,page,pages:Math.ceil(count/pageSize)})    
    }else{
        console.log(r_fname+"+++++++")
        const count=await RegistrantEvent.countDocuments({r_fname:r_fname, r_lname:r_lname})
        const registerevents=await RegistrantEvent.find({r_fname:r_fname, r_lname:r_lname}).limit(pageSize).skip(pageSize*(page-1))
        res.json({registerevents,page,pages:Math.ceil(count/pageSize)})
    };
   
}) 

const getEventById=asyncHandler(async(req,res)=>{
    // console.log(req);
    // #TODO AYUSHI
    // const event_id=await RegistrantEvent.countDocuments({"_id":event_id})
    // const userevents=await RegistrantEvent.find({"_id":event_id}).limit(pageSize).skip(pageSize*(page-1))
    
    const registarevent = await RegistrantEvent.findById(req.params.id)
    if(registarevent){
        res.json(registarevent);
    }
    else{
        res.status(404)
        throw new Error('Product not found')
    }
}) 

const deleteregisterevent=asyncHandler(async(req,res)=>{
    const registarevent = await RegistrantEvent.findById(req.params.id)
    if(registarevent){
         await registarevent.remove()
         res.json({message:'Product removed'})
    }
    else{
        res.status(404)
        throw new Error('Product not found')
    }
})



const registranteventcreate=asyncHandler(async(req,res)=>{
    
    const{regtitle,regdate,regmessage,regaddinfo,regtype,r_title,r_fname,r_lname,r_email,r_phone,r_address,r_city,r_state,r_country,r_zip}=req.body
   const registarevent=new RegistrantEvent({
    regtitle: regtitle,
    regdate: regdate,
    regmessage: regmessage,
    regaddinfo: regaddinfo,
    regtype: regtype,
    r_title: r_title,
    r_fname: r_fname,
    r_lname: r_lname,
    r_email: r_email,
    r_phone: r_phone,
    r_address: r_address,
    r_city: r_city,
    r_state: r_state,
    r_country: r_country,
    r_zip: r_zip,
    user:req.user._id.toString()
   })

   const registranteventcreate=await registarevent.save()
   res.status(201).json(registranteventcreate)
})

const updateEvent=asyncHandler(async(req,res)=>{
    const{regcreatedDate,regtitle,regdate,regmessage,regaddinfo,regtype,r_title,r_fname,r_lname,r_email,r_phone,r_address,r_city,r_state,r_country,r_zip}=req.body
    const registarevent=await RegistrantEvent.findById(req.params.id)
    if(registarevent){
        registarevent.regtitle=regtitle
        registarevent.regdate=regdate
        registarevent.regmessage=regmessage
        registarevent.regaddinfo=regaddinfo
        registarevent.regtype=regtype
        registarevent.r_title=r_title
        registarevent.r_fname=r_fname
        registarevent.r_lname=r_lname
        registarevent.r_email=r_email
        registarevent.r_phone=r_phone
        registarevent.r_address=r_address
        registarevent.r_city=r_city
        registarevent.r_state=r_state
        registarevent.r_country=r_country
        registarevent.r_zip=r_zip

        const updateEvent=await registarevent.save()
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



export {getEvents,getEventById,deleteregisterevent,registranteventcreate,updateEvent}