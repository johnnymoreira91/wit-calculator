import express from 'express'
import adminController from '@controllers/AdminController'
// import authMiddleware from '../middlewares/'

const router = express.Router()

// router.use(authMiddleware);

router.get('/logger/list', adminController.getAll)
// router.post('/', adminController.store)

export default router
