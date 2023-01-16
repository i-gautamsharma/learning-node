const log = (req,res,next)=> {
    const url = req.url
    const method = req.method
    const date = new Date().getFullYear()
    console.log("URL :",url,"\nMETHOD :", method, "\nDATE :",date)
    next()
}
module.exports= log;