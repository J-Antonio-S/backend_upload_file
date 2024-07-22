import { Router } from "express";
import {
    getFiles,
    createFiles,
    deleteFiles,
    getPreviewFiles,
} from '../controllers/file.controller.js'
import fileUpload from 'express-fileupload'

const router = Router();

router.get("/files", getFiles);
router.post("/files", fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}), createFiles);
router.delete("/files/:id", deleteFiles);
router.get("/files/:id", getPreviewFiles);

export default router;
