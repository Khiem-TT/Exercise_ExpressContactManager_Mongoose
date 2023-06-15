import {Schema, model} from "mongoose";

interface IContact {
    name: string;
    address: string;
    email: string;
    phone: string;
}

const contactSchema = new Schema<IContact>({
    name: String,
    address: String,
    email: String,
    phone: String
});

const Contact = model<IContact>('Contact', contactSchema);

export {Contact};