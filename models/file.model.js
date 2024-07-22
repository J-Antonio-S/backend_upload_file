import mongoose from "mongoose";

const fileSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        trim: true,
    },
    image : {
        public_id : String,
        secure_url: String
    }
},{timestamps : true});

export default mongoose.model('File', fileSchema);