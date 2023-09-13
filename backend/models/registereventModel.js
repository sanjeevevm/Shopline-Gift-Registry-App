import mongoose from 'mongoose'

const registerSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    regtitle:{
        type:String,
        required:true
    },
    regdate:{
        type:String,
        required:true
    },
    regmessage:{
        type:String,
        required:true
    },
    regaddinfo:{
        type:String,
        required:true
    },
    
    regtype:{
        type:String,
        required:true
    },
    r_title:{
        type:String,
        required:true
    },
    r_fname:{
        type:String,
        required:true
    },
    r_lname:{
        type:String,
        required:true
    },
    r_email:{
        type:String,
        required:true
    },
    r_phone:{
        type:String,
        required:true
    },
    r_address:{
        type:String,
        required:true
    },
    r_city:{
        type:String,
        required:true
    },
    r_state:{
        type:String,
        required:true
    },
    r_country:{
        type:String,
        required:true
    },
    r_zip:{
        type:String,
        required:true
    }
    

},{
    timestamps:true
    
})

const RegistrantEvent=mongoose.model('RegistrantEvent',registerSchema)

export default RegistrantEvent