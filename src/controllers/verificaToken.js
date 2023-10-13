const jwt = require('jsonwebtoken');

function verificaToken(req, res, next){
    const token = req.headers["x-access-token"];
    try{
        const tokenDesifrado = jwt.verify(token, 'palabrasecreta');
        req.tokenId = tokenDesifrado.id;
    }catch{
        return res.status(401).json({Error: 'Token no valido'})
    }
    next();
}

module.exports = verificaToken;