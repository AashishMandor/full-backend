
import express from 'express'
import { createnotice } from '../controllers/NoticeController.js'



const router =express.Router()
router.post('/',createnotice)


export default router