import { connection as db } from "../Config/index.js";
import { hash, compare } from 'bcrypt';
import { createToken } from "../middleware/AuthenticateUser.js";

class Users {
     fetchUsers(req, res) {
     
            const qry = `SELECT userID,
                                firstName,
                                lastName, 
                                userAge,
                                gender,  
                                userRole,
                                emailAdd,  
                                userPass, 
                                userProfile
                        FROM Users;`;
            // const results = await db.query(qry);
            // res.status(200).json({
            //     status: 200,
            //     results
            // });
            db.query(qry, (err, results)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    results
                })
            });
        }

     fetchUser(req, res) {
        
            const qry = `SELECT userID,
                                firstName,
                                lastName, 
                                userAge,
                                gender,  
                                userRole,
                                emailAdd,  
                                userPass, 
                                userProfile
                               FROM Users
                               WHERE userID = ${req.params.id}
                               `
           db.query(qry, (err, result)=>{
                    if(err) throw err
                    res.json({
                         status: res.statusCode,
                         result
                    })
           })
        
        }
    

    async createUser(req, res) {
       
            let data = req.body
            data.userPass = await hash(data.userPass, 8);
            let user = {
                emailAdd: data.emailAdd,
                userPass: data.userPass
            }
            const qry = `INSERT INTO Users SET ?;`;
           db.query(qry, [data], (err)=>{
            if(err) {
                res.json({
                    status: res.statusCode,
                    msg: 'Email Already exists'
                })
            }
           })
        }
    

    async updateUser(req, res) {
      
            const data = req.body
            if (data.userPass) {
                data.userPass = await hash(data.userPass, 8);
            }
            const qry = `UPDATE Users SET ? WHERE userID = ${req.params.id};
            `
            db.query(qry, [data], (err)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg: 'Information updated'
                })
            })
            
        }
    
        deleteUser(req, res) {
            const qry = `
            DELETE FROM Users
            WHERE userID = ${req.params.id};
            `
            db.query(qry, (err)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg: "Information removed"
                })
            })
        }

    async login(req, res) {
        try {
            const { emailAdd, userPass } = req.body;
            const qry = `SELECT UserID,
                                firstName,
                                lastName, 
                                userAge,
                                gender,   
                                userRole, 
                                emailAdd, 
                                userPass, 
                                userProfile
                         FROM Users
                         WHERE emailAdd = ?;`;
            const result = await db.query(qry, [emailAdd]);
            if (result.length === 0) {
                res.status(404).json({
                    status: 404,
                    msg: "You provided a wrong email address."
                });
                return;
            }
            const validPass = await compare(userPass, result[0].userPass);
            if (validPass) {
                const token = createToken({
                    emailAdd,
                    userPass
                });
                res.status(200).json({
                    status: 200,
                    msg: "You're logged in",
                    token,
                    result: result[0]
                });
            } else {
                res.status(401).json({
                    status: 401,
                    msg: "Please provide the correct password."
                });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({
                status: 500,
                msg: "Failed to log in"
            });
        }
    }
}


export { users };
