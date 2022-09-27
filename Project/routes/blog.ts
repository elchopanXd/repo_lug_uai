import { Router } from 'express'
import BlogServices from '../src/Services/blog'

const router = Router()

router.get("/:id", (req, res) => {
    const blogId = req.params.id
    const blogservices = new BlogServices()
    blogservices.save()
    res.send(blogId)
})

// Ruta de acceso => "localhost:/api/blog/:id"

export default router