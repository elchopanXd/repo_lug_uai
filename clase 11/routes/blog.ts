import { Router } from 'express'

const router = Router()

router.get("/:id", (req, res) => {
    const blogId = req.params.id
    res.send(blogId)
})

// Ruta de acceso => "localhost:/api/blog/:id"

export default router