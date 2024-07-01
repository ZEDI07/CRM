exports.userlisting = async(req,res) =>{
   console.log(req)
   res.status(200).json({message:'result from user listing'})
}

exports.createUser = async(req,res) =>{
   console.log(req.body)
   res.status(201).json({message:'result from create user !!!!'})
 }

 exports.updateUser = async(req,res) =>{
    return res.status(200).json({message:'result from user update'})
 }

 exports.deleteUser = async(req,res) =>{
    return res.status(200).json({message:'result from user deletion'})
 }
