import { Schema, model } from "mongoose";

const studentSchema = new Schema({
    name:{
        type: Schema.Types.String,
        required: true
    },
    birthdate:{
        type: Schema.Types.Date,
        required: true
    },
    cpf:{
        type: Schema.Types
    }
})

