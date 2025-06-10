import user from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'


const singUp = async(req,res)=>{
    const {name,email,password} = req.body;

    try{
        const existingUser = await User.findOne({email})
        
        if(existingUser){
            res.status(400).json({msg:"Email alredy exist"})
        };

        const hashPassword = await bcrypt.hash(password,10);
        
        const newUser = new User ({name,email,password:hashPassword})
        await newUser.save()

    }catch(err){
        res.status(500).json({ msg: "Server error" });
    }
}

export default singUp;