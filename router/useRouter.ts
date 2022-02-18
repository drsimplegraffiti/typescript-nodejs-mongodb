import express from 'express';
import bcrypt from 'bcryptjs';
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
    @ fields : name , password
    @ access : PUBLIC
*/
useRouter.post('/register', async (request: express.Request, response: express.Response) => {
    const { name, email, password } = request.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        response.status(200).json({
            message: 'Form data received',
            userData: { name, email, password },
            hashedPassword: hashedPassword
        })
    } catch (error) {
        console.log(error);

    }
})
export default useRouter;