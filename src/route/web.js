import express from 'express';
import homeController from '../controller/homeController';



let router = express.Router();

const initWebRouter = (app) => {
    router.get('/home', homeController.getHomePage);
    router.get('/user-detail/:id', homeController.getUserDetailPage);
    router.post('/create-new-user', homeController.postCreateNewUser)
    router.post('/delete-user', homeController.postDeleteUser)
    router.get('/edit-user/:id', homeController.getEditUserPage)
    router.post('/update-user', homeController.postUpdateUser)
    return app.use('/', router);
}

export default initWebRouter;