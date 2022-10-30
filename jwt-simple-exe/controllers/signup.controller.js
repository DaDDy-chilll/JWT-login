const signup ={
    title:'SignUp',
    path:'signup',
    none:'style=display:block',
    content:"Already have account",
    suggest:"login"
};

function getSignup(req,res){
    res.render('form',{
        title:signup.title,
        path:signup.path,
        none:signup.none,
        content:signup.content,
        suggest:signup.suggest
    })
};

module.exports = {
    getSignup,
}