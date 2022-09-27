import mongoose from "mongoose"
import userModel from "../Models/user"

const userController = {
    get: async (req, res) => {

        try {
            const allUsers = await userModel.find()
            res.status(200).send(allUsers)
        } catch (error) {
            res.status(500).send(error)
        }
        
    },

    add: async (req, res) => {
        // estas son las dos maneras de recibir info en la DB
        try {
            const myUser = new userModel({...req.body})
            await myUser.save()
            res.send(myUser)
        } catch (error) {
            res.status(500).send(error)
        }
        /*
        const myUser = new userModel()
        myUser.name = req.body.name
        myUser.email = req.body.email
        myUser.age = req.body.age
        */
        
    },
    delete: async (req, res) => {

        try {
            const id = req.params.id
            const user = await userModel.findByIdAndDelete({_id : id})
            res.status(200).send(user)
        } catch (error) {
            res.status(500).send(error)
        }
        
        
        
    },
    edit: async (req, res) => {
        try {
            const id = req.params.id
            const user = await userModel.findByIdAndUpdate({_id : id})
            res.status(200).send(user)
        } catch (error) {
            res.status(500).send(error)
        }    },
}

export default userController