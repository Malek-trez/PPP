import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const jwtSign = (payload, secret, options) =>
    new Promise((resolve, reject) => {
        jwt.sign(payload, secret, options, (err, token) => {
            if (err) reject(err);
            resolve(token);
        });
    });

const jwtVerify = (token, secret) =>
    new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) reject(err);
            resolve(decoded);
        });
    });

const getJwt = req => req.headers["authorization"].split(" ")[1];

export { jwtSign, jwtVerify, getJwt };