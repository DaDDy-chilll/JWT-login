const home = {
    auth:'success',
    authstyle:'style=background-color:var(--success)',
    name:'Paing',
    content:"successfully",
}
function getHome(req,res){
    res.render('home',{
        auth:home.auth,
        authstyle:home.authstyle,
        name:home.name,
        content:home.content
    });
};

module.exports = {
    getHome,
}