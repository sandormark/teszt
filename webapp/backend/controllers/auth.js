import { db } from "../db.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";


export const register = (req, res) => {
    //check exist user
    const q = "SELECT * FROM users WHERE email =? or username =?";
    console.log("req ", req.body);
    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("Felhasználó létezik");

        //hash to password
        const saltRounds = 10;
        const myPlaintextPassword = req.body.password;
        bcrypt.genSalt(saltRounds, function (err, salt) {

            bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
                // Store hash in your password DB.
                if (err) {
                    // Kezeld az esetleges hibát
                    console.error(err);
                    return res.status(500).json("Hiba a jelszó titkosításakor");
                }
                const q = "INSERT INTO users(`username`, `password`,`email`) VALUES (?)";
                const values = [req.body.username, hash, req.body.email]
                db.query(q, [values], (err, data) => {
                    if (err) return res.json(err);
                    return res.status(200).json("Felhasználó létrehozva");
                });


            });

        });


    });
};




export const login = (req, res) => {
    //check
    const q = "SELECT * FROM users WHERE  username=?";

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length === 0) return res.status(404).json("Felhasználó nem létezik");
        //check passwd
        const myPlaintextPassword = req.body.password;
        const hash = data[0].password;
        bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
            if (err || !result) {return res.status(400).json("Rossz felhasználónév vagy jelszó");}
   
        const token = jwt.sign({ id: data[0].id }, "jwtkey");
        console.log("token",token);
        const { password, ...other } = data[0];
        res.cookie("access_token", token, {   
            httpOnly: true
        }).status(200).json(other);

        });
       

    });



}



export const logout = (req, res) => {

}