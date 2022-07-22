module.exports =  [
    {
        path:"/",
        method:"get",
        handler:[(req,res)=>{res.json({message:"hello"})}]
    }
]