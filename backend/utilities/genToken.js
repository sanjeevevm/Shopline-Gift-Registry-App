import jwt from 'jsonwebtoken'

const secretKey = 'TEST';

const genToken=(id)=>{
    return jwt.sign({id},secretKey,{
        expiresIn:'30d'
    })
}

export default genToken