import { Schema, model } from 'mongoose'

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    }
},
    {
        versionKey: false,
        timestamps: true,
    }
)

export default model('Task', taskSchema)
