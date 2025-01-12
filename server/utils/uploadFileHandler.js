import multer from 'multer'
import path from 'path'

const FILE_TYPES = {
    'image/jpeg': "jpeg",
    'image/jpg': "jpg",
    'image/png': "png"
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValidFile = FILE_TYPES[file.mimetype]
        let uploadError = new Error('invalid image type')

        if (isValidFile) {
            uploadError = null
        }
        cb(uploadError, 'public/uploads')
    },
    filename: function (req, file, cb) {
        const uniqueFile = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
        cb(null, uniqueFile)
    }
})

export const upload = multer({ storage: storage })