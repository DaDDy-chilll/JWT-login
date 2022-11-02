// const home = {
//     auth:'success',
//     authstyle:'style=background-color:var(--success)',
//     name:'Paing',
//     content:"successfully",
// }
function getHome(req,res){
    res.render('home');
};

module.exports = {
    getHome,
}