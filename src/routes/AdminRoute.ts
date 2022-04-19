import express from 'express'
import adminController from '@controllers/AdminController'
import csvController from '@controllers/csvController'

const router = express.Router()


router.get('/logger/list', adminController.getAll)
router.post('/importCsv', csvController.store)

export default router
