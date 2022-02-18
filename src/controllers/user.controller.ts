
import express, { Request, Response } from 'express';
import User from '../models/user.model';



/* *
    @usage: get users
    @ url : http:127.0.0.1:5000/api/users
    @ method : GET
    @ fields : none
    @ access : PUBLIC
 */
export const getAllUsersHandler = async (request: Request, response: Response) => {
    try {
        let users = await User.find({})
        response.status(200).json({
            msg: 'user gotten',
            users: users
        })
    } catch (error: any) {
        response.status(500).json({
            msg: 'something went wrong',
            errorMsg: error
        })
    }
}


/* *
    @usage: get single user
    @ url : http:127.0.0.1:5000/api/user/:id
    @ method : GET
    @ fields : none
    @ access : PUBLIC
 */
export const getSingleUserHandler = async (request: Request, response: Response) => {
    try {
        const user = await User.findById(request.params.id)
        response.status(200).json({
            user: user
        })
    } catch (error: any) {
        response.status(500).json({
            msg: 'something went wrong',
            errorMsg: error
        })
    }
}

/* *
    @usage: create a new user
    @ url : http:127.0.0.1:5000/api/user
    @ method : POST
    @ fields : none
    @ access : PUBLIC
 */
export const createNewUser = async (request: Request, response: Response) => {
    try {
        const user = await new User(request.body)
        await user.save()
        response.status(200).json({
            user: user
        })
    } catch (error: any) {
        response.status(500).json({
            msg: 'something went wrong',
            errorMsg: error
        })
    }
}

/* *
    @usage: Delete new user
    @ url : http:127.0.0.1:5000/api/user/:id
    @ method : DELETE
    @ fields : none
    @ access : PUBLIC
 */
export const deleteUser = async (request: Request, response: Response) => {
    try {
        const deleteUser = await User.deleteOne({ _id: request.params.id })
        response.status(200).json({
            deleteUser: deleteUser
        })
    } catch (error: any) {
        response.status(500).json({
            msg: 'something went wrong',
            errorMsg: error
        })
    }
}

/* *
    @usage: Update a user
    @ url : http:127.0.0.1:5000/api/user/:id
    @ method : DELETE
    @ fields : none
    @ access : PUBLIC
 */

export const updateUser = async (request: Request, response: Response) => {
    try {
        const updateUser = await User.findByIdAndUpdate(request.params.id, request.body)
        response.status(200).json({
            updateUser: updateUser
        })
    } catch (error: any) {
        response.status(500).json({
            msg: 'something went wrong',
            errorMsg: error
        })
    }
}