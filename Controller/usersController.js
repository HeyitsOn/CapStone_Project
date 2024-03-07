import express from 'express'
import {users} from '../Model/index.js'
import { verifyAToken } from "../middleware/AuthenticateUser.js"
import bodyParser from 'body-parser';

const userRouter = express.Router()
// const Users = new users();
// Fetch users
userRouter.get('/', async (req, res) => {
    try {
         users.fetchUsers(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve users'
        });
    }
});

// Fetch user
userRouter.get('/:id', async (req, res) => {
    try {
        await users.fetchUser(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve a user'
        });
    }
});

// Add a user
userRouter.post('/register', bodyParser.json(), (req, res) => {
    try {
         users.createUser(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to add a new user.'
        });
    }
});

// Update a user
userRouter.patch('/update/:id', bodyParser.json(), (req, res) => {
    try {
        users.updateUser(req, res)
    }catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to update a user"
        });
    }
});

// Delete a user
userRouter.delete('/delete/:id', async (req, res) => {
    try {
        await users.deleteUser(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to delete a user."
        });
    }
});

// Login
userRouter.post('/login', bodyParser.json(), (req, res) => {
    try {
         users.login(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to log in"
        });
    }
});

export { userRouter, express, verifyAToken

}
