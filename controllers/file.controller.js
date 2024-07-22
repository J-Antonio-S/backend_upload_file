import File from '../models/file.model.js'
import { uploadImage, deleteImage } from '../utils/cloudinary.js'
import fs from 'fs-extra'

export const getFiles = async (req, res) => {
    try {
        const files = await File.find()
        res.json(files)
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

export const createFiles = async (req, res) => {
    try {
        const { name, description } = req.body;

        console.log(req.files)

        const file = new File({
            name,
            description
        })

        if (req.files?.image) {
            const result = await uploadImage(req.files.image.tempFilePath)
            console.log(result)
            file.image = {
                public_id: result.public_id,
                secure_url: result.secure_url
            }
            fs.unlink(req.files.image.tempFilePath)
        }
        await file.save()
        res.json(file)
    } catch (error) {
        return res.status(500).json({ message: error })
    }

}

export const deleteFiles = async (req, res) => {
    try {
        const file = await File.findByIdAndDelete(req.params.id)
        if (!file) {
            return res.status(404).json({
                message: 'File does not exists'
            })
        }
        if (file.image?.public_id) {
            await deleteImage(file.image.public_id)
        }
        return res.status(200).json(file)
    } catch (error) {
        return res.status(500).json({ message: error })
    }

}

export const getPreviewFiles = (req, res) => res.send("Preview files");
