import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
dotenv.config()

export const isUserAuthenticated = (req, res, next) => {
  const authHeader = req.headers.authorization
  console.log(authHeader)

  if (!authHeader) {
    return res.status(403).json({
      status: 403,
      message: 'FORBIDDEN'
    })
  } else {
    const token = authHeader.split(' ')[1]
    let payload;
    if (token) {
      try {
        // Parse the JWT string and store the result in `payload`.
        // Note that we are passing the key in this method as well. This method will throw an error
        // if the token is invalid (if it has expired according to the expiry time we set on sign in),
        // or if the signature does not match
        payload = jwt.verify('top-secret') //valida qu eel token sea valido y que no haya expirado
        next() //si no esta autentificado no pasa se queda hasta quepase el tiempo del token
      } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
          // if the error thrown is because the JWT is unauthorized, return a 401 error
          return res.status(401).json({
            status: 401,
            message: 'UNAUTHORIZED'
          })
        }
        // otherwise, return a bad request error
        return res.status(400).end()
      }

    } else {
      return res.status(403).json({
        status: 403,
        message: 'FORBIDDEN'
      })
    }
  }
}