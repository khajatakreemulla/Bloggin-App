
exports.getDashboard = (req, res)=>{
    const userId = req.session.user.id;
    console.log(`welcome ${userId}`)
    return res.status(200).send("user")
}