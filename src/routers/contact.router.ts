import {Router} from "express";

const contactRouter = Router();
import multer from "multer";
import {ContactController} from "../controllers/contact.controller";

const upload = multer();

contactRouter.get('/create', (req, res) => {
    res.render('createContact');
});

contactRouter.post('/create', upload.none(), ContactController.createContact);

contactRouter.get('/list', ContactController.getListContact);

export default contactRouter;