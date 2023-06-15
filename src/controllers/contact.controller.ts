import {Contact} from "../models/schemas/contact.model";
import e from "express";

export class ContactController {
    static async createContact(req, res) {
        try {
            const newContact = new Contact(req.body);
            await newContact.save();
            res.redirect('/contact/list');
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }

    static async getListContact(req, res) {
        try {
            let page = +req.query.page;
            page = page ? page : 1;
            let limit = 3;
            let offset = Math.ceil((page - 1) * limit);
            const contactLimit = await Contact.find().limit(limit).skip(offset);
            const contacts = await Contact.find();
            let totalPage = Math.ceil(contacts.length / limit);
            res.render('listContact', {contactLimit: contactLimit, numberPage: totalPage, currentPage: page});
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }
}