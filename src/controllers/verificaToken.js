const jwt = require('jsonwebtoken');

function verificaToken(req, res, next){
    let token = req.headers["x-access-token"];
    if(!token){
        token = req.cookies.token
    }
    
    try{
        const tokenDesifrado = jwt.verify(token, 'palabrasecreta');
        req.tokenId = tokenDesifrado.id;
    }catch{
        return res.status(401).json({Error: 'Token no valido'})
    }
    next();
}

module.exports = verificaToken;