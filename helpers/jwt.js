const jwt = require('jsonwebtoken');

const generarJWT = (uid, name) => {

    return new Promise( (resolve, reject) =>{

        
        //crear el payload
        const payload = {uid, name};

        //generar el token
        //crear Secret_jwt_seed en .env
        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            //tiempo expiracion del token
            expiresIn: '2h'
        },(err,token)=>{

            if(err){
                console.log(err);
                reject("No se pudo generar el token")
            }

            resolve(token);
            
        })

    })



};




module.exports = {
    generarJWT
}