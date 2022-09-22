import { Blog } from "../Models/blog";

export default class BlogServices {
    constructor (){}
    public save = async( ) => {
        const newBlog = new Blog({
            title: "Example API",
            author: "elchopanXd"    
        })
        
        await newBlog.save() // esta linea espera que el newBlog, con info nueva, sea guardada en la DB
        
    } 
    
}