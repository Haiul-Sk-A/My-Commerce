import user from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'


export const singUp = async(req,res)=>{
    const {name,email,password} = req.body;

    try{
        const existingUser = await user.findOne({email})
        
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

export const login = async (req,res)=>{
    try{
        const existingUser = await user.findOne({email})

        if(!existingUser){
            return res.status(400).json({msg:"Email and Password Invalid"})
        }

        const isMatch = await bcrypt.password(password,existingUser.password)
        if(!isMatch){
            return res.status(400).json({msg:"Invalid email or pasword"})
        }

    }catch(err){
        res.status(500).json({msg:"server error"})
    }
}