function getHome(req,res){
    res.status(200).json({
        success:"Welcome! You'r successfully Login...!"
    })

};

module.exports = {
    getHome,
}