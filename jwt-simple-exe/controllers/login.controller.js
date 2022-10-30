const login ={
    title:'Login',
    path:'login',
    none:'style=display:none',
    content:"Don't have account",
    suggest:"signup"
}
function getLogin(req,res){
    res.render('form',{
        title:login.title,
        path:login.path,
        none:login.none,
        content:login.content,
        suggest:login.suggest
    })
}

module.exports ={
    getLogin,
}