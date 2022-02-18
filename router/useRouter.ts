import express from 'express';
import { body, validationResult } from 'express-validator';
import appLogger from '../middleware/appLogger';
const useRouter: express.Router = express.Router()


/* *
    @usage: home page check
    @ url : http:127.0.0.1:5000/api/
    @ method : GET
    @ fields : none
    @ access : PUBLIC
 */
useRouter.get('/', appLogger, (request: express.Request, response: express.Response) => {
    response.status(200).send(`<h3>welcome to User ROUTER <h3>`)
})

/* *
    @usage: to check form data
    @ url : http:127.0.0.1:5000/api/login
    @ method : POST
    @ fields : name , password, email
    @ access : PUBLIC
*/
useRouter.post('/register', [
    body('name').not().isEmpty().withMessage('Name is Required'),
    body('email').isEmail().withMessage('Valid email is Required'),
    body('password').isLength({ min: 5 }).withMessage('Minimum 5 character required fro password'),
], appLogger, async (request: express.Request, response: express.Response) => {
    const errors = validationResult(request)
    if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() })
    }
    const { name, email, password } = request.body;
    try {
        response.status(200).json({
            message: 'Form data received',
            userData: { name, email, password },
        })
    } catch (error) {
        console.log(error);

    }
})
export default useRouter;