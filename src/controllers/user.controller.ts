
import express, { Request, Response } from 'express';

const userHandlerController = async (request: Request, response: Response) => {
    try {

        response.status(200).json({
            msg: 'user gotten'
        })
    } catch (error) {
        response.status(500).json({
            msg: 'something went wrong'
        })
    }
}

export default userHandlerController;