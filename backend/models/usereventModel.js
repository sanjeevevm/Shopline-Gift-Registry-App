import mongoose from 'mongoose'

const usereventSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    eventid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'RegistrantEvent'
    },
    regproducturl:{
        type:String,
        required:true
    },
    regproductimage:{
        type:String,
        required:true
    },  
    regproductprice:{
        type:String,
        required:true
    }, 
    regproductname:{
        type:String,
        required:true
    },
    regproductid:{
        type:String,
        required:false
    },
    reguserid:{
        type:String,
        required:false
    },
    regproductcreateddate:{
        type:String,
        required:false
    },
    regproductupdateddate:{
        type:String,
        required:false
    },
    quantity:{
        type:Number,
        required:false,
        default:0
    },
    available_quantity:{
        type:Number,
        required:false
    }
},{
    timestamps:true    
})

const UserEvent=mongoose.model('UserEvent',usereventSchema)

export default UserEvent